
const str = require('./str')

function cleanPropets(obj, list)
{
    const objClean = {}

    for(let x in obj){
        if(!list.includes(x)){
            objClean[x] = obj[x]
        }
    }

    return objClean
}

function sanitizePropets(obj)
{
    const objSanitize = {}
    
    for( let x in obj){
        objSanitize[x] = str.escapeHtml(obj[x].trim())
    }

    return objSanitize

}

module.exports = { 
    cleanPropets, 
    sanitizePropets 
}