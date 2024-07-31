const fs = require('fs')
const path = './fs-json/productsFS.json'


class ProductsManagerFs {

    constructor(){

        this.path = path
    }

    //Leer siempre los archivos desde el FS //falta el try catch
    readProducts = async () => {
        try {
            if(fs.existsSync(path)) {
                const productsJson = await fs.promises.readFile(path, 'utf-8')
                const productsJS = JSON.parse(productsJson)
                return productsJS
            }
            
        }catch(error){
            
        }
        return []
    }

    // CRUD de productos
    getProducts = async () => {
        try{
            const products = await this.readProducts()
            return products
        } catch(error){
            console.log(error);
        }

    }

    getProduct = async () => {}

    createProducts = async newProduct => {
        try{

            const products = await this.readProducts()
            // id autoincremental
            if(products.length === 0){
                newProduct.id = 1
            } else {
                newProduct.id = products[products.length - 1].id + 1
            }

            products.push(newProduct)

            await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'))
            return  newProduct

        } catch(error){
            console.log(error);
        }
    }

    updateProducts = async () => {}
    deleteProducts = async () => {}


}

module.exports = ProductsManagerFs