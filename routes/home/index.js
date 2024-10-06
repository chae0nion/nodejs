"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);

router.get("/login", ctrl.login);//루트/로그인페이지

module.exports = router; //라우터를 외부로 내보내기