function getOperator() {
    let result = prompt('Какую операцию вы хотите произвести (+, -, *, /)?', '');
    return result;
}

function getNumber() {
    let result = Number(prompt('Введите число', '0'));
    return result;
}

function calculate(f, a, b) {
    switch (f) {
        case '+': 
            alert(`${a} ${f} ${b} = ${a + b}`);
            break;
        case '-':
            alert(`${a} ${f} ${b} = ${a - b}`);
            break;
        case '*':
            alert(`${a} ${f} ${b} = ${a * b}`);
            break;
        case '/':
            alert(`${a} ${f} ${b} = ${a / b}`);
            break;
        default:
            alert('Что-то пошло не так! Обновите страницу и введите корректные данные!');
    }
}

const operator = getOperator();
const numA = getNumber();
const numB = getNumber(); 

calculate(operator, numA, numB);