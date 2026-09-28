import fs from "fs/promises"

let a =await fs.readFile("sid.txt")


let b = await fs.writeFile("sid.txt", "this is amazing promise")
console.log(a.toString(), b)