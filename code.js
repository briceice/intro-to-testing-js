// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    if (typeof input === "string" && input.length > 0 && isNaN(input)) {
        return "Hello, " + input + "!";
    } else {
        return "Hello, World!"
    }
}

// isFive function
function isFive(input) {
    return parseInt(input) === 5;
}

// isEven function
function isEven(input) {
    if (!isNaN(parseInt(input))) {
        return input % 2 === 0;
    } else {
        return false
    }
}