const fs = require("fs");


const dossierPath = "./MonDossierTest";


// verifier si un dossier exist
if(fs.existsSync(dossierPath)){
    console.log("Le dossier exist deja");
}
else{
    console.log("Dossier inexistant");
    // creer un dossier
    fs.mkdir(dossierPath, (error)=>{
         console.log(error)
    })
}