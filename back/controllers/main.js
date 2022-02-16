const productDb = require("../models/product")


module.exports = {
    createProduct: async (req, res) => {
        const {title, image, price} = req.body

        const product = new productDb()
        product.title = title
        product.image = image
        product.price = price
        product.quantity = 1
        await product.save()

        res.send({success: true})
    },
    getAll: async (req, res) => {
        const products = await productDb.find()
        res.send({products})
    },
    getSingle: async (req, res) => {
        const {id} = req.params
        const product = await productDb.findOne({_id: id})
        res.send({product})
    },
    deleteProduct: async (req, res) => {
        const {id} = req.params
        await productDb.findOneAndDelete({_id: id})

        res.send({success: true})

    }
}

