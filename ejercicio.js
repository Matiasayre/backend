
const fs = require("fs")
 const lectura = fs.readFileSync("ej.json","utf-8")

 let data= JSON.parse(lectura)
let numero = Math.floor(Math.random() * ( 3- 0)) + 1
 let datos = data[numero]
 const express = require('express')


const app = express()
const PORT = 8080

const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/productos', (req, res) => {
    res.send(data)
 })
 app.get('/productosRandom', (req, res) => {
    res.send(datos)
 })
 