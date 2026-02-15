// user has a reference to the object
let user = {
    name: "John"
};

user = null;

user = {
    name: "John"
};

let admin = user;

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});
delete family.father;
delete family.mother.husband;

family = null;