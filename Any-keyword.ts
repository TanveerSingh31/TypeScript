// Declare variable with "any" type
// No Type checking is done for variable with "any" type
// Not recommended to use it.a

let str: any;

// No err
str = "sample string";
str = 1213;

// If no type provided, TS automatically infers "any" type

let hero;          // infered "any" 
let heroAny : any;   // explicit "any"
let heroStr: string;  // explicit "string"

function getHero(){
    return true;
}

hero = 123;
hero = getHero()       // no err
// heroStr = getHero();   // err
heroAny = getHero();   // no err
