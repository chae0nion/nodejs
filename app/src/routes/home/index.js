"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login); //로그인데이터를 받아서 기능을 처리
router.post("/register", ctrl.process.register);

module.exports = router; //라우터를 외부로 내보내기