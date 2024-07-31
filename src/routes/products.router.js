const { Router } = require('express')
const ProductsManagerFs = require('../managers/fileSystem/products.managers')

const router = Router()

const productsManagerFS = new ProductsManagerFs();

router.get('/', async (req, res) => {
    try{
        const productsFS = await productsManagerFS.getProducts()
        res.send({status: 'success', data: productsFS})
    } catch (error){
        console.log(error);
    }

})


router.post('/', async (req, res) => {
    try {

        const { body } = req
        const response = await productsManagerFS.createProducts(body)
        res.send({status: 'success', data: response})

    }catch (error) {
        console.log(error);
    }
})

module.exports = router