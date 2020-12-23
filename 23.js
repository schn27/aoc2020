"use strict";

function calc() {
	const cups = input.match(/\d/g)
		.map(c => ({cup: +c, next: null}));

	cups.forEach((cup, i) => {
		cup.next = cups[(cups.length + i + 1) % cups.length];
	});

	let cur = cups[0];

	for (let i = 0; i < 10; ++i) {
		cur = move(cur);
		print(cur);
	}

	const part1 = 0;

	const part2 = 0;

	return part1 + " " + part2;
}

function move(cur) {
	const pick = cur.next;
	cur.next = cur.next.next.next.next;

	const remaining = [cur];

	for (let o = cur.next; o !== cur; o = o.next) {
		remaining.push(o.cup);
	}

	let dstCup = cur.next.cup;

	while (remaining.indexOf(dst) < 0) {
		--dst;
		if (dst <= 0) {
			dst = Math.max(...remaining);
			break;
		}
	}

	let dst = cur.next;
	while (dst.cup != dstCup) {
		dst = dst.next;
	}

	[dst.next, pick.next.next.next] = [pick, dst.next];

	return cur.next;
}

function print(cur) {
	const a = [cur.cup];

	for (let o = cur.next; o !== cur; o = o.next) {
		a.push(o.cup);
	}

	console.log(a);
}

const test = `389125467`;

const input = `253149867`;
