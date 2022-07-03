import * as fs from "fs";
import path from "path";
// import { writeFile } from 'fs/promises';
import { readFileSync } from "fs";
import * as openpgp from "openpgp";
import * as types from "../types/types";

const args = process.argv.slice(2);
// console.log(args);

/**
 * ### decrypt
 *
 * Decrypts a message with the user's private key, a session key or a password.
 * One of `decryptionKeys`, `sessionkeys` or `passwords` must be specified
 * (passing a combination of these options is not supported).
 *
 * @public
 * @param {Object} data                     - Data to be decrypted.
 * @param {String} data.cmd                 - Command to be executed.
 * @param {String} data.passphrase          - Passwords to decrypt the message.
 * @param {String} data.encryptedMessage    - The message object with the
 *                                            encrypted data.
 * @param {String} data.publicKey           - Public key enumeration base64
 *                                            encoded. This can be an array of
 *                                            keys or single key, used to
 *                                            decrypt the message.
 * @returns {Promise<String>}               - Decrypted message.
 *
 * @example
 * ```javascript
 * import { decrypt } from "crypto-lib";
 *
 * const data = {
 *  passphrase: "passphrase",
 *  encryptedMessage: "base64 encoded encrypted message",
 *  publicKey: "base64 encoded public key"
 * };
 *
 * decrypt(data).then(message => {
 *  console.log(message);
 * }
 * .catch(err => {
 *  console.log(err);
 * }
 * ```
 *
 */

export const decrypt = async (data: types.dataDecrypt): Promise<object> => {
  const message = Buffer.from(data.encryptedMessage, "base64").toString(
    "utf-8",
  );
  const passphrase = data.passphrase;

  const publicKeyArmored = Buffer.from(
    data.publicKey.toString(),
    "base64",
  ).toString("utf-8");
  const publicKey = await openpgp.readKey({ armoredKey: publicKeyArmored });

  const privateKeyBase64 = readFileSync(
    path.resolve(__dirname, "../key/rsa.key"),
  );
  const privateKeyArmored = Buffer.from(
    privateKeyBase64.toString(),
    "base64",
  ).toString("utf-8");
  const privateKey = await openpgp.decryptKey({
    privateKey: await openpgp.readPrivateKey({ armoredKey: privateKeyArmored }),
    passphrase,
  });

  const { data: decrypted, signatures } = await openpgp.decrypt({
    message: await openpgp.readMessage({ armoredMessage: message }),
    verificationKeys: publicKey, // optional
    decryptionKeys: privateKey,
  });
  console.log(decrypted); // "Hello Crypto Service APIs!"

  await signatures[0].verified; // throws on invalid signature
  console.log("Signature is valid");

  const decryptedMsg = await fs.createWriteStream(
    path.resolve(__dirname, "../data/decrypted.txt"),
  );

  decryptedMsg.write(decrypted);
  decryptedMsg.on("finish", () => {
    console.log("✅ Wrote decrypted message data to file");
  });
  decryptedMsg.end();
  return decrypted;
};

if (args instanceof Array && args.length) {
  if (args[0] === "decrypt") {
    const data = {
      passphrase: args[2],
      encryptedMessage: args[4],
      publicKey: args[6],
    };
    decrypt(data);
  }
  const data = {
    passphrase: args[1],
    encryptedMessage: args[3],
    publicKey: args[5],
  };
  decrypt(data);
}

export default decrypt;

//# sourceMappingURL=decrypt.js.map
// Language: typescript
