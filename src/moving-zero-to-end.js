export default runApp;
import assert from 'assert';

function moveZeros(arr) {
    const arrWithoutZeros = arr.filter(el => el !== 0);
    for (let i = arrWithoutZeros.length; i < arr.length; i++) {
        arrWithoutZeros.push(0);
    }
    return arrWithoutZeros;
}

function test() {
    assert.deepEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
}


function runApp() {
    test();
}