let i = 0;
while (i < 3) { // shows 0, then 1, then 2
    alert( i );
    i++;
}
i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
    alert( i );
    i--;
}

i = 3;
while (i) alert(i--);
i = 0;
do {
    alert( i );
    i++;
} while (i < 3);
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
}
i = 0
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// ...finish, because now i == 3
i = 0;

for (i = 0; i < 3; i++) { // use an existing variable
    alert(i); // 0, 1, 2
}

alert(i); // 3, visible, because declared outside of the loop
i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
    alert( i ); // 0, 1, 2
}
i = 0;

for (; i < 3;) {
    alert( i++ );
}

let sum = 0;

while (true) {

    let value = +prompt("Enter a number", '');

    if (!value) break; // (*)

    sum += value;

}
alert( 'Sum: ' + sum );
for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;

    alert(i); // 1, then 3, 5, 7, 9
}

for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Value at coords (${i},${j})`, '');

        // what if we want to exit from here to Done (below)?
    }
}

alert('Done!');


outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Value at coords (${i},${j})`, '');

        // if an empty string or canceled, then break out of both loops
        if (!input) break outer; // (*)

        // do something with the value...
    }
}

alert('Done!');


// Last loop value
// 1

// Which values does the while loop show?
// No, first print from 1 to 4, second from 1 to 5

// Which values get shown by the "for" loop?
// Yes, both from 0 to 4

// Output even numbers in the loop
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert( i );
    }
}

// Replace "for" with "while"
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}

// Repeat until the input is correct
let num;

do {
    num = prompt("Enter a number greater than 100", 0);
} while (num <= 100 && num);

// Output prime numbers
n = 10;
prime:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j * j <= i; j++) {
        if (i % j == 0) continue prime;
    }
    alert(i);
}