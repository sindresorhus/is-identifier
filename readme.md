# is-identifier

> Check if a string is a valid [JavaScript identifier](https://developer.mozilla.org/en-US/docs/Glossary/Identifier)

## Install

```sh
npm install is-identifier
```

## Usage

```js
import isIdentifier from 'is-identifier';

isIdentifier('foo');
//=> true

isIdentifier('1kg');
//=> false

isIdentifier('await'); // Reserved identifier
//=> false
```

> [!NOTE]
> Although `globalThis`, `Infinity`, `NaN`, and `undefined` are [properties of the global object](https://tc39.es/ecma262/#sec-value-properties-of-the-global-object) and not identifiers, they are treated as reserved here because they should generally not be used as identifiers.

## API

### isIdentifier(value)

Returns a boolean for whether the given value is a valid JavaScript identifier.

## Related

- [to-valid-identifier](https://github.com/sindresorhus/to-valid-identifier) - Convert a string to a valid JavaScript identifier
- [identifier-regex](https://github.com/sindresorhus/identifier-regex) - Regular expression for matching valid JavaScript identifiers
- [reserved-identifiers](https://github.com/sindresorhus/reserved-identifiers) - Provides a list of reserved identifiers for JavaScript
