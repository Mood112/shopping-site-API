const express = require('express')
const app = express()
const mysql = require('mysql')

const dbConnect = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'test'
})

dbConnect.connect(function(err){
    if(err) console.log(err)
    console.log("database connected successfully")
})


const port = 5000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})