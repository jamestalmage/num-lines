# num-lines [![Build Status](https://travis-ci.org/jamestalmage/num-lines.svg?branch=master)](https://travis-ci.org/jamestalmage/num-lines)

> Count the number of lines in a string.

Cross platform. Accounts for `\n` and `\r\n` line separators.

## Install

```
$ npm install --save num-lines
```


## Usage

```js
const numLines = require('num-lines');

numLines('foo');
//=> 1

numLines('foo \n bar');
//=> 2

numLines('foo \r\n bar');
//=> 2
```


## API

### numLines(str)

Returns the number of lines in `str`.

#### str

Type: `string`

A string who's lines you'd like to count!

## License

MIT © [James Talmage](http://github.com/jamestalmage)
