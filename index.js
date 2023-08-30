const express = require("express")
const morgan = require('morgan')
const body_parser = require("body-parser")
const StatusCodes = require("http-status-codes")

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
// body parser pour la serialisation des donnees
app.use(body_parser.json())

// --------------- End Middleware --------------
  
// task list
app.get("/task", (req, res)=>{
    res.status(StatusCodes.OK).send(task_list)
})

// ajouter une nouvelle tache
app.post("/task", (req, res)=>{
    const task = req.body
    task_list.push(task)
    res.status(StatusCodes.CREATED).send({message:'tache creee'})
})

app.use((req, res)=>{
    res.status(404).send("Page Not Found");
})

app.listen("8080", ()=>{
    console.log("App started on http://localhost:8080 ...");
})

