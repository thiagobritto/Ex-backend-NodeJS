const product = require('../models/product')

const productController = {}


productController.register = async function(req, res)
{
    try{
        res.json( await product.insert(req.body) )
    } catch(error){
        res.status(400).json(error)
    }
}



productController.list = async function(req, res)
{
    try{
        res.json( await product.all() )
    } catch(error){
        res.status(400).json(error)
    }
}



productController.select = async function(req, res)
{
    try{
        const { id } = req.params
        res.json( await product.find(id) )

    } catch(error){
        res.status(400).json(error)
    }
}



productController.update = async function(req, res)
{
    try{
        const {id} = req.params
        res.json( await product.update(req.body, id) )
    } catch(error){
        res.status(400).json(error)
    }
}



productController.remove = async function(req, res)
{
    try{
        
        let { id } = req.params
        res.json( await product.delete(id) )
        
    } catch(error){
        res.status(400).json(error)
    }
}

module.exports = productController
