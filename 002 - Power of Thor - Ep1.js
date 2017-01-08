/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var TX = parseInt(inputs[2]); // Thor's starting X position
var TY = parseInt(inputs[3]); // Thor's starting Y position
    
// set a variable to record where Thor should move
let move;

// game loop
while (true) {
    var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    // Write an action using print()
    // To debug: printErr('Debug messages...');
    
    // set Thor's movements
    if (lightY == TY) {
        if (lightX > TX) {
            move = "E";
            TX++;
        } else {
            move = "W";
            TX--;
        }
    } else if (lightX == TX) {
        if (lightY > TY) {
            move = "S";
            TY++;
        } else {
            move = "N";
            TY--;
        }
    } else if (lightY > TY) {
        if (lightX > TX) {
            move = "SE";
            TX++;
            TY++;
        } else {
            move = "SW";
            TX--;
            TY++;
        }
    } else if (lightX > TX) {
        if (lightY > TY) {
            move = "NE";
            TX++;
            TY--;
        } else {
            move = "NW";
            TX--;
            TY--;
        }
    }
    
    // A single line providing the move to be made: N NE E SE S SW W or NW
    print(move);
}