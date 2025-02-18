/*-------------------------------- Constants --------------------------------*/


// console.log(calculator); /// do not need! take away later! testing
/*-------------------------------- Variables --------------------------------*/
let firstValue = "";
let currentValue = ""; // aka second value
let operation = null;

/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
display.innerText = 0;

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {

    const button = event.target;
    console.log("Button: " + button);
    console.log("Clicked:" + button.innerText);

    if (button.classList.contains('number')) {
        handleNumberClicked(button.innerText);
    }
    if (button.classList.contains('operator') && button.innerText !== 'C') {
        handleNOperatorClicked(button.innerText);
    }

    if (button.classList.contains('equals')) {
        handleEqualClicked();
    }

    if (button.innerText === 'C') {
        clear();
    }
});

/*-------------------------------- Functions --------------------------------*/
const handleNumberClicked = (digit) => {
    currentValue += digit; // handling multi-digit numbers
    display.innerText = currentValue;
    // console.log("fv:" + firstValue);
    // console.log("cv: " + currentValue); // self
};

const handleNOperatorClicked = (op) => {
    firstValue = currentValue; // current value save as the first value
    currentValue = ""; // reset current value, to get a value after the first one
    display.innerText = 0;

    operation = op;

    console.log("operation clicked: " + operation);
    // console.log(operation);
    // console.log("fv:" + firstValue);
    // console.log("cv: " + currentValue); // self
};

const add = () => {
    return parseFloat(firstValue) + parseFloat(currentValue);
};

const subtract = () => {
    return parseFloat(firstValue) - parseFloat(currentValue);
};

const multiply = () => {
    return parseFloat(firstValue) * parseFloat(currentValue);
};

const divide = () => {
    return parseFloat(firstValue) / parseFloat(currentValue);
};

const handleEqualClicked = () => {
    //     if(currentValue === "" || firstValue === "") {
    //         // return;
    //     console.log("NEED TO CLICK ON SOME NUMBERS");
    // } // for self

    let displayTotal;
    console.log("operation clicked: " + operation);
    console.log(operation);
    switch (operation) { //return undefine if both currentValue and firstValue don't exist
        case '+':
            displayTotal = add();
            break; // doesn't fall through to the next one after the switchstatement exits
        case '-':
            displayTotal = subtract();
            break;
        case '*':
            displayTotal = multiply();
            break;
        case '/':
            displayTotal = divide();
            break;
    }
    console.log("Total: " + displayTotal);
    display.innerText = displayTotal;
    // RESET AFTER
    operation = null;
    firstValue = ""; // reset first value
    currentValue = ""; // reset current value
};

const clear = () => {
    display.innerText = 0;
    operation = null;
    firstValue = ""; // reset first value
    currentValue = ""; // reset current value

    // console.log("after clear, operation is: " + operation);
    // console.log("fv: " + firstValue);
    // console.log("cv: " + currentValue); //self
};