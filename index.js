require('dotenv').config;
const express = require("express");
const app = express();
const PORT = 10000;

app.use(express.json())

const users = [
    {email:"alice@example.com", password:"alice123"},
    {email:"bob@example.com", password:"bob123"},
    {email:"charli@example.com", password:"charli123"}
];

app.get('/get',(req,res) =>{
    const data = users.find();
    if(!data) {
        return res.status(404).json({message:"cannot get users"});
    }
    return res.status(200).json({message:"found users",data});
})

app.put('/put/:id',(req,res) => {
    const id = parseInt(params.users.id);

})

app.delete('/delete/:id',(req,res)=>{
    const id = parseInt(params.users.id)
})

app.listen(PORT,()=>{
    console.log("port is running sucessfully");
})