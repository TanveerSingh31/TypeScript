// "Union" Type in TS
// using Union Operator (|) type we can allow multiple types to single variable


// Ex: 1 : Assigning different datatype values to union type variable 
let score: number | string;
score = 1;
score = "1";    // no err



// Ex: 2 : using UNION with custom types / type Aliases
type Student = {
    stud_id: number;
    name: string;
};

type Teacher = {
    teacher_id: number;
    name: string;
    subject: string;
}


let user: Student | Teacher;

user = {
    stud_id: 1,
    name: "Tanveer Singh"
}

user = {
    teacher_id: 1,
    name: "Tanveer Singh",
    subject: "Maths"
}

// This is acceptable , because it contains prop.'s of student , along with some additional props - TODO - read more about this..
user = {
    stud_id: 1,
    name: "Tanveer Singh",
    subject: "Maths"
}




// Ex: 3 , functions that exists in both datatype only those will be accessible in the func's
function getNumber(num: number | string) {

    num.toLowerCase()  // not allowed
    if(typeof num === "string") return num.toLowerCase();  // allowed - narrowing with code

    return num.valueOf(); // common fn. in both datatypes
}

console.log(getNumber(1));
console.log(getNumber("TWO"));




// Ex: 4 : Arrays
let data: number[] = [1,2,3,4,5];
let data2: string[] = ["1", "2", "3"];

// Combination of both types in single arr

// WRONG WAY, this means either it can be array of strings or numbers
let data3: number[] | string[] = [1,2,3,4,"5"];

// CORRECT WAY
let date4: (number | string)[] = [1,2,"3","4"];





// Ex:5 : static values
type Subjects = "Maths" | "Science" | "History";

let sub1: Subjects = "Maths";
let sub2: Subjects = "Chemistry"; // err


