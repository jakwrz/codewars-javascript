export default runApp;
import assert from 'assert';

function createPhoneNumber(numbers){
    let strNumber = numbers.join("");
    return `(${strNumber.slice(0, 3)}) ${strNumber.slice(3, 6)}-${strNumber.slice(6, 10)}`;
}

function test() {
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
}


function runApp() {
    test();
}

