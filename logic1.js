//Creating functionality for a calculator that isn't BODMAS.
//Very similar to an iPhone/accounting calculator


const numbers = document.querySelectorAll('.numbers')
const operators = document.querySelectorAll('.operations')
const len = numbers.length
const screen1 = document.getElementById('screen'); // Selects the element with id "screen"

let displayvalue = "";
const screen=document.querySelector('#screen')
//console.log(screen)

// function oneclick() {
// screen.textContent+="1"
// }
// one.addEventListener('click',oneclick);

//Function
function numberclick(number) {
    displayvalue+=number
    screen.textContent = displayvalue
}

//Traverse to do it for each button

for (let i=0;i<numbers.length;i++) {
    let button = numbers[i];
    let num = button.textContent.trim()
    console.log(button);
    console.log(num);
    button.addEventListener('click', ()=>{numberclick(num)});
} 

console.log(displayvalue)

