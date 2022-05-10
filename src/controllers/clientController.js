const client = require('../models/client')

const clientController = {}

clientController.list = async function(req, res)
{
    try{
        res.json(
            await client.all()
        )
    } catch(error){
        res.status(400).json(error)
    }
}

clientController.select = async function(req, res)
{
    try{
        const { id } = req.params
        
        res.json(
            await client.find(id)
        )
    } catch(error){
        res.status(400).json(error)
    }
}

clientController.register = async function(req, res)
{
    try{

        res.json(
            await client.insert(req.body)
        )

    } catch(error){
        res.status(400).json(error)
    }
}

clientController.update = async function(req, res)
{
    try{

        const {id} = req.params
        
        res.json(
            await client.update(req.body, id)
        )

    } catch(error){
        res.status(400).json(error)
    }
}

clientController.remove = async function(req, res)
{
    try{

        const {id} = req.params
        
        res.json(
            await client.delete(id)
        )

    } catch(error){
        res.status(400).json(error)
    }
}

module.exports = clientController
