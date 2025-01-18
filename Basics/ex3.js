/*Write a program that creates a string that represents an 8x8 grid, using newline
characters to separate lines. At each position of the grid there is either a
space or a # character. The characters should form a chessboard.*/
let str1 = "# # # #"; 
let str2 = " # # # #"; 
let grid = "";

for (let i = 0; i < 8; i++) {
    if (i % 2 === 0) {
        grid += str1 + "\n";
    } else {
        grid += str2 + "\n"; 
    }
}

console.log(grid); 
