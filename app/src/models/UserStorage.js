"use strict";

class UserStorage{
    static #users = {
        id:["woorimit", "양파링", "chaeoni"],
        psword: ["1234", "0000", "12345"],
        name: ["우리밋","안채원","김철수"]
    };//#users하면 외부파일에서 접근 불가//얘네는 나중에 database에 구현될 거임

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
    static getUserInfo(id) {
        const users = this.#users;
        const idx=  users.id.indexOf(id);
        const usersKeys = Object.keys(users);//=>[id,psword,name] 형태
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports= UserStorage;