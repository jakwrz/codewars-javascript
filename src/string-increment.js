export default runApp;
import assert from 'assert';

function incrementString(str) {
    const postfixNumberStr = [...str].reduce((acc, el) => el == parseInt(el) ? acc + el : "", "");
    const postfixIncrementedNumber = postfixNumberStr.length !== 0 ? 
        (parseInt(postfixNumberStr) + 1).toString().padStart(postfixNumberStr.length, '0') : 1;
    return str.slice(0, str.length - postfixNumberStr.length) + postfixIncrementedNumber;
}

function doTest(input, expected) {
    const actual = incrementString(input);
    assert.strictEqual(actual, expected, `for string: "${input}"\n`);
}

function test() {
    doTest("foobar000", "foobar001");
    doTest("foobar999", "foobar1000");
    doTest("foobar00999", "foobar01000");
    doTest("foo", "foo1");
    doTest("foobar001", "foobar002");
    doTest("foobar1", "foobar2");
    doTest("1", "2");
    doTest("009", "010");
    doTest("fo99obar99", "fo99obar100");
}


function runApp() {
    test();
}