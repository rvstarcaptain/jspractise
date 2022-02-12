
// const users = [{firstname : "rahul" ,lastname: "verma",age :28},
              
//                {firstname:"Donald",lastname:"trump",age :50},
//                {firstname:"elon",lastname:"musk",age:75},
//                {firstname:"hrtittik",lastname:"roshan",age:29},
//               ];
// undefined
// //reduce
// const reducefunc = users.reduce(function(acc,ele){
//     if(acc[ele.age]) {
//         acc[ele.age] = ++acc[ele.age];
        
//     }else {
//         acc[ele.age] =1 ;
//     }
        
// },{})

// const filterandmap = users.filter(x => x.age<30).map(x => x.firstname);
// undefined
// filterandmap
// (2) ['rahul', 'hrtittik']

// const reducefiltermap = users.reduce(function(acc,ele){
//     if(ele.age<30){
//         acc = [...acc,ele.firstname];
//     }
//     return acc;
// },[]);
// undefined
// reducefiltermap
// (2) ['rahul', 'hrtittik']
// whenever execution is created
// lexical enviroment is the local memory along with the lexical enivirment with its parent

// 1.reference error => a.it is a type of error where variable is initialize but it is being called before the initializeing anddeclaring 
                        // b. when variable is called before declaring like  console.log(b) where b is still not declared..
// 2.syntax error => it is type of erorwhere declaration of same variable is happening with diff value like let a= 100,let a = 200; 
// 3.type error => it is type of error where the error occured with type variable like const can has to be initialize at tym of declaration.


// block Scope 
// block is represent by curly brases{} 
// where multiple statement can run where js expects single statement


// let and const gets saved in script scope without function 
// but with funciton it gets saved in block scope 
// var has a global scope in both funciton and outside the funciton but when same var with same variable 
// having different value will be called with console only the 
// var with variable inside the function will get call not the one var with outsaide the fucntion so 
// here var inside funciton will effect as shadow over global var this is why var is functional scope.
// var a = 100;
// let b = 200;
// const c = 300;

// {
//     var a = 10;
//     let b = 20;
//     const d = 30;
//     console.log(a); = 10
//     console.log(b); = 20
//     console.log(c); = 30
// }
// console.log(a); = 10 
// console.log(b); = 200
// console.log(c); = 300

// closure function is a fucntion along with its lexical scope forms a closure

// arr = [1,1,2,3,5,4,3,5]
// const output = arr.filter((ele)=>{
//     let count = 0;
//     for (i=0;i<arr.length;i++){
//         if(arr[i] == ele){
//             count++ ;
    
//         }
        
        

//     }
//     return count == 1;
   
// })
// console.log(output);
//  [2, 4]

// function setcount(){
//     for(let i=1;i<=6;i++){
//         setTimeout(function(){
//             console.log(i );
//         },i*1000);
//     }
//     console.log("namastey")
// }
// console.log(setcount());
// VM606:7 namastey
// VM606:9 undefined
// undefined
// VM606:4 1
// VM606:4 2
// VM606:4 3
// VM606:4 4
// VM606:4 5
// VM606:4 6


// function outermost(){
//     var c = "i am first one"; 
//     function outer(b){
//         var a=10;
//         function inner(){
//             console.log(a,b,c);
//         }
        
//         return inner;
//     }
//     return outer;

// }

// var closer = outermost()("i am the outer function");

// ADAVNTAGES OF CLOSURE
// 1.MODULE CanvasPattern
// 2.FUNCTION CURRYING
// 3.HIGH ORDER FUNCTION -MediaStreamAudioSourceNode,onse.
// 4.DATA HIDING AND ENCAPSULATION.

// example of data hiding and encapsulation with closure and comstructor function.

// function counter(){
//     count =0;
//     this.increment = function(){
//         count++;
//         console.log(count);
//     }
//     this.decremenet = function(){
//         count--;
//         console.log(count);
//     }
// }

// counter1.increment();

// undefined
// counter1.decremenet();


// disadvantge of closure
// overconsumption of memory 
// sometimes closed over variable aree not garbage collected till the program expires
// if not handeled prperly memory cud leaks

// garbage collecter a program which fridge the unutilised memory
// relation bet garbage collectr and closure


