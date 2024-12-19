/*
object literals ==>  object literals in JavaScript are a way to define objects. When you use object literals, you are essentially creating an object.

DOM manipulation

Dom is an structured representation of HTML Documents. Aldocumentlows javascript to access HTML element and style to manipulate them.
we can change the content of htm ad style of css by javascript/DOM
So it is a basically connection point between html docments and javascript code
we can use the "document.querySelector" by the the selecting the element(html document)

The root element is HTML  
HTML has two child element
(i) head
(ii) body

now head has one child element whih is "title"
inside body we have more than one child example : h1,section,p,etc.

Dom is actally not a part of javascript 
it is a part of web API's(Applicaton Programming Interface )
Api's like a laibraryes.
and with the help of javascript , browser access all the API's


## difference between innerText, innerHTML, and textContent in short and simple terms ==>

1. innerText:

-- Returns the visible text content inside an element, ignoring hidden elements or styles.
-- Takes into account the styling, such as display: none.
-- Can be affected by CSS (e.g., it won’t include text inside hidden elements).    

2. innerHTML:

-- Returns the HTML content, including tags and elements inside the element.
-- Useful when you need to get or set both text and HTML structure.
-- Can be a security risk (e.g., XSS attacks) if not handled properly.

3.textContent:

-- Returns the text content inside an element, including text from all child elements.
-- Does not consider styling or hidden elements.
-- Faster than innerText because it ignores CSS styles.

Summary:
1. innerText: Visible text (affected by styles).
2. innerHTML: Text and HTML (includes tags).
3. textContent: All text (ignores styles and hidden elements).


Note ==> In document.quaryselector() is use to do not remember different method of selecting the different element

What term are use to selecting elements

document.querySelector('.message') will give whole line of code with element

.textcontent is only gives the content means it will not gives the element/attribute
example ++> 

console.log(document.querySelector('.label-score').textContent);  ===> 💯 Score: 20

we can also set the content .....
Example ++>

document.querySelector('.message').textContent="correct number"

NOTE ++> use of .value in javascript DOM

The .value property in JavaScript DOM is used to get or set the value of an input element, such as a text field, a checkbox, a radio button, or a select list.
The value property contains the default value or the value that the user has entered or selected.
For example, if you have an input element with the id name, you can access its value by using document.getElementById('name').value.
You can also change its value by assigning a new value to the same property, such as 
document.getElementById('name').value = 'Alice'.
The .value property works with different types of input elements, but it may have different meanings depending on the type.


Handling click element in javascript


Handling click element in JavaScript means to perform some action when the user clicks on an HTML element.
There are different ways to handle click events in JavaScript, such as using the onclick attribute, the onclick property, or the addEventListener() method.
Here are some examples of each method:

(i) Using the onclick attribute:
    You can add the onclick attribute to any HTML element and assign a JavaScript function to it. For example, 
<button onclick="alert('Hello')">Click Me</    button>
    will display an alert message when the button is clicked.
Example ++>

<button onclick="alert('get result !!')" class="btn check">Check!</button>


(ii) Using the onclick property:
    You can also access the onclick property of any HTML element using JavaScript and assign a function to it.
For example,
    document.getElementById('myBtn').onclick = function() {alert('Hello')};
will do the same as the previous example, but using the element’s id instead of the attribute.

Example ++>
document.querySelector('.check').onClick=function(){
    document.body.style.backgroundColor="red"
}

(iii) Using the addEventListener() method:
    You can use the addEventListener() method to attach an event listener to any HTML element and specify the type of event and the function to execute.
For example,
    document.getElementById('myBtn').addEventListener('click', function() {alert('Hello')});
will also do the same as the previous examples, but using a more flexible and modern approach.
Example ++>


document.querySelector('.check').addEventListener('click', function() {
    let color = prompt("Choose color either 'green' or 'red'");
    
    if (color === 'green') {
        document.body.style.backgroundColor = "green";
    } else if (color === 'red') {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "black"; // set your default color
    }
});


Note ==> difference between onclick and addEventListener 


-- onclick: Replaces any existing click handler.
-- addEventListener: Allows multiple click handlers on the same element.

NOTE ++> in "addEventListener" for click functionality use "click" mode and for by functionality(second method) use 'onclick' for perform 'click' event

Example ++>
Write a program that when we clicke on 'check' button at that time whateven numer is in input type will print in console...

Solution ++>

document.querySelector('.guess').value=22;
document.querySelector('.check').addEventListener('click',function(){
    console.log(document.querySelector('.guess').value);
})


Math.trunc()

is used to truncate the decimal part of the variable number, resulting in 3 as the output. Note that Math.trunc() does not round the number; it simply removes everything after the decimal point.

Example ++>
let number = 3.14159;
let truncatedNumber = Math.trunc(number);

console.log(truncatedNumber);  // Output: 3

Note ==>  to use classList and add a new class, you need to first select the element using at least one class name, id, or other selector.

dom manupulation is also dne by css style.

as we show in project "Model Window"
initially the class "hide" is add and we gives display:hide() in css property.
so by default that html code block is hidden.
when we remove that hidden class then the Html code and css property activated.
by remove function we can remove the class 
and 
by add function we can add the class
for removing ad adding the class we need another class(class_name) which is present from same attribute .
Example ++>

HTML CODE ===>
<div class="modal hidden"></div>

CSS CODE ===>
.hidden{
    display:hide()
}

JAVASCRIPT CODE ===>
by default the code (block of html and css) is hide

so if we want to remove it then ,
modal.classList.remove('hidden')

for add the functionality of hidden class ,
modal.classList.add('hidden)

here the classList is use because we are work with class

if we want to add / remove multiple class then we use classList
Example ++>
modal.classList.add('yug','jay','bhumi')
modal.classList.remove('yug','jay','bhumi')

## Attribute manipulation ==>

-- it refers to getting or changing the values of an element's attributes (like src, href, id, etc.) using JavaScript. Here's how it works:

1.Getting an Attribute:
Use getAttribute() to get the value of an attribute.

let srcValue = element.getAttribute('src');

2. Setting an Attribute:
Use setAttribute() to set or change the value of an attribute.

element.setAttribute('src', 'new-image.jpg');

3. Removing an Attribute:
Use removeAttribute() to remove an attribute from an element.

element.removeAttribute('src');

Ex:
let img = document.querySelector('img');
img.setAttribute('alt', 'A beautiful scenery');
console.log(img.getAttribute('alt'));  // Output: A beautiful scenery

## style attribute ==>

as we are seen over here if we want to select multiple item then we use querySelectorAll and to apply style in all them so we use the loop.
Example ==>
    
let links= document.querySelectorAll(".box a")
for (const link of links) {
    link.style.color="purple"
}

## classList proerty ==>
The classList property is used to work with the classes of an HTML element easily. It allows you to add, remove, toggle, or check classes without modifying the entire class attribute.

# Key Methods of classList:

1. add(): Adds a new class to the element.
element.classList.add("new-class");

2.remove(): Removes a specific class from the element.
element.classList.remove("old-class");

3.toggle(): Adds the class if it’s not there, and removes it if it is.
element.classList.toggle("highlight");

4.contains(): Checks if the element has a specific class. Returns true or false.
element.classList.contains("active"); // true or false

Example:
let box = document.querySelector('.box');

// Add a class
box.classList.add('highlight');

// Remove a class
box.classList.remove('hidden');

// Toggle a class       ==> toggle between yes or no/ add or remove.
box.classList.toggle('active');

// Check if a class exists
console.log(box.classList.contains('active')); // true or false

Note ==> we are avoid to use the setattribut because like if you are use the multiple class and they provide some style. now when you use the setAttribute then it will remove all the class and add the new one(only one). so we use the class List.


KEYPRESS EVENT ++>

it s used to,when the key which you press is print in console part then we use keypressEvent.

KEYPRESS EVENT is a global event.
and that includes addEventListner()

There are 4 event in keyboard ...
(i) key-down
(ii) key-up
(iii) key-press 

(i) key-down --> The use of keydown in JavaScript is to detect when the user presses a key on the keyboard and perform some action based on the key value or code.

example ++>

document.addEventListener('keydown',function(e){
        console.log(e);
})
here we use "e" inside the fuction and do console.log(e) so we can know that user which key pressed by console mode.
here in place of "e" we can use "a","b","c",... anything


document.addEventListener('keydown',function(e){
        console.log(e);
})
by above ocde we get ++>
output ++>

KeyboardEvent {isTrusted: true, key: 'Escape', code: 'Escape', location: 0, ctrlKey: false, …}
(this is an object)

so when we want to get the key-value which present in object thrn we use .(dot)

so we use (e.key) to only get the data of value which store by key.

Example ++>

document.addEventListener('keydown',function(e){
    console.log(e.key);
})

Another example ==>

      let btn_last = document.getElementById("#btn");
      btn_last.addEventListener("keydown", function(e) {
      console.log(e.key);
});

output ++>
a
c
v
f
h
j
shift

now we get the dairect keyName which we pressed.


Another example ==>
let btt= document.querySelector(".btt");
    btt.addEventListener("keydown", function(e){
      console.log(e.key);
      if(e.key === "Control"){
        alert("do not use copy past")
      }else if(e.key === "Alt"){
        alert("ab can not change");
      }
    })

Now what if i want to show alert when user press control + c then only pop then message not when only click on control 

Example ==> create a function where if the user use ctrl + c or ctrl + v or try to change the tab them give them two chance but then make their backgrounf to red.
let count = 0;
let body = document.querySelector("body"); // Select the body element
btt.addEventListener("keydown", function (e) {
  if ((e.ctrlKey && e.key === "c") || (e.ctrlKey && e.key === "v")) {
    alert("Do not use copy-paste!");
    count++;
  }
  else if (e.altKey && e.key === "Tab") {
    alert("Cannot change the tab");
    count++;
  } else {
    console.log(e.key);
  }
  if (count >= 2) {
    body.style.backgroundColor = "red";
  }
});

Example ==> examle of the for....in loop(iterate trough the object)


const person = {
    ok:{
    name: 'Yug',
    address: {
      street: 'Main St',
      city: 'Vadodara'
    },
    hobbies: ['reading', 'coding']
    }
    
  };

for (const key in person) {
    if (key=="ok") {
        console.log(person[key].name);  //Yug
    }
}

// add one more functionaly that if user press 'Escape' button then close the modal.
document.addEventListener('keydown',function(e){
    console.log(e.key);     // to detect(which key presses)

    if (e.key === 'Escape'){
        if(!modal.classList.contains('hidden')){    //it stats that if the model does not contains "hidden" class then "addHideFunction()" function call.. 
            addHideFunction()    //calling function for remove the modal
        }
    }
})

## navigation ==>

navigation means you can know that whoich element is the parent/ child/ sibling of the current element.

(i)parentElement --> parentElement returns the parent element of the current element.
(ii)children --> it willl returns all children element of the current element.
(iii)previousElementSibling/ nextElementSibling --> previousElementSibling returns the previous sibling element of the current element.

Example ==>

let h2= document.querySelector('.box')
h2.parentElement
// or
h2.children
// or 
h2.nextElementSibling

-- "childElementCount" sis use to get how many number of the child element of the current element.

## create element ==>

-- to create the new element we use the document.createElement()
-- This creates a new HTML element (but doesn’t add it to the page yet).

Examplr ==> let newDiv = document.createElement('div'); // Creates a new <div>

## insert/ add element ==>

-- These add the created element to a parent element in the DOM, making it visible on the webpage.

Example ==>
let newDiv = document.createElement('div'); // Create a new <div>
newDiv.textContent = 'Hello, World!'; // Add some text to the div

document.body.appendChild(newDiv); // Add the <div> to the <body>

==> there are different way to insert/appent the new created element.

1. appendChild
Adds only a single node (like an element or text node) to a parent(we have to decide that in which element we are inserting the created new element).

let parent = document.getElementById('parent');
let newDiv = document.createElement('div');
newDiv.textContent = 'Hello!';
parent.appendChild(newDiv);

2. append
Adds one or more elements or text to a parent.
Allows appending strings, nodes, or a mix of both.
Does not return the appended element.

let parent = document.getElementById('parent');
let newDiv = document.createElement('div');
parent.append(newDiv, 'Some text'); // Appends both the element and text

3. prepend
Similar to append, but adds content at the start of the parent (instead of the end).

let newEle= document.createElement('div')
let parent = document.quarySelector('p')
newEle.textContent="heyy there"
parent.prepend(newEle)

4. insertAdjacentElement
insertAdjacentElement in JavaScript is used to insert an element at a specific position relative to another element. It's a straightforward way to control where the new element is added in the DOM.

targetElement.insertAdjacentElement(position, newElement);

targetElement: The element you want to insert content around.
position: Where to insert the new element (see below).
newElement: The element to insert.

Ex:
let target = document.getElementById('target'); // The target element
let newDiv = document.createElement('div');    // Create a new element
newDiv.textContent = 'I am new here!';

// Insert the new element in different positions
target.insertAdjacentElement('beforebegin', newDiv); // Before the target
target.insertAdjacentElement('afterbegin', newDiv);  // Inside, at the start
target.insertAdjacentElement('beforeend', newDiv);   // Inside, at the end
target.insertAdjacentElement('afterend', newDiv);    // After the target


## Remove element ==>

it is same as appent. means we are remove the element by selecting it's parent element.

Ex:
let parent = document.getElementById('parent');
let newDiv = document.createElement('newDiv');
newDiv.textContent="heyy there !!"
parent.insertAdjacentElement('beforebegin', newDiv);    //adding element


parent.remove(newDiv); // Removes the element from the parent



DOM Events ==>

Events are signals that somethong has occured.(using inputs/ actions).

let add = document.querySelector("#description");
add.classList.add("added_class");

let btn = document.querySelector("button");
btn.onclick = function () {
  alert("Cick ok to gt to top");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

over here i select the button and create the function where when i clik on the button i go to the top of the page. 

# onmouseenter ==>

The onmouseenter event in JavaScript is triggered when the mouse pointer enters an element. It is commonly used to perform actions when the user hovers over an element, such as showing a tooltip or changing the style.

Example ==>
    
let element = document.querySelector("div");
element.addEventListener("mouseenter", function() {
  console.log("Mouse entered the element");
});


here when we hover over the button, action will be perform.

## the differrnce between addEvenlistner() and onclick() to add the event ==>
    
-- addEventListener is more flexible and allows multiple handlers.
-- onclick is simple but can only have one event handler at a time.

## This in eventListner ==>


let btn1= document.querySelector("button")

btn1.addEventListener("click", function(){
    console.log(this.innerText);
    this.style.backgroundColor="blue"
})

in this functon as we seen that we ae use the this keyword where this is refers to object means here object is "btn1."

what if i want to use the single function for multiple objects ==>


let btn1 = document.querySelector("button");
btn1.addEventListener("click", function () {
  console.log("change color");
  this.style.backgroundColor = "blue";
});

let para = document.querySelector("p");
para.addEventListener("click", function () {
  console.log("change color");
  this.style.backgroundColor = "blue";
});
let head = document.querySelector("h3");
head.addEventListener("click", function () {
  console.log("change color");
  this.style.backgroundColor = "blue";
});

Now to write above code in short where use single function multiple objects. 

Now above all object by one funxtion(Another method) ++>
function changeColor() {
  console.log("color change");
  this.style.backgroundColor = "blue";
}

let btn1 = document.querySelector("button");
btn1.addEventListener("click", changeColor )


let para = document.querySelector("p");
para.addEventListener("click", changeColor)

let head = document.querySelector("h3");
head.addEventListener("click", changeColor);


const changeColor= function(){
    console.log("color change");
    this.style.backgroundColor="blue"
}
let btn1= document.querySelector("button")
let btn2= document.querySelector("button")
btn1.addEventListener("click", changeColor)
btn2.addEventListener("click", changeColor)

## Extracting form data ==>

<form action="/action">
  <input type="text" placeholder="User name" id="user" />
  <input type="password" placeholder="Password" id="pass" />
  <button>Register</button>
</form>

      let form = document.querySelector("form");

      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        let user = document.querySelector("#user");
        let pass = document.querySelector("#pass");

        console.log(user.value);        //by this we get the user name in console
        console.log(pass.value);        //by this we get the user password in console
      });


    //   or(no matter where you select the element insode the eventlistener or outide the eventlistener.)

          let form = document.querySelector("form");
          let user = document.querySelector("#user");
         let pass = document.querySelector("#pass");

      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        console.log(user.value);
        console.log(pass.value);
      });


## Event/nested bubbling ==> 

Event bubbling means when we call/trigger the child element then parent element is also get trigger/call.
like ,
<div>
    <ul>
      <li>home</li>
      <li>about</li>
      <li>contact us</li>
    </ul>
</div>

    let div= document.querySelector('div');
    let ul = document.querySelector('ul');
    let li= document.querySelector('li');

    div.addEventListener("click", function(){
        console.log("div clicked");
    })
    ul.addEventListener("click", function(){
        console.log("ul clicked");
    })
    li.addEventListener("click", function(){
        console.log("li clicked");
    })

Not ==> so event bubbling measn when i click on div then div function get trigger that is oko, now when i click on ul then ul and div both function
get trigger,and now when i click on li then li, ul and div all these function get trigger. so we conslude that when we call/ trigger the child element then it's all parent element is also get trigger.

So, we use "event.stopPropagation()" to stop the event bubbling.like;


div.addEventListener("click", function(){
    event.stopPropagation()
    console.log("div clicked");
})
ul.addEventListener("click", function(){
    event.stopPropagation()
    console.log("ul clicked");
})
li.addEventListener("click", function(){
    event.stopPropagation()
    console.log("li clicked");
})


## create the todo list ==>

Simple way to create the todo list (add task in scren)

let inp= document.querySelector("input")
let btn= document.querySelector("button")
let ul= document.querySelector("ul")
btn.addEventListener("click", function(){
    let li= document.createElement('li')
    li.innerText= inp.value
    ul.append(li)   //we can also use "prepend" to add the task from top
})


Now we add the delete button also,


let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
btn.addEventListener("click", function () {
  let li = document.createElement("li");
  let butt = document.createElement("button");

  li.innerText = inp.value;
  butt.innerText = "Delete";

  ul.prepend(li);
  li.append(butt);

  butt.addEventListener("click", function () {
    let par = this.parentElement;
    par.remove();
  });
});



*/
