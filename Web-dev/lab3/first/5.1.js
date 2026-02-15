let john = {
    name: "John",
    sayHi: function() {
        alert("Hi buddy!");
    }
};

john.sayHi(); // Hi buddy!
let str = "Hello";

alert( str.toUpperCase() ); // HELLO

let n = 1.23456;

alert( n.toFixed(2) ); // 1.23
// Can I add a string property?
// Primitives aren't objects, that's why it will cause errors