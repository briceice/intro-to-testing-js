// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    if (typeof input === "string" && input.length > 0 && isNaN(input)) {
        return "Hello, " + input + "!";
    } else {
        return "Hello, World!";
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
        return false;
    }
}

// isVowel function
function isVowel(input) {
    let aCheck = input === "a" || input === "A"
    let eCheck = input === "e" || input === "E"
    let iCheck = input === "i" || input === "I"
    let oCheck = input === "o" || input === "O"
    let uCheck = input === "u" || input === "U"
    let vowelCheck = aCheck || eCheck || iCheck || oCheck || uCheck
    return vowelCheck;
}