const path = './fs-json/cartsFS.json'
const fs = require('fs')



class CartManagerFS {

    constructor(){
        this.path = path
    }

    //Carga los registros de carritos desde FS
    readCart = async () => {
        try {
            if(fs.existsSync(path)){
                const cartsJson = await fs.promises.readFile(path, 'utf-8')
                const cartsJS = JSON.parse(cartsJson)
                return cartsJS
            }
        } catch (error){
            console.log(error);
        }
        return []
    }

    createCart = async newCart => {
        try{
            const carts = await this.readCart()



              // ID autoincremental
              if(carts.length === 0){
                newCart.id = 1
            } else {
                newCart.id = carts[carts.length - 1].id + 1
            }

            newCart.carts = []

            //Estructura del Registro
            const cartsToSave = {
                id: newCart.id,
                carts: newCart.carts,
            };
           
            carts.push(cartsToSave)

            await fs.promises.writeFile(path, JSON.stringify(carts, null, '\t'))
            return  newCart

        } catch(error) {
            console.log(error);
            throw error
        }
    }






    getCartById = async (id) => {
        try{
            const carts = await this.readCart()

            let cartById = carts.find(carts => carts.id === Number(id))

            // Valida que ID sea un numero y mayor a cero
            if (isNaN(id) || Number(id) <= 0) {
                throw new Error (`El ID '${id}' ingresado no es un ID válido`)
            } 
            //Valida si existen carritos en FS
            if (carts.length === 0) {
                throw new Error ('No existen Carritos en File System')
            }
            // Valida si encuentra el Carrito por el ID
            if(cartById){
                console.log(`Carrito ID '${id}' encontrado en File System`, cartById);
                return cartById
            } else {
                throw new Error (`Carrito ID '${id}' NO encontrado en File System`)
            }
        } catch (error) {
            console.log(error);
            throw error
        }
    }






    createProductToCart = () => {}
}


module.exports = CartManagerFS







