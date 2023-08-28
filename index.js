const express = require("express")
const morgan = require('morgan')

app = express()

// --------------- Definition du moteur de template --------------
app.set("view engine", "ejs")
app.set("views", __dirname + "/html")


// --------------- Middleware --------------

//static files folder
app.use(express.static("static"))
// Morgan for request time
app.use(morgan("dev"))

// --------------- End Middleware --------------
  
// /home
app.get("/home", (req, res)=>{
    const heure = Date().toString()
    res.status(200).render("index", {heure});
})
app.get("/", (req, res)=>{
    res.status(300).redirect("/home");
})

app.use((req, res)=>{
    res.status(404).render("404");
})

app.listen("8080", ()=>{
    console.log("App started on http://localhost:8080 ...");
})

