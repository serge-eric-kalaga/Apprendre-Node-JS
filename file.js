const fs = require("fs");

const filename = "./MonFichier.txt"
const filetext = "Hello world !"

// creer un fichier
fs.writeFile(filename, filetext, (err)=>{
    err ? console.log(err) : null;
})

// lire le contenu d'un fichier
fs.readFile(filename, (err, data)=>{
    if (err) {
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
})