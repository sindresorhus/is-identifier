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
export default function isIdentifier(value: string);
