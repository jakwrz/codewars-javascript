export default runApp;
import assert from 'assert';

function findNextSquare(sq) {
    let val = Math.sqrt(sq);
    return val % 1 === 0 ? (val + 1) ** 2 : -1;
}

function test() {
    assert.strictEqual(findNextSquare(121), 144, "Wrong output for 121");
    assert.strictEqual(findNextSquare(625), 676, "Wrong output for 625");
    assert.strictEqual(findNextSquare(319225), 320356, "Wrong output for 319225");
    assert.strictEqual(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
    assert.strictEqual(findNextSquare(155), -1, "Wrong output for 155");
    assert.strictEqual(findNextSquare(342786627), -1, "Wrong output for 342786627");
}


function runApp() {
    test();
}
