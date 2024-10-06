const express = require("express");
const app = express();


//라우팅
const home = require("./routes/home");
//앱세팅
app.set("views", "./views")
app.set("view engine", "ejs")

app.use('/',home);// use는 미들웨어 등록해주는 메소드
//루트 경로로 들어오면 routes\home으로 이동



module.exports = app;