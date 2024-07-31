const path = './fs-json/cartsFS.json'
const fs = require('fs')



class CartManagerFS {

    constructor(){
        this.path = path
    }


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

    createCart = async () => {}
    getCartById = async () => {}
    createProductToCart = () => {}
}


module.exports = CartManagerFS








//[
//   {id: '', products: [{ productsID: '', quantity: 1} ]},
//]