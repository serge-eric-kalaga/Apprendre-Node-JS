const fs = require("fs");

const filename = "MonFichier.txt"
const filetext = "Hello world !"

// creer un fichier
fs.writeFile(filename, filetext, (err)=>{
    console.log(err);
})