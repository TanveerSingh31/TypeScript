"use strict";
// "readonly" keyword can be added infront of any key of type-aliases
// changes to value of readonly prop. will result in TS err. 
Object.defineProperty(exports, "__esModule", { value: true });
// 1. functions
function getUser(user) {
    user.name = "newUserName";
    // user.id = 23123123;  // Cannot edit readonly property
    return user;
}
// 2. Objects
var userObj = {
    id: 123,
    name: "tanveer",
    age: 23,
    isPaid: true
};
var user2 = {
    name: "tanveer",
    age: 23,
    phoneNumber: [2345, 456]
};
user2.phoneNumber.push(444);
console.log(user2);
