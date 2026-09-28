const fs = require("fs")


// console.log(fs)

console.log("starting")
// fs.writeFileSync("sid.txt","this is sid")

fs.writeFile("sid2.txt","sid is my name ", ()=>{
    console.log("done")
    fs.readFile("sid2.txt", (error,data)=>{
        console.log(error,data.toString)
    })


    fs.appendFile("sid.txt", "sidk" , (e,d)=>{
        console.log(d)
    })
})
console.log("ending")