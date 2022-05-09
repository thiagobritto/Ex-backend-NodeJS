const client = require('../models/client')

const clientController = {}

clientController.list = async function(req, res)
{
    res.send(
        await client.all()
    )
}

module.exports = clientController
