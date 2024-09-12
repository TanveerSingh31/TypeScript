// Type Aliases - we can create custom types , other than the set values. 

type User = {
    name: string,
    age: number,
    isPaid: boolean
};

// Input arg must follow "User" type , so should the return value
function addUser(user: User) : User {
    return user;
}

addUser({name: "tanveer", age: 24, isPaid: false});
