const productController = {}
const product = require('../models/productos')




productController.addProduct = async (req,res)=>{
    const { title, price, thumbnail, description } = req.body
    const newProduct = new product({ title, price, thumbnail, description })
    await newProduct.save()
}

productController.getProduct = async (req, res) => {
    productById = await product.findById(req.params.id)
    res.send(productById)
}

productController.getAllProducts = async (req, res) => {
    
    allProducts = await product.find().lean()
    console.log(allProducts)
    res.render('productos', {
            productos: allProducts,
            title: "Productos con Handlebars",
        })
}


module.exports = productController 