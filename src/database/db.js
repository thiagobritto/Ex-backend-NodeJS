const db = {}

var table = ''
var stmt = ''

db.insert = async function (keys, values) 
{
    const bindPrepare = values.map( () => '?').join()
    const bindKeys = keys.join()

    stmt = `INSERT INTO ${table} (${bindKeys}) VALUES (${bindPrepare})`
    
    const conn = await connect();
    const [rows] = await conn.execute(stmt, values);
    return rows;
}

db.select = async function(arrayColumns = ['*'])
{
    stmt = `SELECT ${arrayColumns.join()} FROM ${table}`
}

db.get = async function()
{
    const conn = await connect()
    const [rows] = await conn.query(stmt)
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
    
    return db
}

module.exports = { table: init }
