/*behind the javascript (back_process)

javascript is an high-level , interprited , multi-programmable programming language
javascript is a
                 --high-level
                 --prototype-based object oriented
                 --multi-paradigm
                 --interprited
                 --dynamic
                 --single-threaded
                 --garbeg-collector
                 --loop concurrency model

multi-paradigm means it supports more than one style of programing like, object-oriented , functional , imperative , etc.
many language is only use oop and only functionals but javascript use object-oriented , functional , imperative , etc.
multi-paradigm is use for organize the code,...
everything is object in javascript Except pimitive values (numbers , string , etc.)

prototype-based means we iherite the all propertys and behaviours from parent class.(In oop)

javascript is dynamic anguag means Modify the type or object system by adding new properties, methods, or prototypes to existing objects.

JavaScript is a single-threaded programming language, which means that it has only one main thread of execution This means that tasks are processed in order, and only one task is executed at a time.
(only one task can executeat one time)
execution of javascript code in depend on single thread and by this the code get execute in cpu.


JavaScript has a loop concurrency model, which means that it can handle multiple tasks at the same time, without blocking the main thread of execution.
(multiple operation can be performed at one time)

because javascript runs one single thread.
thread is a set of intruction that executes int computer the cpu.

---what is javascript Engine 
---what is javascript runtime 
---How javascript code translated into machie code.

javscript engine ===> A JavaScript engine is a software component that executes JavaScript code and converts it into machine-readable instructions that the computer’s hardware can execute.

(in short the the highlevel language is conerted into law-level language or machine redable language so the machine can undersatand the instruction..)

every browser has it's own javascript engine
Example ==> google V8 Engine

All javascript engine contains "call stack" and "heap"
"call stack" means where our javascript code is Executed.
The "heap" means unstructured memory pool which contains all the objects and application which need.


Difference between compiletion and interprited

Compilation and interpretation are two different ways of transforming human-readable code into machine-executable instructions.

(i) compilation
(ii) interprited

"Compilation" is the process of converting the entire source code of a program into a binary file that can be directly executed by the computer’s hardware.
(converting directly/at one time)

"Interpretation" is the process of executing the source code of a program line by line, without producing a binary file.
(converting line by line)

modern javascript is mixed of compilation and interprited.

Web API is not part of javascript programming lanngguage but it provide some functionality to javascript engine.

HOW JAVASCRIPT CODE EXECUTED....

Execution context means the data inheritance .
means the code get inherited or executed by from another class.
There is only one global execution context(for top-level code) in javascript no metter how much our code is long.

What is inside the execution context...
--- variable environent
Contains variables declared within the context, including function arguments, local variables, and variable declarations.

---Scope Chain:

Represents the hierarchical structure of the functions in the code.
Allows access to variables in outer (enclosing) scopes.

---This Binding:

Refers to the value of the this keyword within the context.
The value of this depends on how a function is called.



SCOPE AND SCOP CHAIN  +++>

scope is define that where to variable lives ? and where we can access the variable and where not??
LAXICA SCOPING ++>Scoping is the controlled by "placement" of function and and block in the code.

Scope ++> spaace or the envirenment which a certain variable is declared "or" it is a place where the all variable are declared LIKE , there is "Global scope", "function scope" and "block scope".

what is the difference b/w scope and variable environment ....
in the case of the function it's basically same 
in javascript we have three type of function which are "global scope" , "function scope/local scope" and "block scope".

Scope of variable ++> it means the region of our code where a certain variable can be accessed.
Scope ++> it means where the variable are declared.

scope is not same scope and scope variable .

in javascript we have three type of function which are "global scope" , "function scope/local scope" and "block scope".
(i) globle Scope ++>

it is a top level code.
variable can access in all function and all block.
means we can access it inside the calass , outside the class , inside the function , outside the function ,....
 Example ++> 
    
 const me ="yug"
 const job="teacher"
 const year=2000

 (ii) function scope / local scope ++>
for every function , the variable is different ....
we can not access the local scope variable / function scope variable outside the function
we can only access the variable inside thee function not outside thee function (it will given error).

Example ++>
let birthYear=prompt("Enter your bithyear ++>")
function calAge(birthYear){
    const age = 2024-birthYear
    return age;
}
console.log(calAge(birthYear));

(iii) block scope(ES6) ++>

here the variable can be accessed inside the block only.
outside the block we can not acces that variable.
The difference between block scope and fuction scope is we can only "declare the variable with let and const inside the block" where in "function scope we can declare with let,const and var".
"function also can be block scope".
Example +++>

if(year > 1990 && year <=2000){
    const age=true;
    if(age){
        console.log("you can vote.");
    }
}

in strict mode (ES6) all the function is also the block scope.

note ++> all inner function can be access the parent / outer function value.
means if i make a function called parent and declate the age in parent function then make one more function called child function inside the parent function then declarate the ageOfChild inside the child funtion . Now the age of parent which store in parent function can be access by the child function because the child function in also inside the parent function but the parent function can not be access the ageOfChild.

Example ++>

const myName="bhumi"
function first(){
    const age=33;

    if(age > 22){
        const decade=3;
        var milestone=true      // here var is the function scope(in funcope we can declate variable by let , const and var)
        // console.log(job);        we can not access the job because it is access in child (below) function.
    }

    function second(){
        const job="student";
        console.log(`${myName} is my name and i am getting ${age} years old. My profession is ${job}`);
    }
    second()
}
first()
outPut ++> bhumi is my name and i am getting 33 years old. My profession is student

inshort the second scope can access the variabe which are store in first scope(because it is a parent scope) called "lexical scope."
so it calleed "scope chain"
scope is only "works upward" means
 if i make a function called parent and declate the age in parent function then make one more function called child function inside the parent function then declarate the ageOfChild inside the child funtion . Now the age of parent which store in parent function can be access by the child function because the child function in also inside the parent function but the parent function can not be access the ageOfChild this is called "lexical scope".

conclusion ++> upper function can not access the value of variable where lower function can be access the value of variable of uppper/parent function.

Scope of variable ++> it means the region of our code where a certain variable can be accessed.
Scope ++> it means where the variable are declared.

"What is difference between scope chain and call stack"

call stack is used for invoking an function because the function are stored in call stack.
where in block chain all the functions are connected with each other like (oop inheritance) where lower function cansccess the value of variable which declare in upper function but the upperfunction can not access the value of variable which store in lower function.
there are three types of block chain which are (i) global scope (ii) local / function scope (iii) block scope(ES6)

const a = "yug";
first();                                //here the javascript code is not act as interprited but here it is work as compiler because if it is act as interprited then we are call the function before making it so output is not getting . but here it copile whole code at one tile so we get output. 
function first(){
    const b="bhumi ";
    second();

    function second(){
        const c=" hello"
        // console.log(d);  it can not access because d is declare in lower / child function
        third();

        function third(){
            const d=" pancham"
            console.log(a+b+c+d);
        }
    }
}

output ++> yugbhumi  hello pancham

NOTE ===>
"
In block scope the function never even access the value of varibale which store in inner function/scope.it can only access the value of variable which store inn outer function/scope
"

Note ==>
the variable which declare outside the fuction acn be access by the insider function that called lexical scope.

function name() {

    function calAge() {
        let birthYear = 2000;
        const age = 2024 - birthYear;
        console.log(firstName); // 'firstName' is not defined here
        return age;
    }

    const firstName = "bhumi"; // Declare 'firstName' before calling 'calAge'
    console.log(calAge());

    function yug() {
        console.log("Happy new Year !!");
        console.log(firstName);
    }

    yug();
}

name();

Another Example ++>

function calAge(birthYear){
    const age=2024-birthYear

    function printAge(){
        const utput=`${firstName} ,you are ${age} years old , born in ${birthYear}`
        console.log(utput);

        if(birthYear >= 1981 && birthYear <= 1996){
            const str=`oh you are an millionar ${firstName}`
            console.log(str);
        } 
        function add(a,b){
            return a+b
        }
        console.log(add(2,3));
    }
    printAge();
}
const firstName='jonas'
calAge(1988)

//console.log(age);   // we are not abole to access "age" value.

WHAT IS AN HOISTING +++>
hoisting is ansome type of an variable / usable in the code before they are actually declared.
means access the value/content of the variable before they are declared.

Therefore, if you try to use a variable or a function that is not initialized or assigned yet, you will get an undefined value or a reference error.

console.log(x); // undefined
var x = 10;
console.log(x); // 10

VARIABLE are defined by function , let , const , var , etc.

the function declaration of sayHello is hoisted to the top of the global scope, along with its body. Therefore, the function can be called before it is defined in the code.
Example +++>

sayHello(); // Hello
function sayHello() {
  console.log("Hello");
}

"Function declaration" , we can access the function before the declaration of it. 
"var variable" , when variable declared with var then also hoisted but it gives "undefined" value. thats why wwe are not use var in modern javascript(one of the reson)
"let and const variable " , when variable declared with let and const then we try to access it before the declaration then it will gives an error.
"functional expression and arrow" , when it depends that it is created using var , const or let . because this functon is also simple variable.

Example ++>

sayHi(); // TypeError: sayHi is not a function
var sayHi = function() {
  console.log("Hi");
};

"the creater of hoisting in javascript is make this concept to access the functionality/value of variable before the declaration"

Examples +++>

console.log(me);        //undefined
console.log(job);      //can not get before initilization
console.log(year);     //can not get before initilization
var me="yug"
let job="teacher"
const year=2000


EXAMPLE ===>

var me="yug"
let job="teacher"
const year="1997"

console.log(abcDec(2,3));   //5
function abcDec(a,b){
    return a+b
}
console.log(addExp);    //error because,...
const addExp = function(a,b){   //it is declare with const so we can not access before the declaration
    return a+b
}

console.log(addArray(2,2)); //error because
var addArray=(a,b)=>{   //it is declare with var so we can not access before the declaration
    return a+b
}


"by only function declaration we can use (call) the code/get data before the declaration"
inshort hoisting is only done by function declaration

deleteFunctionCart();
function deleteFunctionCart(){
    console.log("All delete product");
} ===> All delete product

NOTE +++> by function declaration we can access the data of function(allow to hoisting)

NOTE +++>  

always use the function declaration means try to write all codes in function declaration so we can access all the variable


THIS KEYWORD +++> it is refers to an Object that is executing the current piece of the code.

The global object, when the function is called in the global scope or in non-strict mode.
generally the this keywod is use to access the value of variable inside the function where the function and that variable is present in same object

The this keyword in JavaScript is used to refer to the object that is currently executing the function.
"this keyword is point to the owner of the function"


Example +++>

const yug={
    'name':"yug",
    'year':2005,
    calAge :function(){
        return 2024-this.year
    }
}
console.log(yug.calAge());  //19

as we show in above example the function and the variable is present in same object.
now if i want to access the data of variable then i use this.(variable name) so we can access it


Note +++>

Arrow functions do not have their own "this keyword", but they can still access the this value of their enclosing scope.
For example, if an arrow function is defined inside another function or an object, it can use the this keyword of that function or object.

we can also access the value of other function in second function where both the function are in same object

it means let uderstood by example ==>
let person = {
  name: "John",
  age: 30,
  
  // First method to return the name
  getName: function() {
    return this.name;
  },
  
  // Second method that uses the result from getName()
  greet: function() {
    console.log("Hello, my name is " + this.getName() + " and I am " + this.age + " years old.");
  }
};

// Calling the greet method, which accesses the value from getName
person.greet();  
// Output: Hello, my name is John and I am 30 years old.

getName(): This method returns the name property of the object.
greet(): This method uses this.getName() to call the getName() method and access the value of name. It also accesses the age directly from the object.
Both methods (getName() and greet()) belong to the same object (person), so they can share the this context and access each other’s properties and methods.


but before it we have to make some empty/o valued variable like we declare a empty list when we want to add the element in that list.

example +++> 

let info = {
    name: "yug",
    year: 2024 - 2005,
    total_kharcha: 0,
    pani: 0,
    wow:0,    //the value is updated (0 is default value)
    kaku: function () {
        this.total_kharcha = 20202020;
        this.pani = 90;
    },
    calAge: function () {
        return {
            name: this.name,
            year: this.year,
            total_kharcha: this.total_kharcha,
            pani: this.pani,
            wow:this.total_kharcha+this.pani
        };
    }
};

info.kaku();
console.log(info.calAge());

Example of This keyword ===>

console.log(this);  //{}


EXAMPLE ++++>


let birthYear=2005
const calAge=()=>{    
    return 2024-birthYear
}
console.log(calAge());

here birthYear is in global scope .. so we can access the value of it by this keyword.

This keyword inside the method

console.log(jonas.calAge());
====> 24 

const jonas = {
    'year': 2000,
    'calAge': function () {
        console.log(2024 - this.year);
    }
};
const yug = {
    'year': 2020
};
yug.calAge = jonas.calAge;
yug.calAge();       //4
jonas.calAge()      //24

const f = jonas.calAge()    //24
console.log(f); //undefined

Regular function v/s Arrow function ++++++>

In arrow function has no it's own tis keyword means we can access the value of variable if the variable is in global Scope means it declare in global scope .
but when we write an arrow function inside the method then we can not access the value of variable which store in method from Arrow function  
Example ++++>

const jonas={
    'firstName':'yug',
    'year':2005,
    calAge1:function(){
        console.log(2024-this.year);
    },
    calAge2:()=>{
        console.log(2024-this.year);
    }
}
jonas.calAge1()     //19
jonas.calAge2()     //NaN    because we access the value by this keyword in arrow function only access when we have function declaration


PRIMITIVES VS OBJECTS +++++>


let age=30
let oldAge=age
age=31

console.log(age);
console.log(oldAge);

const me = {
    'name':'jonas',
    'age':22
};
const friend=me
friend.age=10;
console.log('Friend',friend);   //Friend { name: 'jonas', age: 22 }
console.log('me',me);   // me { name: 'jonas', age: 22 }

primitives +++++> BBNNSSU
Boolean
BigInt
Number
null
String
Symbol
undefined


in javascript engine we have 'call stack' and 'Heap'
all objects are stored in memory heap.
primitives and primitives type are stored in "call stack"

Note ==>
-- The heap is used for dynamic, complex data structures like objects, arrays, and functions themselves (the function body or definition).
-- Objects and arrays are typically stored in the heap because their size can vary and they can hold complex data.
-- When a function is called, it gets added to the stack. When the function exits, the memory used by it is removed from the stack.

Ther is no specific order in object.

## Methods ==>

When function is defined inside the object is called method.
Example ==>

const calc = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
};

console.log(calc.add(3,4)); 
console.log(calc.sub(3,4)); 
console.log(calc.mul(3,4)); 

we can also write this without funcion keyword like,

const calc = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
};
console.log(calc.add(3, 4));
console.log(calc.sub(3, 4));
console.log(calc.mul(3, 4));


Exercise ==> print the unique char from str.


str = "abcabddkgabdjs";
ans = "";
for (let i = 0; i < str.length; i++) {
  if (ans.includes(str[i])) {
    continue;
  } else {
    ans += str[i];
  }
}
console.log(ans);   //abcdkgjs


Exercise ==> write the largest country name from the string array

const country= ["aus",'can','london','germany']
let max = country[0];
for (let i = 1; i < country.length; i++) {
    if (country[i].length > max.length) {
        max= country[i];
    }
}
console.log(max);   //germany

Exercise ==> write the function to count the volvous in the string.


let countvol= function(){
    let str= "abcdaei".trim();
    let count = 0;
    for(let i in str){
        if(str[i] === 'a' || str[i] ==='e' || str[i] ==='i'|| str[i] ==='o'|| str[i] ==='u'){
            count++;
    }
    }
    return count;
}
console.log(countvol()); //4

Exercise ==> write the function to generate random number where you choose your start and end range.

let ran = function (start, end) {
  let num = Math.floor(Math.random() * (end - start + 1) + start);
  console.log(num);
};
ran(20,25)


## Try and Catch ==>
In JavaScript, try and catch are used to handle errors in code.

-- try block: Code that might throw an error is placed inside the try block.
-- catch block: If an error occurs, it jumps to the catch block, where the error is handled.
-- finally block: This block is optional and is used to execute code regardless of whether an error occurred or not.


try {
    // Code that may throw an error
    let result = 10 / a; // 'a' is not defined, so this will cause an error
  } catch (error) {
    // Handle the error
    console.log("An error occurred:", error.message);
  }
//An error occurred: a is not defined

## set timeout ==>
The setTimeout function in JavaScript is used to delay the execution of a function or code by a specified time.
The setTimeout function takes two parameters: the function to be executed and the time in milliseconds to wait before executing the function.

Example ==>

console.log("first");
setTimeout(() => {
  console.log("hello");     //exeuted this after 2 sec.
}, 2000);
console.log("last");

Note ==> setTimeout is considered an asynchronous function in JavaScript.

# differnece between Synchronous and Asynchronous function ==>

Synchronous Function:
--Executes one after another.
--Blocks the next task until the current one is finished.
Example ==>
    
console.log("Start");
console.log("Middle");
console.log("End");

Asynchronous Function:
-- Executes without blocking the next task.
-- Can run in the background and continue with other code while waiting.

Example ==>
console.log("Start");

setTimeout(() => {
  console.log("Delayed task");
}, 2000);

console.log("End");


Summary ==>

Synchronous: Tasks happen in order, one after another.
Asynchronous: Tasks can happen out of order, allowing other tasks to run while waiting.

## setInterval function ==>

The setInterval function in JavaScript is used to repeat a task at a specified interval (in milliseconds).

Function to execute repeatedly.
Time (in milliseconds) to wait between each execution.

The setInterval function takes two parameters: the function to be executed and the time in milliseconds to wait before executing the function.
The function will continue to be executed until clearInterval is called.

Example ==>
console.log("first");
setInterval(() => {
  console.log("hello");         //going to executed infinite time at each 2 sec.
}, 2000);
console.log("last");

-- It will keep running until you stop it manually using clearInterval().

let id1 = setInterval(() => {
  console.log("hello world");
}, 2000);

setTimeout(()=>{
    clearInterval(id1)
},6000)


By this manner we are stop the setInterval() at some specific time.

## This in function and arrow function ==>

this keyword behaves differently in these arrow and simple function.

-- In simple functions, this refers to the global object (or the object calling the function).
-- In arrow functions, this refers to the parent scope (lexical scope).

Exmaple ==>


const student = {
  name: "jonas",
  marks: 33,
  getName: function () {
    return this.name  //global scope
  },
  getMarks: () => {
    return this.marks //parent scope window
  },
  getInfo: function () {
    setTimeout(() => {
      console.log(this.name);   //student
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(){
      console.log(this.name);   //window
    });
  },
};
console.log(student);

// student.getInfo(); //student
// student.getInfo2(); //window

## write the arrow function to do the square of the number ==>

const square = (n) => n * n;
console.log(square(4));

## write a cde to print "hello world" 5 time at each 1 sec. then close.

let id = setInterval(() => {
  console.log("hello world");
}, 2000);

setTimeout(() => {
  clearInterval(id);
  console.log("clear interval");
}, 11000);

or we can also save them in function..

const item= function(){
  let id = setInterval(() => {
    console.log("hello world");
  }, 2000);
  
  setTimeout(() => {
    clearInterval(id);
    console.log("clear interval");
  }, 11000);
  
}
item()

## setTimeout:

Executes a function once after a specified time (in milliseconds).

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000); // Executes after 2000ms (2 seconds)


2.setInterval:

Repeatedly executes a function at regular intervals after the specified time.

setInterval(() => {
  console.log("Hello every 2 seconds");
}, 2000); // Executes every 2000ms (2 seconds)


3. clearTimeout():

Stops a specific timeout set by setTimeout().
Used when you want to cancel a delayed function.
Example:

let timer = setTimeout(() => console.log("Hello"), 3000);
clearTimeout(timer); // Cancels the timeout, "Hello" will not be logged.


4. clearInterval():

Stops a specific interval set by setInterval().
Used when you want to stop a repeated function.
Example:

let interval = setInterval(() => console.log("Hello"), 1000);
clearInterval(interval); // Stops the repeated logging.

Summary ==>
clearTimeout cancels a single delayed action.
clearInterval cancels a repeatedly running action.









*/


