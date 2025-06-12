export default runApp;
import assert from 'assert';

function rot13(message){
    let encMessage = '';
    [...message].forEach(el => {
        const code = el.charCodeAt(el);
        encMessage += code >= 65 && code <= 90 ?
                String.fromCharCode((code + 13) > 90 ? code + 13 - 26 : code + 13) :
            code >= 97 && code <= 122 ? 
                String.fromCharCode((code + 13) > 122 ? code + 13 - 26 : code + 13) : 
            el;
    });
    return encMessage;
}




function test() {
   for (const [input, expected] of [["test", "grfg"], ["Test", "Grfg"]]) {
        assert.strictEqual(rot13(input), expected, `Test failed with messsage = '${input}'`);
    }
}


function runApp() {
    test();
}