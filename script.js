let displayInput = document.querySelector('.input');
let displayResult = document.querySelector('.result');
let buttonNumbers = document.querySelectorAll('.number');
let buttonOperators = document.querySelectorAll('.operator');
let pie = Math.PI;
let LogE = Math.E;
let Sqrt = Math.sqrt;
let Sqr = Math.pow;
let storedValue = localStorage.getItem('ans');
let radians = true;


let cos = document.querySelector('.cos');
cos.addEventListener('click', () => {
    displayInput.textContent = displayInput.textContent + 'cos(';
})

let sin = document.querySelector('.sin');
sin.addEventListener('click', () => {
    displayInput.textContent = displayInput.textContent + 'sin(';
})

let tan = document.querySelector('.tan');
tan.addEventListener('click', () => {
    displayInput.textContent = displayInput.textContent + 'tan(';
})

let asin = document.querySelector('.asin');
asin.addEventListener('click', () => {
    displayInput.textContent = displayInput.textContent + 'asin(';
})

let acos = document.querySelector('.acos');
acos.addEventListener('click', () => {
    displayInput.textContent = displayInput.textContent + 'acos(';
})

let atan = document.querySelector('.atan');
atan.addEventListener('click', () => {
    displayInput.textContent = displayInput.textContent + 'atan(';
})

let rad = document.querySelector('.rad');
rad.addEventListener('click', () => {
    rad.id = 'selected_angle'
    deg.id = ''

    console.log("radians clicked")
    radians = true
    console.log(`radians: ${radians}`)
})

let deg = document.querySelector('.deg');
deg.addEventListener('click', () => {
    rad.id = ''
    deg.id = 'selected_angle'

    console.log("degrees clicked")
    radians = false
    console.log(`radians: ${radians}`)
})

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


for (let buttons of buttonNumbers) {
    buttons.addEventListener('click', () => {
        if (buttons.textContent === '.' && displayInput.textContent.includes('.')) return
        else {
            if (displayInput.textContent.length >= 27 || displayResult.textContent.length >= 27) return

            else {
                btnValue = buttons.textContent;
                displayInput.textContent = displayInput.textContent + btnValue;
                inputDisplay = displayInput.textContent;
            }

        }

    })
}


for (let buttons of buttonOperators) {
    buttons.addEventListener('click', () => {
        if (displayInput.textContent.length >= 27 || displayResult.textContent.length >= 27) return;
        else if (displayInput.textContent.includes('Ans') || displayResult.textContent !== '') {
            operator = buttons.value;
            displayInput.textContent = 'Ans' + operator;
        } else {
            operator = buttons.value;
            displayInput.textContent = displayInput.textContent + operator;
        }
    })
}


let square = document.querySelector('.power2');
square.addEventListener('click', () => {
    displayResult.textContent = Math.pow(displayInput.textContent, 2);
})





let root = document.querySelector('.root');
root.addEventListener('click', () => {
    displayInput.textContent = '√' + displayInput.textContent;
    // let disp = displayInput.textContent.substr(1);
    // disp = Math.sqrt(disp);
    // displayResult.textContent = eval(disp);
    // displayInput.textContent = '';
})



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
    displayInput.textContent = displayInput.textContent + 'π';
})

let logE = document.querySelector('.e');
logE.addEventListener('click', () => {
    displayInput.textContent = displayInput.textContent + 'e';

})





let factorial = document.querySelector('.factorial');
factorial.addEventListener('click', () => {
    if (displayInput.textContent === '') return;
    else{
        displayInput.textContent = displayInput.textContent + '!';
        let len = displayInput.textContent.length;
        let x = 1;
        let y = Number(displayInput.textContent.substring(0, len - 1));
        for (n = 2; n <= y; n++) {
            x = x * n;
        }
    displayResult.textContent = x;
    }
    

})

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    displayInput.textContent = '';
    displayResult.value = displayResult.textContent;
    displayResult.textContent = '';
    localStorage.setItem('ans', displayResult.value);

})

