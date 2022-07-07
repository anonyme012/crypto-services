import { encrypt } from "../../src/lib/encrypt"
import chai from "chai";
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

const { expect } = chai;

const data = {
  passphrase: '123456789abcdef',
  message: 'Hello Crypto Service APIs!',
  publicKey: 'LS0tLS1CRUdJTiBQR1AgUFVCTElDIEtFWSBCTE9DSy0tLS0tCgp4c0JOQkdLc2dFZ0JDQUM3ODBFR1hiamVzZ0E0YkFPMTNqYVN2REdqUUIrTHB1RGlWdGlDL0ZmejRIdjMKOWUxejV2dWNtckFwQjZJS3NtQytMazZuVmgxWUhaeXFTUk10N0NQU3Vham1SRVZNZTgzU3RsR0RuT1NnCkx1dkxJemduc0pTamlqcUJVQUNrbGZ5emhoNzJ0b3BIWXVjRUZFVDVDSG9FWEJaOGhYZkNpNjNITk9ILwpadWVYM3h5eHY3QUp1WFZqd0RoMlcyWUkyendTd01NK1Z3ZEhFNUs3TVo4eG0zSk9IVGpHRVYyS3dHa28KYTl6dHZ6TWVyNkpxWjQ5bmpqOGpoVHhidVlONFJBQkUrcWc1a1RJejFpbStkRXNncWhDelpyeGJOMEZtCjdFNWZ1YUorbGtGVmpYM3J6U3VWMzdTb0hNMThJZzJwRHdCN2JrelF1TjlWaXorUGNtZFFaM3JqQUJFQgpBQUhORjBwaGJtVWdSRzlsSUR4cVlXNWxRR1J2WlM1amIyMCt3c0NLQkJBQkNBQWRCUUppcklCSUJBc0oKQndnREZRZ0tCQllBQWdFQ0dRRUNHd01DSGdFQUlRa1EySlNGTTI0T1liOFdJUVJkaHNtRkhzSTdYeFdmCmZOYllsSVV6Ymc1aHY0ZWhDQUN2Vm0xcmdHWW9Pc1hES1NjTVVMOGFvRU1IRE5lUURGNVUzeWJreUJCMQpXM0RTUVhUaUtkTXBMM01qVTFMam05bDlCUFpWMDJnSElCWlVyNXNtUmpTeDBIZGJNNzZRcElSMGZQK3gKTXJDN0o5THZVcExMNVZ5bkFsWnArbjBKeWQxN216RUtUNkQ4Uk45NkVrYlFQMEhmb3F5b2V3QVpaZVdHCmJXcXZsalFteWZGdUgrb1ZUOHlLOThJZkV2NWppK2dQbFVTVDBOb2RML2hFRnY2UFdRWGo2VkZrNmV0YQozekxzV3U5aWZwREhkdHBXMFBXUEwwSmhTQ3E0NDN1ZllJVmg3em1QeW42MW16UnpyQTZsdS9VN1JKMWkKZE1NSUpsZUxic0dScEVNYWRXdkM2a3JjeG5uUmsvMEduQXFVS3N5d3BrZnJIYXljNitKRW1PcmswOWdhCnpzQk5CR0tzZ0VnQkNBQ3FwWDduemQ3cjVxdmZjMzRjL1h6dmVudGZEN215aGl4YTJqa1hzVlpOSWZuegpRRm1YR1lCVGdsazhZclFJblRhSzcyaTdleXVGSlBIVzBjV3dwTTFmRWpPYmYwb0swZG1jSGZtWm5aUWEKYWpibHg1Z0pUb1BVRURmYzBUUEdoUWNma1Q2eW9vYTUrRjdlYnNMVGk3SWJDeFFPNTFjdGRBRVArNjlDCkpyOFovdWY1am94MmgzOTZvU3pFd1FjOFF0UkdGVkR1ZHpJUEw4VCs2SVpvV1NLbWVUTTcvcXVmNHNydwpjY0FWb1V1YllQNHVuQ3IzQTVZYnB3cW83L25lWkd2UVFZcDhneXdqclcrclovNVlCc1BCUnZwQVduTGoKNy9pMlJRRFlSWEJJWG9kRmc2eXBXQU8vWVd1UTczcWd2UzZSTDBiT0VuMGpiU2RYbGJReWZsakpBQkVCCkFBSEN3SFlFR0FFSUFBa0ZBbUtzZ0VnQ0d3d0FJUWtRMkpTRk0yNE9ZYjhXSVFSZGhzbUZIc0k3WHhXZgpmTmJZbElVemJnNWh2NXliQi85aFRFNytHMktoRnh2ZUpMRG1RbUt6Z1BxUDdJRCtUbThHSi82WTZXM0YKeEsxT3M0TFBrNmFEUklSUXNhNU5FZjUrNGZkZVpXSE9mcWRwazFacW9VMU8wTG1rMThKNG1OTkUwOW02CkxWb3kwS09Qb2c5OTZQRThQVWZHM2RaYTRnMXJVNlZnT1dlZGc2UElxT3JDeFBiQmtGU2dzYmhmdzJ1MQpVNWp5UkRUeXQzVGw3YjZOQVR4OEFQSW5EZDNGVk45WDRDMkFFMGJmQWoyYU82L29JalJYOHFLeG0vMisKMDdFNDJoQWorNFBSZHJLZjJYS2tXUFZ3bk5iREdxMDJ1a0M5eWV0aHRYR3N4QXM3VjFOWmdKZWZLUXZKCnNsbXFJMWcyanp1dkFwVU1YQ1JuOWMwd3BQcEZ6a1k2SkxKZWtSNmVDZnQxK2xqeWxtMjZ1UTltTjBGTAo9UnQ3MAotLS0tLUVORCBQR1AgUFVCTElDIEtFWSBCTE9DSy0tLS0tCg==',
};

describe('encrypt', function () {
  it('should encrypt a message', async function () {
    const test = encrypt(data);
    await expect(test).to.eventually.be.fulfilled;
  });
});
