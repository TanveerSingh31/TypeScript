// Abstract classes - classes that can't make object of their own
// These classes help other classes to implement fn's and prop.s just like interface



abstract class UserAbstract {

    public name: string;
    public emailId: string;

    constructor(name: string, emailId: string) {
        this.name = name;
        this.emailId = emailId;
    }

    // This fn. needs to be implemented in class that inherits this abstract class
    abstract getUserName(): string;

    // some fn. can be implemented in abstract class as well, so every child class can use the same fn.
    getEmailId(): string {
        return this.emailId;
    }
}

// Err - cannot create instance of Abstract class
// let user1 = new UserAbstract("Tanveer", "tanveersingh@inc.com");




class UserInherited extends UserAbstract {

    constructor(name: string, emailId: string, phone: number) {
        super(name, emailId); // will call constructor of parent class 
    }

    // need to implement abstract method definition in child class
    getUserName(): string {
        return this.name;
    }

}



let userInherited1 = new UserInherited("Tanveer", "tanveer.singh1@ince.com", 456789678);

// can call methods defined in abstract class
console.log(userInherited1.getEmailId());