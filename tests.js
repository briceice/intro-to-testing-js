// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for the sayHello function
describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when executed with "Jane" as an argument', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed with "Alex as an argument', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed with "Pat" as an argument', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed with an undefined argument', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed with true as an argument', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed with false as an argument', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed with null as an argument', function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed with an empty string as an argument', function () {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed with the number 2.3 as an argument', function () {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed with the string "5" as an argument', function () {
        expect(sayHello("5")).toBe("Hello, World!");
    });
});

// Unit tests for the isFive function
describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return the boolean value true when executed with the number 5 as an argument', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return the boolean value true when executed with the string "5" as an argument', function () {
        expect(isFive("5")).toBe(true);
    });
});

// Unit tests for the isEven function
describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function')
    });
    it('should return a boolean when called', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return the boolean value true when executed with the number 2 as an argument', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when executed with -4 as an argument', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when executed with 3 as an argument', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when executed with "banana" as an argument', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when executed with "8" as an argument', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when executed with Infinity as an argument', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when executed with true as an argument', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when executed with false as an argument', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when executed with an undefined argument', function () {
        expect(isEven()).toBe(false);
    });
});