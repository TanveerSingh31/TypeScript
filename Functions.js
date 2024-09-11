"use strict";
// Functions in TS
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Specify types of arguments -> if no type is mentioned, TS will consider it as "any" type
function add(num1, num2) {
    return num1 + num2;
}
add(4, 5);
// add(4, 5, 6)  => will give err -> more no. of args. than expected
// add(4, "5")  =>  will give err
// 2. default value for arguments
function signUpUser(username, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log("username", username);
    console.log("password", password);
    console.log("ispaid", isPaid);
}
signUpUser("tan", "Admin@123", true);
signUpUser("tan", "Admin@123");
// 3. Setting Return type of the function
function getNumber(num1) {
    // return "hello" -> err
    return num1;
}
getNumber(12);
// signUpUser(getNumber(123), signUpUser(213));   
//  ERR, as getNumber will return "number" , while signUpUser expects "string" args.
// 4. Arrow fn's in TS
var getNumberArrow = function (num) {
    return num;
};
exports.default = {};
