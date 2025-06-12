export default runApp;
import assert from 'assert';

function isPP(n) {
    let [m, k] = [2, 1];
    while (m < n) {
        k = Math.log(n) / Math.log(m);
        if (Math.abs(k - Math.round(k)) < 1e-10 && m**Math.round(k) === n) {
            return [m, Math.round(k)];
        }
        m++;
    }
    return null;
}




function test() {
    assert.deepEqual(isPP(4), [2,2], "4 = 2^2");
    assert.deepEqual(isPP(9), [3,2], "9 = 3^2");
    assert.strictEqual(isPP(5), null, "5 isn't a perfect number");

    let pp = [4, 8, 9, 16, 25, 27, 32, 36, 49, 64, 81, 100, 121, 125, 128, 144, 169, 196, 216, 225, 243, 256, 289, 324, 343, 361, 400, 441, 484];
    for (let i = 0; i < pp.length; ++i) {
        let answer = isPP(pp[i]);
        assert.strictEqual(answer[0] ** answer[1], pp[i]);
    }
}


function runApp() {
    test();
}