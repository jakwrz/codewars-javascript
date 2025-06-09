export default runApp;
import assert from 'assert';

 function pickPeaks(arr) {
    let res = { pos: [], peaks: [] }, hi;
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1]) {
            hi = i;
        }
        if (arr[i] > arr[i + 1] && arr[i] >= arr[i - 1] && !res.pos.includes(hi) && !(hi != i && i == arr.length - 2 && arr[i] == arr[i + 1])) {
            res.pos.push(hi);
            res.peaks.push(arr[i]);
        }
    }
    return res;
}




function test() {
    assert.deepEqual(pickPeaks([1,2,3,6,4,1,2,3,2,1]), {pos:[3,7], peaks:[6,3]});
    assert.deepEqual(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]), {pos:[3,7], peaks:[6,3]});
    assert.deepEqual(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]), {pos:[3,7,10], peaks:[6,3,2]});
    assert.deepEqual(pickPeaks([2,1,3,1,2,2,2,2,1]), {pos:[2,4], peaks:[3,2]});
    assert.deepEqual(pickPeaks([2,1,3,1,2,2,2,2]), {pos:[2], peaks:[3]});
    assert.deepEqual(pickPeaks([2,1,3,2,2,2,2,5,6]), {pos:[2], peaks:[3]});
    assert.deepEqual(pickPeaks([2,1,3,2,2,2,2,1]), {pos:[2], peaks:[3]});
    assert.deepEqual(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]), {pos:[2,7,14,20], peaks:[5,6,5,5]});
    assert.deepEqual(pickPeaks([]),{pos:[],peaks:[]});
    assert.deepEqual(pickPeaks([1,1,1,1]),{pos:[],peaks:[]});
}


function runApp() {
    test();
}