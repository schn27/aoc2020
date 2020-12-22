"use strict";

function calc() {
	const player1 = input.split("\n\n")[0].match(/^\d+/gm).map(Number);
	const player2 = input.split("\n\n")[1].match(/^\d+/gm).map(Number);

	const getScore = (deck) => deck.reverse().reduce((a, e, i) => a + e * (i + 1), 0);

	const part1 = getScore(getWinner(player1, player2));

	const part2 = getScore(getWinner2(player1, player2)[1]);

	return part1 + " " + part2;
}

function getWinner(player1, player2) {
	const p1 = [...player1];
	const p2 = [...player2];

	while (p1.length != 0 && p2.length != 0) {
		const c1 = p1.shift();
		const c2 = p2.shift();
		
		if (c1 >= c2) {
			p1.push(c1, c2);
		} else {
			p2.push(c2, c1);
		}
	}

	return p1.length > 0 ? p1 : p2; 
}

function getWinner2(player1, player2) {
	const track = new Set();

	const p1 = [...player1];
	const p2 = [...player2];

	while (p1.length > 0 && p2.length > 0) {
		const state = p1.join(":") + " " + p2.join(":");

		if (track.has(state)) {
			return [true, p1];
		} else {
			track.add(state);
		}

		const c1 = p1.shift();
		const c2 = p2.shift();

		let p1Win = c1 > c2;

		if (p1.length >= c1 && p2.length >= c2) {
			p1Win = getWinner2(p1.slice(0, c1), p2.slice(0, c2))[0];
		}

		if (p1Win) {
			p1.push(c1, c2);
		} else {
			p2.push(c2, c1);
		}
	}

	return [p1.length > 0, p1.length > 0 ? p1 : p2]; 
}


const input2 = `Player 1:
9
2
6
3
1

Player 2:
5
8
4
7
10`;

const input = `Player 1:
26
8
2
17
19
29
41
7
25
33
50
16
36
37
32
4
46
12
21
48
11
6
13
23
9

Player 2:
27
47
15
45
10
14
3
44
31
39
42
5
49
24
22
20
30
1
35
38
18
43
28
40
34`;