// anonymous function -> whihc has no name is called anonymous function

// first class function?

// diff between function statement vs function statement vs function declaration?

// function statement => like a normal func
// function a(){
//     console.log("a is called");
// }

// mazor diff is hoisting//
// functionexpression(acts like a value)
// let myexprssfunc = function(){

//     console.log("b is called");
// }


// function declaration.


// browser has local storage
// URL
// Timer 
// UI 
// access to bluetooth wifi Etc 
// to access windows we need web Api 
// 1.setTimeout
// 2.dom api 
// 3.fetch
// 4.localStorage 
// 5.console 
// 6.location
// eveent loop continously monitor call stack and callback quiew
// if call stack empty and que is waiting then 
// event loop push the code of queue in call stack.Api
// why do we need callback queue ?
// for event  loop to maintain the syn program s that it cannot clash with stack perfrmance bcs as soo browser fullfill its task it needs to pass somwhere

// what microtask queue?
// microtask queue for higher priority then call stack queue
// so if browser done itstask first it will go to micro stack
// promises and mutation oobserver get through microtask queue. 

//  js engine 

// code 
//   |
// parshing 
//   |
// compilation
//   |
// execution

// code= brokendown into token let, a, =,

// syntax parser = take the code covert into asserts(abstract syntax tree)
//  AST=tree like structure const bestJSource = "namastey jsvsdcript" 

//  ast pass to compilstion phase
//  astexplorer.net

//  JIT compilation
//  interpretor to convert for machine to understand. 
//    |
// compiler => optimised version of code. 
// pros and cons 
// interpretor fast immitid start execute 

// in compiler more effiecinency 
// in interpretor it is fast 

// js is both as per the js engine  . 

// just in time compilation => both interpretor and compilation 
// byte code goes to execution 
// compiler tries to optimse the code in multiple fhases as runtime 

// ahead of timecompilation 
// fir compiler to optimise for time based code and topoptmised 

// execution => memory heap and call stack 


 










// const users = [{firstname : "rahul" ,lastname: "verma",age :28},
              
//                {firstname:"Donald",lastname:"trump",age :50},
//                {firstname:"elon",lastname:"musk",age:75},
//                {firstname:"hrtittik",lastname:"roshan",age:29},
//               ];
// undefined
// //reduce
// const reducefunc = users.reduce(function(acc,ele){
//     if(acc[ele.age]) {
//         acc[ele.age] = ++acc[ele.age];
        
//     }else {
//         acc[ele.age] =1 ;
//     }
        
// },{})

// const filterandmap = users.filter(x => x.age<30).map(x => x.firstname);
// undefined
// filterandmap
// (2) ['rahul', 'hrtittik']

// const reducefiltermap = users.reduce(function(acc,ele){
//     if(ele.age<30){
//         acc = [...acc,ele.firstname];
//     }
//     return acc;
// },[]);
// undefined
// reducefiltermap
// (2) ['rahul', 'hrtittik']
// whenever execution is created
// lexical enviroment is the local memory along with the lexical enivirment with its parent

// 1.reference error => a.it is a type of error where variable is initialize but it is being called before the initializeing anddeclaring 
                        // b. when variable is called before declaring like  console.log(b) where b is still not declared..
// 2.syntax error => it is type of erorwhere declaration of same variable is happening with diff value like let a= 100,let a = 200; 
// 3.type error => it is type of error where the error occured with type variable like const can has to be initialize at tym of declaration.


// block Scope 
// block is represent by curly brases{} 
// where multiple statement can run where js expects single statement


// let and const gets saved in script scope without function 
// but with funciton it gets saved in block scope 
// var has a global scope in both funciton and outside the funciton but when same var with same variable 
// having different value will be called with console only the 
// var with variable inside the function will get call not the one var with outsaide the fucntion so 
// here var inside funciton will effect as shadow over global var this is why var is functional scope.
// var a = 100;
// let b = 200;
// const c = 300;

// {
//     var a = 10;
//     let b = 20;
//     const d = 30;
//     console.log(a); = 10
//     console.log(b); = 20
//     console.log(c); = 30
// }
// console.log(a); = 10 
// console.log(b); = 200
// console.log(c); = 300

