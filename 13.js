"use strict";

function calc() {
	const timestamp = input.match(/\d+/).map(Number);
	const ids = input.split("\n")[1].split(",").map(Number).map(id => id ? id : 0);

	const t = ids.filter(id => id).map(id => [id, Math.ceil(timestamp / id) * id - timestamp]).sort((a, b) => a[1] - b[1]);
	const part1 = t[0][0] * t[0][1];

	const pairs = ids.map((id, i) => [id, id - i % id]).filter(p => p[0]);

	// Chinese Remainder Theorem
	// https://www.geeksforgeeks.org/chinese-remainder-theorem-set-2-implementation/
	const prod = pairs.reduce((a, p) => a * p[0], 1);
	const part2 = pairs.reduce((a, p) => (a + BigInt(p[1]) * BigInt(prod / p[0]) * BigInt(inv(prod / p[0], p[0]))), BigInt(0)) % BigInt(prod);

	return part1 + " " + part2;
}

// https://www.geeksforgeeks.org/multiplicative-inverse-under-modulo-m/ 
function inv(a, m) { 
	if (m == 1) {
	   return 0;
	}

	let m0 = m;
	let x0 = 0;
	let x1 = 1;

	while (a > 1) {
		const q = Math.floor(a / m);
		[a, m] = [m, a % m];
		[x0, x1] = [x1 - q * x0, x0];
	}

	if (x1 < 0) {
	   x1 += m0;
	}

	return x1;
}

const input = `1000677
29,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,661,x,x,x,x,x,x,x,x,x,x,x,x,13,17,x,x,x,x,x,x,x,x,23,x,x,x,x,x,x,x,521,x,x,x,x,x,37,x,x,x,x,x,x,x,x,x,x,x,x,19`;
