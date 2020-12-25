"use strict";

function calc() {
	const [cardPublicKey, doorPublicKey] = input.match(/\d+/g).map(Number);

	const transform = (n, subj) => (n * subj) % 20201227;

	let encryptionKey = 1;

	for (let n = 1; n != cardPublicKey;) {
		encryptionKey = transform(encryptionKey, doorPublicKey);
		n = transform(n, 7);
	}

	return encryptionKey;
}

const input = `14082811
5249543`;
