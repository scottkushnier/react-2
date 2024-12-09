const Dir = {
  UP: 1,
  DOWN: 2,
  LEFT: 3,
  RIGHT: 4,
};

function getGridElement(sa, row, col) {
  return sa[row - 1][col - 1];
}

function unroll(squareArray) {
  let curRow = 1; // were we are currently
  let curCol = 1;
  let topRow = 1; // shrinking bounds as we traverse
  let bottomRow = squareArray.length;
  let leftCol = 1;
  let rightCol = squareArray[0].length;
  let curDirection = Dir.RIGHT; // start by heading RIGHT
  let acc = [];
  while (topRow <= bottomRow && leftCol <= rightCol) {
    // while still have room to move
    acc.push(getGridElement(squareArray, curRow, curCol));
    // console.log([curRow, curCol], acc, [leftCol, rightCol, topRow, bottomRow]);
    // note that at each turn, current position is set on following conditional,
    //    except for last, so will need to update position explicitly then
    if (curDirection == Dir.RIGHT) {
      if (curCol == rightCol) {
        // if at right bound
        curDirection = Dir.DOWN; // turn down & we're done top row
        topRow++;
      } else {
        curCol++;
      }
    }
    if (curDirection == Dir.DOWN) {
      if (curRow == bottomRow) {
        // if at bottom
        curDirection = Dir.LEFT; // turn left & we're done rightmost column
        rightCol--;
      } else {
        curRow++;
      }
    }
    if (curDirection == Dir.LEFT) {
      if (curCol == leftCol) {
        // if at left bound
        curDirection = Dir.UP; // turn up & we're done bottom row
        bottomRow--;
      } else {
        curCol--;
      }
    }
    if (curDirection == Dir.UP) {
      if (curRow == topRow) {
        // if at top row
        curDirection = Dir.RIGHT; // turn right & we're done leftmost column
        leftCol++;
        curCol++; // need to push to right explicitly now, as was explained above
      } else {
        curRow--;
      }
    }
  }
  return acc;
}

// console.log(Dir.RIGHT);

module.exports = unroll;
