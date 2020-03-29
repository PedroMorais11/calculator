const CLEAR_CONSOLE = 'C';
const DELETE_CHAR = 'DEL';

const ADD = 'add';
const SUBTRACT = 'subtract';
const MULTIPLY = 'multiply';
const DIVIDE = 'divide';

let operation = '';
let consoleValue = '0';
let valuesToOperate = [];

const sum = (total, num) => total + num;

const min = (total, num) => total - num;

const mult = (total, num) => total * num;

const div = (total, num) => total / num;

function add() {
    storeValue();
    operation = ADD;
    clearConsole();
}

function multiply() {
    storeValue();
    operation = MULTIPLY;
    clearConsole();
}

function subtract() {
    storeValue();
    operation = SUBTRACT;
    clearConsole();
}

function divide() {
    storeValue();
    operation = DIVIDE;
    clearConsole();
}

function equals() {
    storeValue();
    let result = 0;
    switch (operation) {
        case ADD:
            valuesToOperate = valuesToOperate.map(num => parseInt(num));
            result = valuesToOperate.reduce(sum);
            consoleValue = result.toString();
            loadToConsole();
            resetValuesToOperate();
            break;
        case SUBTRACT:
            valuesToOperate = valuesToOperate.map(num => parseInt(num));
            result = valuesToOperate.reduce(min);
            consoleValue = result.toString();
            loadToConsole();
            resetValuesToOperate();
            break;
        case MULTIPLY:
            valuesToOperate = valuesToOperate.map(num => parseInt(num));
            result = valuesToOperate.reduce(mult);
            consoleValue = result.toString();
            loadToConsole();
            resetValuesToOperate();
            break;
        case DIVIDE:
            valuesToOperate = valuesToOperate.map(num => parseInt(num));
            result = valuesToOperate.reduce(div);
            consoleValue = result.toString();
            loadToConsole();
            resetValuesToOperate();
            break;
    }
}

function clearConsole() {
    consoleValue = '0';
    loadToConsole();
}

function deleteChar() {
    consoleValue.length === 1 ?
        consoleValue = '0' : consoleValue = consoleValue.slice(0, -1);
    loadToConsole();
}

function loadNumber(value) {
    consoleValue === '0' ? 
        consoleValue = value : consoleValue += value;
    loadToConsole();
}

function loadToConsole() {
    document.querySelector('.console').innerText = consoleValue;
}

function storeValue() {
    valuesToOperate.push(consoleValue);
}

function resetValuesToOperate() {
    valuesToOperate = [];
}

function resolveClickAction(value) {
    value = value.toString();
    switch (value) {
        case CLEAR_CONSOLE:
            clearConsole();
            break;
        case DELETE_CHAR:
            deleteChar();
            break;
        default:
            loadNumber(value);
            break;
    }
}

document.querySelectorAll('.no-operator').forEach(element => {
    element.addEventListener('click', function(event) {
        resolveClickAction(event.target.innerText);
    });
}); 

loadToConsole();