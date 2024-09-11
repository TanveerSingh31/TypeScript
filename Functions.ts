// Functions in TS

// 1. Specify types of arguments -> if no type is mentioned, TS will consider it as "any" type
function add(num1: number, num2: number) {
    return num1 + num2;
}

add(4,5);

// add(4, 5, 6)  => will give err -> more no. of args. than expected
// add(4, "5")  =>  will give err



// 2. default value for arguments
function signUpUser(username: string, password: string, isPaid: boolean = false) {
    console.log("username", username)
    console.log("password", password)
    console.log("ispaid", isPaid);
}

signUpUser("tan", "Admin@123", true);
signUpUser("tan", "Admin@123");





// 3. Setting Return type of the function
function getNumber(num1: number) : number {

    // return "hello" -> err
    return num1;
}

getNumber(12);

// signUpUser(getNumber(123), signUpUser(213));   
//  ERR, as getNumber will return "number" , while signUpUser expects "string" args.




// 4. Arrow fn's in TS
const getNumberArrow = (num: number) : number => {
    return num;
}



export default {};

