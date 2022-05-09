const model = require(".")

const client = {
    name: 'client',

    filter: [
        'first_name',
        'phone',
        'address',
        'district',
        'city'
    ],

    hidder: [],

    ...model
}

module.exports = client
