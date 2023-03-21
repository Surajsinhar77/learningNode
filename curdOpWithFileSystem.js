const fs = require('fs');
const path = require('path');

let curdPath = path.join(__dirname, 'curd');

console.log(curdPath);

fs.writeFileSync(`${curdPath}/apple.txt`, "the blank page")

let applePath = `${curdPath}/apple.txt`;




// reading data from the file 
fs.readdir(curdPath, (error, item)=>{
    item.forEach((i)=>{
        fs.readFile(`${curdPath}/${i}`,'utf8', (er, data)=>{
            console.log(data)
        })
    })
})


// second and simple way to read data from the file 
fs.readFile(`${curdPath}/apple.txt`, 'utf8', (err, data)=>{
    console.log(data);
})


fs.appendFile(applePath, ' i am append on the apple.txt files' ,err=>{
    if(!err) console.log('Sucessfull append')
})