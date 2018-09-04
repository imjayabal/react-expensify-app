//
// Object destructuring
//

const person = {
    name: "Jayabal",
    age: 32,
    location: {
        city:'Chennai',
        temp: 102
    }
}

const { name:FirstName = "Anonymous", age } = person;
console.log(`My name is ${name} and age is ${age}`);

const { city = 'Sivagangai', temp:temperature } = person.location;
console.log(`I am currently living in ${city}. Here temperature is ${temperature}`);

//
// Array destructuring
//

const address = [
    "3A, 10th Street, Periyar Nagar, Irumbuliyur, West Tambaram", 
    "Chennai", 
    "Tamilnadu", 
    "600045"
]

const [street, locality, state, zip] = address;
// or
// const [ , locality, state] = address;
console.log(`You are in ${locality}, ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [coffee, , medium] = item;
console.log(`A medium ${coffee} costs ${medium}`);