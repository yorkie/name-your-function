# name-your-function

Just rename your anonymous function in ES6.

### Installation

```sh
$ npm install name-your-function -g
```

### Usage

```sh
$ name-your-function ./src/js/
```

The above command would search for the `.js` files by the given path, and replace
the anonymous function with a random name:

```
{filename}_{random}
```

For example, in a file `buffer.js`, and an anonymous will be transpiled to:

```
buffer_9fe692
```

### License

MIT

