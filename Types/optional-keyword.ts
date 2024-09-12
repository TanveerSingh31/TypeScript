// ? -> will represent the optional property of the type

type User = {
    name: string,
    age: number,
    isPaid: boolean,
    paymentMethod?: string // this prop. is optional 
}

let user1: User = {
    name: "tanveer",
    age: 23,
    isPaid: true,
    paymentMethod: "CHK"
}

let user2 : User = {
    name: "tanveer",
    age: 23,
    isPaid: false
    // no err
}



export {};