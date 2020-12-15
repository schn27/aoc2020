"use strict";

function calc() {
	const nums = input.match(/\d+/g).map(Number);

	const spoken = new Array(30000000);

	nums.forEach((num, i) => spoken[num] = i + 1);

	let last = nums[nums.length - 1];
	let delta = undefined;

	let part1 = undefined;

	for (let turn = nums.length + 1; turn <= 30000000; ++turn) {
		last = delta ? delta : 0;
		delta = turn - spoken[last];
		spoken[last] = turn;

		if (turn == 2020) {
			part1 = last;
		}
	}

	const part2 = last;

	return part1 + " " + part2;
}

const input = `0,14,6,20,1,4`;
