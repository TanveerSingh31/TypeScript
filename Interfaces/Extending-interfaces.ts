import User from './interface.ts';

// Extending Interfaces
interface UserExtended extends User {
    userType: string
};

let user1: UserExtended = {
    name: "Tanveer Singh",
    phoneNumber: 123123213,
    paymentMethod: "UPI",

    getUserId : (login: string) => {
        return 12;
    },
    emailId: "tanveersigh@inc.com",
    userType: "admin"
}



