/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline());
var s = [];
for (var i = 0; i < N; i++) {
  s.push( parseInt(readline()) );
}

var answer = s.sort((a, b) => a - b).reduce((acc, curr, i, arr) => acc = Math.abs(arr[i + 1] - curr) < acc ? Math.abs(arr[i + 1] - curr) : acc, s[s.length - 1]);

print(answer);
