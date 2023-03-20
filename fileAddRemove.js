// File system using args cmd line argument getting data from the the cmd line using process,argv

const fs = require('fs');
const clr = require('colors')
const input  = process.argv;            // This is  use to get data from the cmd line in array 
                                        // the first value is path of the node compiler
                                        // the second value is path of the file which is going to run

if(input[2] == 'add'){
    fs.writeFileSync(input[3], input[4]);
}else if(input[2] == 'remove'){
    fs.unlinkSync(input[3]);
}else{
    console.log(" !Invalid Input".red)
}

