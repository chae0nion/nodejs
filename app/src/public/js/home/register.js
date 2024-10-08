"use strict";
//frontend

const id = document.querySelector("#id"),
 realname = document.querySelector("#realname"),
 psword = document.querySelector("#psword"),
 confirmPsword = document.querySelector("#confirm-psword"),
 registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register(){
    if(!id.value) return alert("아이디 입력해주세요.");
    if(psword.value !== confirmPsword.value){
        return alert("비밀번호가 일치하지 않습니다.");//여기에서 처리 서버한테 confirmpsword는 보낼 필요x
    }
    const req = {
        id : id.value,
        realname: realname.value,
        psword: psword.value,
        

    };
    
   
    fetch("/register",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    }).then((res) => res.json())
      .then((res)=>{
        if(res.success){
            location.href ="/login";
        } else { 
            alert(res.msg);
        }
      })
      .catch((err)=>{
        console.error(new Error("register중 error 발생"));
      });    
}//promise 형태로 반환
