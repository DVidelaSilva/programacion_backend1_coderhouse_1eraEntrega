const { Router } = require('express')
const CartsManagerFs = require('../managers/fileSystem/carts.managers')

const router = Router()
const cartsManagerFS = new CartsManagerFs()



// Ruta Crear Productos
router.post('/', async (req, res) => {
    try {
        const { body } = req
        const response = await cartsManagerFS.createCart(body)
        res.send({status: 'Registro en File System Exitoso', cart: response})
    }catch (error) {
        res.status(400).send({ status: 'error', message: error.message });
    }
});


// Ruta Obtener Productos por ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const cartsFSbyId = await cartsManagerFS.getCartById(id)
        res.send({status: 'Busqueda por ID en File System Exitosa', cart: cartsFSbyId})
    } catch (error) {
        res.status(400).send({ status: 'error', message: error.message })
    }
});




router.post('/:idCart/product/:idProduct', async (req, res) => {
    try {
        const { idCart, idProduct } = req.params
        const { body } = req
        const response = await cartsManagerFS.createProductToCart(idCart, idProduct, body)
        res.send({status: 'Registro en File System Exitoso', cart: response})
    }catch (error) {
        res.status(400).send({ status: 'error', message: error.message });
    }
});




module.exports = router