// "readonly" keyword can be added infront of any key of type-aliases
// changes to value of readonly prop. will result in TS err. 


type User =  {
    readonly id: number, // any object that follows type - "User", it's id prop. can't be edited.
    name: string, 
    age: number,
    isPaid: boolean
}

// ------------------ CASE - 1. functions --------------------

// 
function getUser(user: User) : User {
    user.name = "newUserName";
    // user.id = 23123123;  // Cannot edit readonly property

    return user;
}

// ------------------ CASE - 2. Objects ---------------------

// 
let userObj : User = {
    id: 123,
    name: "tanveer",
    age: 23,
    isPaid: true
}
// userObj.id = 213213; // err


// --------------------------------------------------------


// **IMP** CASE - 3. When readonly property is Arr 
type User2 = {
    name: string,
    age: number,
    readonly phoneNumber: number[]
};

let user2 : User2 = {
    name: "tanveer",
    age: 23,
    phoneNumber: [2345, 456]
}

user2.phoneNumber = [111,111];  // =>  this will result in err
user2.phoneNumber.push(444); // But this will NOT result in err
console.log(user2);

// ------------------- HOW TO AVOID THIS --------------------

type User3 = {
    name: string,
    age: number,
    readonly phoneNumber: readonly number[]  // make the array also readonly
};

let user3 : User3 = {
    name: "tanveer",
    age: 23,
    phoneNumber: [2345, 456]
}

user3.phoneNumber.push(123); // err



export {};