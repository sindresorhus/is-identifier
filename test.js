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

test('checkReserved: false', t => {
	for (const valid of validItems) {
		t.true(isIdentifier(valid, {checkReserved: false}), valid); // eslint-disable-line ava/assertion-arguments
	}

	// Reserved words are now allowed, syntax is still checked
	t.true(isIdentifier('true', {checkReserved: false}));
	t.true(isIdentifier('undefined', {checkReserved: false}));
	t.true(isIdentifier('for', {checkReserved: false}));

	// Syntax errors are still rejected
	t.false(isIdentifier('1foo', {checkReserved: false}));
	t.false(isIdentifier(' foo', {checkReserved: false}));
	t.false(isIdentifier('foo-bar', {checkReserved: false}));
});
