"use strict";
const output = {
    hello : (req, res)=>{
        res.render("home/index"); 
    },
    
    login : (req, res)=>{
        res.render("home/login");
    },
    
}; //얘네는 객체

const users = {
    id:["woorimit", "안채원", "chaeoni"],
    psword: ["1234", "0000", "12345"],
};

const process = {
    login: (req,res) => {
        const id = req.body.id,
        psword = req.body.psword;

        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx]===psword){
                return res.json({
                    success:true,
             });

            }
        }
        return res.json({
            success: false,
            msg: "login is failed."
        })
    },
}


module.exports={
    output, 
    process,
}; 