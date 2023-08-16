console.log('hello world!');

//Variables
//let is used to declare a variable
//firstName is the name of the variable
//'Chris' is the value that we are assigning to the variable
let firstName = 'Chris';
console.log(firstName);

let lastName = 'Black';
console.log(lastName);

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// firstName, lastName, and fullName are all strings (text).


//variable set to the number 80
//you don't need to put single quotes around numbers
let temperature = 80;
console.log(temperature);


//boolean variable type
let loggedIn = true;
//this example shoes a console log that has a string AND a value in it
console.log('loggedIn', loggedIn);

let isRaining = false;

//Conditional statement
// (should be either true or false)
if (loggedIn) {
    // if (true) will run this code
    console.log('Welcome ', fullName);
} else {
    console.log('Welcome, Guest!');
}

// && which is and
// || which is or
// true && false will be false
// true && true will be true 
// true || false will be true


//so this is saying if the temperature is less than 85 and it's not (!) raining,
//then let's go for a walk.
if (temperature < 85 && !isRaining) {
    console.log('Go for a walk!');
} else if (isRaining) {
    console.log('Bring an umbrella');
} else {
    console.log('Better to stay inside');
}

//This adds 1 to the existing temperature
temperature = temperature + 1;
//another way of writing this is:
temperature += 1;
//anotherrrr way is
temperature ++; 

//This works with +, -, *, and /

temperature -= 2; //this subtracts 2 from the temperature
temperature *= 2; //this multiplies the temperature by 2
console.log('It is now', temperature);

// === checks for equality, as does ==
// = will change the value AND always returns true
if (temperature === 162) {
    console.log('it is 162!');
}