// This function determines the new indexes of the left side and
// the right side of the height of players whose sum equals
// the number required.
// Inputs: lIndex: Current left index on table
//         rIndex: Current right index on table
//         number: input number
//          table: sorted table
// Outputs: lIndex: new left index on table
//          rIndex: new right index on table
function indexSearch(lIndex, rIndex, number, table) {
  if (table[lIndex].height + table[rIndex].height >= number) {
    while (table[lIndex].height + table[rIndex].height > number) {
      rIndex--;
      if (rIndex === lIndex) {
        lIndex = -1;
        return [lIndex, rIndex];
      }
    }
  } else {
    while (table[lIndex].height + table[rIndex].height < number) {
      lIndex++;
      if (rIndex === lIndex) {
        lIndex = -1;
        return [lIndex, rIndex];
      }
    }
  }
  return [lIndex, rIndex];
}

// This function prints on console the pairs of players whose high
// add up to the number the user enter. If there is no match,
// the app prints on console "No matches found".
// Inputs: number: The user input number
//          table: The sorted table.
// Outputs: result: array with the pairs that match. This output
//                  is created to test the function
function pairs(number, table) {
  let lIndex = 0;
  let rIndex = table.length - 1;
  let result = [];
  if (
    number < table[0].height + table[1].height ||
    number > table[table.length - 1].height + table[table.length - 2].height
  ) {
    console.log("No matches found");
    return result;
  }
  [lIndex, rIndex] = indexSearch(lIndex, rIndex, number, table);
  if (lIndex === -1) return result;
  while (table[lIndex].height <= table[rIndex].height) {
    if (
      table[lIndex].height === table[rIndex].height &&
      table[lIndex].players.length > 1
    ) {
      for (let j = 0; j < table[lIndex].players.length; j++) {
        for (let k = j + 1; k < table[lIndex].players.length; k++) {
          let strLeft = `${table[lIndex].players[j].first_name} ${table[lIndex].players[j].last_name}`;
          let strRight = `${table[rIndex].players[k].first_name} ${table[rIndex].players[k].last_name}`;
          let str = `${strLeft} - ${strRight}`;
          result.push(str);
          console.log(str);
        }
      }
    } else {
      for (let n = 0; n < table[lIndex].players.length; n++) {
        for (let k = 0; k < table[rIndex].players.length; k++) {
          let strLeft = `${table[lIndex].players[n].first_name} ${table[lIndex].players[n].last_name}`;
          let strRight = `${table[rIndex].players[k].first_name} ${table[rIndex].players[k].last_name}`;
          let str = `${strLeft} - ${strRight}`;
          result.push(str);
          console.log(str);
        }
      }
    }
    lIndex++;
    rIndex--;
    [lIndex, rIndex] = indexSearch(lIndex, rIndex, number, table);
    if (lIndex === -1) return result;
  }
  return result;
}

module.exports = pairs;
