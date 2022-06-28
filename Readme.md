[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][deps-image]][deps-url]

# `@pirxpilot/nanoassert`

Fork of [nanoassert] with added support for `DEBUG` flag.

## Usage

In `package.json`:

```json

 "browser": {
    "assert": "@pirxpilot/nanoassert"
  },

```

You have to set `DEBUG` flag in your code or pass it to the bundler.

## License

[ISC](LICENSE)

[nanoassert]: https://npmjs.org/package/nanoassert

[npm-image]: https://img.shields.io/npm/v/@pirxpilot/nanoassert
[npm-url]: https://npmjs.org/package/@pirxpilot/nanoassert

[build-url]: https://github.com/pirxpilot/nanoassert/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/workflow/status/pirxpilot/nanoassert/check

[deps-image]: https://img.shields.io/librariesio/release/npm/@pirxpilot/nanoassert
[deps-url]: https://libraries.io/npm/@pirxpilot%2Fnanoassert
