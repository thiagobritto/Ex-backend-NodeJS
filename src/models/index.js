const db = require('../database/db')

const model = {}

model.all = async function()
{ 
    if(setup(this).error) return setup(this).message

    let all = await db.table(this.name).get()

    return await hidder(this.hidder, all)
}

function setup(md)
{
    if(!md.name){
        return {
            error: true,
            message: 'name: model necessari!'
        }
    }
    if(!md.filter) md.filter = []
    if(!md.hidder) md.hidder = []
    return md
}

function filter()
{

}

function hidder(hidderArray, data)
{
    if(hidderArray.length > 0){
        if(data.length > 0){
            data.forEach( rowData => {
                hidderArray.forEach( hidderData => {
                    if(hidderData in rowData) 
                    rowData[hidderData] = undefined
                })
            })
        }
    }
    return data
}

module.exports = model