const numers =[45,4,9,16,25];
text txt="";
//forEach
numbers.forEach(myfunction);

function myfunction(value,index,array){
    txt+=value +" ";
}
console.log(txt);

#javascript array Map
const number1 = [45,4,26,25];
const number2 =number1.map(myfunction);

function myfunction(value) {
    return value*2
}
console.log(myfucntion(45));
const number1 = [45,4,26,25];
const number2 =number1.filter(myfunction);

function myfunction(value) {
    return value>18;
}
