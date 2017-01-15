/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
const temps = readline().split(' '); // the n temperatures expressed as integers ranging from -273 to 5526; convert to array

// Write an action using print()
// To debug: printErr('Debug messages...');

var result = temps[0] || 0; // set up our initial result var to be either temps[0] or 0 if temps is falsy

// if array exists, we iterate over it and...
var findResult = temps.forEach((val, i) => {
    if (Math.abs(val) < Math.abs(result)) {
        result = val; // ...pass it actual number
    } else if (Math.abs(val) === Math.abs(result)) {
        val === result ? result = val : result = Math.abs(val);
        // ...pass it either actual or module number depending on the sameness of val and result
    } else {
        return; // ...don't change result at all
    }
});

print(result);