result = a || b;
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

if (1 || 0) { // works just like if( true || false )
    alert( 'truthy!' );
}
let hour = 9;

if (hour < 10 || hour > 18) {
    alert( 'The office is closed.' );
}

hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    alert( 'The office is closed.' ); // it is the weekend
}
alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
true || alert("not printed");
false || alert("printed");

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
    alert( 'The time is 12:30' );
}
if (1 && 0) { // evaluated as true && false
    alert( "won't work, because the result is falsy" );
}
// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
alert( 1 && 2 && null && 3 ); // null
alert( 1 && 2 && 3 ); // 3, the last one

alert( !true ); // false
alert( !0 ); // true
alert( !!"non-empty string" ); // true
alert( !!null ); // false
alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false



// What's the result of OR?
// 2

// What's the result of OR'ed alerts?
// 1 and then 2


// What is the result of AND?
// null

// What is the result of AND'ed alerts?
// 1, then undefined

// The result of OR AND OR
// 3

// Check the range between
// if (age >= 14 && age <= 90)

// Check the range outside
// if (!(age >= 14 && age <= 90))
// if (age < 14 || age > 90)

// A question about "if"
// 1st and 3rd

// Check the login
let name = prompt("Who's there?", "");
if (name === "Admin") {
    let password = prompt("Password?");
    if (password === "TheMaster") {
        alert("Welcome!");
    }
    else if (password === "Cancel" || password === '' || password == null) {
        alert("Canceled");
    }
    else {
        alert("Wrong password");
    }
}
else if (name === "Cancel" || name === '' || name === null) {
    alert("Canceled");
}
else {
    alert("I don't know you");
}