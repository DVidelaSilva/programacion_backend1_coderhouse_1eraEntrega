const express       = require('express')
const productRouter = require('./routes/products.router.js')
const cartRouter = require('./routes/carts.router.js')


const app = express()
const PORT = 8080
 // dirname()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// endpoint

app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)



app.listen(PORT, () => {
    console.log('escuchando en el puerto: ', PORT)
})