// closure function is a fucntion along with its lexical scope forms a closure

// arr = [1,1,2,3,5,4,3,5]
// const output = arr.filter((ele)=>{
//     let count = 0;
//     for (i=0;i<arr.length;i++){
//         if(arr[i] == ele){
//             count++ ;
    
//         }
        
        

//     }
//     return count == 1;
   
// })
// console.log(output);
//  [2, 4]

// function setcount(){
//     for(let i=1;i<=6;i++){
//         setTimeout(function(){
//             console.log(i );
//         },i*1000);
//     }
//     console.log("namastey")
// }
// console.log(setcount());
// VM606:7 namastey
// VM606:9 undefined
// undefined
// VM606:4 1
// VM606:4 2
// VM606:4 3
// VM606:4 4
// VM606:4 5
// VM606:4 6


// function outermost(){
//     var c = "i am first one"; 
//     function outer(b){
//         var a=10;
//         function inner(){
//             console.log(a,b,c);
//         }
        
//         return inner;
//     }
//     return outer;

// }

// var closer = outermost()("i am the outer function");

// ADAVNTAGES OF CLOSURE
// 1.MODULE CanvasPattern
// 2.FUNCTION CURRYING
// 3.HIGH ORDER FUNCTION -MediaStreamAudioSourceNode,onse.
// 4.DATA HIDING AND ENCAPSULATION.

// example of data hiding and encapsulation with closure and comstructor function.

// function counter(){
//     count =0;
//     this.increment = function(){
//         count++;
//         console.log(count);
//     }
//     this.decremenet = function(){
//         count--;
//         console.log(count);
//     }
// }

// counter1.increment();

// undefined
// counter1.decremenet();


// disadvantge of closure
// overconsumption of memory 
// sometimes closed over variable aree not garbage collected till the program expires
// if not handeled prperly memory cud leaks

// garbage collecter a program which fridge the unutilised memory
// relation bet garbage collectr and closure


// anonymous function -> whihc has no name is called anonymous function

// first class function?

// diff between function statement vs function statement vs function declaration?

// function statement => like a normal func
// function a(){
//     console.log("a is called");
// }

// mazor diff is hoisting//
// functionexpression(acts like a value)
// let myexprssfunc = function(){

//     console.log("b is called");
// }


// function declaration.


// browser has local storage
// URL
// Timer 
// UI 
// access to bluetooth wifi Etc 
// to access windows we need web Api 
// 1.setTimeout
// 2.dom api 
// 3.fetch
// 4.localStorage 
// 5.console 
// 6.location
// eveent loop continously monitor call stack and callback quiew
// if call stack empty and que is waiting then 
// event loop push the code of queue in call stack.Api
// why do we need callback queue ?
// for event  loop to maintain the syn program s that it cannot clash with stack perfrmance bcs as soo browser fullfill its task it needs to pass somwhere

// what microtask queue?
// microtask queue for higher priority then call stack queue
// so if browser done itstask first it will go to micro stack
// promises and mutation oobserver get through microtask queue. 

//  js engine 

// code 
//   |
// parshing 
//   |
// compilation
//   |
// execution

// code= brokendown into token let, a, =,

// syntax parser = take the code covert into asserts(abstract syntax tree)
//  AST=tree like structure const bestJSource = "namastey jsvsdcript" 

//  ast pass to compilstion phase
//  astexplorer.net

//  JIT compilation
//  interpretor to convert for machine to understand. 
//    |
// compiler => optimised version of code. 
// pros and cons 
// interpretor fast immitid start execute 

// in compiler more effiecinency 
// in interpretor it is fast 

// js is both as per the js engine  . 

// just in time compilation => both interpretor and compilation 
// byte code goes to execution 
// compiler tries to optimse the code in multiple fhases as runtime 

// ahead of timecompilation 
// fir compiler to optimise for time based code and topoptmised 

// execution => memory heap and call stack
// console.log("start");
// setTimeout(function cb(){
//     console.log("take me last")
// },5000);
// console.log("end");

// let startdate = new Date().getTime();
// let enddate = startdate;
// while(enddate < startdate + 10000){
//     enddate = new Date().getTime();
    
// }
// console.log("take me before settime");
//concurency model 
//blocking main thread.




for


 










