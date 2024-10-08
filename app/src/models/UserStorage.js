"use strict";

const fs = require("fs").promises;

class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); //=>[id,psword,name] 형태
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) return users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsers(isAll, ...fields) {
    //fields는 배열. 순회하는 듯함

    return fs
      .readFile("./src/models/databases/users.json")
      .then((data) => {
        return this.#getUsers(data, isAll, fields);
      })
      .catch(console.error);
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/models/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);
  }

  static async save(userInfo) {

    const users = await this.getUsers(true);
    if (users.id.includes(userInfo.id)) {
      throw ("이미 존재하는 아이디입니다."); //throw Error (" ")면 문자열이 아니라 obect Obect로 나옴..
    }
    users.id.push(userInfo.id);
    users.realname.push(userInfo.realname);
    users.psword.push(userInfo.psword);
    console.log(userInfo);
    fs.writeFile("./src/models/databases/users.json", JSON.stringify(users));
    return { success: true };
  }
}

module.exports = UserStorage;
