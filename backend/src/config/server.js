const port = 3000 //habilitando a portano

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

//midlewares
server.use(bodyParser.urlencoded({extended: true})) 
server.use(bodyParser.json())
server.use(allowCors)

//registrando a porta 3003
server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server