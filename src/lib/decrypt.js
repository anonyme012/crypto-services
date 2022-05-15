import * as openpgp from "openpgp";
import { readFile, writeFile } from "fs/promises";

/* Taking the arguments from the command line and logging them to the console. */
const args = process.argv.slice(2);
console.log(args);


/**
 * It reads the public and private keys from the file system, decrypts the private
 * key with the passphrase, and then decrypts the encrypted message with the public
 * and private keys
 * @returns The decrypted message.
 */
const decrypt = async() => {

  /* Reading the files from the file system. */
  let publicKeyArmored = await readFile("./src/key/rsa.pub.pgp", function(e) { if (e) {throw e;} });
  let privateKeyArmored = await readFile("./src/key/rsa.priv.pgp", function(e) { if (e) {throw e;} });
  // let encryptedMessage = await readFile("./src/data/encrypted.txt", function(e) { if (e) {throw e;} });
  let encryptedMessage = "-----BEGIN PGP MESSAGE-----\n\nwcBMA110yr3GkulyAQf+PCGL6Qad27b2ZVET8PRhgQIojiwxPcN2vMk1WD/n\n/l6tmQfweMys/vyYTmZfDI82nHGafOlwD6ypIIpCf8Ryi7qOpQXUtytsdhu1\nlHDvIPiY1lA0p7Xe655EVluuVGntarNHbbfpIxcd7QtAp4vN+e5sPWgEP5CD\n2dlNtsWXbGWUSIlGempnpfplGJ5rKZdhtJLTF6Vbwb5asnGtuy5fSo8XVedn\nHbg7GEr7R+PBsuZXNUEjYU/3vvC3wE7rD4CmEd0i2uRIX9evDH8Tw53r9JQF\nctZIJ0ZqR9bwNFhU9dTBOq0h21XX334wtZvr7Cne1G2YJqyMnoAgkGNMCK6W\nUdLAvwHutnzcWof7iZgEz9o7xWQtIfQlYebdyv3yazsH0CEWfq1hzDU56sQH\nVPQprnuPUX2Z1Mhi08LjF80Jrn1tXo6RnWrGEY7QK28eDhUXvRLFCshmmk+c\nFXWEP3SWxslTi4PidK+GzmFi7owjOVWdlTRPatESbAEcjiGcFeDwfrPnyJJv\ngVCgv2Yk05e5qmx6AE5JW0SbwQubV7P4d7PumtT5X5rvPKKRLvMpJmz5/aOX\njju+IpampP8L24lowT1f8TqBiiTufRc7ONdhuaFoAFqYIKUVW+HRIpp26uA3\ne2J2xam3QoEZASF6mOQl2HYdFb9FmnK7c95jSilsWcSruWYLQ0PtlWwW9HsE\nOXTBexDHt5wrnto9F+r61jirmMxoNa9r/uGIYSCiIofw21DhmOjBbK+E7y8m\nsrPKDy5TG2qiQ9GubWqEplAH1iYlrtE58BxWo3rTBoQBejuVueSQSvDyYgph\ntTXNM3lRajzSEeWBc0EuZ8EN+EMweyV9AdLB\n=PffN\n-----END PGP MESSAGE-----\n";
  let passphrase = "123456789abcdef";

  /* Reading the public key from the file system and converting it to a string. */
  const publicKey = await openpgp.readKey({ armoredKey: String(publicKeyArmored) });

  /* Decrypting the private key with the passphrase. */
  const privateKey = await openpgp.decryptKey({
    privateKey: await openpgp.readKey({ armoredKey: String(privateKeyArmored) }),
    passphrase
  });

  /* Destructuring the data from the decrypted message. */
  const { data: decrypted/*, signatures*/ } = await openpgp.decrypt({
    message: await openpgp.readMessage({ armoredMessage: String(encryptedMessage) }),
    verificationKeys: publicKey, // optional
    decryptionKeys: privateKey
  });

  /* Writing the decrypted message to a file. */
  // const decryptedMessage = await writeFile("./src/data/decrypted.txt", decrypted, function(e) { if (e) {throw e;} }); decryptedMessage;
  // console.log("❯ Decrypted message: \n\n" + decrypted);
  console.log(decrypted);
  return decrypted;
};
export default decrypt;

