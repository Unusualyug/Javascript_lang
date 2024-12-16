/*


Note ==> A method is a function that is associated with an object. For example, console.log() is a method because it's a function that belongs to the console object. When you call console.log(), you're using the log method of the console object to perform an operation (printing to the console).
Note ==> when we do division of number by 10 then we use Math.floor() library to to division in integer otherwise it will do division in floating-point so the problem may accure in final output.

always use strict Mode in biginning of the code for security
strict Mode is makes easier for developers to get accidental errors

Example ++>

let hasDriverseLaicense=false;
passTest=true;
if(let pssTest)=> hasDriverseLaicense=true;
if(hasDriverseLaicense) console.log("you can drive a car !!");

output ++> you can drive a car !!

## Functions ==>

function is a block/peace of code which can be re-use over an over again.
A function in JavaScript is a block of code that performs a specific task and can be reused in different parts of a program. 
A function can take some input values, called parameters, and return an output value, called the return value.
A function can be defined using the "function" keyword, followed by a name and parentheses

Example ++>

function logger(){
    console.log("my name is");
    console.log("Yug  Lakhani");
}
logger()

OUTPUT ++>
my name is
Yug  Lakhani

A function can be invoked, or called, by using its name and parentheses, with optional arguments inside.

Define a function named square that takes a parameter x

function square(x,y){
    return x*y
}
console.log(square(4,5)); ---> 20

Example ++>

function frouitProcessor(apple, orange){
    console.log(apple,orange);
    let juice=`i want the juice of ${apple} apples and ${orange} orange's juice`
    return juice;
}
console.log(frouitProcessor(5, 0));

output ++>

5 0
i want the juice of 5 apples and 0 orange's juice

"When we are not pass the parameter then we not requte to specify the argument."

functions are follows the "dont repeat your self (DRY)" rule.

ARROW FUNCTION

An arrow function is a concise and modern way of writing function expressions in JavaScript. It uses the ( => ) operator to separate the parameters and the body of the function.

in on line arraw function curly_braces "{}" are optional .

example ++> 

let sumOfNumber=(a,b,c)=> a+b+c;
console.log(sumOfNumber(1,2,3));

EXERCISE ++>

How many years are remaing for a person for retairenment

const rearRetirenment=(birthYear)=>{
    const age=2024 - birthYear;
    const retirenment = 65 - age;
    return retirenment;
}
console.log(rearRetirenment(2005));

MULTI_PARAMETER PASSING IN ARROW FUNCTION ++>

const rearRetirenment=(birthYear, name)=>{
    const age=2024 - birthYear;
    const retirenment = 65 - age;
    return `${name} has left ${retirenment} years`;
}
console.log(rearRetirenment(2005,"yug"));

FUNCTION INSIDE ANOTHER FUNCTION CALLING ++>

write  a program of froutJuice but this time frout juicer have one more machine which is frouitCutter and we can make according to the pice of frouit we can make juice,....

function cutFrouitPices(frouit){
    return frouit*4;
}
function frouitProcessor(apple,orange){
    const applePeaces=cutFrouitPices(apple)
    const orangePeaces=cutFrouitPices(orange)

    const juice=`Juice of ${applePeaces} peaces of ${apple} apple and ${orangePeaces} peaces of ${orange} orange's juice`;
    return juice;
    
}

console.log(frouitProcessor(2,3));

EXERCISE ===>

let calAge = (birthYear) => {
    return 2024 - birthYear;
};

const retirenmentYear = (age, name) => {
    let retirement = 65 - age;

    if (retirement < 0) {
        console.log(`${name} has already retired`);
    } else {
        console.log(`${name} has ${retirement} years remaining to retire`);
    }
};

retirenmentYear(22, "jay");

"we can also pass the function name as argument in next function"
example ++>

let calAge = (birthYear) => {
    return 2024 - birthYear;
};
const retirenmentYear = (calAge, name) => {
    
    let retirement = 65 - calAge;

    if (retirement < 0) {
        console.log(`${name} has already retired`);
    } else {
        console.log(`${name} has ${retirement} years remaining to retire`);
    }
};

retirenmentYear(22, "jay");

CONCLUSION ++>

There are three type of function in javascript..
(i) Function declaration

Here we use the treditional function...
Example ++>

function calAge(birthYear){
    return 2024-birthYear
}
console.log(calAge(2005));

(ii) Function expression

Here the function value stored in a variable..

Example ++>

const calAge=function(birthYear){
    return 2024-birthYear
}
const age=calAge(2005)
console.log(age);

(iii) Arrow function

Great for one line function. 

Example ++>

const calAge = (birthYear) => 2024-birthYear
console.log(calAge(2005));

Exercise ++>

take teamA and teamB thenfind the average of three numbers and if the teamA >= 2*teamB then teamA wins the math otherwise teamB wins the match.

const teamA=(a,b,c)=>{
    return (a+b+c)/3
}
const teamB=(a,b,c)=>{
    return (a+b+c)/3
}
console.log(teamA,teamB);

if(teamA >= 2*teamB){
    console.log("Team A is Scores Double of teamB");
}else{
    console.log("According to condition teamB wins");
}
teamA(65,54,49);
teamB(23,34,27);

ARRAY ==> Arrays are mutable means whatever operation we are perform with the array, all the changes are happen in original array. not same as string. 

In JavaScript, an array is a special type of object that stores multiple values. It is used to group together and organize data. Arrays can hold elements of different data types, including numbers, strings, objects, functions, and even other arrays.

example ++>

Create an array of numbers
let numbers = [1, 2, 3, 4, 5];

Create an array of strings
let fruits = ["apple", "banana", "orange", "mango"];

Create an array of mixed types

let mixed = [true, 42, "hello", function() { console.log("world"); }];
console.log(mixed);

Output ++>
[ true, 42, 'hello', [Function (anonymous)] ]

Each element in an array has an index, starting from 0 for the first element.

Example ++>

(i) push() and pop()
    use to add or remove elements from the end of the array.
Example ++>

let fruits = ["apple", "banana", "orange"];
fruits.push("mango"); --> ["apple", "banana", "orange", "mango"]
let last = fruits.pop(); --> ["apple", "banana", "orange"]

(ii) unshift() and shift() 
     use to add or remove elements from the beginning of the array. and delete the element from "0-index"

example ++>

let fruits = ["apple", "banana", "orange"];
fruits.unshift("kiwi"); ---> ["kiwi", "apple", "banana", "orange"]
let first = fruits.shift(); ---> ["apple", "banana", "orange"]

(iii) splice() ==> it is use for replace and delete the element.
      use to add or remove elements from any position of the array.

example ++>

let fruits = ["apple", "banana", "orange", "mango"];
fruits.splice(1, 2, "grape", "lemon"); 
console.log(fruits);

output ++> ["apple", "grape", "lemon", "mango"]

(iv) slice() 
This method returns a shallow copy of a portion of an array. It does not modify the original array. For example:

Example ++>
let newFruits = fruits.slice(1, 3); --->["Apple","banana"]

(v) concate()

This method returns a new array that is the result of merging two or more arrays. It does not modify the original arrays. For example:

// Merge the fruits array with another array
let moreFruits = fruits.concat(["Strawberry", "Pineapple"]);

output --> ["Lemon", "Grape", "Cherry", "Mango", "Strawberry", "Pineapple"]


(vi) sort()
This method sorts the elements of an array in place and returns the sorted array. By default, it sorts the elements as strings. You can also provide a custom compare function to sort the elements by other criteria. For example:

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // fruits is ["Cherry", "Grape", "Lemon", "Mango"]

let numbers = [10, 5, 8, 3, 7];
numbers.sort((a, b) => a - b); --->[3, 5, 7, 8, 10]

(vii) reverse()
This method reverses the order of the elements in an array and returns the reversed array. For example

fruits.reverse(); ---> ["Mango", "Lemon", "Grape", "Cherry"]

(viii) indexOf()
This method returns the first index at which a given element can be found in an array, or -1 if it is not present. For example:

let index = fruits.indexOf("Grape"); // index is 2

(ix)  lastIndexOf()
This method returns the last index at which a given element can be found in an array, or -1 if it is not present. For example:

let index = fruits.lastIndexOf("Mango"); // index is 3

(x) includes()
This method determines whether an array includes a certain value among its elements, returning true or false. For example:

// Check if the fruits array includes "Apple"
let result = fruits.includes("Apple"); // result is false

(xi) find()
This method returns the value of the first element in an array that satisfies a given testing function, or undefined if no element satisfies the function. For example:

// Find the first element in the numbers array that is greater than 5
let number = numbers.find(x => x > 5); // number is 7

Exercise ++>

let firstName=['yug','bhumi','swati','urmi']
if(firstName.indexOf("bhumi")){
    console.log("she is present");
}else{
    console.log("she forgot you !!");
}

EXAMPLE ++>
const calTips = (bill) => {
    return bill > 500 && bill < 300 ? bill * 0.15 : bill * 0.20;
};
const bills = [125, 555, 355];
const tips = [calTips(bills[0]), calTips(bills[1]), calTips(bills[2])];
console.log(bills, tips);


Object ++>

const yug={
    name:"yug Lakhani",
    age:18,
    work:['student','study'],
    like:['money',"lotsOfMoney"]
}
console.log(yug);
outPut ++> { name: 'yug Lakhani', age: 18, work: [ 'student', 'study' ] }

console.log(yug[name]);  ---> yug Lakhani

console.log(yug[work][0]); ---> student

console.log(yug[like][0]="rupiya");
console.log(yug);

output ++>
{
    name: 'yug Lakhani',
    age: 18,
    work: [ 'student', 'study' ],
    like: [ 'rupiya', 'lotsOfMoney' ]
  }
console.log(yug.like.length); ---> 1
  
  
in object the key (key-value) can access by the '[]' and other things are access by .(dot)
  
example for in yug named dictionary name is present se we can access it by '[]' brackets
  
// example ++>
console.log(yug[name]); ---> 'yug Lakhani'

in object the those things are not avalable inobject is access by .(dot) examplle for length of which present in dictionary
  
example ++>
console.log(yug.like.length); ---> 1
  
exercise ++>

const yug={
    name:"yug Lakhani",
    age:18,
    work:['student','study'],
    like:['money',"lotsOfMoney"]
}
let choice=prompt("which thing do yu intrested to show from yug's detail ..(name,age,work,like)..")

if(yug[choice]){
    console.log(yug[choice]);
}else{
    console.log('you can only get info of (name,age,work,like) ')
}

EXAMPLES ====>

const yug={
    firstName:'yug',
    lastName:'lakhani',
    birthYear:2005,
    job:'student',
    friends:['yug','muno','fugo'],
    hasDrivingLaicense:true,

    calAge:function(birthYear){
        return 2024-birthYear
    }
};
console.log( yug.calAge(2005));  ---> 19

HERE AS WE SEEN THAT THE VALUE OF "BIRTHYEAR" IS PRESENT IN THE DICTIONARY THEN ALSO WE NEED TO PASS AS ARGUMENT IN FUNCTION

SO HOW WE CAN ACCESS THOSE VALUES WHICH IS AREADY PRESENT IN THE DICTIONARY

WITH THE HELP OF "this" KEYWORD WE CAN ASCCESS THOSE VALUE WHICH IS PRESENT IN DICTIONARY

EXAMPLE ++>

const bhumi={
    firstName:"bhumi",
    lastName:'mandani',
    birthYear:2005,
    age:18,
    city:'bhavnagar',
    friends:["gdrashti","sonia",'eva'],

    calAge:function(){
        return 2024-this.birthYear
    }
};
console.log(bhumi.calAge());  ---> 19

EXERCISE ++>

check that yug has drivers_laicence or not , inside dictionary make method

const yug={
    firstName:"bhumi",
    lastName:'mandani',
    birthYear:2005,
    age:18,
    city:'bhavnagar',
    friends:["gdrashti","sonia",'eva'],
    drivindLaicense:true,

    hasDrivingLaicense:function(){
        console.log(this.drivindLaicense);
        if(this.drivindLaicense){
            console.log("Yes ! he has drivingLaicense");
        }else{
            console.log("No ! he has drivingLaicense");
        }
    }
}
console.log(yug.hasDrivingLaicense());

output ++>
true
Yes ! he has drivingLaicense

Exercise ++>

find the BMI of dev and yug in method inside the dictionary and five output that whose BMI is greater or both have equal BMI....

const yug={
    fullName:'yug lakhani',
    mass:55,
    height:1.69,
    calBMI:function(){
        this.BMI=this.mass/this.height**2
        return this.BMI
    }
}
const dev={
    fullName:'Dev joshi',
    mass:85,
    height:1.44,
    calBMI:function(){
        this.BMI=this.mass/this.height**2
        return this.BMI
    }
}
console.log(yug.calBMI());  //---> 19.257028815517668
console.log(dev.calBMI());  //---> 40.99151234567901

if (yug.BMI > dev.BMI){
    console.log(`yug's BMI ${yug.BMI} is higher than dev's BMI ${dev.BMI}`);
}else if(dev.BMI > yug.BMI){
    console.log(`dev's BMI ${dev.BMI} is higher than yug's BMI ${yug.BMI}`);
}else{
    console.log(`yug's BMI ${yug.BMI} and dev's BMI ${dev.BMI} are same`);
}

output ++>
dev's BMI 40.99151234567901 is higher than yug's BMI 19.257028815517668 

LOOPS

# Difference between for loop and while loop ==>

for loop: Used when the number of iterations is known. It has an initialization, condition, and increment/decrement in one line.
Example: for (int i = 0; i < 10; i++) { ... }

while loop: Used when the number of iterations is unknown and depends on a condition.
Example: while (condition) { ... }

structured data are stored in stack like function, method, object etc. or Stores structured data like function calls, local variables, and method calls in stack.    
unstructured data are stred in heap, like those data which are associated with the object are stored in heap like variable

Loops are a way of repeating a block of code a number of times or until a certain condition is met. Loops are useful for performing tasks that require iteration, such as processing arrays, generating sequences, or validating inputs. JavaScript supports several types of loops, each with its own syntax and purpose. Here is a brief overview of the main loops in JavaScript:

Some example of infinite loop
for(let i=0; ;i++){

}
for(let i=1; i>=0;i++){

}
for(let i=0; i<=5;i--){

}

(i) for loop: 

    This loop executes a block of code a fixed number of times, based on three expressions: an initialization, a condition, and an update. The initialization runs once before the "loop starts", the condition determines whether "the loop should continue or stop", and the "update runs after each iteration" of the loop. For example:


exanple ++>

for(let i=0;i<=10;i++){
    console.log(`my number is ${i}`);
}
OUTPUT ++>

my number is 0
my number is 1
my number is 2
my number is 3
my number is 4
my number is 5
my number is 6
my number is 7
my number is 8
my number is 9
my number is 10

(ii) while loop: 
    This loop executes a block of code as long as a given condition is true. The condition is checked before each iteration of the loop, and the loop stops when the condition becomes false. This loop is useful when you don’t know in advance how many times the loop will run. For example:

Example ++>
take i[nput from user till they are not entered correct_password
    
let passWord = 1234;
let count = 1;
let temp = prompt("Enter password", "password");
while (temp != passWord) {
    temp = prompt("Try again ++>");
    count++;
}
alert(`Congratulations! You entered the validpassword, and for it, you took ${count} chances.`);

(iii) do…while loop: 
    This loop is similar to the while loop, except that it executes the block of code at least once, and then checks the condition. The loop continues as long as the condition is true. This loop is useful when you want to run the code at least once, regardless of the condition. For example:

Example ++>
// Print the numbers from 1 to 10

let i = 1;
do {
  console.log(`my number is ${i}`);
  i++;
} while (i <= 10);

output ++>
my number is 1
my number is 2
my number is 3
my number is 4
my number is 5
my number is 6
my number is 7
my number is 8
my number is 9
my number is 10

PRNT THE ALL VALUE AND DATATYPE WHICH STORE IN DICTIONARY BY FORLOOP


outPut ++>
bhumi string
mandani string
2005 number
18 number
bhavnagar string
[ 'gdrashti', 'sonia', 'eva' ] object


EXERCISE++>

WRITE A PROGRAM THAT FIRST PRINT ALL THE KEY-VALUES BY FOR LOOP WHICH PRESENT IN DICTIONARY .
THEN PUSH/PRINT ALL THAT VALUE IN "JAY" NAMED ARRAY

const yug={
    firstName:"bhumi",
    lastName:'mandani',
    birthYear:2005,
    age:18,
    city:'bhavnagar',
    friends:["gdrashti","sonia",'eva']
}
const jay=[]

for(let i in yug){
    console.log(yug[i], typeof(yug[i]));
    jay.push(yug[i]);
}
console.log(jay);

output ++>

bhumi string
mandani string
2005 number
18 number
bhavnagar string
[ 'gdrashti', 'sonia', 'eva' ] object
[
  'bhumi',
  'mandani',
  2005,
  18,
  'bhavnagar',
  [ 'gdrashti', 'sonia', 'eva' ]
]

ANOTHER RELATED EXAMPLE ++>

const year=[2022,2023,2024,2025]
const saal=[]
for(let i in year){
    saal.push(year[i])
}
console.log(saal);

OUTPUT ++>

[ 2022, 2023, 2024, 2025 ]

EXERCISE ++>
find the current age of the given year in array
let BIRTHYEAR=[1990,2023,2016,1999,2000,2005]
let age=[]
for(let i in BIRTHYEAR){
    age.push(2024-BIRTHYEAR[i] + "years old\n")
}
console.log(age);

OUTPUT ++>

[
    '34years old\n',
    '1years old\n',
    '8years old\n',
    '25years old\n',
    '24years old\n',
    '19years old\n'
]

EXERCISE++>

WRITE A PROGRAM THAT FIRST PRINT ONLY STRING_DATATYPE VALUES BY FOR LOOP.

const yug={
    firstName:"bhumi",
    lastName:'mandani',
    birthYear:2005,
    age:18,
    city:'bhavnagar',
    friends:["gdrashti","sonia",'eva']
}
console.log("--- ONLY STRING ---");
for(let i in yug){
    if(typeof yug[i] !== 'string'){
        continue;
    }
    else{
        console.log(yug[i], typeof(yug[i]));
    }
}

OUTPUT ++>

--- ONLY STRING ---
bhumi string
mandani string
bhavnagar string

LOOP INSIDE ANOTHER LOOP
Example ++>

for(let exercise=1;exercise<4;exercise++){
    console.log(`------- Starting exercise ${exercise}`);

    for(let rep=1;rep<6;rep++){
        console.log(`Exercise ${exercise} : Lifting weight repetation ${rep}`);
    }
}

output +++>

------- Starting exercise 1
Exercise 1 : Lifting weight repetation 1       
Exercise 1 : Lifting weight repetation 2       
Exercise 1 : Lifting weight repetation 3       
Exercise 1 : Lifting weight repetation 4       
Exercise 1 : Lifting weight repetation 5       
------- Starting exercise 2
Exercise 2 : Lifting weight repetation 1       
Exercise 2 : Lifting weight repetation 2       
Exercise 2 : Lifting weight repetation 3       
Exercise 2 : Lifting weight repetation 4       
Exercise 2 : Lifting weight repetation 5       
------- Starting exercise 3
Exercise 3 : Lifting weight repetation 1       
Exercise 3 : Lifting weight repetation 2       
Exercise 3 : Lifting weight repetation 3       
Exercise 3 : Lifting weight repetation 4       
Exercise 3 : Lifting weight repetation 5  


Note ==> below code is not possible cause we can not iteratethrough for...of loop cause "student" is an object. 
Objects in JavaScript are not directly iterable in the same way as arrays, which is why you need to convert the object into an iterable form using methods like Object.keys(), Object.values(), or Object.entries().


# when you use for...of loop

for directly iterate on entries, value and entries you have to iterate like,
Object.keys(student) will iterate over the property names (keys).
Object.values(student) will iterate over the values of the properties.
Object.entries(student) will iterate over both the keys and values as pairs (arrays).

Example ==>


var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};
yug=[]
for(let i of Object.keys(student)){
    yug.push(i)
}
console.log(yug);   //[ 'name', 'sclass', 'rollno' ]

Now by value ==>

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};
yug=[]
for(let i of Object.values(student)){
    yug.push(i)
}
console.log(yug);   //[ 'David Rayy', 'VI', 12 ]

Now by entries ==>  

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};
yug=[]
for(let i of Object.entries(student)){
    yug.push(i)
}
console.log(yug);   //[ [ 'name', 'David Rayy' ], [ 'sclass', 'VI' ], [ 'rollno', 12 ] ]

Note ==> but if you use the for..in loop then you can directly iterate through object. like
Example ==>


var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};
yug=[]
for(let i in student){
    yug.push(student[i])
}
console.log(yug);   //[ 'David Rayy', 'VI', 12 ]

Note ==> A method is a function that is associated with an object. For example, console.log() is a method because it's a function that belongs to the console object. When you call console.log(), you're using the log method of the console object to perform an operation (printing to the console).

Note for array ==> remember that "reference" means the address(memory address) where we stored the data. that's why when we create an array with "const" keyword we can not re-declare it again but we can make change in the element of that array

if you want to make an arrayCopy where the changes in one array affect to another array then,

let arr=[1,2,3]
let copyArr = arr

here "copyArr= arr" means the copy array is also assignto sam object which is "arr" so if you change the copy array then the original array will also change.
it means both "arr" and "copyArr" has same address

# constant array ==>
if we are created the array by const kyword then also we can update the element of the array , update or delete the element of the array But we can not re-assign the array or entries of array.
like,

const arr = [1, 2, 3];
arr[0] = 10;  // You can update elements
arr.push(4);   // You can add new elements
arr.pop();     // You can remove elements

console.log(arr); // Output: [10, 2, 3]


However, you cannot reassign the entire array:

arr = [5, 6, 7];  // This will throw an error

## Create an todo list app using JavaScript

let todo = [];
let req = prompt("Enter your request");
while (true) {
  if (req == "quit") {
    console.log("Closing app");
    break;
  }
  if (req == "list") {
    console.log("---------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(todo[i]);
    }
    console.log("---------------");
  } else if (req == "add") {
    let task = prompt("enter your task");
    todo.push(task);
    console.log("task added");
  } else if (req == "delete") {
    let idx = prompt("enter the index of the task you want to delete");
    todo.splice(idx, 1);
  } else {
    console.log("Wrong request");
  }
}

Note ==>In JavaScript, even reserved keywords can be used as keys in an object, but they are treated as strings.

In object to delete any property we use"delete" keyword to remove any key_value pair from the object. 
Syntax ==>    delete object.KeyName

Example ==>

const st={
    name:"jonas",
    city:"delhi",
    age:22,
    ismarried:true
}
console.log(st);    //{ name: 'jonas', city: 'delhi', age: 22, ismarried: true }
delete st.age
console.log(st);    //{ name: 'jonas', city: 'delhi', ismarried: true }

##Math object ==>

1.Math.abs(x): Returns the absolute value of x.
Math.abs(-5); // 5

2.Math.max(x, y, ...): Returns the largest of the given numbers.
Math.max(2, 3, 1); // 3

3. Math.min(x, y, ...): Returns the smallest of the given numbers.
Math.min(2, 3, 1); // 1

4.Math.random(): Returns a random number between 0 (inclusive) and 1 (exclusive).
Math.random(); // Example output: 0.456

Example==> generate 0 to 9
const num= Math.floor(Math.random()*10)
console.log(num);

Example==> generate 0 to 10
const num= Math.floor(Math.random()*10+ 1)
console.log(num);

Example==> generate 0 to 5
const num= Math.floor(Math.random()*5)
console.log(num);

Example==> generate 20 to 25
const num= Math.floor(Math.random()* 5)+20
console.log(num);


5.Math.round(x): Rounds x to the nearest integer.
Math.round(3.6); // 4

6.Math.PI: Represents the constant value of π (Pi).
Math.PI; // 3.141592653589793

7.Math.floor(): it will gives the rounf-of of the given value or less than that given value.

like,

console.log(Math.floor(5)); //5
console.log(Math.floor(5.6)); //5
console.log(Math.floor(5.9999)); //5
console.log(Math.floor(-5.4)); //6

8.Math.ceil(): The Math.ceil() method in JavaScript rounds or greater than a number up to the nearest integer.

Like,

console.log(Math.ceil(5)); //5
console.log(Math.ceil(5.6)); //6
console.log(Math.ceil(5.9999)); //6
console.log(Math.ceil(-5.4)); //-5


Example ==> Guess the number

let max = prompt("enter the max number");
const random = Math.floor(Math.random() * max + 1);
console.log(random);

let guess = prompt("enter the number");
while (true) {
  if (guess == "quit") {
    console.log("user quit");
    break;
  }
  if (guess == random) {
    alert("use guss correct number");
    break;
  }else if(guess < random){
    guess = prompt("Hint: your number is too large, please try again !")
  }else{
    guess = prompt("Hint: your number is too small, please try again !")
  }
}

*/


