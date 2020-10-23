const Product = require('../../models/product')

function homeController() {
    return{
        async index(req,res){
            const items = await Product.find()
            return res.render('home', { items: items})
        }
    }
}

module.exports = homeController