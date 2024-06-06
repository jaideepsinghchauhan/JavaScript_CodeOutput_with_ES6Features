# JavaScript_CodeOutput_with_ES6Features
Code and its Output along with ES6 features

## 1.
```
console.log(1); 
Promise.resolve().then(function() {
   console.log(2); 
}); 

setTimeout(function(){
   	      console.log(3); 
},0); 
console.log(4);
```
## Output 
	1
	4
	2
	3
	
## 2.
```
var test = 500; 
var result = function(){ console.log(test);
 var test = 1000;}; 
 result();
```
## Output
	undefined

## 3.
```
(function foo(){ 
 bar();
 function bar(){ abc(); console.log(typeof abc); }
 function abc(){ console.log(typeof bar);}  
 }());
```
## Output
function  function

## 4.
```
 function test() {
  console.log(foo)
  return foo; 
   foo=10; 
  function foo(){} 
  var foo = '11'; 
};
 console.log(typeof test());
```
## Output
output is function, when both function and var with same name are there then function will be returned. for ex inner function will return foo function and not num or string, because other things are still undefined.

## 5.
```
function getData(api) {
 var name = "jon"; return { then: function(fn) { fn(name); }   }; }
 
getData('www.google.com').then(function(name) { console.log(name) });
```
## Output
jon

## 6.
```
var bar = true; 
console.log(bar + 0); 
 console.log(bar + "wyz");
 console.log(bar + true);
 console.log(bar + false);
```
## Output
 1 truewyz 2 1

## 7.
```
var a =7; 
function foo(){ 
var a = 6;
 function bar() { var a = 8; alert(a); };
 bar(); 
 alert(a); }
 foo(); 
 alert(a);
 ```
 ## Output
   8 6 7

## 8.
```
 var fun = function fun(){  console.log(foo1 === foo1); }; 
 foo1();
 ```
 ## Output
  error;

## 9.
```
(function(){ 
var arrnum = [3,1,2,1,3,5,6,31,92];
  arrnum.sort();
 console.log(arrnum); 
 }());
 ```
## Output 
[1,1,2,3,3,31,5,6,92] it will not sort properly we can see 31 before 5 in the array
to sort properly we need to use arrnum.sort((num1,num2) => num1 - num2);

## 10.
```
var obj1 = { key1 : 1, key2: 2, key3:3 };
delete obj1.key1;
 obj1.key2= undefined; 
 obj1.key3 = null; 
 ```
## Output
  {key2: undefined, key3: null}

 
 ## 11.
```
var quote = "Dream , Arise Awake and Work."
var s = quote.substring(3,5);
console.log(s);
s.category="Inspiring";
console.log(s.category);
```
## Output 
  am undefined
 explanation is wrapper type uses it and assigns null to the value after use.
 s instance of string is false here.
 s is type of string though
 
## 12.
```
 sumFun(10,12);        
 var sumFun = function(a,b){
 return a+b; 
 }
 addFun(10,12);  
 function addFun(a,b){
 return a+b;
 }
 ```
## Output 
 //function hoisting wont happen for a Function expression
 
 Error as function hoisting won't support here
 
 it will give proper output
 
## 13.
```
 var StudentId = [30,10,20,5,100];
 StudentId.sort();  // it wont sort number properly , it will sort based on the string value which it converts itself to.
 ```
 
## Output 
 to properly sort we need to pass a function to itself  Ascending order
 ```
 StudentId.sort(function(num1, num2){
 return num1-num2;
 });
 ```
 
 ## 14.
```
const b = [1, 2, 3];
const f = (a, ...b) => a + b;

console.log(f(1));
 ```
 
## Output 
The answer is '1'. The trick is that due to duplicate declaration of b as variable and parameter, it gets resolved as parameter. Since we call our function only with 1 parameter – 1 + [] equals '1'. Pay attention that type of returned value is string.

 ## 15.
```
let f = (...f) => f;
console.log(f(10));

f = (...f) => f.reduce(f => f);
console.log(f(10));

function ff() {
  return arguments;
}
console.log(ff(10));

f = f => f;
console.log(f(10));
 ```
 
## Output 

