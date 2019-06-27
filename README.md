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

## 5.
```
var bar = true; 
console.log(bar + 0); 
 console.log(bar + "wyz");
 console.log(bar + true);
 console.log(bar + false);
```
## Output
 1 truewyz 2 1

## 6.
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

## 7.
```
 var fun = function fun(){  console.log(foo1 === foo1); }; 
 foo1();
 ```
 ## Output
  error;

## 8.
```
(function(){ 
var arrnum = [1,2,3];
  arrnum.sort();
 console.log(arrnum); 
 }());
 ```
## Output 
[1,2,3]


## 9.
```
var obj1 = { key1 : 1, key2: 2, key3:3 };
delete obj1.key1;
 obj1.key2= undefined; 
 obj1.key3 = null; 
 ```
## Output
  {key2: undefined, key3: null}

## further
=======

