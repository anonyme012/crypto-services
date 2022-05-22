![Banner representing Crypto Service](https://raw.githubusercontent.com/sebastienrousseau/crypto-service/master/assets/crypto-service-logo.svg)

![Codacy grade](https://img.shields.io/codacy/grade/40d370244f3843f389094afe7719c4e4?style=for-the-badge)
[![npm](https://img.shields.io/npm/v/@sebastienrousseau/crypto-service.svg?style=for-the-badge\&color=success)](https://www.npmjs.com/package/@sebastienrousseau/crypto-service)
[![Maintained with Lerna](https://img.shields.io/badge/maintained%20with-lerna-blue?style=for-the-badge)](https://lerna.js.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge&logo=)](https://opensource.org/licenses/MIT)
![Made with Love](/assets/made-with-love.svg)
[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B3308%2Fgithub.com%2Fsebastienrousseau%2Fcrypto-service.svg?type=small)](https://app.fossa.com/projects/custom%2B3308%2Fgithub.com%2Fsebastienrousseau%2Fcrypto-service?ref=badge_small)

# Welcome to Crypto Service

Crypto Service is a powerful and intuitive suite of security tools that provides
cryptographic functions and standardized APIs to manage encryption keys and
perform cryptographic operations such as key generation, data encryption,
digital signing, and signature verification.

Crypto Service code is safe by design, and runs lightning-fast. It is based
on [OpenPGP.js](https://openpgpjs.org/) - a JavaScript implementation of the
OpenPGP protocol. It implements [RFC4880](https://tools.ietf.org/html/rfc4880)
and parts of[RFC4880bis](https://tools.ietf.org/html/draft-ietf-openpgp-rfc4880bis-10).

Crypto Service can help you ensure the following:

- Authentication of communicating parties,
- Integrity of data,
- Message Level Encryption for encryption and non-repudiation.,
- Privacy of data.

[![Getting Started](https://raw.githubusercontent.com/sebastienrousseau/crypto-service/master/assets/button-primary.svg)](#getting-started)
[![Download Crypto Service v0.0.2](https://raw.githubusercontent.com/sebastienrousseau/crypto-service/master/assets/button-secondary.svg)](https://github.com/sebastienrousseau/crypto-service/archive/refs/tags/sebastienrousseau-crypto-service-0.0.2.zip)

## Getting Started

Here, you’ll find information about the how to use Crypto Service.

## Installing Crypto Service

The first step to using Crypto Service is to download and install the
application and other required components.

### Releases

#### Crypto Service v0.0.2

- Date: May 17, 2022
- Tag:sebastienrousseau-crypto-service-0.0.2

### Install using NPM or YARN

To install Crypto Service, use either npm or yarn as follows:

- `npm i @sebastienrousseau/crypto-service`
- `yarn add @sebastienrousseau/crypto-service`

### Install from GitHub

Clone the main repository to get all source files including build scripts: `git clone https://github.com/sebastienrousseau/crypto-service.git`

## What's included

Within the download you'll find all the crypto service source files grouped into
the *dist* folder.

You'll see something like this:

```shell
.
├── COPYRIGHT
├── LICENSE
├── Makefile
├── README.md
├── Report.txt
├── index.js
├── package.json
└── src
    ├── bin
    │   └── crypto-service.js
    ├── data
    │   ├── decrypted.txt
    │   └── encrypted.txt
    ├── key
    │   ├── ecc.priv.pgp
    │   ├── ecc.pub.pgp
    │   ├── rsa.priv.pgp
    │   └── rsa.pub.pgp
    ├── lib
    │   ├── README.md
    │   ├── decrypt.js
    │   ├── encrypt.js
    │   ├── generate.js
    │   └── revoke-key.js
    └── server.js

5 directories, 20 files

```

## 🔐 Crypto Service options

### Generating a new RSA key pair

[RSA](https://en.wikipedia.org/wiki/RSA_\(cryptosystem\)) is a public-key
algorithm for encrypting and signing messages.

To generate a Rivest-Shamir-Adelman (RSA) public key pair:

- Open Terminal for Mac or Command Prompt for Windows,
- Enter the following example command that will start the generation process.

```shell
yarn start --curve "" --email "jane@doe.com" --expiration 0 --format armored --name "Jane Doe" --passphrase 123456789abcdef --sign true --bits 4096 --type rsa
```

This starts generating a 2048-bit RSA key pair, encrypts them with the password
provided and writes them to a file in the [key](src/key/) directory with a pgp
extension.

### Generate a new Elliptic-curve cryptography (ECC) key pair

[Elliptic-curve cryptography
(ECC)](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography) is an
alternative technique to RSA. It generates security between key pairs for public
key encryption by using the mathematics of elliptic curves. Elliptic curve
cryptography provides stronger security per bits of key, which allows for much
faster operations.

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

- Open Terminal for Mac or Command Prompt for Windows,
- Enter the following example command that will start the generation process.

```shell
yarn start --curve curve25519 --email "jane@doe.com" --expiration 0 --format armored --name "Jane Doe" --passphrase 123456789abcdef --sign true --bits null --type ecc
```

This starts generating an Elliptic Curve Cryptography (ECC) key pair, encrypts
them with the password provided and writes them to a file in the
[key](src/key/) directory with a pgp extension.

### Encrypt Data

Encryption is the transformation of data into a form in which it cannot be made
sense of without the use of some key. Such transformed data is referred to as
`ciphertext`.

To encrypt a message:

- Open Terminal for Mac or Command Prompt for Windows,
- Enter the following example command that will start the encryption process.

```shell
node src/lib/encrypt.js --passphrase '123456789abcdef' --message 'Hello Crypto Service APIs!'
```

### Decrypt Data

Decryption restores encrypted data to to its original (cleartext or plaintext)
form.

To decrypt a message:

- Open Terminal for Mac or Command Prompt for Windows,
- Enter the following example command that will start the decryption process.

```shell
node src/lib/decrypt.js --passphrase '123456789abcdef' --message 'LS0tLS1CRUdJTiBQR1AgTUVTU0FHRS0tLS0tCgp3Y0JNQTExMHlyM0drdWx5QVFmOENmbnVZZFk2RmliY1Q1Z094SjVFY2dUME50ZGt6K2dQT0tKTkVoRngKV3dzSHJoM08rTWlrcnBUOElyTjFkbDEwcUpCeDZkVXNkK3dtZ0twdFJrdElVSm5weVZ1Z3RJQkE5MEdBClgxNWdHNFZRQkl0cHUyYmdNRnlKRnJtSS85UUtlNHpDZkV0dSs5SjU0VkRLNWNRRk5KakxPSC9LaklIaAppU2NqQmFvbFlHN1p6Vyt5OXVxTEVkZytYSW9qYXVER3dyRHdIdVFvT0k2NGRmNnJWQVhiZi9mL01iajUKSXdqdmE2UGI2QXZ3YXhjRlczQjFWcHhYajY0a3kzZ2Rxd0FpOXFOUkVmMjE3SU43RHpCMTJzcDRLZlozCkZ4NTdwUk5lekY0VTZPdis5WWU0SkJRMnR4UG5sNmlnUXBDNmpRR2lXWUpHMGJJQ3lIN2NUSDRwZGN2VwphTkxBMEFIU3dpZEQzRnZJRWpxSnRmMlJlZzVLMmtSbHpFNWFCRXlaayt5a3VvZ2pYV0dkWkYxb20yV2gKM3kwTE9Kb2RYOUJNYW9zYlpSN24za2JOb0dXRkRCTElpYnRLUmdvNmlwdGs1b3Iyd0lwWC9wM1ovaWtJCkZieDhpVnpqWHViQ2xZSzhrZlB3Zm5uVFRRSmsxV1VsWTBDZm9YRURMY1ZIbG9rMy9ReHB2TmphWEg2NwpsU1hmSmtxdDNXdVJ6K0xIM3p0ald3THlpeHpmNXRPNUhsTnhudjlKUkVPR0pqendsL3liUi8xLzR2TkMKeDJ1WmdmQTBHSXZqNHBDRnBNRTI3ODhLaTdRckxtemVrUUtRQzBsMFl3aU9abXZueUNmdDliNG9yMDFmCjd2WU8xQzV5dExGZTBVUnpPQktnZGxjajRSU2sxWnJKc3RNTS9qSVNQR2lnZjBOWFp5c2NyQTVnZ0pzcwpOZ0JLd1Q2M3dzQ3MyV0lxcS9QZ2ZCUTRjOUl4eXNydDM1Skgra0E3c2hIQ0s0Rk1RcVRTa2d1VWcyQVcKL0c4a3lDcnRXR1RIMFpsNjBNNmJLUmhpdEMxS0Y3R29hcW5sUDFoNmFydXZXUUM4eTRtY2dtellNR2FjCkxEZzNlMGVLRWVVTEVockdXY3ViZWlDeVJlU0tybWhwTmN5ODFucURDZkVsVUg0UVd6eEFlMmVNZTljPQo9UEs4dAotLS0tLUVORCBQR1AgTUVTU0FHRS0tLS0tCg=='
```

## 🚥 Semantic Versioning Policy

For transparency into our release cycle and in striving to maintain backward
compatibility, `crypto-service` follows [semantic versioning](http://semver.org/)
and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

## ✅ Changelog

- [GitHub Releases](https://github.com/sebastienrousseau/crypto-service/releases)

## ❤️ Contributing

Please read carefully through our
[Contributing Guidelines](https://github.com/sebastienrousseau/crypto-service/blob/master/.github/CONTRIBUTING.md)
for further details on the process for submitting pull requests to us.

Development Tools

- `yarn build` runs build.
- `yarn clean` removes the coverage result of npm test command.
- `yarn coverage` shows the coverage result of npm test command.
- `yarn lint` run ESLint.
- `yarn lint-fix` instructs ESLint to try to fix as many issues as possible..
- `yarn test` runs tests and measures coverage.

## 📖 Rules

We are committed to preserving and fostering a diverse, welcoming community.
Please read our [Code of Conduct](https://github.com/sebastienrousseau/crypto-service/blob/master/.github/CODE-OF-CONDUCT.md).

## ⭐️ Our Values

- We believe perfection must consider everything.
- We take our passion beyond code into our daily practices.
- We are just obsessed about creating and delivering exceptional solutions.

## ⚖️ License

This project is licensed under the MIT License - see the
[LICENSE](https://github.com/sebastienrousseau/crypto-service/blob/master/LICENSE)
file for details.

## 🏢 Acknowledgements

[The Crypto Service](https://crypto-service.dev) is beautifully crafted by these
people and a bunch of awesome [contributors](https://github.com/sebastienrousseau/crypto-service/graphs/contributors).

| Contributors |
|---------|
|[![Sebastien Rousseau](https://avatars0.githubusercontent.com/u/1394998?s=117)](https://sebastienrousseau.co.uk)|
|[Sebastien Rousseau](https://github.com/sebastienrousseau)|

Made with ❤ in London.
