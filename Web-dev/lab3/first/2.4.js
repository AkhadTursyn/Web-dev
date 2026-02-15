let message;
message = 'Hello!';

alert(message); // shows the variable content
let user = 'John', age = 25;
user = 'John'
    , age = 25
    , message = 'Hello';
message = 'Hello!';

message = 'World!'; // value changed

alert(message);
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3
let имя = '...';
let 我 = '...';
const myBirthday = '06.11.2006';

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00



// wORKING with variables
let admin, name;
name = "John";
admin = name;
alert(admin);

// Giving the right name
let outPlanetName = "Earth";
let currentVisitorName = "Lev";

// Uppercase
// For birthday it's okay, because it's constant value, it'll never change
// For age it's wrong, lower case is better because age might change, even though once in year