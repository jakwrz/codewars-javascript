export default runApp;
import assert from 'assert';

function sudoku(puzzle) {
    solve(puzzle);
    return puzzle;
}

function solve(puzzle) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (puzzle[i][j] === 0) {
                for (let el of filterOpts(puzzle, i, j)) {
                    puzzle[i][j] = el;
                    if (solve(puzzle)) {
                        return true;
                    }
                    puzzle[i][j] = 0;
                }
                return false;
            }
        }
    }
    return true;
}

function filterOpts(puzzle, i, j, opts = [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
    let used = puzzle[i].filter(el => el > 0);
    used.push(...puzzle.map(row => row[j]).filter(el => el > 0));
    used.push(...puzzle.filter((_, idx) => idx >= (i - i % 3) && idx <= (i - i % 3 + 2))
        .flatMap(row => row.slice(j - j % 3, j - j % 3 + 3)).filter(el => el > 0));
    return opts.filter(el => !used.includes(el));
}


function test() {
    const puzzle = [
      [5,3,0,0,7,0,0,0,0],
      [6,0,0,1,9,5,0,0,0],
      [0,9,8,0,0,0,0,6,0],
      [8,0,0,0,6,0,0,0,3],
      [4,0,0,8,0,3,0,0,1],
      [7,0,0,0,2,0,0,0,6],
      [0,6,0,0,0,0,2,8,0],
      [0,0,0,4,1,9,0,0,5],
      [0,0,0,0,8,0,0,7,9]];

    const solution = [
      [5,3,4,6,7,8,9,1,2],
      [6,7,2,1,9,5,3,4,8],
      [1,9,8,3,4,2,5,6,7],
      [8,5,9,7,6,1,4,2,3],
      [4,2,6,8,5,3,7,9,1],
      [7,1,3,9,2,4,8,5,6],
      [9,6,1,5,3,7,2,8,4],
      [2,8,7,4,1,9,6,3,5],
      [3,4,5,2,8,6,1,7,9]];

    assert.deepEqual(sudoku(puzzle), solution);
}

function runApp() {
    test();
}
