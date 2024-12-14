/* javascript is a HIGH-LEVEL , OBJECT ORIENTED , MULTIPROGRAMING LANGUAGE 

in javascript we can say that is is an both "interpreted language" or not-an interprited language , it depends on the context and the implementation . But in most of the cases it is an interpreated language.

javascript is use to add dynamic effects and web application in the browser.

## Precedency rule ==> The precedence rule in JavaScript determines the order in which operators are evaluated when an expression contains multiple operators. 
in which order means which operation executed first of the expression(BODMAS).

## Associativity rule ==> The associativity rule in JavaScript determines that in which order operators are evaluated when an expression contains multipl operators of the same precedence.
Like left to right or right to left.


we use three types of javascript file 
(i) inline javascript
(ii) internal javascript
(iii) external javascript


let js='amazing'
if(js=='amazing'){
    alert("hello yug bahi")
}else{
alert("whom are you")

name=prompt("enter your name",'username')
alert("welcome "+name +".")
}

VALUES AND VARIABLE


variable is often referred to as an identifier. An identifier is simply the name you give to a variable, function, or other elements in your code.
variable means something which can be "vary"("vary means change") 
values are the smallest information in javascript.
variable are the acts like container which gives you the storage location where you store the data. 
with the help of assignment operator we assign the value to variable means we storing the value inside the variable;

console.log("yugbhai");
let firstName="yug"
console.log(firstName);

RULES of VARIABLE_NAME

variabe name must be camelCase and we can also use sneak_case.

Variable names can contain letters, digits, underscores, and dollar signs.
Variable names must begin with a letter, an underscore (_), or a dollar sign ($).
Variable names are case sensitive (y and Y are different variables).
Variable names cannot be reserved words in JavaScript, such as function , new , class, var, let, const, etc.

examples ++>

let myFirstjob="learner"
let myCurrentjob="student"
console.log(myFirstjob);
console.log(myCurrentjob);

real constant are written in uppercase
example ++>
    let PI=3.1415

there are different types values, means they have different datatype
every value is an primitive datatype in javascript

there are 7 primitive datatype ,

B --> boolean
B --> bigInt
N --> Number
N --> Null
S --> String
S --> Symbol
U --> Undefined

Number : Floating point number (decimal and integer)
example ++> let age=22

String : String is an sequence of an character which we write inside ""(doubleQuota) or ''(singleQuata)
example ++> let firstName = "yugbhai" 

Boolean : Logical type that can be only true and false
Boolean datatype are use o take decision
example ++> 
let fullAge = true

Undefines ++> it means we are declare that the value that taken by variable but we are not declare the value 
it means "we are declare the variable without assign a value"
example ++>
let myName;

Null : it means the 'empty value'

Symbol : Value that is unique and can not be changed

BigInt : largest integer vallue that the number type can hold

JAVASCRIPT IS AN DYNAMICALLY_TYPED LANGUAGE(dynamic typed langauge means once the datatype of any variable is declare by it's value then we can change it by storing another data-type value in that variable.)
it means we do not require to declare the datatype before variable_name when we assign any value to variable
example ++> let age = 22

Typescript ==> designed by microsoft. strict version of javascript.

-- typescript is an static langauge means we can not make chang in the datatype of any variable like javasript. in short we can say that typescript is an superset of javascript. it means typescript is an extension of javascript. it means typescript is an javascript with some additional feature. typescript is an used to make large scale application. typescript is an used to make enterprise level application.


here age is store the integer value so we do not require to declare 'int' before the variable name... 

in javascrip we use comment (let comment = "the code which not taken seriously (ignore) or not compile by compiler , use for programmer to understand the code" )
(i) single-line comment 
(ii) multi-line comment 


typeof() operator

typeof() operator is use to check the datatype of value which we assign to  a variableName

example ++>

let a=22
let b=true
let c="yug"
let d="a"
console.log(typeof(a)); ---> number
console.log(typeof(b)); ---> boolean
console.log(typeof(c)); ---> string

we are declare a new variable_name with 'let' keyword but when we re-assign the variable_name then we are not use let keyword

example ++> 
let a = 22
console.log(a)  --> 22
console.log(typeof(a))  --> number

a="yugbhai"
console.log(a)
console.log(typeof(a))  --> string

As we mention before that undefined means the value which taken by variable but not defined yet.

inshort whenever we declare any variable without value then it's datatype is an 'undefined'

example ++>
let name;
console.log(typeof(name)) --->undefined
name="yug"
console.log(typeof(name)) ---> string

console.log(typeof(null)); ---> object

LET , CONST AND VAR


==> let, var, and const are keywords in JavaScript used to declare variables

let and const are declared in ES6
when we declare any variable with let keyword then we can re-assign the new value

example ++>
let a = 22
console.log(a)  --> 22
a="yug"
console.log(a)  --> yug

the value which declare with 'const' can not be re-assign
it we re-assign it then it gives typeError
it is also the 'block-scope' same as let

we can define undefined variable with const
example ++> 
const name; 
console.log(name); ---> it will gives an error 

var is work same as let but difference is In let when we declare any value and do re-declaration then we only use the variable name not 'let' again
example ++>  
let name="yug"
name=22
but in 'var' when we declare any value and do re-declaration then we use the variable name 'var' again
example ++>
var a=22
var a="yug"

so conclusion is, let and const are block Scope and var is a functionScope.

If we do not use let, var, or const to declare a variable in JavaScript, then by default the variable is declared with the 'var' keyword.

example ++>
name="yug"
console.log(name)

here name is taken as var name = "yug"

OPERATORS

There are different types of operators in JavaScript that are used to perform various operations on values and variables. Here are some of the common types of operators

(i) Arithmetic operators are used to perform mathematical calculations, such as addition, subtraction, multiplication, division, etc. For example, x + y or x ** y.

(ii) Assignment operators are used to assign values to variables, such as x = y or x += y.

(iii) Comparison operators are used to compare two values and return a boolean value (true or false), such as x == y or x > y.

(iv) Logical operators are used to combine two or more boolean expressions and return a boolean value, such as x && y or x || y.

(v) String operators are used to manipulate strings, such as concatenation, slicing, searching, etc. For example, x + y or x.slice(0, 3).

(vi) Other/Ternary operators include ternary operators, type operators, bitwise operators, etc. For example, x ? y : z or typeof x.

example ++>

 Arithmetic operators
let x = 10; // Assignment operator
let y = 5;
let z = x + y; // Addition operator
console.log(z); --> 15
z = x - y; // Subtraction operator
console.log(z); // 5
z = x * y; // Multiplication operator
console.log(z); // 50
z = x / y; // Division operator
console.log(z); // 2
z = x % y; // Remainder operator
console.log(z); // 0
z = x ** y; // Exponentiation operator
console.log(z); // 100000

Comparison operators
console.log(x == y); // Equal to operator, false
console.log(x === y); // Strict equal to operator, false
console.log(x != y); // Not equal to operator, true
console.log(x !== y); // Strict not equal to operator, true
console.log(x > y); // Greater than operator, true
console.log(x < y); // Less than operator, false
console.log(x >= y); // Greater than or equal to operator, true
console.log(x <= y); // Less than or equal to operator, false

// Logical operators
console.log(x && y); // Logical AND operator, 5
console.log(x || y); // Logical OR operator, 10
console.log(!x); // Logical NOT operator, false

// Conditional operator
console.log(x > y ? "x is bigger" : "y is bigger"); // Ternary operator, "x is bigger"

// Type operators
console.log(typeof x); // Type of operator, "number"
console.log(x instanceof Number); // Instance of operator, false

Note ==> In most cases, you'll use primitive numbers because they are more efficient. "Number objects" are rarely needed unless you're working with object-specific methods.

template literals/template string is quite easy than string concatination.

CHALLANGE 1

check that whose Body Mass Index is greater from yug or dev

const massYug=95
const heightYug=1.88
const massDev=85
const heightDev=1.76

const BMIYug=massYug / massDev ** 2;
const BMIJay=massYug / massDev ** 2;
const BMI=BMIYug > BMIJay;

console.log(BMIYug,BMIJay,BMI); 

output ++> 0.01314878892733564 0.01314878892733564 false


STRING CONCATINATON AND TEMPLATE LITERALS

string concatination means we are jois teo strings
example ++>
let name1="yug"
let name2="bhumi"
let name3=name2+name1
console.log(name3); ---> bhumiyug

or

name="yug"
age=22
console.log("my name is "+name+" and i'm "+age+" years old");

output ++> my name is yug and i'm 22 years old



Template literals are literals delimited with backtick ( ` ) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates

Note ==> In JavaScript, template literals have block scope. 

EXAMPLE ++>

let name="yug"
let age=22
console.log(`my name is ${name} and i'm ${age} years old`)

output ++> my name is yug and i'm 22 years old

CONDITIONAL CONTROL STATEMENT / CONDITIONAL STATEMENT

A conditional control statement in JavaScript is a statement that allows you to execute different blocks of code depending on certain conditions. Conditional control statements are also known as decision-making statements, as they help the program make decisions based on the values of variables, expressions, or user input.

There are different types of conditional control statements in JavaScript, such as:

(i) if statement: This statement executes a block of code if a condition is true, and skips it otherwise. For example:

example ++>
if (x > 10) {
  console.log("x is greater than 10");
}

(ii) if-else statement: This statement executes one block of code if a condition is true, and another block of code if the condition is false. For example:

example ++>
if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than or equal to 10");
}

(iii) else-if statement: This statement allows multiple conditions to be checked using a series of if and else-if blocks, followed by an optional else block. For example:

example ++>
if (x > 10) {
  console.log("x is greater than 10");
} else if (x == 10) {
  console.log("x is equal to 10");
} else if (x > 5) {
  console.log("x is greater than 5 but less than 10");
} else {
  console.log("x is less than or equal to 5");
}

(vi) switch statement: This statement allows a variable to be tested for equality against a list of values, and executes a corresponding block of code for each case. For example:

example ++>
day=prompt("enter your numbe from 0 to 7 number for day")
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
}

TYPE CONVERSION ++>

Type conversion in JavaScript is the process of changing the data type of a value to a different data type. For example, you can convert a string to a number, a number to a string, a boolean to a number, and so on. Type conversion can be done either implicitly by JavaScript itself, or explicitly by using built-in functions or methods.

"like string concatination is a example of implicite type coverson"

(i) Some examples of 'implicit type' conversion are:

When you use the + operator to concatenate a string and a number, the number is converted to a string. For example:

let x = "10" + 5; // x is "105"

When you use the == operator to compare values of different types, the values are converted to a common type before comparison. For example:

let x = "10" == 10; // x is true

When you use a boolean value in a numeric context, the value is converted to a number. For example:

let x = true + 1; // x is 2

(ii) Some examples of explicit type conversion are:

When you use the Number() function to convert a value to a number. For example:

let x = Number("10"); // x is 10
console.log(typeof(x));

When you use the String() function to convert a value to a string. For example:

let x = String(true); // x is "true"

When you use the Boolean() function to convert a value to a boolean. For example:

let x = Boolean(0); // x is false

example ++>

console.log('22' - '20' + 5); ---> 7

here we use "-" which always use for substract the number whatever it is number or string
where,

console.log('22' + '20' + 5); ---> 22205

here we use the "+" operator and if the value in numeric then it perfom addition operatio and if the value is string then it will perfform string concatination.


TRUTHY AND FALSY VALUE

Truthy and falsy values in JavaScript are values that are converted to true or false when used in a Boolean context, such as an if statement or a logical operator. For example:

if (value) {
  // value is truthy
} else {
  // value is falsy
}

falsy values are ,
(i) false
(ii) 0
(iii) undefined
(iv) NAN(not a number)
(v) empty string

NAN(not a number) ==> the NaN global priority is a value representing Not-A-Number.
like; 0/0, NaN-1, NaN*1, NaN * NaN but the type of NaN is number.
so we can say that NaN is the number but not valid number.


const money=0
if(money){
    console.log("you should find job!!");
}else{
    console.log("amazing");
}
output ++> amazing

HERE in above code 'money=0' where the "0" is falsy value so else part will be executed.

const money=1000
if(money){
    console.log("you should find job!!");
}else{
    console.log("amazing");
}
output ++> you should find job!!

or

let height;
if(height){
    console.log("height is found")
}else{
    console.log("height is not found")
}
output ++> height is not found

bcause we not defined height so it's type is 'undefined' and undefined is a falsy value so else part will be executed

Equality operators
Equality operators in JavaScript are used to compare two values and return a boolean result. There are two types of equality operators in JavaScript:

(i) Strict equality (===): This operator checks if the two values have the same value and the same type, without performing any type conversion. For example:

5 === 5; // true
5 === "5"; // false, because 5 is a number and "5" is a string

The strict equality operator is recommended over the loose equality operator, because it avoids unexpected results and bugs due to type coercion. For example:

0 == false; // true, because 0 is converted to false
0 === false; // false, because 0 is a number and false is a boolean


(ii) Loose equality (==): This operator checks if the two values have the same value after converting them to a common type, if needed. For example:

5 == 5; // true
5 == "5"; // true, because "5" is converted to a number before comparison


NOTE --> whatever data which we taken from user by "prompt" , by default its type/dataType is string(same as python).

example ++>
age = prompt("enter your age : ")
console.log(typeof(a)); ---> string

BOOLEAN LOGIC

Boolean logic in JavaScript is the use of logical operators and expressions to manipulate and compare boolean values, which are either true or false. Boolean logic can help you create complex conditions and control the flow of your program based on different scenarios.

(i) && (AND): This operator returns true if both operands are true, and false otherwise. For example:

(ii) || (OR): This operator returns true if at least one operand is true, and false otherwise. For example:

(iii) ! (NOT): This operator returns the opposite boolean value of its operand. For example:


example ++>

const hasDrivingLaicence=true
const hasGoodvision=false

console.log(hasDrivingLaicence && hasGoodvision);   //false
console.log(hasDrivingLaicence || hasGoodvision);   //true
console.log(!(hasDrivingLaicence || hasGoodvision));   //false

name=prompt("enter your name")
if (hasDrivingLaicence && hasGoodvision){
    console.log(`${name} is able to driving`);
}
else{
    console.log(`${name} is not able to driving`);
}


NOTE ++> in javascript ,
        0 is counted as false, because it is a falsy value.  and 1 is counted as true


example ++>

name=true
if(name == 1){
    console.log("executed");
}
else{
    console.log("not executed");
}
output ++> executed , because in javascript true is denoted by 1.

name=true
if(name === 1){
    console.log("executed");
}
else{
    console.log("not executed");
}

output ++> not executed , because in javascript true is denoted by 1 but if we talk about "===" (strict equality) then it  also check the datatype and 1 is Number where true is boolean so else part will be printed...


exercise ++>

const scoreofDolphine=(97 + 112 + 109)/3
const scoreofSharks=(109 + 95 + 70)/3
console.log(scoreofDolphine,scoreofSharks);

if(scoreofDolphine > scoreofSharks && scoreofDolphine >= 100){
    console.log("Dolphine wins the match !!");
}
else if(scoreofSharks > scoreofDolphine && scoreofSharks >= 100){
    console.log("Sharks wins the match !!");
}
else if(scoreofDolphine === scoreofSharks && scoreofDolphine >= 100 && scoreofSharks >= 100){
    console.log("Both wins the match !!");
}else{
    console.log("No one wins the match");
}

Switch statement ++>

A switch statement in JavaScript is a way of executing different blocks of code based on the value of an expression. It is similar to an if-else-if ladder, but more concise and easier to read.

The break statement is optional. If the break statement is encountered, the switch statement ends. If the break statement is not used, the cases after the matching case are also executed. This can cause unexpected results and bugs, so it is recommended to always use the break statement

Means if we are not declare break or continue between two condition then by default "continue" used..

The switch statement uses strict equality (===) to compare the expression’s value with the case values.
Where "Else-if-ladder use loose equality".
The values must be of the same type to match. A strict comparison can only be true if the operands are of the same type.

Example ++>

day=prompt("Enter your faveriout day number between 0 to 6")
day=parseInt(day)
switch (day) {
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    default:
        console.log("Enter valid Day number");
  }

exercise ++>


day = prompt("Enter your favorite day number between 0 to 6");
day = parseInt(day);

switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Enter valid Day number");
}

if (day === 0 || day === 6) {
    console.log("Enjoy weekend holidays");
} else if (day === 5) {
    console.log("Today we have Python's lab");
} else if (day === 4) {
    console.log("Today we have CN's lab");
} else if (day === 1 || day === 2) {
    console.log("We have library");
} else {
    console.log("Invalid day!!");
}

STATEMENTS AND EXPRESSIONS

The difference between a statement and an expression is that a statement performs an action, while an expression produces a value. A statement can contain one or more expressions, but an expression cannot contain a statement.

statements (print / execute the statement/custo message)++> 

let x = 10;
console.log(x); // a statement that prints the value of x to the console

expression (produced the values)++>

x // an expression that evaluates to the value of x
x + 5 // an expression that evaluates to the sum of x and 5
Math.sqrt(x) // an expression that evaluates to the square root of x

bsed on the expression ,statement are printed or executed.

"expression is like variable and the statement means the value which we assign to variable
"
Ternary operators 

A ternary operator in JavaScript is a shorthand way of writing a conditional (if-else) statement in a single line

it takes three operands (i) condition (ii) valueIfTrue (iii) valueIfFalse

example ++>

let age=22
let message=age >= 18 ? "you can drive a car" : "you an not drive a car"
console.log(message);

output ++> you an not drive a car

NOTE : we can use condtional statement in template literals but if-else statement vcan not be used in template-literals.

example ++>

let age=33
console.log(`I like to drink ${age >= 18 ?"Wine" : "Water"}`);

output ++> I like to drink Wine

Exercise ++> the bill is 157 and the tip is 31.400000000000002 , so total bill is 188.4

output ++>

const bill=157
let tip= bill<=300 && bill >=200 ? bill*0.15 : bill*0.20;
console.log(`the bill is ${bill} and the tip is ${tip} , so total bill is ${bill + tip}`);

Difference between ES5 and ES6

JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997
ECMAScript is the official name of the language
ECMAScript versions have been abbreviated to ES1, ES2, ES3, ES5, and ES6.
Since 2016, versions are named by year (ECMAScript 2016, 2017, 2018, 2019, 2020).

In javascript our code keep working forever.
old featers are never removed but it is updated in ES.

ES5 is fully support in all browser.
the version after 2015 called ES6+ version.

Browser support ES7, ES8, ES9, ES10, ES11 

String ==>

In JavaScript, a string is a data type used to represent and manipulate a sequence of characters. Strings are immutable, meaning their content cannot be changed once created. 

How to Declare Strings by single as well as doublee quota, Like;

let str1 = "Hello, World!";
let str1 = 'Hello, World!';


Template Literals(already discuss earlier)
Ex:
let name = "Yug";
let str3 = `Hello, ${name}!`;

## Characteristics of Strings:
(1)String Length:
Use the ".length" property to find the number of characters in a string.

Example =>
let str = "JavaScript";
console.log(str.length); // Output: 10

(2)Immutability:

Strings cannot be changed. Operations create new strings.

Example ==>
let greeting = "Hello";
greeting[0] = "h"; // No effect
console.log(greeting); // Output: "Hello"

## Common String Methods ==>

1.Access Characters:

Use bracket notation or .charAt():

Example ==>
let str = "JavaScript";
console.log(str[0]); // Output: J
console.log(str.charAt(4)); // Output: S

2.Change Case:

let str = "JavaScript";
console.log(str.toUpperCase()); // Output: JAVASCRIPT
console.log(str.toLowerCase()); // Output: javascript

3.Substring and Slicing:


let str = "JavaScript";
console.log(str.substring(0, 4)); // Output: Java
console.log(str.slice(4)); // Output: Script (Starts extracting from index 4 to the end of the string)

4.Search and Match:
Check for substrings:

let str = "JavaScript is great";
console.log(str.includes("great")); // Output: true
console.log(str.indexOf("Script")); // Output: 4
console.log(str.startsWith("Java")); // Output: true
console.log(str.endsWith("great")); // Output: true

5.Replace Content:


let str = "I like JavaScript";
console.log(str.replace("like", "love")); // Output: I love JavaScript

6.Split a String:
Split into an array:

let str = "apple, banana, cherry";
console.log(str.split(", ")); // Output: ["apple", "banana", "cherry"]

7.Trim Whitespaces:

let str = "   Hello, World!   ";
console.log(str.trim()); // Output: "Hello, World!"

Summary ==>

-- Strings are a fundamental data type in JavaScript for handling text.
-- They are immutable and come with a rich set of methods for manipulation.
-- Template literals make working with strings and variables more convenient.






*/
