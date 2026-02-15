function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false

function User(name) {
    // this = {};  (implicitly)

    // add properties to this
    this.name = name;
    this.isAdmin = false;

    // return this;  (implicitly)
}
let user = {
    name: "Jack",
    isAdmin: false
};

function User() {
    alert(new.target);
}

// without "new":
User(); // undefined

// with "new":
new User(); // function User { ... }

function User(name) {
    if (!new.target) { // if you run me without new
        return new User(name); // ...I will add new for you
    }

    this.name = name;
}

let john = User("John"); // redirects call to new User
alert(john.name); // John

function BigUser() {

    this.name = "John";

    return { name: "Godzilla" };  // <-- returns this object
}

alert( new BigUser().name );  // Godzilla, got that object

function SmallUser() {

    this.name = "John";

    return; // <-- returns this
}

alert( new SmallUser().name );  // John



function User(name) {
    this.name = name;

    this.sayHi = function() {
        alert( "My name is: " + this.name );
    };
}

let john = new User("John");

john.sayHi(); // My name is: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/


// Two functions – one object
// Yes, it's possible if function returns some object

// Create new Calculator
function Calculator() {
    this.read = function() {
        this.a = +prompt("Enter a:", 0);
        this.b = +prompt("Enter b:", 0);
    }
    this.sum = function() {
        return this.a + this.b;
    }
    this.mul = function() {
        return this.a * this.b;
    }
}
let calculator = new Calculator();
calculator.read();

alert("Sum = " + calculator.sum() );
alert("Mul = " + calculator.mul() );


// Create new Accumulator
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt("Enter value:", 0);
    }
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert("Sum = " + accumulator.value);