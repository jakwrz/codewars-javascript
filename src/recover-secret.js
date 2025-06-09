export default runApp;
import assert from 'assert';

function recoverSecret(triplets) {
    const letters = [...new Set(triplets.flat())];
    let hierarchies = [];
    for (let triplet of triplets) {
        hierarchies.push(hierarchy(triplet[0], triplet[1]));
        hierarchies.push(hierarchy(triplet[0], triplet[2]));
        hierarchies.push(hierarchy(triplet[1], triplet[2]));
    }

    letters.sort((a, b) => {
        for (let compare of hierarchies) {
            const result = compare(a, b);
            if (result !== 0) {
                return result;
            }
        }
        return 0;
    });

    return letters.reverse().join('');
}

function hierarchy(first, second) {
    return function(a, b) {
        if (a === first && b === second) {
            return 1;
        } else if (a === second && b === first) {
            return -1;
        } else {
            return 0;
        }
    }
}

function test() {
    let triplets1 = [
        ['t','u','p'],
        ['w','h','i'],
        ['t','s','u'],
        ['a','t','s'],
        ['h','a','p'],
        ['t','i','s'],
        ['w','h','s']
    ];
    let secret1 = "whatisup";
    assert.deepEqual(recoverSecret(triplets1), secret1);
}


function runApp() {
    test();
}
