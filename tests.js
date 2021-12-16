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

// Unit tests for isVowel function
describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean value when called', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when executed with "a" as an argument', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when executed with "A" as an argument', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when executed with "y" as an argument', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when executed with 4 as an argument', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when executed with true as an argument', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when executed with false as an argument', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when executed with "banana" as an argument', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when executed with an undefined argument', function () {
        expect(isVowel()).toBe(false);
    });
});

// Unit tests for add function
describe('add', function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return a number value when called', function () {
        expect(typeof add()).toBe('number');
    });
    it('should return 5 when executed with 2 and 3 as arguments', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when executed with -3 and -9 as arguments', function () {
        expect(add(-3, -9)).toBe(-12)
    });
    it('should return 11 when executed with "5" and 6 as arguments', function () {
        expect(add("5", 6)).toBe(11)
    });
    it('should return 6 when executed with "-4" and "10" as arguments', function () {
        expect(add("-4", "10")).toBe(6)
    });
    it('should return NaN when executed with "banana" and "split" as arguments', function () {
        expect(isNaN(add("banana", "split"))).toBe(true)
    });
    it('should return NaN when executed with 2 and "apples" as arguments', function () {
        expect(isNaN(add(2, "apples"))).toBe(true)
    });
    it('should return NaN when executed with an undefined argument', function () {
        expect(isNaN(add())).toBe(true)
    });
});