/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/

// game loop
while (true) {
    let heightArr = [];
    
    for (let i = 0; i < 8; i++) {
        let mountainH = parseInt(readline()); // represents the height of one mountain.
        heightArr.push(mountainH);
    }
    
    let fire = heightArr.indexOf(Math.max(...heightArr));

    // Write an action using print()
    // To debug: printErr('Debug messages...');

    print(fire); // The index of the mountain to fire on.
}