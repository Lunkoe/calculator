function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    return (operator == "+") ? add(a, b)
        : (operator == "-") ? substract(a, b)
            : (operator == "*") ? multiply(a, b)
                : (operator == "/") ? divide(a, b)
                    : "Wrong Input";
}



let value = "";
let operatorLimit = false;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", calculation));


function calculation() {
    if (("+-*/".includes(this.dataset.key)) && "+-*/".includes(value[value.length - 1])) {
        return;
    } else if (this.dataset.key == "=" && "+-*/".includes(value[value.length - 1])) {
        value = "";
    } else if (this.dataset.key == "=" || ((operatorLimit == true) && ("+-*/".includes(this.dataset.key)))) {

        arrValue = value.split(/[+\-*/]/);
        console.log(arrValue);

        value = (value.includes("+")) ? add(+arrValue[0], +arrValue[1])
            : (value.includes("-")) ? substract(arrValue[0], arrValue[1])
                : (value.includes("*")) ? multiply(arrValue[0], arrValue[1])
                    : (value.includes("/")) ? divide(arrValue[0], arrValue[1])
                        : "";

        if ("+-*/".includes(this.dataset.key)) {
            operatorLimit = true;
            value += this.dataset.key;
        }

        if ("=".includes(this.dataset.key)) {
            operatorLimit = false;
        }

    } else if (this.dataset.key == "clr") {
        value = "";
        operatorLimit = false;
    } else if (this.dataset.key == "bck") {
        if ("+-*/".includes(value[value.length - 1])) {
            operatorLimit = false;
        }
        value = value.replace(/.$/, '');
    } else {
        if ("+-*/".includes(this.dataset.key)) {
            operatorLimit = true;
        }
        value += this.dataset.key;
    }

    const display = document.querySelector(".display");
    display.textContent = value;
}