# ⚙️ Crypto Lib

![Banner representing Crypto Lib](https://raw.githubusercontent.com/sebastienrousseau/crypto-service/master/assets/crypto-lib-logo.svg)

[![NPM Version](https://img.shields.io/npm/v/solid-js.svg?style=for-the-badge)](https://www.npmjs.com/package/@sebastienrousseau/crypto-lib)
[![Coverage Status](https://img.shields.io/coveralls/github/sebastienrousseau/crypto-service/solid.svg?branch=main&style=for-the-badge\&color=blueviolet)](https://coveralls.io/github/sebastienrousseau/crypto-service?branch=main)
[![Maintained with Lerna](https://img.shields.io/badge/maintained%20with-lerna-blue?style=for-the-badge)](https://lerna.js.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge&logo=)](https://opensource.org/licenses/MIT)
![Made with Love](https://raw.githubusercontent.com/sebastienrousseau/crypto-service/master/assets/made-with-love.svg)

**[Website](https://crypto-lib.io) • [Documentation](https://crypto-lib.io/docs/) 
• [Submit an Issue](https://github.com/sebastienrousseau/crypto-service/issues) 
• [Contributing Guidelines](https://github.com/sebastienrousseau/crypto-service/blob/master/.github/CONTRIBUTING.md)**

***

## 👋 Welcome to Crypto Lib

Crypto Lib is a powerful intuitive cryptographic JavaScript library that
encapsulates common algorithms, functions and provides an interface for
low-level cryptographic operations.

![divider][divider]

## ✨ Key Features

The cryptographic operations include:

- Authentication via Digital Signature,
- Confidentiality via Encryption and Decryption,
- Compression,
- Key Generation,
- Key Management,
- Pseudorandom Number Generation,
- Signature Verification.

This library is based on [OpenPGP.js][1] - a JavaScript implementation of the
OpenPGP protocol. It implements [RFC4880][2] and parts of [RFC4880bis][3].

Development of this library is hosted by [GitHub][4] at the [following page][5].
Source code is available to everyone under the standard [MIT license][6].

![divider][divider]

## ⏩ Getting Started

👉 Note: » Crypto Lib is a [Node.js][7] module available through the
[npm registry][8]. Before installing, [download and install Node.js][7].
Node.js 12.20.0 or higher is required.

This allows you to always be on the latest version when we release new builds
with automatic upgrades.

![divider][divider]

## 🔧 Installation

1️⃣ Install the Crypto Library via  [`npm`][8], [`yarn`][9] or [`pnpm`][10]
package managers:

- `npm i @sebastienrousseau/crypto-lib`
- `yarn add @sebastienrousseau/crypto-lib`
- `pnpm add @sebastienrousseau/crypto-lib`

For users who are unable to install the Crypto Lib, released builds can be 
manually downloaded from this repository's
[Releases page](https://github.com/sebastienrousseau/crypto-service/releases/).

### What's included

Within the download you'll find all the crypto lib source files grouped into
the *dist* folder.

You'll see something like this:

```shell
.
├── COPYRIGHT
├── Makefile
├── Report.txt
├── bin
│   ├── crypto-lib.d.ts
│   ├── crypto-lib.d.ts.map
│   ├── crypto-lib.js
│   ├── crypto-lib.js.map
│   ├── cryptolib.d.ts
│   ├── cryptolib.d.ts.map
│   ├── cryptolib.js
│   └── cryptolib.js.map
├── config
│   ├── config.d.ts
│   ├── config.d.ts.map
│   ├── config.js
│   └── config.js.map
├── enums.d.ts
├── enums.d.ts.map
├── enums.js
├── enums.js.map
├── index.d.ts
├── index.d.ts.map
├── index.js
├── index.js.map
├── key
│   ├── key.d.ts
│   ├── key.d.ts.map
│   ├── key.js
│   └── key.js.map
├── lib
│   ├── decrypt.d.ts
│   ├── decrypt.d.ts.map
│   ├── decrypt.js
│   ├── decrypt.js.map
│   ├── encrypt.d.ts
│   ├── encrypt.d.ts.map
│   ├── encrypt.js
│   ├── encrypt.js.map
│   ├── generate.d.ts
│   ├── generate.d.ts.map
│   ├── generate.js
│   ├── generate.js.map
│   ├── generateSessionKey.d.ts
│   ├── generateSessionKey.d.ts.map
│   ├── generateSessionKey.js
│   ├── generateSessionKey.js.map
│   ├── index.d.ts
│   ├── index.d.ts.map
│   ├── index.js
│   ├── index.js.map
│   ├── reformat.d.ts
│   ├── reformat.d.ts.map
│   ├── reformat.js
│   ├── reformat.js.map
│   ├── revoke.d.ts
│   ├── revoke.d.ts.map
│   ├── revoke.js
│   ├── revoke.js.map
│   ├── session.d.ts
│   ├── session.d.ts.map
│   ├── session.js
│   ├── session.js.map
│   ├── sign.d.ts
│   ├── sign.d.ts.map
│   ├── sign.js
│   ├── sign.js.map
│   ├── verify.d.ts
│   ├── verify.d.ts.map
│   ├── verify.js
│   └── verify.js.map
├── package.json
└── types
    ├── types.d.ts
    ├── types.d.ts.map
    ├── types.js
    └── types.js.map

5 directories, 72 files

```

2️⃣ Set up your app

You can get started with a simple app by running the following in your terminal:

```shell
> mkdir my-app
> cd my-app
> yarn add @sebastienrousseau/crypto-lib -D # or yarn or pnpm
> yarn start \
--name "Jane Doe" \
--email "jane@doe.com" \
--passphrase "123456789abcdef" \
--type "rsa" \
--curve "" \
--bits 2048 \
--expiration 0 \
--format armored \

```

3️⃣ Try it out and let us know what you think!

![divider][divider]

## ❯ Crypto Lib commands

The Crypto Lib accepts multiple types of options. Options are a list of flags
and other parameters that can control the behavior of the Crypto Lib as a whole.

Below is the full list of supported options for the Crypto Lib.

### Generating a new RSA key pair

[RSA][11] is a public-key algorithm for encrypting and signing messages. To
generate a Rivest-Shamir-Adelman (RSA) public key pair:

-   Open Terminal for Mac or Command Prompt for Windows,

-   Enter the following example command that will start the generation process
in the `dist/` directory.

```js
yarn start \
  --name "Jane Doe" \
  --email "jane@doe.com" \
  --passphrase "123456789abcdef" \
  --type "rsa" \
  --curve "" \
  --bits 2048 \
  --expiration 0 \
  --format armored \
  --sign true
```

This starts generating a 2048-bit RSA key pair, encrypts them with the password
provided and writes them to a file in the [key](src/key/) directory with a pgp
extension.

***

### Generating a new Elliptic-curve cryptography (ECC) key pair

[Elliptic-curve cryptography (ECC)][12] is an alternative technique to RSA. It
generates security between key pairs for public key encryption by using the
mathematics of elliptic curves. Elliptic curve cryptography provides stronger
security per bits of key, which allows for much faster operations.

Currently the following curves are supported:

| Curve           | Encryption | Signature | NodeCrypto | WebCrypto |
|:---------------:|:----------:|:---------:|:----------:|:---------:|
| curve25519      | ECDH       | N/A       | No         | No        |
| ed25519         | N/A        | EdDSA     | No         | No        |
| p256            | ECDH       | ECDSA     | Yes        | Yes       |
| p384            | ECDH       | ECDSA     | Yes        | Yes       |
| p521            | ECDH       | ECDSA     | Yes        | Yes       |
| brainpoolP256r1 | ECDH       | ECDSA     | Yes        | No        |
| brainpoolP384r1 | ECDH       | ECDSA     | Yes        | No        |
| brainpoolP512r1 | ECDH       | ECDSA     | Yes        | No        |
| secp256k1       | ECDH       | ECDSA     | Yes        | No        |

To generate an Elliptic Curve Cryptography (ECC) key pair:

-   Open Terminal for Mac or Command Prompt for Windows,

-   Enter the following example command that will start the generation process
in the `dist/` directory.

```js
yarn start \
  --name "Jane Doe" \
  --email "jane@doe.com" \
  --passphrase "123456789abcdef" \
  --type "ecc" \
  --curve curve25519 \
  --bits null \
  --expiration 0 \
  --format armored \
  --sign true
```

This starts generating an Elliptic Curve Cryptography (ECC) key pair, encrypts
them with the password provided and writes them to a file in the [key](src/key/)
directory with a pgp extension.

***

### Encrypting and Signing Data

Encryption is the transformation of data into a form in which it cannot be made
sense of without the use of some key. Such transformed data is referred to as
`ciphertext`.

Crypto Lib makes it easy and painless to encrypt and sign data.

To encrypt a message:

- Open Terminal for Mac or Command Prompt for Windows,

- Run the yarn start

- Enter the following example command that will start the encryption process
in the `dist/` directory.

```js
node dist/lib/encrypt.js \
  --passphrase '123456789abcdef' \
  --message 'Hello Crypto Service Suite APIs!'
```

***

### Decrypting and Verifying Signatures

Decryption restores encrypted data to to its original (cleartext or plaintext)
form. Decrypting data and verifying signatures is being done similarly in Crypto
Lib.

To decrypt a message:

-   Open Terminal for Mac or Command Prompt for Windows,
-   Enter the following example command that will start the decryption process
in the `dist/` directory.

```js
node dist/lib/decrypt.js \
  --passphrase '123456789abcdef' \
  --message 'LS0tLS1CRUdJTiBQR1AgTUVTU0FHRS0tLS0tCgp3Y0ZNQXpMNWFTdVU0RWM4QVEvL1RlZzN6bzFiMSszNW9lN3l6NDFpRS9LVlNZYUJYSEFESTNpbVJodlQKeXlRczdFc29iYTdoUUx4dFZESjEyc3ZNU25YUWk2Y1FVNXd4cGo1L3VENUFOT2ZuN0hVSkYrSExINlRNCjNBWktZNUFLRk40VUZBK0hQRy9GSHlaNVhxVzRLd0hpL3ZjVWxSejRreWJDc2VxYmZoY01hU0NJdHRKbwpmWkNOcTFZNEhiR1hBV1BQWXExV0tRZnl0RnRyWWlQODU3VE5hc21XNTJKUjVMQUZ5OFdzdnZNTmM3Z3AKQ0RFcUIyVWQwRmJSNEZOU2tvTXFhN3FScXFqS1V2ei9odU9ieVVsOW94RVpGVGNac1hwSVQ1QkE5WUtECmpvY1pVSE1hTjZkbnFJTk8rcWVBZWM4R1FjbEUxVVk0RWhNcEhjUktkZEJaY2pjaE0xbW9oaEMxb0Q4aQpUTVBlRU5XcDg0SGh3cVp1UjRNNmxUQjBqSUhZbytuMXpMbm0vRUFtcDdoc3VvSEFYY3pqSFhVYVE3M2IKOEZ5UWlENW1IMU1wWHRoWjVheXNRTklmRkY5TUdOQ1paWXExNitHSFQvbmJCTDNyUmU2dENCUUFRTnVaCksydnNQeThGZlJyYmVBR0llZHllOFZIUGJFYXNsNWF4TVBwc08yaUtjV3dNN1QvZjVaeG5FRUxWem5UeApHQnA5MHFKMUFUNGtVWVNOejYvZC9aT2JUVVV3WWdkKzdUNDdxQ3VTMjYxVlJpL0Jiblh1Z2pLRk90VlEKMEhpU1VKbTlCbGhFR2s3OWg3RGJuZmx0ZFc4dFRCNE9CdXJxUHRVaHRLS2hHL3JhYUY3YlFrVVowUktNCmQ0SllOM0sySmhBL2ovaHIySEE4ZUpWZ0NNVm9McXJyZW8xazNHbGxIWkxTd2RBQmJtaXpZL1JZd2JDUQpUeG91TW5KNjhvZmVtSHNrSW1MdGx2OUtBOElQVEY4UXp3enZRcmpNRGRtclg2V09QTGtKQ3JiV1JKbHcKV25NWlBkVGpzSzdicnVNOTByZXhLeFowSGZVL050V3BvZ251L3dOYVBHZ1NRbEZhdHZhclJFQlNEaExaCndNYVE2ZWkycUJLbXdDTGVERURlaU1BSWlSQVBad1d2R1Y2RlFWNW14V2xGdm9SaGRDeTc2TW5kWXNNTQoza1Nwb1doMVBYUWpWYWZLV2lhZHJJS2FOSllDZkY2bzE5Ty9NdlZITGFFV0tnM0lzRGtvMGdtQWZ5VE8KTngzb2dYdTV0VFpvelRyUzRUMUpsMUR3bnRZbGlrMWhINkNYK0ZGLzIzVzlHaHdTdlcreVgzZFlTeHZjCjFuMlBjVDY5QzdDTmZtcWpOT293d20wcjl6M0lWYlZ2dGk4ZFduVzNEZDVGS256d2VaUDhaZ2hudUl4SQptUzdrY0ZWTVd4d3p6SmptQjg3UGZPbmZtZ2k2b0NxbFRzMXJDRldTQVZqM3hzenFFRGRnT1B1QXcvdzQKWmZOSS9sSVhHdU1DakpKQlYzNTZCN2ExNkZacXVqK2ZtOUQwS1BYbGpjSEcydHFRTjVDbHVTUnhUZlBiCm42U3ZOZ2tkVTNGM3pYS3NxRW9iRzdzakg5WjZWZlJIZjlRcmN2ZXZHdWFIb2ZZQkROVzZmT3ZNODBURQpHNjkzS3BRdytEaDVnMzBzamhXbDRuMS9aZUROR0RYZ0dERGRUMU9WQXRrVTBTcm1vY0ZSM1hCUHprYnQKRmw3YlVkVG1oVFlHVys2VmRIUG9mOFZ0b1FrWVJma2YxK1hFaC9kNUFvTzdSSVZRQ29qb3pqTmhoVy9qCjg4VW56d0VqZ3VoK0VMbVFRS1ViUi9ydjg2djcyM0VtVkVSd3hvQTIvalZCbGVaaHpFOHdrY01HODM3VApLVlo3N0VHblRPcTBjbUkrang2Ri9SenRjbDRBUHN6eEJkUkVSM25HR3dqbGVIdjdpMndhQTYzbWNJLzcKM0I0dWZyVGczbHNMWDVlWVFDUnJrdXdwOVZKNzNlWmJiOTlLOU51ZDhNVGczNnE0cFhtNWRBd3ZLZzEwCm96c0t2MHVxa0tDclF1TFBWU1JtZkE9PQo9Yll1VQotLS0tLUVORCBQR1AgTUVTU0FHRS0tLS0tCg=='
```

![divider][divider]

## 🚥 Semantic Versioning Policy

For transparency into our release cycle and in striving to maintain backward
compatibility, `crypto-lib` follows [semantic versioning](http://semver.org/)
and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

![divider][divider]

## ✅ Changelog

- [GitHub Releases](https://github.com/sebastienrousseau/crypto-service/releases)

![divider][divider]

## ❤️ Contributing

Thank you for using Crypto Lib! If you like the library, it would be great if
you can give it a star ⭐ on [GitHub][5].

There are also many ways in which you can participate in this project, for
example:

* [Submit bugs and feature requests](https://github.com/sebastienrousseau/crypto-service/issues/new), and help us verify as they are checked in,
* Review [source code changes](https://github.com/sebastienrousseau/crypto-service/pulls), and help us improve our code quality,
* Review the [documentation](https://github.com/sebastienrousseau/crypto-service/docs) and make pull requests for anything from typos to additional and new content.

![divider][divider]

## 🥂 License

Copyright (c) Sebastien Rousseau. All rights reserved.

Licensed under the [MIT](LICENSE) license.

![divider][divider]

## 🏢 Acknowledgements

[Crypto Service Suite](https://crypto-service.co) is beautifully crafted by these
people and a bunch of awesome [contributors](https://github.com/sebastienrousseau/crypto-service/graphs/contributors).

| Contributors |
|---------|
|[![Sebastien Rousseau](https://avatars0.githubusercontent.com/u/1394998?s=250)](https://sebastienrousseau.co.uk)|
|[Sebastien Rousseau](https://github.com/sebastienrousseau)|

[1]: https://openpgpjs.org/
[2]: https://tools.ietf.org/html/rfc4880
[3]: https://tools.ietf.org/html/draft-ietf-openpgp-rfc4880bis-10
[4]: https://github.com
[5]: https://github.com/sebastienrousseau/crypto-service
[6]: https://github.com/sebastienrousseau/crypto-service/blob/main/LICENSE
[7]: https://nodejs.org/en/
[8]: https://www.npmjs.com/
[9]: https://yarnpkg.com/getting-started
[10]: https://pnpm.io/motivation
[11]: https://en.wikipedia.org/wiki/RSA_(cryptosystem)
[12]: https://en.wikipedia.org/wiki/Elliptic-curve_cryptography
[divider]: https://raw.githubusercontent.com/sebastienrousseau/crypto-service/master/assets/divider.svg
[getting started]: https://raw.githubusercontent.com/sebastienrousseau/crypto-service/master/assets/button-primary.svg 
[download]: https://raw.githubusercontent.com/sebastienrousseau/crypto-service/master/assets/button-secondary.svg 

