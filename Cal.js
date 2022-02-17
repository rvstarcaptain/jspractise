let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
screen.addEventListener(('click'),(e)=>{
    buttons = e.target.innerText;
    console.log("button "+""+buttons+""+"is clicked");
})