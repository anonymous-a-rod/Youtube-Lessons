// let firstName = 'Aaron';
// let lastName = 'Venema';
// let num1 = 10;
// let num2 = 18;

// const fullName = `${firstName} ${lastName} is ${num1+num2}`

// console.log(fullName)

// let example = "Hello \n" + "world";
let example = `Hello
World
`;
console.log(example)


// destructuring objects 
const personalInformation = {
    firstName: 'Aaron',
    lastName: 'Venema',
    city: "Grand Haven",
    state: 'Michigan',
    zipCode: 49417
};

const {firstName: fn, lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`)

// destructuring arrays

let [first, middle, last] = ['Aaron', 'Scott', 'Venema'];
last = 'Unknown'
console.log(first + middle + last)

// Object literal

// function addressMaker (city, state) {
//     const newAddress = {newCity: city, newState: state};

//     console.log(newAddress);
// }

// addressMaker('Grand Haven', 'Michigan');


// object literal (challenge)


function addressMaker(address) {
    const {city, state} = address

    const newAddress = {
        city, 
        state,
        country: 'United States'
    };

    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}

addressMaker({city: 'Grand Haven', state: 'Michigan'});

// For of Loop 

let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes){
    total += income;
}

console.log(incomes);

let hometown = personalInformation.city

for (char of hometown){
    console.log(char)
}