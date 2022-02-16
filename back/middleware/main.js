const valid = require("email-validator")

module.exports = {
    validateProduct: (req, res, next) => {
        const {title, price, image} = req.body

        if(title.length > 100) return res.send({success: false, message: "Bad title"})
        if(!price) return res.send({success: false, message: "Bad price"})
        if(!image.includes("http")) return res.send({success: false, message: "Bad image"})

        next()
    }
}