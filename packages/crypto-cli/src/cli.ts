#!/usr/bin/env node

import { Command } from './commands/index'
import { welcome } from "./helpers/banner";
import format from 'kleur';
import prompts from 'prompts';

const title = '🔐 Crypto Command Line Interface (CLI)';
const description = 'Crypto CLI is a simple, yet powerful, command line interface that can be used to perform common cryptographic operations from the command prompt or terminal.';

welcome();
console.log(title);
console.log("\n");
console.log(description);
console.log("\n");

(async () => {
  const response = await prompts({
    type: 'select',
    name: 'Selection',
    message: 'Select a function to execute.\n',
    choices: [
      {
        title: 'Generate',
        description: 'Generates a new OpenPGP key pair. Supports RSA and ECC keys.',
        value: "Generate"
      },
      {
        title: 'Encrypt',
        description: 'Encrypts a message.',
        value: "Encrypt"
      },
      {
        title: 'Decrypt',
        description: 'Decrypts a message.',
        value: "Decrypt"
      },
      {
        title: 'Reformat',
        description: 'Reformats signature packets for a key.',
        value: "Reformat"
      },
      {
        title: 'Revoke',
        description: 'Revokes a key.',
        value: "Revoke"
      },
      {
        title: 'Session',
        description: 'Generate a new session key object.',
        value: "Session"
      },
      {
        title: 'Sign',
        description: 'Signs a message.',
        value: "Sign"
      },
      {
        title: 'Verify',
        description: 'Verifies signatures of cleartext signed message.',
        value: "Verify"
      },
      {
        title: 'Help',
        description: 'Get help on a command.',
        value: 'Help'
      },
    ],
  });

  switch (response.Selection) {
    case "Generate": {
      console.log(format.green("\nTo generate a key pair, we need to know a few more details:\n"));
      Command.handleGenerate();
      break;
    }
    case "Encrypt": {
      console.log(format.green("\nTo encrypt a message, we need to know a few more details:\n"));
      Command.handleEncrypt();
      break;
    }
    case "Decrypt": {
      console.log(format.green("\nTo decrypt a message, we need to know a few more details:\n"));
      Command.handleDecrypt();
      break;
    }
    case "Reformat": {
      console.log(format.green("\nTo reformat a key, we need to know a few more details:\n"));
      Command.handleReformat();
      break;
    }
    case "Revoke": {
      console.log(format.green("\nTo revoke a key, we need to know a few more details:\n"));
      Command.handleRevoke();
      break;
    }
    case "Session": {
      console.log(format.green("\nTo generate a session key, we need to know a few more details:\n"));
      Command.handleSession();
      break;
    }
    case "Sign": {
      console.log(format.green("\nTo sign a message, we need to know a few more details:\n"));
      Command.handleSign();
      break;
    }
    case "Verify": {
      console.log(format.green("\nTo verify a signature, we need to know a few more details:\n"));
      Command.handleVerify();
      break;
    }
    case "Help": {
      console.log(format.green("\nHelp"));
      Command.handleHelp();
      break;
    }
    default: {
      console.log(format.red("\n🔔 You must select a command.\n"));
      break;
    }
  }
})();

// # sourceMappingURL=cli.js.map
// Language: typescript
// Path: packages/crypto-cli/src/cli.ts
