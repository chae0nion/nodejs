"use strict";

const fs = require("fs").promises;

class UserStorage {

  static #getUserInfo(data,id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); //=>[id,psword,name] 형태
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  static getUsers(...fields) {
    //fields는 배열. 순회하는 듯함

    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/models/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);
  }

  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return { success: true };
  }
}

module.exports = UserStorage;
