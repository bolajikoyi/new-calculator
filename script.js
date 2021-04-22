let displayInput = document.querySelector('.input');
let displayResult = document.querySelector('.result');
let buttonNumbers = document.querySelectorAll('.number');
let buttonOpertors = document.querySelectorAll('.operator');

// this.btnValue;
// this.operator = undefined;
// this.inputDisplay;
// this.resultDisplay;

// this.realOperator = {
//     multiplication : 'x',
//     division: '/',
//     subtraction: '-',
//     addition: '+',
//     power: '^',
//     modulo: '%'
// }

// function multiplication(num1,num2){
//     return num1 * num2;;
// }
// function division(num1,num2){
//     return num1 / num2;
// }
// function subtraction(num1,num2){
//     return num1 - num2;
// }
// function addition(num1,num2){
//     return num1 + num2;
// }
// function power(num1,num2){
//     return Math.pow(num1,num2);
// }
// function modulo(num1,num2){
//     num1 % num2;
// }


for (let buttons of buttonNumbers){
    buttons.addEventListener('click', ()=>{
        this.btnValue = buttons.textContent;
        displayInput.textContent = displayInput.textContent + btnValue;
        this.inputDisplay = displayInput.textContent;
        console.log(this.inputDisplay);
        console.log(typeof(this.inputDisplay))
        console.log(this.operator)
    })
}


for (let buttons of buttonOpertors){
    buttons.addEventListener('click', ()=>{
        this.operator = buttons.textContent;
        console.log(this.operator)

    })
}


let clear = document.querySelector('.clear');
clear.addEventListener('click', ()=>{
    displayInput.textContent = '';
    displayResult.textContent = '';
})

let erase = document.querySelector('.erase');
erase.addEventListener('click', ()=>{
    displayInput.textContent = displayInput.textContent.substr(0, displayInput.textContent.length - 1);
    console.log(displayInput.textContent);

})
