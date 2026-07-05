import identifierRegex from 'identifier-regex';
import {isMatch} from 'super-regex';

export default function isIdentifier(value, {checkReserved = true} = {}) {
	if (typeof value !== 'string') {
		throw new TypeError(`Expected a string, got \`${typeof value}\`.`);
	}

	// Prevent abuse.
	if (value.length > 100_000) {
		return false;
	}

	return isMatch(identifierRegex({checkReserved}), value, {timeout: 1000});
}
