const CRUD = require("./CRUD")

module.exports = {
    
    ...CRUD,

    name: 'product',

    fillable: [
        'description',
        'price'
    ],

    hidder: [],

}
