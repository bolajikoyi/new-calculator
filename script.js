let displayInput = document.querySelector('.input');
let displayResult = document.querySelector('.result');
let buttonNumbers = document.querySelectorAll('.number');
let buttonOpertors = document.querySelectorAll('.operator');
let pie = Math.PI;
let LogE = Math.E;
// let ln = 1 / LogE;
// let Lg = Math.log10;
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


for (let buttons of buttonNumbers) {
    buttons.addEventListener('click', () => {
        if (buttons.textContent === '.' && displayInput.textContent.includes('.')) return
        else {
            if (displayInput.textContent.length >= 27 || displayResult.textContent.length >= 27) return

            else {
                this.btnValue = buttons.textContent;
                displayInput.textContent = displayInput.textContent + btnValue;
                this.inputDisplay = displayInput.textContent;
                console.log(this.inputDisplay);
                console.log(typeof(this.inputDisplay))
                console.log(this.operator)
            }

        }

    })
}


for (let buttons of buttonOpertors) {
    buttons.addEventListener('click', () => {
        console.dir(buttons.textContent)
        this.operator = buttons.value;
        console.log(displayInput.textContent)
        displayInput.textContent = displayInput.textContent + this.operator;
        console.log(buttons.value)

        console.log(this.operator)



    })
}


// let log = document.querySelector('.log');
// log.addEventListener('click', () => {
//     displayInput.textContent = 'log'
//     '('
//     displayInput.textContent ')
//     ';
// })

let frst = document.querySelector('.frst');
frst.addEventListener('click', () => {
    displayInput.textContent = displayInput.textContent + '(';

})

let scnd = document.querySelector('.scnd');
scnd.addEventListener('click', () => {
    displayInput.textContent = displayInput.textContent + ')';
})

let pi = document.querySelector('.pi');
pi.addEventListener('click', () => {

    //console.log(pie);
    displayInput.textContent = displayInput.textContent + 'π';

    //displayResult.textContent = displayInput.textContent;
})

let logE = document.querySelector('.e');
logE.addEventListener('click', () => {
    displayInput.textContent = displayInput.textContent + 'e';

})





let factorial = document.querySelector('.factorial');
factorial.addEventListener('click', () => {
    displayInput.textContent = displayInput.textContent + '!';

    let len = displayInput.textContent.length;
    let x = 1;
    let y = Number(displayInput.textContent.substring(0, len - 1));
    // console.log(typeof(displayInput.textContent));
    // console.log((displayInput.textContent));
    // console.log(displayInput.textContent.substring(0, len - 1));
    // console.log(typeof(displayInput.textContent.substring(0, len - 1)))
    for (n = 2; n <= y; n++) {
        x = x * n;
    }
    displayResult.textContent = x;

})

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    displayInput.textContent = '';
    displayResult.textContent = '';
})

let erase = document.querySelector('.erase');
erase.addEventListener('click', () => {
    displayInput.textContent = displayInput.textContent.substr(0, displayInput.textContent.length - 1);
    console.log(displayInput.textContent);

})

let equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    if (displayInput.textContent.includes('***') || displayInput.textContent.includes('****') || displayInput.textContent.includes('*****')) {
        displayResult.textContent = 'Syntax Error';
        displayInput.textContent = '';
    } else if (displayInput.textContent.includes('++') || displayInput.textContent.includes('--') || displayInput.textContent.includes('//') || displayInput.textContent.includes('%%')) {
        displayResult.textContent = 'Syntax Error';
        displayInput.textContent = '';
    } else if (displayInput.textContent.slice(-1) == '*' || displayInput.textContent.slice(-1) == '+' || displayInput.textContent.slice(-1) == '-' || displayInput.textContent.slice(-1) == '%' || displayInput.textContent.slice(-1) == '**' || displayInput.textContent.slice(-1) == '/') {
        displayResult.textContent = 'Syntax Error';
        displayInput.textContent = '';
    } else if (displayInput.textContent.includes('π')) {
        //console.log(displayInput.textContent);
        displayResult.textContent = eval(displayInput.textContent.replace(/π/g, pie));
        //console.log(displayResult.textContent);
        displayInput.textContent = '';
        //console.log(displayInput.textContent.replace(/π/g, pie));
    } else if (displayInput.textContent.includes('e')) {
        //console.log(displayInput.textContent);
        displayResult.textContent = eval(displayInput.textContent.replace(/e/g, LogE));
        //console.log(displayResult.textContent);
        displayInput.textContent = '';
        //console.log(displayInput.textContent.replace(/π/g, pie));
    } else {
        displayResult.textContent = eval(displayInput.textContent);
        console.log(displayResult.textContent);
        displayInput.textContent = '';
    }
})

let answer = document.querySelector('.answer');
answer.addEventListener('click', () => {
    if (displayResult.textContent === 'Syntax Error') {
        displayInput.textContent = '';
    } else {
        displayInput.textContent = displayResult.textContent;
    }


})