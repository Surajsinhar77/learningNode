module.exports = reqAcess = (req, res, next) =>{  // this is middleware if the condition is sitisified 
    if(!req.query.age){   
        res.send("Please provide age");
    }else if(req.query.age < 18){
        res.send("You are not allow to access this page ");
    }else{
        next();  // this is the final conditation which is mandatory to use in condition 
    }
};

