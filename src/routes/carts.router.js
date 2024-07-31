const { Router } = require('express')
const CartsManagerFs = require('../managers/fileSystem/carts.managers')

const router = Router()
const cartsManagerFS = new CartsManagerFs()


// Ruta Obtener Productos
router.get('/', async (req, res) => {
/*     try{
        const productsFS = await productsManagerFS.getProducts()
        res.send({status: 'Busqueda en File System Exitosa', data: productsFS})
    } catch (error){
        res.status(400).send({ status: 'error', message: error.message })
    } */
});


// Ruta Obtener Productos por ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const cartsFSbyId = await cartsManagerFS.getCartById(id)
        res.send({status: 'Busqueda por ID en File System Exitosa', data: cartsFSbyId})
    } catch (error) {
        res.status(400).send({ status: 'error', message: error.message })
    }
});


// Ruta Crear Productos
router.post('/', async (req, res) => {
    try {
        const { body } = req
        const response = await cartsManagerFS.createCart(body)
        res.send({status: 'Registro en File System Exitoso', data: response})
    }catch (error) {
        res.status(400).send({ status: 'error', message: error.message });
    }
});


// Ruta Actualizar Productos
router.put('/:id', async (req, res) => {
/*     try {
        const { id } = req.params
        const { body } = req
        const updatedProduct = await productsManagerFS.updateProducts(id,body)
        res.send({status: 'Actualizacion en File System Exitosa', data: updatedProduct})
    }catch (error) {
        console.log(error);
        res.status(400).send({ status: 'error', message: error.message });
    } */
});


// Ruta Eliminar Productos
router.delete('/:id', async (req, res) => {
/*     try {
        const { id } = req.params
        const deleteProduct = await productsManagerFS.deleteProducts(id)
        res.send({status: 'Eliminacion en File System Exitosa', data: deleteProduct})
    }catch (error) {
        console.log(error);
        res.status(400).send({ status: 'error', message: error.message })
    } */
});


module.exports = router