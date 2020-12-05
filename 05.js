"use strict";

function calc() {
	const ids = input.split("\n").map(s => 
		parseInt(s.replace(/[FL]/g, "0").replace(/[BR]/g, "1"), 2));

	ids.sort();

	const part1 = ids[ids.length - 1];

	const part2 = ids.filter((id, i) => (i > 0) && (id != ids[i - 1] + 1))[0] - 1;

	return part1 + " " + part2;
}

const input = `BBFFFBBLLR
BBFFFFFLRL
BFBFFFBLRR
FBBFFFFRLL
FFBFFFBLRR
BFBBBFFLLL
BFBBBFFLRR
FBBFBBFRLL
BFFBFBBLLL
BFBFBBFRRR
FBFBFFBLLR
FFFBBBFRLL
BFBBFBBRRR
FBFFBFBRRR
BFFBFFFLLL
FBBBFBFLRR
BFBBFBFRLR
BFFFFFBRRL
BFFBFFFRLR
FBBBBBFRLL
BFBBFBBLRL
BFFFBFBRLR
FBBBBFBLLR
BBFFFBFRRR
BFFBBBFLRL
BFBFBFFLLR
FFFBBBFLLR
BFBFFFFRRL
FFFBBFBLLR
FBFFFBFLRL
FBBBFBBRLL
FBBFBFFLLR
FBFBBFFLLL
FBBFFFFLLL
BFBFFBFRRL
FFBBBFBRLL
BFFBBFFLLR
BFBBBBBRLR
BFFBFFFRLL
FBBBBFFRRR
FFBBBFFRRL
BBFBFBBLRR
BBFFFFFLLR
FFBFBFBLRR
FBBBBFFLLR
BBFBFBBRLR
FFBFFBFRLR
BFBBFFFLRL
FFBFBFFLLR
FFBFBBFRRR
BBFFFBFLLL
BFFFBBFRLL
FFBFBBFLRR
FBBBFFFRLL
FBBFBFBRLR
BFFFFFBRLR
BFBFBFBLRL
FBBBBFBLRL
BBFFFFBLRR
FBBBFFFRRR
FFBBFFBLRL
FBFBFFFRRL
FFBFBBFLLL
BBFFFBBRLR
FBFBFFBRRR
BBFFBBFRLR
BFBBBFBLLR
BFFBFBBLLR
FBBBFBBLRR
FFBFBBFLRL
BFBFFBBRLR
BFBBBFFLRL
BFFFFBBRLR
BFBBBFBRRL
BFBFBBBRRR
FFBFFBBLRR
FBFBBBBRRL
FFBFFFBRLL
FBFFFFBLLL
FFBBBFBLRR
BBFFBBFLLL
BFFBFBBLRR
FBBBFBBRRL
FFBFFBFRRR
BFBBFFBRLL
FBFFBBBLRR
FFBFFBFLLL
FBFBFBFRRL
BBFFFFFLRR
FFBBFBFRLL
BFBBFFFRLL
FBBBBFFLLL
BFFBFBBRRL
FBFBBBFLRR
FBBBBFFLRR
FBFFBBFLLL
BFFFBBFRRL
BFBBBFBRLL
BFBFBBFRLL
FBFFFFBRLL
BBFBFBBLLL
FFBBBFBLLR
BBFFBBBLLR
FBBBBBBRRR
BBFFBFFRLL
FBBFFBBRRL
FFBBBBFRRR
FBFBBFBRRL
BFFFBFFRLL
BFBFBFFRLL
FBFBFFBLRR
BFBBFFFRRR
BFBBBBBLLL
BFBBFFFRLR
FFBFBFBRLL
FBFFBFBRRL
FFFBBBFRLR
BBFFFBFLLR
FBFBBBBRLR
FBFBBFFLRL
FBBBBFBLRR
FBFBBBBLLL
BFBBFBBLRR
FFBBFBFLRL
FFBFBBFRLL
BFFFBFBLRR
FFBFFBBRRR
FBFFFFFRLL
BFFFBFFRRR
BFFBBFBRLR
BFBFBBBLLL
BFFBBFBLLR
BFFBBBFLLL
BFFFBFFLRL
FBBFBFFLLL
FBBBBBFLRR
FBFBFBBRRR
BFBBBBFLLR
FBFFBFBLLR
BBFFBBBLLL
BBFFBBBRLR
FFBBBFFRRR
BBFFFBFLRR
FFFBBBBRRR
FFBFBFBRRR
FFFBBFFRLL
FBFFBBFRLR
BFFBBBBRRR
FBFBFFBLLL
BBFBFFBLRL
FFBFFBFLLR
BFFFBBBLRL
FBFFBFFLRR
FBFFBBBLLR
FBBFBFFLRR
BFFBFFFRRL
FBBFBBBLLL
BBFBFBFRRL
FBFFFFBRLR
BFBFBFBLRR
BFFBFBBRLL
BFBFBBFLRL
FBBBBFFRLR
BFFFBBFLLL
BFBBBFBLLL
FFBBBBFRRL
FFBFFFFLLR
FBFBFFBRLL
BBFBFBFLRL
FBBBBBBRLR
BFBFFFBLLR
BBFFBBFLRR
BBFFBBBRRR
FBFFFBFRLR
FFBBFFBLLL
BFFBFBFLLL
FBFFFFFLRL
BFFBBFFLRL
FBBBBBBRRL
BFFBFBBRLR
FBFBFBFLLL
BFFBFFFRRR
BBFFFFBRRR
BFFBBFFRRR
FBBFBBBLRL
FFBBFBBRLL
FBFFBBFRLL
BFBFFBBRRL
FBBFFFBLRL
BFBBFFBLRR
BBFFBFBRLR
FBFBFFBRLR
BBFFBFBRRL
FFBBFBBRLR
BFBFBFFLRR
BFFBFFFLRL
FFBBBFBRRL
FFBFFBBLRL
FBBFBBBRLR
FFFBBBBRLR
FBBFFFBLLR
FFBFBBBRRR
FFBBBFBRRR
BFFBFBFRLL
BFBBBBFLLL
BFBFFFFRLL
FBBBBBFRLR
BFFBFBFLRL
FBFFBFFRRL
BBFFBFFRRL
BFFBFBBRRR
FBFFFBBRRR
FFBBFBFRRR
BFBBBFBLRL
FFBBBFFLLL
BFFFBBBRRR
BFFBBBBRLL
BFBBBBBLRL
FBFFFBBLLL
FBFBBBFLLL
FFBBBFFRLR
FFBFFFFRLR
FFBFFBFRLL
BFBFBFFRRL
BFBFFBBRRR
FFFBBFFRRR
BFFFBFBLLR
FBFBFBFLRR
BFBFFFFLLL
FBBBFBBLLL
FBBFBBFRLR
FFBFBFFLRL
FBFFBFFLLR
BFBFBFBLLR
FBBFFFFRLR
FBFBFFBLRL
BFFFBFFLLR
BFBFBFBLLL
BFBBFBFLRR
BFFBBFFRLL
BFFFBBFRRR
BFBFFBBLLR
FBBFBBBLRR
FFBFFFBLRL
BFFFBBBRLR
BBFBFFBLLR
BBFBFBFRLL
FFFBBFBRRL
BFFFFBBLRR
BBFFFFFRRR
BFBBFBBRRL
BFFFFFFRLL
BFFFFFFLLL
FBFFBBBRLR
BBFBFFBRRL
BFFFBBFLRR
FBBFBFBLLR
FFBBBBBLLR
FBFBBFFRLL
BFBBFFFRRL
FFBBBFBRLR
FBBBFFFLRR
FFBBBFFRLL
FFBBBBBRLL
BFFFBBBLLR
FBBFFFFLLR
BBFBFFBLRR
FFBFBBFRRL
BBFBFBBLRL
BFBBBFBRRR
FFBFFBBRLL
FFBFBFFRRR
FBFBBFBLRL
BBFFFBBRRR
BFFBBBBLRR
BFBFBBFRLR
FBBBBFBRRR
FFBBFFBLRR
FFFBBBFLLL
BBFBFFFLLR
FFBFFBFRRL
BBFFFBFLRL
BFBFFFFRRR
BFFFFFFRRL
FFBFFFFLRR
BFBBBFBLRR
FFFBBBBLLR
BFFBBFFRLR
BBFFFBFRLR
BFFBFFBRLR
FFBBFFFLLR
FFBBFBFRRL
FBFBBBBLRL
FBBBFFBLLL
FBBBBBBLRR
FFBBFBBLRR
FBBFBBFRRL
FBBFFFFLRR
FFBBFFBRLR
FBFFFFBLRL
FBFFBFFRLR
BFBFFBFRRR
FFBFFFFRLL
BFBFFBBLRL
FBFFFBFRRR
BFFBBBFRLR
BFFBBFBRRL
BFBBBBFLRR
FFBFBBBRLL
FBFBBBFRLL
BFBFFFFLRR
BBFBFFFLLL
BFFBBBBLRL
FFBFBFBLLR
FBBFFFBRLL
BFFFFFBLLR
FBFBBFFRRR
FBFFBBFLRR
BFFFFFBLLL
FBFFFFFRRL
FFBBBFBLLL
FBBFFFFLRL
BBFBFFBRRR
FBFFBFBRLR
FBBBFBFLLR
BFFBBBBRRL
BFFFBBFLLR
BFFBFFBRLL
FFBFBBBLLR
FFBFBFFRLR
BFFBFFBLRR
BFBBBFFRRL
BFFBBFBLRL
FBFBFBFLRL
BBFBFBBRLL
FBFFFFBRRL
FFBBBBBRRR
BFBFFFBRRR
FFBFFBFLRL
BFFBBBFLRR
FBFBBFBRLL
BFBBBFFRRR
BFFBFFFLRR
BFBFFFFRLR
FBBBFBFLRL
FFFBBBFRRR
FBFBBFFRRL
BFFFBBFLRL
FBBBBFBRLR
FBBFBBFLLR
FBFBBBBLRR
FFBBBBBRRL
FFBBFFFLLL
FFBBFBBLLR
BBFFFBFRLL
BBFBFBBLLR
FBBFBFBLLL
FBFFBBFRRR
FBBBFBBRRR
BFBFBBFLLL
FBFBFBBRRL
BFBBFBFLRL
BFBBFBBLLL
FBBFBFFRLL
BBFFFBBLLL
FFBBFFFLRL
BFFBFFFLLR
BFFBBFBRRR
BFFBFFBLLL
BBFFBFBLRR
FBFBFBBLRR
BBFBFBFRLR
BFFFFBFLLL
FBBFBFFRLR
FBFBFBBRLL
BFFFFFBLRL
BFBBFBBLLR
BBFFBFFLLR
BBFFBFBLRL
BBFFBBBLRR
FBFFBFBLRL
BFFBBFBRLL
BFFBBFFLRR
FBBFFBFRRL
BBFBFFBLLL
BFBFBBBLRL
FFBFFFBLLR
FBBBFBFRLR
BFFFFBFRRR
BFBFBFBRRR
FBBBBBFLLR
BBFFBBFRRL
BBFFFFFRLR
FBFBFBBLLL
BFFFFBFLRR
BFFBBBFLLR
FBFBBFBRRR
BFBFBFFRLR
FBFBFBFRLR
BFBBFBFRRL
FFBBFFBLLR
FBBBBBFRRL
BFBFFFBRRL
BBFFBBBLRL
FBBBFFFLRL
BFFFBBBRRL
FBBFFBBLRL
FFBBBBBRLR
BFBFBBBRLR
FBFBFBBRLR
FFBBBBBLRL
FFBBFBFLLR
FBFBFBFLLR
FBFBBBBRLL
FBFFFFFLLL
BFFBFBFLLR
BFBBBBBRRL
FBBBBFFRLL
BFBFFFBLLL
FBFFBFBLRR
FBFBBFBLLR
FBBFFBFLRR
BBFFFBBRRL
FBBBFFBRLR
BFFBBFFLLL
FBFBBFFLRR
FFBBBBFRLR
FFBBBFFLRL
FFBBFFFRRL
BBFBFFFRRL
FBFBFFFRLL
BFBBBBFLRL
FBFFFBFLLR
FBFFBBBRLL
FBBBFBBRLR
BFBBBBBLLR
BFBBFFBLLL
BFBBFFFLLR
FBBFBFBLRR
BFFFBFFRRL
FFBFFFFRRR
FBFBFBBLLR
FFBBBBFLLL
FBFFFBFRRL
FBBBFFBRRR
BFBBFFFLRR
BBFFFFBRLR
FBBBFBFRLL
FFBFFFBRLR
FBFFFFBRRR
FFBFBFFLLL
BBFBFFBRLR
BFFBFBFRLR
FBBBBFBRLL
FBFBFFFRRR
BBFFBFFLRL
BFBFBBBLLR
FBBBBFFRRL
FBFBFBFRRR
FFBFBFBRRL
FBFBBFBLRR
FBBBFFBLRL
BBFFFBBLRL
FFBBFBFLRR
BFFFFFFLLR
BFBBBBBRLL
BFBFBFBRLL
BFBBFBFLLR
FBFFFFFLRR
BFFFBBBRLL
FBBBBBBRLL
BFBFBBBRRL
FBFFBFBRLL
FFFBBBBLRL
BFBFFFBRLR
FFBBBBFRLL
FFBBFFBRLL
BFFFBFBLLL
BFFBFFBLLR
BBFFFFFRRL
BBFFBBFRRR
BFBFFBFRLR
FBFFBFFRLL
FBBFBBBRRR
BFFFFBFRRL
BFFBFFBRRL
BBFBFFFLRR
BFBFBBFLLR
FFBFFBBLLL
FBFBFFFLRL
FBFBFFFLLR
BFBFBBFRRL
FFBFFFFLLL
BFFBFBBLRL
FBFFFBBRLL
FFFBBBBRRL
FBFFBBFLRL
FBFFFBBLLR
FFBFBFFRLL
FFBBBFFLLR
BFBFFBBLLL
BBFBFFBRLL
BFFFFBFLLR
BFFFFFFLRL
BBFFBFFRLR
FBBBFBFRRR
FFFBBFBLLL
FFBBFBBLLL
BFFFFBFLRL
BFBFBFFRRR
BFBFFFFLLR
BFFFBFBLRL
FBBBBBBLLR
BFFFFFFLRR
FFBFBFBLRL
BFFFFBBRRR
BFBBFBBRLR
BFBBFFBRRL
FFBBBBBLLL
FBFFFFBLLR
FBBBFFBRLL
FBBFBFBLRL
BFBFFFBRLL
FFBBFBBRRL
BFBBFBFRLL
FFBFFBBRRL
FBBFBFFRRR
BBFFFBBRLL
BBFFBFBLLL
FBFBFFFRLR
FBFFFBBLRL
FBFBBBFLRL
BFFFFFFRLR
FFFBBFFRRL
FBFBBFFLLR
BFFBFFBRRR
FBBBFBFRRL
BFBFFBFLRR
BBFBFFFRLL
BFFFFBFRLR
FFBFBBBLLL
FBBFFFBRLR
BFFFFBBRRL
BBFFBBBRLL
BBFBFBFLRR
BBFFBBBRRL
FBFFBBBLLL
BFBBFFFLLL
FBBFBBBRLL
BBFFBBFRLL
BFFBFBFLRR
FBFFBFFRRR
FBBFFBFRRR
BBFFBBFLRL
BBFFBFFLRR
FBBFFFBLRR
FFBFBFFLRR
BBFFBFFRRR
BFBFBFFLRL
FBFBBFBLLL
BBFFBFFLLL
BFBBBBFRRR
BBFFBFBRLL
FBFBBBFRRL
BFBFFFBLRL
FBBFFBBRLR
FFBFFFBRRR
BFBFBFBRRL
BFFFBFBRLL
FBFFFBBRLR
FFBFFBFLRR
BBFFBBFLLR
BBFFFBBLRR
BBFFFFBRLL
BBFBFFFRLR
FBFBFBFRLL
FBBFFBFRLL
FFFBBBFLRR
BFFFBFBRRL
BFFFFBBLRL
BFFFFFBLRR
BFFFFBFRLL
FBBFBFFRRL
BBFBFBFLLL
FBFFBBBLRL
FBBBFFBLRR
FBBFFBBLRR
FFFBBFBLRL
BFFFBFFLRR
FFBFFBBLLR
BFBFBFBRLR
BBFBFBFRRR
BFFBFFBLRL
FBFFBFFLLL
FBFBFFFLRR
FBBFBFBRRR
BBFFBFBRRR
FBBBBBBLLL
FBBFBBFLLL
FBBFFBFLLL
FFBBBBFLLR
FFBBBFFLRR
FBFBFFFLLL
FFBBBFBLRL
FFFBBFBRLL
BBFFFFBRRL
FFFBBFBLRR
BFBFBBBRLL
FBFBBBFRLR
FBBFFBBLLL
FBFBBBFLLR
FBFFBBFLLR
BFBBBBBRRR
FBBFFBFLLR
FBFFFBBRRL
BFBBBFFRLR
BFBBBFFLLR
FBFFFBBLRR
FFBFBBBLRL
BFFFBBBLLL
FFBFFFBRRL
BBFFFFFRLL
FFFBBFBRLR
FFFBBBBRLL
FBBFBBFLRR
FBBBBFBRRL
BFBBBBBLRR
BBFBFFFLRL
BFBFBBFLRR
BFBBFFBRLR
FBFFFFFRLR
FFBFFFBLLL
FBBFBFBRLL
BFBFFBBLRR
FBBBBFBLLL
FBBBFBFLLL
FBFFFBFLLL
BFFFFFBRRR
FBBFFBFLRL
BBFFBFBLLR
FBBFBBBLLR
FFBFFFFRRL
FBBFFBBLLR
BFFFFFBRLL
FBFBBFFRLR
FBBFFFBLLL
BFFBBBFRRR
BFFBBFBLRR
FFBBBBBLRR
FFBFFBBRLR
FFBFFFFLRL
FFBFBBBLRR
BFBFFBFLRL
FBFFBFFLRL
FFBBFFFRLR
BFBFBFFLLL
FFBFBFBRLR
FFBBFFBRRL
FFBBFBFRLR
FBBBFBBLLR
FBFBBBBRRR
FBBFFFFRRR
FBFFBBBRRL
BFBBBBFRLL
FBBBBBFLRL
FBBBBBBLRL
FFBFBBFLLR
BFBFFBFLLL
BFFBBBBRLR
FBFFFFFRRR
FBFBBBBLLR
BFBBBFBRLR
BFFBBBFRRL
BFFFBFFRLR
BFBBBBFRRL
BBFBFBFLLR
BFFFBBBLRR
FFBBFBBRRR
FBFFFBFRLL
FBBBFFFLLR
BFBFFFFLRL
FFBFBFFRRL
BBFFFFBLRL
BFFBBFBLLL
BFFBBBBLLL
FBBFFFFRRL
FBBFBFFLRL
BFFBFBFRRL
FBFFBBFRRL
FBBFFBBRRR
FFFBBBBLRR
FFBBFFBRRR
FBBBFFFRRL
FFBBFFFRLL
FFFBBBFRRL
FBFBFBBLRL
BFFBBBFRLL
FBBBBBFRRR
FBBFBFBRRL
BFFFFBBLLR
FBFBFFBRRL
BFBBFFBLRL
BFBFFBBRLL
BFBBBBFRLR
FFBFBBFRLR
FFBBFBBLRL
FBBBFFFRLR
BFBBBFFRLL
FBBBFFFLLL
BBFBFFFRRR
BFBFBBBLRR
FBFFBFBLLL
FFFBBFBRRR
BBFFFBFRRL
FBFFFFBLRR
BBFFFFBLLL
BBFFFFFLLL
FFBBFFFLRR
BFFBFBFRRR
BFFFBFBRRR
FBBBFFBLLR
BFBBFBFLLL
FFBBBBFLRL
FBBFFBFRLR
BFFFFBBLLL
FFBFBFBLLL
FBBFFBBRLL
FBBFFFBRRL
FBFFBBBRRR
BFFFBFFLLL
FBBBBBFLLL
BFFBBFFRRL
FBBFBBBRRL
BBFFFFBLLR
FBFBBBFRRR
FFBFBBBRRL
FFBFBBBRLR
FBBBFBBLRL
FFFBBBBLLL
BFBBFBBRLL
FBBFBBFRRR
BFFFFBBRLL
BFFFBBFRLR
FBBFBBFLRL
BFBBFBFRRR
FFBBBBFLRR
FFFBBBFLRL
FBFFFBFLRR
FBBFFFBRRR
BFBFFBFRLL
FBFBBFBRLR
BFBBFFBRRR
FFBBFBFLLL
FBFFFFFLLR
BFBBFFBLLR
FBBBBFFLRL
FFFBBFFRLR
BFBFFBFLLR
FFBBFFFRRR
FBBBFFBRRL
BFFFFFFRRR`;
