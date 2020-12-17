"use strict";

function calc() {
	let space3 = new Set();
	let space4 = new Set();

	input.split("\n").forEach((line, r) => line.split("").forEach((e, c) => {
		if (e == "#") {
			space3.add([r, c, 0].join(":"));
			space4.add([r, c, 0, 0].join(":"));
		}
	}));

	for (let cycle = 0; cycle < 6; ++cycle) {
		space3 = getNextState(space3, getNeighbors3);
		space4 = getNextState(space4, getNeighbors4);
	}

	return space3.size + " " + space4.size;
}

function getNextState(space, getNeighbors) {
	const newSpace = new Set();

	const candidates = new Set(space);
	space.forEach(k => getNeighbors(k).forEach(e => candidates.add(e)));

	candidates.forEach(k => {
		const n = getNeighbors(k).filter(k => space.has(k)).length;

		if ((n == 3) || (space.has(k) && n == 2)) {
			newSpace.add(k);
		}
	});

	return newSpace;
}

function getNeighbors3(k) {
	const [x, y, z] = k.split(":").map(Number);

	let neighbours = [];

	for (let xx = x - 1; xx <= x + 1; ++xx) {
		for (let yy = y - 1; yy <= y + 1; ++yy) {
			for (let zz = z - 1; zz <= z + 1; ++zz) {
				if (xx != x || yy != y || zz != z) {
					neighbours.push([xx, yy, zz].join(":"));
				}
			}
		}
	}

	return neighbours;
}

function getNeighbors4(k) {
	const [x, y, z, w] = k.split(":").map(Number);

	let neighbours = [];

	for (let xx = x - 1; xx <= x + 1; ++xx) {
		for (let yy = y - 1; yy <= y + 1; ++yy) {
			for (let zz = z - 1; zz <= z + 1; ++zz) {
				for (let ww = w - 1; ww <= w + 1; ++ww) {
					if (xx != x || yy != y || zz != z || ww != w) {
						neighbours.push([xx, yy, zz, ww].join(":"));
					}
				}
			}
		}
	}

	return neighbours;
}

const input = `...###.#
#.#.##..
.##.##..
..##...#
.###.##.
.#..##..
.....###
.####..#`;
