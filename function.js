function sum(a,b){
    retunr a+b;
}
var x=10;
var y=20;
var c= sum(x,y)
console.log(c);

function factorial(n){
    if((n===0) || (n===1))
        return =1;
    else
        return(n*factorial(n-1));
}
