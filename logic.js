const numbers = document.querySelectorAll('.numbers')
const len = numbers.length

console.log(len)

const screen1 = document.getElementById('screen'); // Selects the element with id "screen"
console.log(screen1.textContent); // Outputs: Hello

const screen=document.querySelector('#screen')
console.log(screen)

let displayvalue = "";
const one = document.querySelector('#one')



function oneclick() {
displayvalue+="1";
screen.textContent=displayvalue;
}
one.addEventListener('click',oneclick);


//Traverse to do it for each button

function numberclick(value) {}
for (let i=0;i<numbers.length;i++) {
    let button = numbers[i];
    //button.addEventListener('click', numberclick())
} // Syntax of for loop is: start of loop (once), boolean condition to execute block, end (every time)
//button.addEventlistener('click', )

