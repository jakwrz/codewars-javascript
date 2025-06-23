export default runTests;
import assert from 'assert';

function snail(array) {
    let x = Math.ceil(array.length/2) - 1;
    let y = Math.floor(array.length/2);
    let list = array[0].length === 0 ? [] : [array[y][x]];
    let pivot_x = x === y ? -1 : 1;
    let pivot_y = pivot_x;
    let serie = 1, k = 0, axis = true;
    for (let i = 1; i < array.length**2; i++) {
        if (k++ === serie) {
            axis = !axis;
            pivot_x *= axis ? -1 : 1;
            pivot_y *= axis ? 1 : -1;
            serie += axis ? 1 : 0;
            k = 1;
        }
        x += axis ? pivot_x : 0;
        y += !axis ? pivot_y : 0;
        list.push(array[y][x]);
    }
    return list.reverse();
}

function runTests() {
    assert.deepEqual(snail([[]]), []);
    assert.deepEqual(snail([[1]]), [1]);
    assert.deepEqual(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
    assert.deepEqual(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
    assert.deepEqual(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
}