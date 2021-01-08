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
  return foo; foo=10; 
   function foo(){} var foo = '11'; };
 Console.log(typeof test());
```
## Output
Console is not defined

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
var arrnum = [1,2,3];
  arrnum.sort();
 console.log(arrnum); 
 }());
 ```
## Output 
[1,2,3]


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


```
## Output 

## Further questions coming up soon...


