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

// supprimer un dossier
fs.rmdir(dossierPath, (err)=>{
    console.log(err);
})

// renommer un dossier
// fs.rename(dossierPath, dossierPath+"new", (err)=>{
//     console.log(err);
// })
