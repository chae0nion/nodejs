"use strict";

const hello = (req, res)=>{
    res.render("home/index"); 
    };

const login = (req, res)=>{
    res.render("home/login");
    };

module.exports={
    hello,
    login
}; // hello, login이 object인데 object는 key: value로 이루어짐// key만 명시하면 key: key(랑 같은 value) 형태로 저장
//rend() 함수는 ejs파일만 전송함/ index.js는 ejs파일이 아니므로 건너뛰고 views 밑에 home가서 ejs파일을 찾은거죠
