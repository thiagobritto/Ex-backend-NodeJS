const CRUD = require("./CRUD")

const client = {
    ...CRUD,

    name: 'client',

    fillable: [
        'first_name',
        'phone',
        'address',
        'district',
        'city'
    ],

    hidder: [],

}

module.exports = client