Output will be [10], 10, [10], 10. The key is to understand that in case of variable and parameter names war – parameter wins. There are a few other tricks here. arguments is an object and in this case it is [10]. ...f is a way to group the rest of the function parameters into named array, in this case all the parameters are resulting into [10].

## 16.
```
var foo = 10;
bar = 3;
(function () {
  var foo = 2;
  bar = 1;
}())
bar = bar + foo;
console.log(bar);
```
## Output 
There are two tricks here. First – executing code using function scope – (function(){}()) pattern. Second – exploiting global/local scope overlap. Both foo and bar defined in global scope. Function redefines foo in local scope, so global foo is not changed, when bar gets reassigned to 1. Finally, 1 + 10 = 11.

## 17.
```
var myObj = {
	myFunction : function(){
	console.log(this == myObj);
	console.log(this == global);
	}
}
myObj.myFunction()
myObj.myFunction()

```
## Output  

true
false ( if its is called in the form obj.function "this" equals "obj" else "this" equals "global")

## 18.
```
var myObj = {
	myFunction : function(){
	  console.log(this == myObj);
		setTimeout(function(){
		  console.log(this == myObj);
		  console.log(this == global); 
		},0);
	};
}
myObj.myFunction()

```
## Output 
true false true 

## 19.
```
var myObj = {
	myFunction : function(){
	  console.log(this == myObj); 
		setTimeout(()=>{
		  console.log(this == myObj); 
		  console.log(this == global);
		},0);
	};
}
myObj.myFunction()

```
## Output 
true, true, false

## 20.
```
var myFunction = function myOtherFunction(recurse){
	if(recurse){
	myFunction(false) //OK
	mOtherFunction(false)  //OK
	}
}
myFunction(true)
myOtherFunction(true) 

```
## Output 
OK , Reference error

## 21.
```
const myObject = {}
const myFunction = () => {
	console.log(this == myObject);  
}
myFunction(); //false
myFunction.call(myObject);  //false 

```
## Output 
false false 
(call bind and apply has no effect over arrow function.)
## 22.
```
const length = 4;
const numbers = [];
for (var i = 0; i < length; i++);{
  numbers.push(i + 1);
}

numbers; // => ???

```
## Output 
Being easily overlooked, this semicolon creates a null statement. The null statement is an empty statement that does nothing.
for() increments i variable until 4. Then JavaScript enters one time the block { numbers.push(i + 1); }, pushing 4 + 1 to numbers array.
Thus numbers is [5]
## 23.
```
(click)="doSomething()"
doSomething() {
    (...)
    return false;
  }
what happens because of return false in above code
```
## Output 
Returning false calls preventDefault not stopPropagation ( but it stops any event propagation too eg: parent div click calls)

## 24.
```
const numbers = [1,2,3];
const newNumbers1 = [...numbers,4];
const newNumbers2 = [numbers,4];
console.log("New numbers 1: "+newNumbers1);
console.log("New numbers 2: "+newNumbers2);
```
## Output 
New numbers 1: [1, 2 ,3 ,4]
New numbers 2: [[1, 2, 3],4]
## 25.
```
console.log([] == [])
console.log([0] === [0])
```
## Output
false, false ( why because array has reference pointer to memory )
## 26.
```
var obj = {
a:10, b:20,
getA(){
console.log(this.a)},
getB(){
console.log(this.b)}
}

```
what will be the output of obj.getA().getB()
how to change the code to print 20 from this code "obj.getA().getB()"
## Output 
we can just return this
getA(){
console.log(this.a); return this}

## 27.
```
var obj = { name : 'Jai', age : 88, hobbies : ['Basketball', 'VolleyBall', 'Bowling'] }
var myHobbies = obj.hobbies;
obj.hobbies.push('Football');
console.log(myHobbies);
what will be the output
```
## Output 
why because array is also reference type just like objects
["Basketball", "VolleyBall", "Bowling", "Football"]
## 28.
```
var obj2 = { name : 'Jai', age : 88, hobbies : ['Basketball', 'VolleyBall', 'Bowling'] }
var myHobbies2 = obj2.hobbies.slice();
obj2.hobbies.push('Football');
console.log(myHobbies2);

```
## Output 
["Basketball", "VolleyBall", "Bowling"] : Even though array is a reference type still we are using slice method which creates a new reference pointer for this array
## 29.
```
var date = moment("2013-03-24")
var now = moment();

if (now > date) {
   // date is past
} else {
   // date is future
}

```
## Output
it's worth explaining that this works because javascript coerces objects to primitives via Object.prototype.valueOf which is overridden in the moment prototype to return an epoch timestamp as a number.
So this is similar to now.format('x') > date.format('x').

