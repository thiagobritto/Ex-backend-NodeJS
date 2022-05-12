
const db = {}



var table = ''
var stmt = ''
var val = []


db.insert = async function (data) 
{
    const keys = Object.keys(data)
    const bindParams = keys.map(() => '?')
    
    stmt = `INSERT INTO ${table} (${keys.join()}) VALUES (${bindParams.join()})`
    val = Object.values(data)

    return await exec()
}



db.select = function (keys) 
{
    stmt = `SELECT ${keys.join()} FROM ${table}`
    val = []
    
    return db
}



db.update = async function(data, id) 
{
    const keys = Object.keys(data).join(' = ?, ')
    const values = Object.values(data)
    const [id_key] = Object.keys(id)
    const [id_value] = Object.values(id)
    
    stmt = `UPDATE ${table} SET ${keys} = ? WHERE ${id_key} = ?`
    val = [...values, id_value]

    return await exec()
}



db.delete = function(id)
{
    stmt = `DELETE FROM ${table}`
    val = []

    return { where: db.where }
}



db.where = function (key, value, cond = '=') 
{
    stmt += ` WHERE ${key} ${cond} ?`
    val = [ value ]
    
    return {...db, exec}
}



db.whereAnd = function (key, value, cond = '=') 
{
    stmt += ` AND ${key} ${cond} ?`
    val.push( value )
    
    return {...db, exec}
}


db.orderBy = function(key, mod = 'ASC')
{
    stmt += ` ORDER BY ${key} ${mod}`
    return db
}


db.limit = function(limit, ini = 0) {
    if(ini <= 0){
        stmt += ` LIMIT ?`
        val.push( limit )
    } else {
        stmt += ` LIMIT ?, ?`
        val.push( ini )
        val.push( limit )
    }
    return db
}



db.get = exec

async function exec() 
{
    const conn = await connect()
    const [rows] = await conn.execute(stmt, val)
    return rows
}



/* ============================================================================== */



function connect() 
{
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require('mysql2');

    const pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASS,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });

    const promisePool = pool.promise();

    global.connection = promisePool;
    return promisePool;
}



function init(tb_name) 
{
    table = tb_name
    stmt = `SELECT * FROM ${table}`
    val = []
    return db
}



module.exports = { table: init }
