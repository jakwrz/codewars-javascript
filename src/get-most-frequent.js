export default runApp;
import assert from 'assert';

function getMostFrequent(json) {
    const frequencyMapper = list => list
        .reduce((acc, el) => (acc.set(el, acc.has(el) ? acc.get(el) + 1 : 1), acc), new Map());
    const mapReducer = map => [...map.entries()]
        .reduce((acc, [key, value]) => acc[1] > value ? acc : [key, value], [0, 0])[0];
        
    return json.temperature.map(list => mapReducer(frequencyMapper(list)));
}

function test() {
    const forecast_01 = {
        "temperature": [
            [15,17,19,21,21,21,20,16],
            [16,17,22,22,22,22,20,16],
            [12,17,19,20,20,20,20,18],
            [14,15,19,19,20,22,18,17],
            [15,17,24,24,24,20,20,20]
        ]
    };
    assert.deepStrictEqual(getMostFrequent(forecast_01), [21, 22, 20, 19, 20]);
}


function runApp() {
    test();
}