## 30.
```
Why is delete not allowed in Javascript5 strict mode
// The delete statement is still allowed in strict mode, but some particular uses of it are erroneous. It's only allowed for object properties, not simple names, and only for object properties that can be deleted.

// "use strict";

// creates the property adminName on the global scope
adminName = "xyz";

// creates the property empCount on the global scope
// Since we are using var, this is marked as non-configurable. The same is true of let and const.
var empCount = 43;

EmployeeDetails = {
  name: "xyz",
  age: 5,
  designation: "Developer"
};

// adminName is a property of the global scope.
// It can be deleted since it is created without var.
// Therefore, it is configurable.
console.log("delete adminName =", delete adminName); // returns true

// On the contrary, empCount is not configurable,
// since var was used.
console.log("delete empCount =", delete empCount); // returns false

// delete can be used to remove properties from objects
console.log("delete EmployeeDetails.name =", delete EmployeeDetails.name); // returns true

// Even when the property does not exists, it returns "true"
console.log("delete EmployeeDetails.salary =", delete EmployeeDetails.salary); // returns true

// delete does not affect built-in static properties
console.log("delete Math.PI =", delete Math.PI); // returns false

// EmployeeDetails is a property of the global scope.
// Since it defined without "var", it is marked configurable
console.log("delete EmployeeDetails =", delete EmployeeDetails); // returns true

```
## Output 
Added Console statements in the problem itself.

## 31.
How do you return an proper events array in case below:
```
getCalendarEvents(): Array<CalendarEvent> {
         var listCal:any = []
         this.getCalendarData().subscribe((listCal: any) => {
             let startDate: Date,
             endDate: Date,
             event: CalendarEvent;
             let colors: Array<Color> = [new Color(255, 55, 45, 255), new Color(199, 17, 227, 10)];
             let events: Array<CalendarEvent> = new Array<CalendarEvent>();  
	      for (let i = 1; i < listCal.length; i++) {
                  event = new CalendarEvent(listCal[i].title, new Date(listCal[i].date), new Date(listCal[i].date), false, colors[i * 10 % (listCal[i].colour.length - 1)]);
                  events.push(event);     
              }
             return events;
           }
         );    
         //return events; HERE the events has no data because I am outside the .subscribe!
    }

```
## Output 

```
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

getCalendarEvents(): Observable<Array<CalendarEvent>> {
  return this.getCalendarData().pipe(map((data: any) => {
    // Your parsing code...
    return events;
  }));
}

// or:

getCalendarEvents(): Observable<Array<CalendarEvent>> {
  const result: Subject<Array<CalendarEvent>> = new Subject<Array<CalendarEvent>>();
  this.getCalendarData().subscribe((data: any) => {
    // Your parsing code...
    result.next(events);
    result.complete();
  });
  return result;
}
```
adding this link for further context: https://stackoverflow.com/questions/46769042/subscribe-to-observable-is-returning-undefined

