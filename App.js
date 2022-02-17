let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenvalue = "";
for(item of buttons){
    item.addEventListner('click',(e)=>{
        let buttontext = e.target.innerText;
        console.log("button text is" , buttontext);
    })
}