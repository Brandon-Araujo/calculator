function operator(oper, num1, num2) {
    switch (oper) {
        case 'add':
            return addFunction(num1, num2);
            break;
        case 'subtract': 
            return subtractFunction(num1, num2);
            break;
        case 'multiply': 
            return multiplyFunction(num1, num2);
            break;
        case 'divide': 
            return divideFunction(num1, num2);
            break;
        default:
            return 'ERROR!';
    }
}

//expression functions
function addFunction(a, b) {
    return a + b;
}

function subtractFunction(a, b) {
    return a - b;
}

function multiplyFunction(a, b) {
    return a * b;
}

function divideFunction(a, b) {
    return a / b;
}

console.log(operator('subtractd', 22, 4));