## 32.
Flatten an array
```
let arr = [
[1,2],
[3,4,],
[5,6,[7,8],9],
[10,11,12]
] 
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
```
## Output 
```
let arr = [
[1,2],
[3,4,],
[5,6,[7,8],9],
[10,11,12]
]
/* Alternative way 1 that works only for 1 level 2d array*/
/* let flattenedArray = [].concat(...arr) */
/* Inbuild function which works properly if passed valid depth of array*/
/* let flattenedArray = arr.flat(1) */
let flattenedArray

function customFlat(array, depth = 1) {
let result = []
		array.forEach( arr => {
   	if(Array.isArray(arr) && depth > 0){
    result.push(...customFlat(arr, depth-1))
    } else {
    result.push(arr)
    } 
    })
    return result;
}
console.log(customFlat(arr,2))
```
## 33.
write a composition polyfill function which takes these 3 functions and return a single value from right to left and in this case from bottom to top and return 23
```
function addFive(a) {
	return a+5;
}
function subtractTwo(a) {
	return a-2;
}
function multiplyFour(a) {
	return a*4
}

```
## Output 
Reduce right is just like reduce which accumulates value from right side
```
// Composition Polyfill

function addFive(a) {
console.log("addFive", a) //prints 3rd 18
	return a+5;
}
function subtractTwo(a) {
console.log("subtractTwo", a) //prints 2nd 20
	return a-2;
}
function multiplyFour(a) {
	console.log("multiplyFour ", a) // prints 1st 5
	return a*4
}

const compose = (...functions) => {
	return (args) => {
   return	functions.reduceRight((arg, fn) => fn(arg), args);
  }
}
const evaluate = compose(addFive, subtractTwo, multiplyFour)
console.log(evaluate(5))  // 23 is output

```
## 34.
```
//Sample1 ========================
function foo(o) {
  o[1] = 100;
}
var myArray = [1,2,3];
console.log(myArray);  // o/p : [1,2,3]
foo(myArray);
console.log(myArray); // o/p : [1,100,3]

//sample2 =====================================
function bar(o) {
  o = null;
}
var myArray2 = [1,2,3];
console.log(myArray2);  // o/p : [1,2,3]
bar(myArray2);
console.log(myArray2); // o/p : [1,100,3]
// upon return from bar, myArray2 is not set to null.. why so

```
## Output 
Variables pointing to arrays only ever contain references. Those references are copied.
In bar, o and myArray2 are both references to the same array. o is not a reference to the myArray2 variable.
Inside the function, you are overwriting the value of o (a reference to the array) with a new value (null).
You aren't following the reference and then assigning null to the memory space where the array exists.

## 35.

Write a function to handle singleClick and double click on same HTML button:

<button id="myButton">Click Me </button>
const button = document.getElementById("myButton");
button.addEventListener("click", handleClick);
button.addEventListener("dblclick", handleDoubleClick);

implement handleClick and handleDoubleClick such that both should not be triggered on single click or double click

## Output 
```
function handleClick(event) {
  // Clear any existing click timer before setting a new one
  clearTimeout(button.clickTimer);
  button.clickTimer = setTimeout(() => {
    console.log("Single Click!");
    button.clickTimer = null;
  }, 300);
}



function handleDoubleClick(event) {
  // Clear any existing click timer if double click occurs
  clearTimeout(button.clickTimer);
  console.log("Double Click!");
}
```

## 37.
Write a polyfills for debounce function
```
const button = document.getElementById("myButton");
button.addEventListener("click", debounce(myFun, 500));
```

## Output 
```
function debounce(func, delay) {
    let clearTimer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(clearTimer);
        clearTimer = setTimeout(() => func.apply(context, args), delay);
    }
}

function myFun(){
	console.log("debounced");
}
```

## 38.
write a polyfills for thorttling
```
const btn = document.getElementById('myButton')
btn.addEventListener('click', throttle(myFun, 2000))

function myFun() {
	console.log(" Throttle ")
}
```
## Output 
```
function throttle (callback, limit) {
    var waiting = false;                      // Initially, we're not waiting
    return function () {                      // We return a throttled function
        if (!waiting) {                       // If we're not waiting
            callback.apply(this, arguments);  // Execute users function
            waiting = true;                   // Prevent future invocations
            setTimeout(function () {          // After a period of time
                waiting = false;              // And allow future invocations
            }, limit);
        }
    }
}
```

## 39.
Just adding these links so i don't loose them
A: create a tree view/explorer in React JS
B: create a pagination in ReactJs

## Output 
A: https://youtu.be/20F_KzHPpvI?si=EIyjz9_fICRzGaaT
B: https://youtu.be/cBsB7hhOzQI?si=5hVOh1b7U0jr2cOi
Good link on ReactJs by roadside coder.

## Further questions coming up soon...


