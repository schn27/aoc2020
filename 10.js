"use strict";

function calc() {
	let adapters = input.match(/\d+/g).map(Number).sort((a, b) => a - b);
	adapters = [0, ...adapters, Math.max(...adapters) + 3];

	const count1 = adapters.filter((value, i) => value - adapters[i - 1] == 1).length;
	const count3 = adapters.filter((value, i) => value - adapters[i - 1] == 3).length;
	const part1 = count1 * count3;

	const part2 = getNumberOfWays(adapters);

	return part1 + " " + part2;
}

function getNumberOfWays(list, cache = {}) {
	let res = cache[list.join(",")];

	if (res == undefined) {
		res = 1;

		for (let i = 1; i < list.length; ++i) {
			if (list[i + 1] - list[i - 1] <= 3) {
				res += getNumberOfWays(list.slice(i + 1), cache);
			}

			if (list[i + 2] - list[i - 1] <= 3) {
				res += getNumberOfWays(list.slice(i + 2), cache);
			}			
		}

		cache[list.join(",")] = res;
	}

	return res;
}

const test = `16
10
15
5
1
11
7
19
6
12
4`;

const input = `77
10
143
46
79
97
54
116
60
91
80
132
20
154
53
14
103
31
65
110
43
38
47
120
112
87
24
95
33
104
73
22
66
137
21
109
118
63
55
124
146
148
84
86
147
125
23
85
117
71
48
136
151
130
83
56
140
9
49
113
131
133
74
37
127
34
32
106
1
78
11
72
40
96
17
64
92
102
123
126
90
105
57
99
27
70
98
111
30
50
67
2
155
5
119
8
39`;
