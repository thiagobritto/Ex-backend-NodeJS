
const str = require('./str')

const OBJ = {}

OBJ.cleanPropets = function (obj, list)
{
    const objClean = {}

    for(let x in obj){
        if(!list.includes(x)){
            objClean[x] = obj[x]
        }
    }

    return objClean
}

OBJ.sanitizePropets = function (obj)
{
    const objSanitize = {}
    
    for( let x in obj){
        objSanitize[x] = str.escapeHtml(obj[x].trim())
    }

    return objSanitize

}

module.exports = OBJ