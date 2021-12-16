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