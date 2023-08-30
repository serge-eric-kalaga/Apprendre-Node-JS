const express = require("express")
const morgan = require('morgan')

app = express()

const task_list = [
    {
        id: 1, nom: "task 1", description: "description task 1", etat: true
    },
    {
        id :2 ,nom:"task 2" ,description :"description task 2 ",etat:false
    },
    {
        id :3 ,nom:"task 3" ,description :"description task 3 ",etat:true
    },
    {
        id :4 ,nom:"task 4" ,description :"description task 4 ",etat:false
    }
]

// --------------- Middleware --------------

// Morgan for request time
app.use(morgan("dev"))

// --------------- End Middleware --------------
  
// task list
app.get("/", (req, res)=>{
    res.status(300).send(task_list)
})

app.use((req, res)=>{
    res.status(404).send("Page Not Found");
})

app.listen("8080", ()=>{
    console.log("App started on http://localhost:8080 ...");
})

