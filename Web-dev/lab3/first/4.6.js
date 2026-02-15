let user = {}; // a user without "address" property

alert(user.address.street); // Error!

// document.querySelector('.elem') is null if there's no element
let html = document.querySelector('.elem').innerHTML; // error if it's null
user = {};

alert(user.address ? user.address.street : undefined);
html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;
user = {}; // user has no address

alert(user.address ? user.address.street ? user.address.street.name : null : null);

alert( user.address && user.address.street && user.address.street.name ); // undefined (no error)

user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)

html = document.querySelector('.elem')?.innerHTML; // will be undefined, if there's no element
user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined

user = null;
let x = 0;

user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

alert(x); // 0, value not incremented


let userAdmin = {
    admin() {
        alert("I am admin");
    }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing happens (no such method)
let key = "firstName";

let user1 = {
    firstName: "John"
};

let user2 = null;

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined
delete user?.name; // delete user.name if user exists