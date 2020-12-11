"use strict";

function calc() {
	let adapters = input.match(/\d+/g).map(Number).sort((a, b) => a - b);
	adapters = [...adapters, Math.max(...adapters) + 3];

	const diffs = adapters.map((value, i) => value - (adapters[i - 1] || 0));
	const part1 =  diffs.filter(d => d == 1).length * diffs.filter(d => d == 3).length;

	const part2 = getNumberOfWays(adapters);

	return part1 + " " + part2;
}

function getNumberOfWays(adapters) {
	const ways = {0: 1};

	adapters.forEach(v => ways[v] = (ways[v - 1] || 0) + (ways[v - 2] || 0) + (ways[v - 3] || 0));

	return ways[adapters[adapters.length - 1]];
}

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
