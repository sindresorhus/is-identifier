import test from 'ava';
import isIdentifier from './index.js';

const validItems = [
	'unicorn',
	'$foo',
	'foo_bar',
];

const invalidItems = [
	'true',
	'undefined',
	'1foo',
	' foo',
	'foo-bar',
];

test('valid', t => {
	for (const valid of validItems) {
		t.true(isIdentifier(valid), valid); // eslint-disable-line ava/assertion-arguments
	}
});

test('invalid', t => {
	for (const invalid of invalidItems) {
		t.false(isIdentifier(invalid), invalid); // eslint-disable-line ava/assertion-arguments
	}
});
