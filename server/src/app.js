const express = require('express')
const cors = require('cors')
const morgan = require('morgan')


const app = express()

app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

require('dotenv').config()
require('./routes')(app)

try {
    app.listen(process.env.PORT, () => {
        console.log('Server on port: ', process.env.PORT)
    })
} catch (err) {
    console.log(err)
}