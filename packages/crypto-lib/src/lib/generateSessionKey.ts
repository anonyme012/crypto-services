import * as openpgp from "openpgp";

const args = process.argv.slice(2);

const generateSessionKey = async (data: {
  date: string;
  email: string;
  name: string;
  publicKey: string;
}) => {
  const publicKeyBase64 = data.publicKey;
  const publicKeyBuffer = Buffer.from(publicKeyBase64, "base64");
  const publicKey = publicKeyBuffer.toString('utf-8');

  const sessionKey =
    await openpgp.generateSessionKey({
      encryptionKeys: await openpgp.readKey(
        {
          armoredKey: publicKey,
        }
      ),
      date: new Date(),
      encryptionUserIDs: [{ name: data.name, email: data.email }],
      config: { aeadProtect: true },
    });
  console.log(sessionKey);
  return sessionKey;
}

/* Checking if the args variable is empty or not. */
if (args instanceof Array && args.length) {
  const data = {
    date: args[1],
    email: args[3],
    publicKey: args[5],
    name: args[7],
  };
  generateSessionKey(data);
}

/* Exporting the function `generateSessionKey` so that it can be used in other files. */
export default generateSessionKey;