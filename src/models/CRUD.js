const db = require('../database/db')
const obl = require('../functions/obj')
const SystemException = require('../exceptions/SystemException')
const UserException = require('../exceptions/UserException')



const CRUD = {}



CRUD.all = async function () {
    this.check()

    const res = await db.table(this.name).get()

    const resHidder = await hidder(this.hidder, res)
    return resHidder
}



CRUD.find = async function (id) {
    id = parseInt(id, 10)
    
    if (!id)
        throw new UserException("invalid params ..: 'id'")
    
    const { hidder } = this.check(true)

    const res = await db.table(this.name).where(`id_${this.name}`, id).get()

    if (res.length <= 0)
        throw new UserException('register not found', 404)

    const [resHidder] = await hidder(this.hidder, res)
    return resHidder
}



CRUD.insert = async function (data) {
    this.check(true).fillable(this.fillable, data)

    const res = await db.table(this.name).insert(
        obl.sanitizePropets(data)
    )

    if (!res.affectedRows)
        throw new UserException('insert error!')

    return { message: 'insert success!' }
}



CRUD.update = async function (data, id) {
    id = parseInt(id, 10)
    
    if (!id)
        throw new UserException("invalid params ..: 'id'")
    
    this.check(true).fillable(this.fillable, data)

    const res = await db.table(this.name).update(
        obl.sanitizePropets(data), 
        { [`id_${this.name}`]: id }
    )

    if (!res.affectedRows)
        throw new UserException('updated error!')

    return { message: 'updated success!' }
}



CRUD.delete = async function(id)
{
    this.check()
    
    id = parseInt(id, 10)
    
    if (!id)
        throw new UserException('invalid params')
    
    const res = await db.table(this.name).delete().where(
        `id_${this.name}`, id
    ).exec()

    if (!res.affectedRows)
        throw new UserException('delete error!')

    return { message: 'delete success!' }
}


CRUD.check = function(implement = false)
{
    if (!this.name)
        throw new SystemException('Name model required!', 500)
    if (!this.fillable)
        throw new SystemException('fillable model required!', 500)
    if (!this.hidder)
        throw new SystemException('hidder model required!', 500)
    if(implement)
        return { fillable, hidder }
}

function fillable(fillableArray, data) {
    fillableArray.forEach(item => {
        if (item in data) {
            if (!data[item].trim())
                throw new UserException(`${item} is empty!`)
        } else {
            throw new SystemException(`fillable: '${item}' not found`)
        }
    })
}



function hidder(hidderArray, data) {
    if (hidderArray.length <= 0)
        return data

    if (data.length <= 0)
        return data

    data.forEach(rowData => {
        hidderArray.forEach(hidderData => {
            if (hidderData in rowData)
                rowData[hidderData] = undefined
        })
    })

    return data
}



module.exports = CRUD
