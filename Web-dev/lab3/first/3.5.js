describe("pow", function() {

    it("raises to n-th power", function() {
        assert.equal(pow(2, 3), 8);
    });

});

// function pow(x, n) {
//     return 8; // :) we cheat!
// }
function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}
describe("pow", function() {

    it("raises to n-th power", function() {
        assert.equal(pow(2, 3), 8);
        assert.equal(pow(3, 4), 81);
    });

});
describe("pow", function() {

    it("2 raised to power 3 is 8", function() {
        assert.equal(pow(2, 3), 8);
    });

    it("3 raised to power 4 is 81", function() {
        assert.equal(pow(3, 4), 81);
    });

});

describe("pow", function() {

    function makeTest(x) {
        let expected = x * x * x;
        it(`${x} in the power 3 is ${expected}`, function() {
            assert.equal(pow(x, 3), expected);
        });
    }

    for (let x = 1; x <= 5; x++) {
        makeTest(x);
    }

});
describe("pow", function() {

    describe("raises x to power 3", function() {

        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} in the power 3 is ${expected}`, function() {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

    // ... more tests to follow here, both describe and it can be added
});

function pow(x, n) {
    if (n < 0) return NaN;
    if (Math.round(n) != n) return NaN;

    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}


// What's wrong in the test?
// There are actually three tests, but layed out as single function with 3 asserts.
// So it's better to divide into three it blocks