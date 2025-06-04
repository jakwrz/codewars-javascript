export default runApp;
import assert from 'assert';

function stripComments(text, markers) {
    let result = text.endsWith('\n') ? text : text.trimEnd();
    if (markers.length === 0) {
        result = result.split("\n").map(line => line.trimEnd()).join("\n");
    } else {
        for (let marker of markers) {
            result = stripComment(result, marker);
        }
    }
    return result;
}

function stripComment(text, marker) {
    let result = "";
    const escaped = marker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    for (let line of text.split("\n")) {
        const words = line.split(new RegExp(escaped));
        result += words[0].trimEnd() + "\n";
    }
    return result.slice(0, -1);
}

function test() {
    const result = stripComments("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
    assert.equal(result, "apples, pears\ngrapes\nbananas");

    const result2 = stripComments("aa bb cc ", [])
    assert.equal(result2, "aa bb cc");

    const result3 = stripComments("\nNUbChQthU\\i$rcoZoz$D@CgJ\nlE\n", [])
    assert.equal(result3, "\nNUbChQthU\\i$rcoZoz$D@CgJ\nlE\n");

    const result4 = stripComments("Fc\n \nWec-kb$GCf iF@WLK", ["-","+","/","\\"])
    assert.equal(result4, "Fc\n\nWec");
}


function runApp() {
    test();
}