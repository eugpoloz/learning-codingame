const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.

var mime = {};

for (let i = 0; i < N; i++) {
	var pt = readline().split(' ');
	mime[pt[0].toLowerCase()] = pt[1];
}

for (let i = 0; i < Q; i++) {
	const FNAME = readline();
	let ext = FNAME.split('.').slice(-1).pop().toLowerCase() || FNAME;

	print(ext !== FNAME && mime[ext] ? mime[ext] : 'UNKNOWN');
}
