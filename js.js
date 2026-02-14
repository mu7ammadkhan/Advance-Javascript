// ************Golbal and local variables and datatypes 
// ************var is global ca be access from anywhere is the code but let is local can be accecces only in the code 

// const { use } = require("react");

// if (true) {
//     var age = 20;
// }

// console.log(age);

// ****************************
// true = 1
// false = 0

// let Isloggedin = true

// console.log(Isloggedin+1);
// *********************************************************
// if you concatinate two strings it will be string
// if you concatinate/add num + string = string
// num + string = string
// string + num = sting
// num * string = num
// string * num = num

// console.log('123' * 1);
// ********************* if else condition *********************
// let age = prompt('enter your age ')

// if (age >= 18) {
//     console.log("you can vote");
    
// } if (age > 80) {
//     console.log(" adult cant vote");
    
// } 

// ********** Ternary operators *************

// let age = prompt("Enter your age")

// let result = age >= 18 ? 'You can vote' : 'You cant '

// console.log(result);

// *****************************************************************

// Logical operators 
// And operator && All conditions must be true 

// const age = 20;
// const gender = 'female';

// let result = document.querySelector('.h1tag')

// if (age >= 18 && gender == 'male') {
//     result.innerText = 'You are adult male'
// }


// ********************** Logical operator**************
// OR operator ( || ) if one condition is true result is true

// const age = 20;
// const gender = 'female';

// let result = document.querySelector('.h1tag')

// if (age >= 18 || gender == 'male') {
//     result.innerText = 'You are adult male'
// }

// *********************** logical operator ***************
// Not = ! true = false and false = true
// const num = 6

// let result = document.querySelector('.h1tag')

// if (!(num % 2 == 0)) {
//     result.innerText = 'Odd number'
// } else {
//     result.innerText = 'Even number'
// }


// ************************ Ternary operator practice 10 ****************8

// let marks = 49
// document.querySelector('.h1tag').innerText = marks >= 50 ? 'Pass' : 'Fail'

// let age = 17;
// document.querySelector('.h1tag').innerText = age >= 18 ? 'Adult' : 'Not an adult'

// let number = 5;
// document.querySelector('.h1tag').innerText = number % 2 == 0 ? 'Even' : 'Odd'

// let temp = 33
// document.querySelector('h1').innerText = temp > 30 ? 'Hot' : 'Cool'

// if user is given = Welcome if no user found enmpty string = Please Login

// let user = ''
// document.querySelector('h1').innerText = user ? 'Welcome' : 'Plase Login'

// const balance = 11
// document.querySelector('h1').innerText = balance > 10 ? 'Active' : 'Empty'

// const day = 'Sunday'
// document.querySelector('h1').innerText = day == 'Sunday'  ? 'Sabu Engagement at night 12pm' : 'Working Day'

// ****************************** If alse and Conditional operators *************************

// age >=18 && citizen → Can vote
// const age = 20 
// const citizen = 'Yes'

// let result = document.querySelector('h1')

// if (age >= 18 && citizen == 'Yes' ) {
//     result.innerText = 'Can vote'
// } else {
//     result.innerText = 'Cant Vote'
// }

// username && password → Login

// const username = 'user2'
// const password = '123abc'

// if (username == 'user1' && password == '123abc') {
//     document.querySelector('h1').innerText = 'welcome to dashboard'
    
// } else {
//     document.querySelector('h1').innerText = 'Please login'
// }

// stock > 0 && price < 100 → Buy

// const stock = 8
// const price = 88

// if (stock > 0 && price < 100) {
//     document.querySelector('h1').innerText = 'Buy stock please'
// } else {
//     document.querySelector('h1').innerText = 'Dont buy'
// }

// 6️⃣ battery > 20 && network → Call allowed

// const battery = 3
// let network = '.'

// if (battery > 2 && network) {
//     document.querySelector('h1').innerText = 'Ongoing Call'
// } else {
//     document.querySelector('h1').innerText = 'Call not allowed'
// }

// ********************* OR operator and if else ***************
// 1️⃣ weekend || holiday → Off day

// const weekend = 'no'
// const holiday = 'Yes'

// if (weekend == 'Yes' || holiday == 'Yes') {
//     document.querySelector('h1').innerText = 'Today is Off'
// } else {
//     document.querySelector('h1').innerText = 'Come to school'
// }

// 2️⃣ admin || moderator → Panel access

// let admin = 'Ahmed'
// let moderator = 'siraj'

// if (admin == 'Ahmed' || moderator == 'MK') {
//     document.querySelector('h1').innerText = 'Welcome to admin panel'
// } else {
//     document.querySelector('h1').innerText = 'You cant access admin panel'
// }

// ******************** NOT operator with ternary and if else **************8

// 1️⃣ !isLoggedIn → Show login

// let isLoggedIn = false
// document.querySelector('h1').innerText = !isLoggedIn ? 'Please Login' : 'Welcome to dasgboard'

// let isLoggedIn = true
// if (!isLoggedIn) {
//     document.querySelector('h1').innerText = "Please Login"
// } else {
//     document.querySelector('h1').innerText = "Welcome to dashboard"
// }

// 2️⃣ !isPaid → Block feature

// let isPaid = true
// document.querySelector('h1').innerText = !isPaid ? 'Unlock canva pro' : 'Fullly accessed'

// let isPaid = false
// if (!isPaid) {
//     document.querySelector('h1').innerText = 'Please Login'
// } else {
//     document.querySelector('h1').innerText = "Welcome to dashboard"
// }

// 3️⃣ !isVerified → Show verify msg

// let isVerified =  true
// document.querySelector('h1').innerText = !isVerified ? 'Verify please' : prompt('user verified')

// let isVerified = false
// if (!isVerified) {
//     document.querySelector('h1').innerText = 'Please verify'
// } else {
//     document.querySelector('h1').innerText = prompt()
// }

// *************************** Empty String Check *************************

// let username = 'Muhammad Khan'
// document.querySelector('h1').innerText = 
// !username ? "Please Enter Username" : 'Welcome' + " " + username ;

// ************** using if else ********** 

// let username = ''
// if (!username) {
//     document.querySelector('h1').innerText = "Please Login"
// } else {
//     document.querySelector('h1').innerText = "Welcome " + username
// }


// **************************  Age Validation and ID verification *****************************


let age = 19
let hasID = true
document.querySelector('h1').innerText = 
age >= 18 && hasID ? 'Welcome' : 'Not eligible'

 