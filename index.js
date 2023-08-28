const express = require("express")

app = express()

// get absolute path
var __dirname = process.cwd();
 
// Home
app.get("/home", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.listen("8080", ()=>{
    console.log("App started on http://localhost:8080 ...");
})

