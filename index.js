const express = require("express")

app = express()

//static files folder
app.use(express.static("static"))

  
// /home
app.get("/home", (req, res)=>{
    res.status(200).sendFile("./index.html", {root:__dirname});
})
app.get("/", (req, res)=>{
    res.status(300).redirect("/home");
})

app.use((req, res)=>{
    res.status(404).sendFile("./404.html", {root:__dirname});
})

app.listen("8080", ()=>{
    console.log("App started on http://localhost:8080 ...");
})

