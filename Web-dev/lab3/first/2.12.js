let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)
user = "John";
alert(user ?? "Anonymous"); // John (user is not null/undefined)
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder


// shows the first truthy value:
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000
// without parentheses
area = height ?? 100 * width ?? 50;

// ...works this way (not what we want):
area = height ?? (100 * width) ?? 50;

let x = (1 && 2) ?? 3; // Works

alert(x); // 2
// set height=100, if height is null or undefined
height = height ?? 100;