// Interfaces - this will list all prop's / methods of the object, but not the definition.
// objects using the interface need to follow interface's property structure and implement that in the obj. itself

interface User {
    name: string;
    phoneNumber: number;
    paymentMethod?: string;
    getUserId(login: string): number // fn. return type;  
};

// Adding prop's to existing interfaces
interface User {
    emailId: string;
}


let user1: User = {
    name: "Tanveer Singh",
    phoneNumber: 123123213,
    paymentMethod: "UPI",

    getUserId : (login: string) => {
        return 12;
    },
    emailId: "tanveersingh@inc.com"
}

user1.getUserId("tan123");


export default User;