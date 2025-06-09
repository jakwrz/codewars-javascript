export default runApp;
import assert from 'assert';

class RomanNumerals {
    static romThs = ["", "M", "MM", "MMM"];
    static romHds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    static romDns = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    static romOns = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    static toRoman(num) {
        const thousands = this.romThs[Math.floor(num / 1000)];
        const hundreds = this.romHds[Math.floor((num % 1000) / 100)];
        const dozens = this.romDns[Math.floor((num % 100) / 10)];
        const ones = this.romOns[num % 10];
        return thousands + hundreds + dozens + ones;
    }

    static fromRoman(str) {
        let phr = str;
        let match = (lst, mlp) => { 
            const reversed = [...lst].reverse();
            for (let symbol of reversed) {
                if (phr.startsWith(symbol)) {
                    phr = phr.slice(symbol.length);
                    return lst.indexOf(symbol) * mlp;
                }
            }
            return 0;
        }
        return match(this.romThs, 1000) + 
            match(this.romHds, 100) + 
            match(this.romDns, 10) + 
            match(this.romOns, 1);
    }
}

function test() {
    assert.strictEqual(RomanNumerals.toRoman(1000), 'M');
    assert.strictEqual(RomanNumerals.toRoman(4), 'IV');
    assert.strictEqual(RomanNumerals.toRoman(1), 'I');
    assert.strictEqual(RomanNumerals.toRoman(1990), 'MCMXC');
    assert.strictEqual(RomanNumerals.toRoman(2008), 'MMVIII');

    assert.strictEqual(RomanNumerals.fromRoman('XXI'), 21);
    assert.strictEqual(RomanNumerals.fromRoman('I'), 1);
    assert.strictEqual(RomanNumerals.fromRoman('IV'), 4);
    assert.strictEqual(RomanNumerals.fromRoman('MMVIII'), 2008);
    assert.strictEqual(RomanNumerals.fromRoman('MDCLXVI'), 1666);
}


function runApp() {
    test();
}
