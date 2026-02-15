let billion = 1000000000;
billion = 1_000_000_000;


billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)
let mсs = 0.000001;
mcs = 1e-6;
alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides

let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111



let num = 1.23456;

alert( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23
let num = 12.34;
alert( num.toFixed(1) ); // "12.3"

let num = 12.36;
alert( num.toFixed(1) ); // "12.4"

let num = 12.34;
alert( num.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits
alert( 1e500 ); // Infinity
alert( 0.1 + 0.2 == 0.3 ); // false

alert( 0.1 + 0.2 ); // 0.30000000000000004
alert(0.1.toString(2)); // 0.0001100110011001100110011001100110011001100110011001101
alert(0.2.toString(2)); // 0.001100110011001100110011001100110011001100110011001101
alert((0.1 + 0.2).toString(2)); // 0.0100110011001100110011001100110011001100110011001101
alert( 0.1.toFixed(20) ); // 0.10000000000000000555
let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); // "0.30"
let sum = 0.1 + 0.2;
alert( +sum.toFixed(2) ); // 0.3


alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
alert( (0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001

// Hello! I'm a self-increasing number!
alert( 9999999999999999 ); // shows 10000000000000000
alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true
alert( NaN === NaN ); // false


alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, because a special value: NaN
alert( isFinite(Infinity) ); // false, because a special value: Infinity
let num = +prompt("Enter a number", '');

// will be true unless you enter Infinity, -Infinity or not a number
alert( isFinite(num) );
alert( Number.isNaN(NaN) ); // true
alert( Number.isNaN("str" / 2) ); // true

// Note the difference:
alert( Number.isNaN("str") ); // false, because "str" belongs to the string type, not the number type
alert( isNaN("str") ); // true, because isNaN converts string "str" into a number and gets NaN as a result of this conversion
alert( Number.isFinite(123) ); // true
alert( Number.isFinite(Infinity) ); // false
alert( Number.isFinite(2 / 0) ); // false

// Note the difference:
alert( Number.isFinite("123") ); // false, because "123" belongs to the string type, not the number type
alert( isFinite("123") ); // true, because isFinite converts string "123" into a number 123
alert( +"100px" ); // NaN

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading
alert( parseInt('a123') ); // NaN, the first symbol stops the process
alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, without 0x also works

alert( parseInt('2n9c', 36) ); // 123456
alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (any random numbers)
alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1
alert( Math.pow(2, 10) ); // 2 in power 10 = 1024

// Sum numbers from the visitor
a = +prompt("Enter a:", '');
b = +prompt("Enter b:", '');
alert(a + b);

// Why 6.35.toFixed(1) == 6.3?
// Actually we can add some small number like 1e-10. Or multiply by 10, round, and then divide 10:
// alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

// Repeat until the input is a number
function readNumber() {
    let num;
    do {
        num = prompt("Enter number:", 0);
    } while (!isFinite(num));
    if (num === null || num === '' || num === 'CANCEL') return null;
    return +num;
}

// An occasional infinite loop
// Because we are losing precision while adding 0.2 50 times.
// Instead of equality we can check with abs(i - 10) < 1e-5 like this


// A random number from min to max
function random(min, max) {
    return Math.random() * (max - min) + min;
}

// A random integer from min to max
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}