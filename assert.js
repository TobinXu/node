const assert = require('assert');

function add(a, b) {
    return a + b;
} 

const expected = add(1, 2);

try {
    assert.equal(expected, 4, '预期1加2等于3')
    
} catch (error) {
    console.log(error);
}