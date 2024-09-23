class User {
    // Access modifiers
    public userId: number;
    private password: string;
    protected emailId: string;


    constructor(userId: number, pass: string) {
        this.userId = userId;
        this.password = pass;
    }

    // Getters & Setters
    get getPassword(): string {
        return this.password;
    } 

    // NOTE: can't set return type to setters
    set setPassword(pass: string) {
        this.password = pass;
    }
};


let user1 = new User(123, "Admin@123");

// user1.password; // err
// user1.emailId; // err 
user1.userId; 



class UserExtended extends User {
    get getEmailId() {
        return this.emailId; // protected prop. can be accessed from child classes
    }
};