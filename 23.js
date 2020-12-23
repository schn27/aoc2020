"use strict";

function calc() {
	const cups = input.match(/\d/g).map(Number);
	const maxCup = Math.max(...cups);

	const circle1 = getCircleAfterMoves(cups, maxCup, 100);
	const part1 = toArray(circle1).slice(1).join("");

	const bigCups = [...cups];
	let nextCup = maxCup;

	for (let i = 0; i < 1000000 - cups.length; ++i) {
		bigCups.push(++nextCup);
	}

	const circle2 = getCircleAfterMoves(bigCups, nextCup, 10000000);
	const part2 = circle2.next.cup * circle2.next.next.cup;

	return part1 + " " + part2;
}

function toArray(cups) {
	let res = [cups.cup];

	for (let o = cups.next; o !== cups; o = o.next) {
		res.push(o.cup);
	}

	return res;
}

function getCircleAfterMoves(cups, maxCup, n) {
	cups = cups.map(c => ({cup: c, next: null}));

	cups.forEach((cup, i) => {
		cup.next = cups[(cups.length + i + 1) % cups.length];
	});

	const index = Object.fromEntries(cups.map(c => [c.cup, c]));

	let cur = cups[0];

	while (n-- > 0) {
		const pick = cur.next;
		cur.next = cur.next.next.next.next;

		const picked = [cur.cup, pick.cup, pick.next.cup, pick.next.next.cup];

		let dstCup = cur.cup;

		while (picked.indexOf(dstCup) >= 0) {
			if (--dstCup <= 0) {
				dstCup = maxCup;
			}
		}

		const dst = index[dstCup];

		[dst.next, pick.next.next.next] = [pick, dst.next];

		cur = cur.next;
	}

	return index[1];
}

const test = `389125467`;

const input = `253149867`;
