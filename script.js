function append(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch {
        alert("Invalid Expression");
    }
}

function scientific(type) {
    let value = parseFloat(document.getElementById("display").value);
    let result;

    switch(type) {
        case "sin":
            result = Math.sin(value);
            break;
        case "cos":
            result = Math.cos(value);
            break;
        case "tan":
            result = Math.tan(value);
            break;
        case "sqrt":
            result = Math.sqrt(value);
            break;
        case "log":
            result = Math.log10(value);
            break;
        case "pow":
            result = Math.pow(value, 2);
            break;
    }

    document.getElementById("display").value = result;
}