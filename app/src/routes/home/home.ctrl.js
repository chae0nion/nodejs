"use strict";

const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");
const output = {
    hello : (req, res)=>{
        res.render("home/index"); 
    },
    
    login : (req, res)=>{
        res.render("home/login");
    },
    
}; //얘네는 객체



const process = {
    login: (req,res) => {
        const user = new User(req.body);//class User의 body로 들어감
        const response = user.login();
        console.log(response);
        return res.json(response);

        // const id = req.body.id,
        //  psword = req.body.psword;
         
        // const users = UserStorage.getUsers("id", "psword");//UserStorage에서 static users해주면 바로 users접근가능

        // const response={};

        // if (users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.psword[idx]===psword){
        //         response.success = true;
        //         return res.json(response);
        //     }

        // }
        // response.success = false;
        // response.msg = "로그인에 실패했습니다."
        // return res.json(response);
    },
};   
        


module.exports={
    output, 
    process,
}; 

