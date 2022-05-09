const db = require('../database/db')
const SystemException = require('../exceptions/SystemException')
const UserException = require('../exceptions/UserException')
const obl = require('../functions/obj')

const model = {}

model.all = async function () {
    setup(this)

    const all = await db.table(this.name).get()

    const resHidder = await hidder(this.hidder, all)
    return resHidder
}

model.find = async function (id) {

    if (!Number.parseInt(id))
        throw new UserException('invalid params')

    setup(this)

    const res = await db.table(this.name).where(`id_${this.name}`, id).get()

    if (res.length <= 0)
        throw new UserException('not found', 404)

    const [resHidder] = await hidder(this.hidder, res)
    return resHidder
}

model.insert = async function (data) {
    setup(this)

    filter(this.filter, data)

    const dataSanitized = obl.sanitizePropets(data)

    const res = await db.table(this.name).insert(dataSanitized)

    if (!res.affectedRows)
        throw new UserException('insert error!')

    return {
        message: 'insert success!'
    }
}

model.update = async function (data, id) {
    if (!Number.parseInt(id))
        throw new UserException('invalid params')

    setup(this)

    filter(this.filter, data)

    const dataSanitized = obl.sanitizePropets(data)
    const idSanitized = obl.sanitizePropets({
        [`id_${this.name}`]: id
    })

    const res = await db.table(this.name).update(dataSanitized, idSanitized)

    if (!res.affectedRows)
        throw new UserException('updated error!')

    return {
        message: 'updated success!'
    }
}

function setup(md) {
    if (!md.name)
        throw new SystemException('Name model necessari!', 500)

    if (!md.filter) md.filter = []
    if (!md.hidder) md.hidder = []
    return md
}

function filter(filterArray, data) {
    filterArray.forEach(item => {
        if (item in data) {
            if (!data[item].trim())
                throw new UserException(`require data! ${item}`)
        } else {
            throw new SystemException(`filter: '${item}' not found`)
        }
    })
}

function hidder(hidderArray, data) {
    if (hidderArray.length > 0) {
        if (data.length > 0) {
            data.forEach(rowData => {
                hidderArray.forEach(hidderData => {
                    if (hidderData in rowData)
                        rowData[hidderData] = undefined
                })
            })
        }
    }
    return data
}

module.exports = model