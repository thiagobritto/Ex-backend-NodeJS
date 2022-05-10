const CRUD = require("./CRUD")

const product = {
    ...CRUD,

    name: 'product',

    fillable: [
        'description',
        'price'
    ],

    hidder: [],

}

module.exports = product
