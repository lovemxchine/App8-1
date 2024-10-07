const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))


app.post('/api/form-post',(req,res) => {
    let name = req.body.name || "";
    let email = req.body.email || "";
    let msg = req.body.message || "";

    let table = `
    <table border="1">
        <caption>ข้อมูลที่ส่งขึ้นไป</caption>
        <tr><td>ชื่อ:</td><td>${name}</td></td>
        <tr><td>อีเมล:</td><td>${email}</td></td>
        <tr><td>ข้อความ:</td><td>${msg}</td></td>
    </table>
    `
    return res.send(table)
})

app.listen(port, ()=>{
    console.log("Server listening on port " + port)
})