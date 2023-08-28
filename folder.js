const fs = require("fs");

// creer un dossier

fs.mkdir("./MonDossierTest", (error)=>{
    console.log(error)
})