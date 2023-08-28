const express = require("express")

app = express()

 
// /home
app.get("/home", (req, res)=>{
    res.sendFile("./index.html", {root:__dirname});
})

app.listen("8080", ()=>{
    console.log("App started on http://localhost:8080 ...");
})

