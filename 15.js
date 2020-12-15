"use strict";

function calc() {
	const nums = input.match(/\d+/g).map(Number);
	return getLastSpoken(nums, 2020) + " " + getLastSpoken(nums, 30000000);
}

function getLastSpoken(nums, turns) {
	const spoken = new Array(turns);
	nums.forEach((num, i) => spoken[num] = i + 1);

	let delta = undefined;
	let last = 0;

	for (let turn = nums.length + 1; turn <= turns; ++turn) {
		last = delta || 0;
		delta = turn - spoken[last];
		spoken[last] = turn;
	}

	return last;
}

const input = `0,14,6,20,1,4`;
