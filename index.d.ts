export type Options = {
	/**
	Reject reserved words and global properties like `if`, `await`, and `undefined`.

	These are valid identifier syntax but should not be used as variable names, so they are rejected by default. Disable this when you only care about the syntax, such as for property keys (`{if: 1}`) or dot notation (`foo.for`), where they are allowed.

	@default true

	@example
	```
	import isIdentifier from 'is-identifier';

	isIdentifier('for', {checkReserved: false});
	//=> true
	```
	*/
	readonly checkReserved?: boolean;
};

/**
Check if a string is a valid [JavaScript identifier](https://developer.mozilla.org/en-US/docs/Glossary/Identifier).

@example
```
import isIdentifier from 'is-identifier';

isIdentifier('foo');
//=> true

isIdentifier('1kg');
//=> false

isIdentifier('await'); // Reserved identifier
//=> false
```
*/
export default function isIdentifier(value: string, options?: Options): boolean;
