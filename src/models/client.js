const model = require(".")

const client = {
    name: 'client',

    filter: [
        'firstName',
        'phone',
        'address',
        'district',
        'city'
    ],

    hidder: [],

    ...model
}

module.exports = client
