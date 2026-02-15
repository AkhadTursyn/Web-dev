function showMessage() {
    alert( 'Hello everyone!' );
}
function name(parameter1, parameter2, ... parameterN) {
    // body
}
showMessage();
showMessage();
function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable

    alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function

let userName = 'John';

function showMessage() {
    userName = "Bob"; // (1) changed the outer variable

    let message = 'Hello, ' + userName;
    alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function
let userName = 'John';

function showMessage() {
    let userName = "Bob"; // declare a local variable

    let message = 'Hello, ' + userName; // Bob
    alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable


function showMessage(from, text) { // parameters: from, text
    alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)
function showMessage(from, text) {

    from = '*' + from + '*'; // make "from" look nicer

    alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann
showMessage("Ann");
function showMessage(from, text = "no text given") {
    alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given

showMessage("Ann", undefined); // Ann: no text given


function showMessage(text) {
    // ...

    if (text === undefined) { // if the parameter is missing
        text = 'empty message';
    }

    alert(text);
}

showMessage(); // empty message
function showCount(count) {
    // if count is undefined or null, show "unknown"
    alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
alert( result ); // 3
function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents?');
    }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
    alert( 'Access granted' );
} else {
    alert( 'Access denied' );
}function showMovie(age) {
    if ( !checkAge(age) ) {
        return;
    }

    alert( "Showing you the movie" ); // (*)
    // ...
}

function showPrimes(n) {

    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;

        alert(i);  // a prime
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if ( n % i == 0) return false;
    }
    return true;
}
function name(parameters, delimited, by, comma) {
    /* code */
}

// Is "else" required?
// No, no difference, because code after if executed iff condition is false

// Rewrite the function using '?' or '||'
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

// Function min(a, b)
function min(a, b) {
    if (a < b) return a;
    return b;
}

// Function pow(x,n)
function pow(x, n) {
    let ans = 1;
    for (let i = 0; i < n; i++) ans *= x;
    return ans;
}
let x = prompt("Enter x:", '');
let n = prompt("Enter n:", '');

if (n < 1) {
    alert('Please enter positive integer');
} else {
    alert( pow(x, n) );
}