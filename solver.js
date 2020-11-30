const puzzle = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
];


solve(puzzle);
console.table(puzzle)

function canPlugin(row, col, x) {

    const horizontal = [...puzzle[row]]
    const vertical = puzzle.map (r => r[col])
    const box3x3 =[]
    for (let r = Math.floor(row/3)*3; r < Math.floor(row/3)*3 +3 ; r++)
        for (let c = Math.floor(col/3)*3; c < Math.floor(col/3)*3 +3 ; c++)
            box3x3.push(puzzle[r][c])

    return !(horizontal.includes(x) || vertical.includes(x) || box3x3.includes(x))
}

function getNextSpot () {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (puzzle[i][j] === 0)
            return ({i,j})
        }
    }
    return null
}

function solve() {
    const spot = getNextSpot ()
    if (!spot)
        return true
    const {i,j} = spot

    for (let num = 1; num <= 9; num++) {
        if (canPlugin(i, j, num)) {
                puzzle[i][j] = num;
            if (solve(puzzle)) {
                return true;
            } else {
                puzzle[i][j] = 0;
            }
        }
    }
    return false;
}
