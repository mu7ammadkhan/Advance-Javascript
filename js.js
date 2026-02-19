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


// let age = 19
// let hasID = true
// document.querySelector('h1').innerText = 
// age >= 18 && hasID ? 'Welcome' : 'Not eligible'

// const number = 5
// document.querySelector('h1').innerText = 
// number % 2 != 0 ? "Even number" : "odd number"


// ********************* for loop = if you know how many times you want to print

// trying to print numbers from 1 to 10

// for (let i = 1; i <= 10; i= i + 1) {
//     console.log(i + ' MK');
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// While loop **** you dont know how many steps wil be taken from initial point to final point

// let ini_pos = 6
// let home = 50

// while (ini_pos != home) {
//     ini_pos = ini_pos +1
//     console.log("step taken " + ini_pos);
// }

//  Do while loop **************** do while loop will executes 1 time then chcks the condition if condition is already matchen fr bi it will run once then stops

// let ini_pos = 50
// let home = 50

// do {
//     ini_pos = ini_pos + 1;
//     console.log('Step taken ' + ini_pos);
    
// } while (ini_pos <= home) {
    
// }

// ************************** Problems of loops *********************

// ****** FOR LOOP PRACTICE SET 10 *******

// 1 Print numbers from 5 to 15

// for (let i = 5; i <= 15; i++){
//     console.log(i);
  
// }

// 2 Print even numbers from 2 to 20

// for (let num = 1; num <= 20 ; num++) {
//     if (num % 2 === 0) {
//         console.log(num);
//     }
// }

// 3 Print odd numbers from 1 to 25

// for (let num = 0; num <= 25; num++) {
//     if (num % 2 != 0) {
//         console.log(num);
//     } 
// }

// Print even numbers with for loop by increment 2 num += 2 or num = num + 2

// for (let num = 0; num <= 25; num+= 2) {
//     console.log(num);
// }


// 4 Print table of 7

// for (let num = 1; num <= 10; num++) {
//     console.log("7 x " + num + " = " + (7 * num));
// }


// 5 Print numbers from 20 down to 1

// for (let num = 20; num >= 1; num--) {
//     console.log(num); 
// }

// 6 Print square of numbers from 1 to 10 square of numbers hota kya ha

// for (let num = 1; num <= 10; num ++) {
//     console.log(num* num); 
// }

// Print cube of numbers from 1 to 5

// for (let num = 1; num <= 5; num++) {
//     console.log(num * num * num);
    
// }

// 8 Find sum of numbers from 1 to 100

// let sum = 0
// for (let num = 0; num <= 10 ; num++) {
//     sum = sum + num
//     console.log(sum);
// }

// 9 Count how many numbers between 1 and 50 are divisible by 3 and which are these

// let Count = 0
// for (let num = 1; num <= 50; num++) {
//        if (num % 3 === 0) {
//             console.log(num);
//             Count++
//        }    
// }

// console.log("Total numbers ",Count);

// 10 Print this pattern 1 12 123 1234 12345 alse reverse 


// for (let row = 9; row >= 1; row--) {
//     let output = ''
//     for (let col = 9; col >= row; col--) {
//         output = output + col
//     }
//     console.log(output);
    
// }

// 1 Print numbers from 1 to 10 using while
// let num = 1
// while( num <= 10 ) {
//     console.log(num)
//     num++
// }

/*
WHILE LOOP PRACTICE SET 10





6 Reverse a number for example 1234
7 Find sum of digits of a number
8 Keep printing numbers starting from 1 until sum becomes greater than 50
9 Print Fibonacci series up to 10 terms
10 Keep asking for password until correct password is entered use prompt 

*/

// 2 Print numbers from 10 to 1

// let num = 10
// while(num >= 1) {
//     console.log(num);
//     num--
// }

// 3 Print multiples of 5 till 50

// let num = 5
// while (num <= 50) {
//     console.log(num)
//     num+= 5
// }

// 4 Find factorial of 5


// let number = 5
// let factorial = 1

// while(number >= 1) {
//     factorial = factorial * number
//     console.log(number,factorial);
//     number--
    
// }

// 5 Count digits of a number for example 98765

let num = 0
let Count = 0

if (num === 0) {
        Count = 1    
} else {
     while (num > 0) {
        num = Math.floor(num / 10)
        Count++
    }
}

console.log("Counter ",Count,"Number ", num);