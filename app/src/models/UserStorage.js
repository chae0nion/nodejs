"use strict";

class UserStorage{
    static #users = {
        id:["woorimit", "양파링", "chaeoni"],
        psword: ["1234", "0000", "12345"],
        name: ["우리밋","안채원","김철수"]
    };//#users하면 외부파일에서 접근 불가

    static getUsers(...fields){//fields는 배열. 순회하는 듯함
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field)=>{
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;            
        }, {});
        return newUsers;
        
    }
}

module.exports= UserStorage;

