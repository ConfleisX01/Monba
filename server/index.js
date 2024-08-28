const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "monba"
})

app.get("/getAllUsuarios", (req, res) => {
    conexion.query('SELECT * FROM usuario', (err, result) => {
        if (err) throw err
        res.send(result)
        console.log(result)
    })
})

app.listen(3001, () => {
    console.log('El servidor se alojo en el puerto http://localhost:3001')
})