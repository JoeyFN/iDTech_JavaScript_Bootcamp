function greet(name) {
    if(name == null) {
        console.log("Hello there");
    }
    else if(name.toUpperCase()) {
        console.log("HELLO " + name);
    }
    else if(Array.isArray(name)) {
        console.log("Hello, " + name);
    }
    else {
        console.log("Hello " + name);
    }
}

describe('test greet()', function() {
    it('should be called', function() {
        expect(greet('John')).toBeCalled();
    });
});