let erase = document.querySelector('.erase');
erase.addEventListener('click', () => {
    // When the last 3 characters are 'Ans', remove three characters, otherwise, remove one character
    if (displayInput.textContent.substring(displayInput.textContent.length - 3) === 'Ans') {
        displayInput.textContent = displayInput.textContent.substr(0, displayInput.textContent.length - 3);
    } else {
        displayInput.textContent = displayInput.textContent.substr(0, displayInput.textContent.length - 1);
        console.log(displayInput.textContent);
    }

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
        displayResult.textContent = eval(displayInput.textContent.replace(/π/g, pie));
        displayInput.textContent = '';

    } else if (displayInput.textContent.includes('e')) {
        displayResult.textContent = eval(displayInput.textContent.replace(/e/g, LogE));
        displayInput.textContent = '';

    } else if (displayInput.textContent.includes('Ans')) {
        localStorage.setItem('ans', displayResult.textContent);
        if (storedValue && displayResult.textContent === '') {

        } else {
            displayResult.textContent = eval(displayInput.textContent.replace(/Ans/g, localStorage.getItem('ans')));
            localStorage.setItem('ans', displayResult.textContent)
        }
    } else if (displayInput.textContent.includes('√')) {
        let disp = displayInput.textContent.substr(1);
        disp = Math.sqrt(disp);
        displayResult.textContent = eval(disp);
        displayInput.textContent = '';
        //console.log(disp);
        // console.log(displayInput.textContent.replace(/√/g, Math.sqrt).slice(0));
        // //displayResult.textContent = eval(+'(' + displayInput.textContent.slice(3) + ')');
        // console.log(displayResult.textContent);
        // displayInput.textContent = '';
        //console.log(displayInput.textContent.replace(/π/g, pie));
        // } else if {
        //     displayResult.textContent = Math.pow(displayInput.textContent, 2);




    } else if (displayInput.textContent.includes('asin(')) {
        let number = displayInput.textContent.substr(5)
        if (number > 1 || number < -1){
            displayInput.textContent = '';
            displayResult.textContent = 'Math Error!';

        }
        else{
                // asin gives angle in radians
            console.log("asin " + number)
            let result = Math.asin(number)

            // Math.acos() returns only radians so if the user enters degrees we need to convert it
            if (!radians) {
            // transform to degrees
            result = result * Math.PI / 180
        }

            console.log(`result: ${result}`)
            displayResult.textContent = eval(result);
            displayInput.textContent = '';
        }
        

    } else if (displayInput.textContent.includes('acos(')) {
        let number = displayInput.textContent.substr(5)
        if (number > 1 || number < -1){
            displayInput.textContent = '';
            displayResult.textContent = 'Math Error!';

        }
        else{
            // asin gives angle in radians
            console.log("acos " + number)
            let result = Math.acos(number)

            // Math.acos() returns only radians so if the user enters degrees we need to convert it
            if (!radians) {
            // transform to degrees
            result = result * Math.PI / 180
            }

            console.log(`result: ${result}`)
            displayResult.textContent = eval(result);
            displayInput.textContent = '';
        }
            

    } else if (displayInput.textContent.includes('atan(')) {
        let number = displayInput.textContent.substr(5)
            // asin gives angle in radians
        console.log("atan " + number)
        let result = Math.atan(number)

        // Math.atan() returns only radians so if the user enters degrees we need to convert it
        if (!radians) {
            // transform to degrees
            result = result * Math.PI / 180
        }

        console.log(`result: ${result}`)
        displayResult.textContent = eval(result);
        displayInput.textContent = '';

    } else if (displayInput.textContent.includes('sin(')) {
        // a.substr(a.lastIndexOf("(")+1);
        let number = displayInput.textContent.substr(4)

        // Math.sin() takes only radians so if the user enters degrees we need to convert it
        if (!radians) {
            // transform to degrees
            if (number == 180) {
                number = 0
            } else {
                number = number * Math.PI / 180
            }
        }

        let result = Math.sin(number)

        console.log(`result: ${result}`)
        displayResult.textContent = eval(result);
        displayInput.textContent = '';

    } else if (displayInput.textContent.includes('cos(')) {
        let number = displayInput.textContent.substr(4)
        let result = 0

        // Math.cos() takes only radians so if the user enters degrees we need to convert it
        if (!radians) {
            console.log("cos with degrees: " + number)

            // transform to degrees
            if (number != 90) {
                result = Math.cos(number * Math.PI / 180)
            }
        } else {
            console.log("cos with radians: " + number)
            result = Math.cos(number)
        }

        console.log(`result: ${result}`)
        displayResult.textContent = eval(result);
        displayInput.textContent = '';


    } else if (displayInput.textContent.includes('tan(')) {
        let number = displayInput.textContent.substr(4)

        // Math.tan() takes only radians so if the user enters degrees we need to convert it
        if (!radians) {
            // transform to degrees
            if (number == 180) {
                number = 0
            } else {
                number = number * Math.PI / 180
            }
        }

        let result = Math.tan(number)

        console.log(`result: ${result}`)
        displayResult.textContent = eval(result);
        displayInput.textContent = '';

    } else {
        displayResult.textContent = eval(displayInput.textContent);
        localStorage.setItem('ans', displayResult.textContent)

    }
})

let answer = document.querySelector('.answer');
answer.addEventListener('click', () => {
    if (displayResult.textContent === 'Syntax Error') {
        displayInput.textContent = '';
    } else if (storedValue && displayResult.textContent === '') {
        displayResult.textContent = localStorage.getItem('ans');
        displayInput.textContent = displayInput.textContent + 'Ans';

    } else if (displayInput.textContent.includes('Ans')) return;
    else if (displayResult === '') {
        displayResult.textContent = localStorage.getItem('ans');
    } else {
        displayInput.textContent = displayInput.textContent + 'Ans';
    }
})
hearts = document.querySelectorAll('.heart');
for (let heart of hearts) {
    setInterval(async() => {
        await heart.classList.toggle('heartColor')
    }, 1000)
}