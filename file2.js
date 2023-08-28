const fs = require("fs")

const filetext = "Hello world !"

// copier un fichier FileA vers un dossier FolderA
const copyFileInOtherFolder = () => {
    fs.writeFile("FileA.txt", filetext, (err)=>{
        err ? console.log(err) : null;
    })
    fs.mkdir("FolderA", (error)=>{
        error ? console.log(error) : null
    })
    
    fs.copyFile("./FileA.txt", "./FolderA/FileA.txt", (err)=>{
        err ? console.log(err) : null
    })
}
copyFileInOtherFolder()