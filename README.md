# Chaincoin Message Verification and Signing for Bitcore-Chaincoin


[![NPM Package](https://img.shields.io/npm/v/bitcore-message-chaincoin.svg?style=flat-square)](https://www.npmjs.org/package/bitcore-message-chaincoin)
[![Build Status](https://img.shields.io/travis/ChainCoinUnlimited/bitcore-message-chaincoin.svg?branch=master&style=flat-square)](https://travis-ci.org/ChainCoinUnlimited/bitcore-message-chaincoin)
[![Coverage Status](https://coveralls.io/repos/github/ChainCoinUnlimited/bitcore-message-chaincoin/badge.svg?branch=master)](https://coveralls.io/github/ChainCoinUnlimited/bitcore-message-chaincoin?branch=master)

bitcore-message-chaincoin adds support for verifying and signing chaincoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main bitcore-chaincoin repo](https://github.com/ChainCoinUnlimited/bitcore-chaincoin) for more information.

## Getting Started

```sh
npm install bitcore-message-chaincoin
```

```sh
bower install bitcore-message-chaincoin
```

To sign a message:

```javascript
var bitcore = require('bitcore-lib-chaincoin');
var Message = require('bitcore-message-chaincoin');

var privateKey = bitcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/chaincoinunlimited/bitcore-chaincoin/blob/master/CONTRIBUTING.md) on the main bitcore-chaincoin repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

