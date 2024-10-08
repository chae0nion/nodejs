"use strict";
//frontend

const id = document.querySelector("#id"),
 name = document.querySelector("#name"),
 psword = document.querySelector("#psword"),
 confirmPsword = document.querySelector("#confirm-psword"),
 registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register(){
    const req = {
        id : id.value,
        name: name.vlaue,
        psword: psword.value,
        confirmPsword: confirmPsword.value,

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
