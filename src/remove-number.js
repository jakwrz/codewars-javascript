export default runApp;
import assert from 'assert';

function removeNb(n) {
    let result = [];
    const sum = (1 + n) * n / 2;
    for (let a = 1; a <= n; a++) {
        const b = (sum - a) / (a + 1);
        if (Number.isInteger(b) && b <=n) {
            result.push([a, b]);
        }
    }
    return result;
}

function test() {
    assert.deepEqual(removeNb(26), [[15,21], [21,15]]);
    assert.deepEqual(removeNb(100), []);
}


function runApp() {
    test();
}