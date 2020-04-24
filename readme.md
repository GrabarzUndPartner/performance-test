# perfomance-test

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Performance Test

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `perfomance-test` dependency to your project

```bash
yarn add perfomance-test # or npm install perfomance-test
```

2. Add `perfomance-test` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'perfomance-test',

    // With options
    ['perfomance-test', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Thorn Walli <thorn.walli@grabarzundpartner.de>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/perfomance-test/latest.svg
[npm-version-href]: https://npmjs.com/package/perfomance-test

[npm-downloads-src]: https://img.shields.io/npm/dt/perfomance-test.svg
[npm-downloads-href]: https://npmjs.com/package/perfomance-test

[github-actions-ci-src]: https://github.com/GrabarzUndPartner/performance-test/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/GrabarzUndPartner/performance-test/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/GrabarzUndPartner/performance-test.svg
[codecov-href]: https://codecov.io/gh/GrabarzUndPartner/performance-test

[license-src]: https://img.shields.io/npm/l/perfomance-test.svg
[license-href]: https://npmjs.com/package/perfomance-test
