const CRUD = require("./CRUD")

module.exports = {
    
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
