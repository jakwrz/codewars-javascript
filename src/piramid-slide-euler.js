export default runApp;
import assert from 'assert';

function longestSlideDown (pyramid) {
    if (pyramid.length === 0) return 0;
    for (let floorIdx = pyramid.length - 2; floorIdx >= 0; floorIdx--) {
        for (let elementIdx = pyramid[floorIdx].length - 1; elementIdx >= 0; elementIdx--) {
            pyramid[floorIdx][elementIdx] += Math.max(pyramid[floorIdx + 1][elementIdx], pyramid[floorIdx + 1][elementIdx + 1]);
        }
    }
    return pyramid[0][0];
}

function test() {
    assert.strictEqual(longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]), 23);
    assert.strictEqual(longestSlideDown([[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]]), 20);
    assert.strictEqual(longestSlideDown([[1], [2, 3], [4, 5, 6], [7, 8, 9, 10], [11, 12, 13, 14, 15]]), 35);
    assert.strictEqual(longestSlideDown([[1]]), 1);
    assert.strictEqual(longestSlideDown([]), 0);
}


function runApp() {
    test();
}