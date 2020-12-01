"use strict";

function calc() {
	const numbers = input.match(/\d+/g).map(Number);

	return getPart1(numbers) + " " + getPart2(numbers);
}

function getPart1(numbers) {
	for (let i = 0; i < numbers.length - 1; ++i) {
		for (let j = i + 1; j < numbers.length; ++j) {
			if (numbers[i] + numbers[j] == 2020) {
				return numbers[i] * numbers[j];
			}
		}
	}
}

function getPart2(numbers) {
	for (let i = 0; i < numbers.length - 2; ++i) {
		for (let j = i + 1; j < numbers.length - 1; ++j) {
			for (let k = j + 1; k < numbers.length; ++k) {
				if (numbers[i] + numbers[j] + numbers[k] == 2020) {
					return numbers[i] * numbers[j] * numbers[k];
				}
			}
		}
	}
}

const input = `1130
1897
1850
1218
1198
1761
1082
1742
1821
1464
1834
1413
1917
1746
1954
1942
1560
1227
1852
1976
1773
1404
1824
1011
1532
1306
1819
1739
1540
1973
1436
1196
1176
1856
1332
1617
1895
1749
1718
1536
1811
113
1008
1908
1799
1914
1603
1782
1980
1228
1838
2006
1953
1846
1903
1470
1774
1599
1446
1324
1054
1952
1928
1997
1764
1943
1932
1615
1428
1036
721
1097
1998
1033
1892
1904
1803
1825
1370
1836
1853
1963
1469
1385
246
1987
1153
178
1790
1927
1139
1865
1804
1974
1235
1681
1185
2009
1894
1141
1203
1808
1867
1274
1891
1779
1342
1920
851
1994
1975
1979
1880
1647
1365
448
1119
1256
1212
1268
1878
1805
1889
1870
1906
1959
1898
1305
1559
1088
1845
1783
1841
1864
1961
1267
1437
1823
801
1579
1538
1745
1972
1259
1899
1517
1940
1543
1882
1933
1240
1608
1263
1429
1197
1508
1631
1988
1350
1638
1800
1999
1822
1776
1896
1610
1831
1921
1535
1526
1491
1876
1476
1945
1702
1900
1814
1289
1992
1859
1967
1966
1283
2002
1195
1066
1924
1968
1835
1971
1977
1430
1844
1465
1595
1957
1472
219
1851
1955`;
