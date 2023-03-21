
//Drawback of asynchonos function
// let a = 9, b=0;
// setTimeout(()=>{
//     b = 7;
// },2000)

// console.log(a+b);


// solution of asynchonos function //PROMISES

let a =8, b = 0;

// a variable  promise object resole(), reject()  
let dataWant  = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve used to update the value which we are holding 
        resolve(20);
    },2000)
})


// then is funtion which wait untill the aswer get
dataWant.then((data)=>{
    console.log(a+data);
})




