export default runApp;
import assert from 'assert';

function getPINs(obs) {
    const p = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
    const map = new Map([['0', ['0', '8']]]);
    for (let i = 0; i < p.length; i++) {
        for (let j = 0; j < p[i].length; j++) {
            map.set(p[i][j], [...new Set([p[i][j], 
                p[Math.min(i+1, 2)][j], p[Math.max(i-1, 0)][j], 
                p[i][Math.min(j+1, 2)], p[i][Math.max(j-1, 0)]])
            ]);
        }
    }
    map.set('8', [...new Set([...map.get('8'), '0'])]);
    const cbs = obs.split('').map(el => map.get(el));

    return rec(cbs);
}

function rec(cbs, tmp = '', acc = []) {
    if (tmp.length == cbs.length) {
        acc.push(tmp);
    } else {
        const i = tmp.length;
        for (let j = 0; j < cbs[i].length; j++) {
            rec(cbs, tmp + cbs[i][j], acc);
        }
    }
    return acc;
}


function test() {
    const expectations = {
        '8': ['5', '7', '8', '9', '0'],
        '11': ['11', '22', '44', '12', '21', '14', '41', '24', '42'],
        '369': ['339','366','399','658','636','258','268','669','668','266','369','398','256','296','259','368','638','396','238','356','659','639','666','359','336','299','338','696','269','358','656','698','699','298','236','239']
    };

    for (let pin in expectations) {
        let expected = expectations[pin].sort(), mySolution = getPINs(pin).sort();
        assert.deepEqual(mySolution, expected);
    }
}

function runApp() {
    test();
}
