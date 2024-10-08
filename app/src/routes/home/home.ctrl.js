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

    register:(req,res) => {
        res.render("home/register");
    }
    
}; //얘네는 객체



const process = {
    login: async (req,res) => {
        const user = new User(req.body);//class User의 body로 들어감
        const response = await user.login();
        return res.json(response);
     },

     register: async (req, res) => {
        
        const user = new User(req.body);//class User의 body로 들어감
        const response = await user.register();
        return res.json(response);

     },
};   
        


module.exports={
    output, 
    process,
}; 

