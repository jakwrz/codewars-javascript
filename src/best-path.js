export default runApp;
import assert from 'assert';

function chooseBestSum(t, k, ls) {
    let sumes = rec(k, ls);
    const valid = sumes.filter(el => el <= t);
    return valid.length ? Math.max (...valid) : null;
}

function rec(k, ls, acc = []) {
    if (ls.length === k) {
        acc.push(ls.reduce((a, b) => a + b, 0));
    } else if (ls.length > k) {
        for (let i = 0; i < ls.length; i++) {
            let lsCp = [...ls];
            lsCp.splice(i, 1);
            rec(k, lsCp, acc);
        }
    }
    return acc;
}

function test() {
    assert.deepEqual(chooseBestSum(163, 3, [50, 55, 56, 57, 58]), 163);
    assert.deepEqual(chooseBestSum(163, 3, [50]), null);
    assert.deepEqual(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]), 228);
}

function runApp() {
    test();
}
