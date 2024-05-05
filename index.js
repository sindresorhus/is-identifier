import identifierRegex from 'identifier-regex';
import {isMatch} from 'super-regex';

const regex = identifierRegex();

export default function isIdentifier(value) {
	if (typeof value !== 'string') {
		throw new TypeError(`Expected a string, got \`${typeof value}\`.`);
	}

	// Prevent abuse.
	if (value.length > 100_000) {
		return false;
	}

	return isMatch(regex, value, {timeout: 1000});
}
