import {
  dataGenerate,
  dataRevoke,
  dataEncrypt,
  dataDecrypt,
  dataSign,
  dataVerify,
  dataSessionKey,
} from "../../src/types/types"
import chai from "chai";
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

const { assert } = chai;
const bits = 2048;
const curve = '';
const date = new Date().toString();
const email = 'jane@doe.com';
const encryptedMessage ='LS0tLS1CRUdJTiBQR1AgTUVTU0FHRS0tLS0tCgp3Y0ZNQXpMNWFTdVU0RWM4QVEvL1RlZzN6bzFiMSszNW9lN3l6NDFpRS9LVlNZYUJYSEFESTNpbVJodlQKeXlRczdFc29iYTdoUUx4dFZESjEyc3ZNU25YUWk2Y1FVNXd4cGo1L3VENUFOT2ZuN0hVSkYrSExINlRNCjNBWktZNUFLRk40VUZBK0hQRy9GSHlaNVhxVzRLd0hpL3ZjVWxSejRreWJDc2VxYmZoY01hU0NJdHRKbwpmWkNOcTFZNEhiR1hBV1BQWXExV0tRZnl0RnRyWWlQODU3VE5hc21XNTJKUjVMQUZ5OFdzdnZNTmM3Z3AKQ0RFcUIyVWQwRmJSNEZOU2tvTXFhN3FScXFqS1V2ei9odU9ieVVsOW94RVpGVGNac1hwSVQ1QkE5WUtECmpvY1pVSE1hTjZkbnFJTk8rcWVBZWM4R1FjbEUxVVk0RWhNcEhjUktkZEJaY2pjaE0xbW9oaEMxb0Q4aQpUTVBlRU5XcDg0SGh3cVp1UjRNNmxUQjBqSUhZbytuMXpMbm0vRUFtcDdoc3VvSEFYY3pqSFhVYVE3M2IKOEZ5UWlENW1IMU1wWHRoWjVheXNRTklmRkY5TUdOQ1paWXExNitHSFQvbmJCTDNyUmU2dENCUUFRTnVaCksydnNQeThGZlJyYmVBR0llZHllOFZIUGJFYXNsNWF4TVBwc08yaUtjV3dNN1QvZjVaeG5FRUxWem5UeApHQnA5MHFKMUFUNGtVWVNOejYvZC9aT2JUVVV3WWdkKzdUNDdxQ3VTMjYxVlJpL0Jiblh1Z2pLRk90VlEKMEhpU1VKbTlCbGhFR2s3OWg3RGJuZmx0ZFc4dFRCNE9CdXJxUHRVaHRLS2hHL3JhYUY3YlFrVVowUktNCmQ0SllOM0sySmhBL2ovaHIySEE4ZUpWZ0NNVm9McXJyZW8xazNHbGxIWkxTd2RBQmJtaXpZL1JZd2JDUQpUeG91TW5KNjhvZmVtSHNrSW1MdGx2OUtBOElQVEY4UXp3enZRcmpNRGRtclg2V09QTGtKQ3JiV1JKbHcKV25NWlBkVGpzSzdicnVNOTByZXhLeFowSGZVL050V3BvZ251L3dOYVBHZ1NRbEZhdHZhclJFQlNEaExaCndNYVE2ZWkycUJLbXdDTGVERURlaU1BSWlSQVBad1d2R1Y2RlFWNW14V2xGdm9SaGRDeTc2TW5kWXNNTQoza1Nwb1doMVBYUWpWYWZLV2lhZHJJS2FOSllDZkY2bzE5Ty9NdlZITGFFV0tnM0lzRGtvMGdtQWZ5VE8KTngzb2dYdTV0VFpvelRyUzRUMUpsMUR3bnRZbGlrMWhINkNYK0ZGLzIzVzlHaHdTdlcreVgzZFlTeHZjCjFuMlBjVDY5QzdDTmZtcWpOT293d20wcjl6M0lWYlZ2dGk4ZFduVzNEZDVGS256d2VaUDhaZ2hudUl4SQptUzdrY0ZWTVd4d3p6SmptQjg3UGZPbmZtZ2k2b0NxbFRzMXJDRldTQVZqM3hzenFFRGRnT1B1QXcvdzQKWmZOSS9sSVhHdU1DakpKQlYzNTZCN2ExNkZacXVqK2ZtOUQwS1BYbGpjSEcydHFRTjVDbHVTUnhUZlBiCm42U3ZOZ2tkVTNGM3pYS3NxRW9iRzdzakg5WjZWZlJIZjlRcmN2ZXZHdWFIb2ZZQkROVzZmT3ZNODBURQpHNjkzS3BRdytEaDVnMzBzamhXbDRuMS9aZUROR0RYZ0dERGRUMU9WQXRrVTBTcm1vY0ZSM1hCUHprYnQKRmw3YlVkVG1oVFlHVys2VmRIUG9mOFZ0b1FrWVJma2YxK1hFaC9kNUFvTzdSSVZRQ29qb3pqTmhoVy9qCjg4VW56d0VqZ3VoK0VMbVFRS1ViUi9ydjg2djcyM0VtVkVSd3hvQTIvalZCbGVaaHpFOHdrY01HODM3VApLVlo3N0VHblRPcTBjbUkrang2Ri9SenRjbDRBUHN6eEJkUkVSM25HR3dqbGVIdjdpMndhQTYzbWNJLzcKM0I0dWZyVGczbHNMWDVlWVFDUnJrdXdwOVZKNzNlWmJiOTlLOU51ZDhNVGczNnE0cFhtNWRBd3ZLZzEwCm96c0t2MHVxa0tDclF1TFBWU1JtZkE9PQo9Yll1VQotLS0tLUVORCBQR1AgTUVTU0FHRS0tLS0tCg==';
const expiration = 0;
const format = 'armored';
const message = 'Hello Crypto Service APIs!';
const name = 'Jane Doe';
const passphrase = '123456789abcdef';
const publicKey = 'LS0tLS1CRUdJTiBQR1AgUFVCTElDIEtFWSBCTE9DSy0tLS0tCgp4c0ZOQkdLRGpXSUJFQUNiWnRqMklVTEFGdndDVnZKUHdiNVp3REhHeGFFRzcwWUdYeXR1bXNuM1d3eGMKSWpJcmN6VkxwSWh3dU52Q05aZzJPbjF5elpNU1NtczM5M0t1ZTF3ak9ycXRYbXdNcUpCK2tzbHh2V1JHCjVhanJ5Z3pOUzBFZ2Nqd1huV2hoRWxFM1lOdklPNDUzdUQrZWlIMkZtMzRWdnZ5MVZyZGROczRqVmNTaApMdXBLSi9aclpBdHg4aWR6NFVmZGZwQjZmaUdNb0M1ZnR3RGJZQWphVStoVlFSM1lDbVA3WjNBRjR5WHEKMFIzRndQMFVXeXROR2x4UURPaFhLQ2Z5VXpFQWVxRjd5QkJmTEJvRVV1YXZsUVk3RUhabWJXSDZyNkRiCmhhcmJCYUU2L0wxNHR3L2VsSUNoZjl5UEFzM2FRMVFnSEd5Wnprd3dlVWdkREhCdzA1UkM0dU5mcXBidQpycy8xTnZycnk5cUxydGt6b1RMa1ZrM3V5bE80b1Z1L3NEa0RrREJEUWR6UzNYc1U1Nis4d2pTd3BpbmUKS1BCR2kycVM0elg3VlVTcDYvNnNWS3lwVkIvWk9mOENCM1oxa2RCaWhwVncrdksxR3lnVk9UZFYxekhlCjQxTUtHNHpEcDlBTU9KYWtrc3lQRTJWK0M5MFM3Z21rbXduZFRmdmo1R1ovZ3B6ZVlub041a2lTbnRsTQpkdGJGVE5UUFp2NjBpdnNTcExLdSsrZTN2b3VtM2JZNmtVaFF0ZGNwU1hTQXZvS0wvWlExSnowQ1JWMTYKQXFSOXNINktXRmtyS0RxZGZsbk1tRHNuV3FCaWxWeTZBcGVubkxFZFlNVjJLWHozN2g5QTM4OFN6ei9vCnNZdTdjUytMUTk0enhoSFc3QllpQjd4Z3hpdHc0TXdqYzBaa0J3QVJBUUFCelJkS1lXNWxJRVJ2WlNBOAphbUZ1WlVCa2IyVXVZMjl0UHNMQmlnUVFBUWdBSFFVQ1lvT05ZZ1FMQ1FjSUF4VUlDZ1FXQUFJQkFoa0IKQWhzREFoNEJBQ0VKRUJjQnhxZFo4cHJvRmlFRWlJTUlySjlmeDRQRjVaQldGd0hHcDFueW11aDRvZy8rCktDaW95Q0lVcjhzTWMyUTBDelExWEZkcDBvSmVNSDNmdDFRMCtCclFZVmljRDlFWXZ1NXAwWHFWOElzWgpjTDQyVjZsbmJzSDhsTm9KelM2cVNMM1ZTOGdEdUZuNEc4eDNqaHE3c2hsdDBrclFHR2hVQ2VoNk9VUjYKaVFrWm82L2VWL2trdDVZR0o5SFVhS09LTzJic2o2bkNyQ0IxY2ZFeElsM2JTUGlGeno2MnZKTnVabzN0Ckg0ZGlJN3ZhV0x0VWVNajZzUmVKcGlBSWNZK0FIR3RiWU5Wd3dNSlMxSlROdUkwWHlxM3h1dW1TbVhmWgpKdExlaVFmWjQvL25XTjQrV2pTc2JYYnRSc3JYSkdWeEs2UlVlaUJTaWI5Nk9jU2g4V1JvWUJVdUk4OXoKVCs3R1QxVDh5aTI5VVdQN0dJOUZxcVR2MGRxWnBQZklrQURZTFhqZ3hLV290eEk0WlNPNit1bk1zTFZDCmZ2RHpOTHUwcjhBYU1xNjIxcVRodGxyZ1N6aXVsb29LNFFGTFYrbjdUQ1pHUkJmdDd1WSs0bUFBRVM1cwpKR2pxRVR0WExvYU1PY3NQRk9CSGtVOHRHbUQxa1VjM0xlbXc4TVhpN01mMTExR0UrZHFCeEF5SUVBRWwKSUhVVTBMQUxYem5abG5FdjJiYlc5T2hRT1V6Rk0wcDh5cGFlMEtZeXc1bUlTT3JyTytaV01uQ1p3VVV4CnRKTVZydkc2bHIrN2ZPd0I3dElYQUpXeXNsV3RrcldHdnhUYVp3NkhMM2lGMkJ3aHVydW5qUTc2QzlZeQpWd253WnJoL2dMOHU2amhwTEo0VGNQQ0Q3dHFvaW42Ry9xcDVzNWFwejJBcmFvWGlmS1Jka2R2WmlHRVAKS3RQMmJmTXZlcFlUdnl0eHN5RG5Ba3pPd1UwRVlvT05ZZ0VRQUxRanpiOEVrallTU01JMVp0aEhTS0hKCkxTK3F5aGFYZGVMMkV3RmtuMUFDWGdwVmpldVpqMk9sd00zYTVPSlpMN284SlRRMGZXVjNjaXJDVVB6UQpFMWdKaTVMOVhINHB5YVd0V1IxZS9oY29yVi81ZERMQ2FneXo1Nk03SkJWclVGNTY1dVVjNkxmbjh6Y2gKM3g3U0p2WUo5NTdGeFIyNTdGNVhUNEZmbmVBNVkxcGZMaEFRMEhHSldpSS9SVm1Ccmcyc2JwaUhJai8rCjBMQ1Znckh1MEVXL1lnRlNqLzRYQlpDQVd6STJXang3YjhtVUZPWGdZaVVwWCtKdW5sdWNFOXhRQXdJYwpKeHoyRm5yaFBneVZNK0hCUGQwdk03QnFQQjg0Sm9nY0ZERDQ3RWNFTjlqYzdXYzRDNjRRZnBJRDFZYUgKQmRGWGRmeUJ1SXBHT3lBQzgrMnFQTVBwaFdpaXZDcm9tZG93QVdWblU4WTgxbnBRbXI2ZFE2MU92NjVUCjczM0dYVWdtTlBWNEV0THlxekdiVDFOMTdVY1MzbmxjL3ZNR2RkN1FwNzdlUEs4ZVMvVWQ4eDV6cFZiWQpteFd2VW5SUlAxRTVwNXZFRUkwNnNvdDBVTXIwckxZek53VjcyUi9VanhETEl4OG9SSVhzenQwV2tZc3MKR3RsdTlkR0JlZGV1REx2YmZha0dlT0E4NEVpMU0zTEVnU001eFhmeUE0Unh6U25aZXMrYlNpdGN0d3JSCmZ3SitPdmU5c2Nrb0ExcUlPWUZxTHRDM3BqVWFoTXhsWDRiVFZEdnpkbHhJZ2JiOVh3NHovV0Jyc1U1NAprK1g3T1JkOFRWMnBackVYeVRjMDlTSGRZeGRUcC9vOEZua2c4L05TbHdVbkUxWEJDZ0tSZUFIREJ1eFIKQUJFQkFBSEN3WFlFR0FFSUFBa0ZBbUtEaldJQ0d3d0FJUWtRRndIR3AxbnltdWdXSVFTSWd3aXNuMS9ICmc4WGxrRllYQWNhbldmS2E2TGZ0RUFDWTRud0tCTjMyS21Jc0hWT3YvRjFjaGRCT3BNN3p3cWJHeVppdwo4MmxkQ3J4VG5xNnNJR3NJWjd4TDJxbjViOUVacVlmays1anF0UDdOQlhzQ0d1a2xDYVhOcVZtTXA4MWMKTU5IcGViMXF4WVNzVFpPV0dWRHAyQ0FNbURFQW1MSWRoekc3djB2SXpjUEt0L2tNZUFhZjZPWVMxakc5CkRNQWNoWmszek40NjErdWRoWmpOYnIyWENLUVJ6NzRhT2l4N040S3l2Q0pFeENLemtCbFdRVWFSVGJiUgpDMEdiR0Z6cXlDOTczUDRCTXpoM0h3bVltLzhCa2VndFl3b3FJZk1nS2xNclpqRk5MbXVvcHBPTXFUZjIKazFzQTIwRVdNMlgwVGdNcDc0UGtOKzBibzMzUlB6RG1SWTZCajgwcDVUUFBlVXNzdjFjTWpiT3Z4Qk8zClV6VHo1d2hnS3Q2elNkUEdlaDV2bUFqK3NhMVhZUnAyZUE3bGFwRE15aTZwRU50Wmt4TCthdGRGY3loTwpMNmllSW1JejE5dzBuZXV1a2NsY3AwZWhTMjNxWnducTl5d3hGUDBoREoyejNOeW5SQ2UvdlY2Myt1Z24KdTZDQlVuN20wM3pIWVhWOEhMU3NYU1RoM1JjZ2FSOURZVVpEZ2c2YjhYTlBneTdEbDhUU3R6SmdyV1JnClJCU2FZd2V4TFVlMGsvZkREcHEyNE5IN0t0V1NDbDVEMHNwdStsN0R4eXQ5ZmdJWHNvUmFZTzVVdXpZTQpVdkZ5OGM4ZjZwTFR1MTBiRE1uTnE3SzEyKzBhQUMxYVd6K0pkM1RvQi81UXNUSTUvWXl4Rlp1NHZTUXEKK09HYUs0M2ZSYm1nQSsvMDRFQ1ZoVytIRkFUSWlnZXRMb1lnWmVibVNoSHByZz09Cj1zTWlhCi0tLS0tRU5EIFBHUCBQVUJMSUMgS0VZIEJMT0NLLS0tLS0=';
const signature = true;
const type = 'rsa';

const dataGenerate: dataGenerate = { bits, curve, email, expiration, format, name, passphrase, signature, type };
const dataRevoke: dataRevoke = { passphrase };
const dataEncrypt: dataEncrypt = { passphrase, message, publicKey };
const dataDecrypt: dataDecrypt = { passphrase, encryptedMessage, publicKey };
const dataSign: dataSign = { passphrase, message };
const dataVerify: dataVerify = { passphrase, message, publicKey };
const dataSessionKey: dataSessionKey = { date, email, name, publicKey };

describe('test dataGenerate type', function () {
  it('should be defined', function () {
    assert.isDefined(dataGenerate.bits);
    assert.isDefined(dataGenerate.curve);
    assert.isDefined(dataGenerate.email);
    assert.isDefined(dataGenerate.expiration);
    assert.isDefined(dataGenerate.format);
    assert.isDefined(dataGenerate.name);
    assert.isDefined(dataGenerate.passphrase);
    assert.isDefined(dataGenerate.signature);
    assert.isDefined(dataGenerate.type);
  });

  it('should have default type declaration', function () {
    assert.typeOf(dataGenerate.bits, 'number');
    assert.typeOf(dataGenerate.curve, 'string');
    assert.typeOf(dataGenerate.email, 'string');
    assert.typeOf(dataGenerate.expiration, 'number');
    assert.typeOf(dataGenerate.format, 'string');
    assert.typeOf(dataGenerate.name, 'string');
    assert.typeOf(dataGenerate.passphrase, 'string');
    assert.typeOf(dataGenerate.signature, 'boolean');
    assert.typeOf(dataGenerate.type, 'string');
  });
});

describe('test dataRevoke type', function () {
  it('should be defined', function () {
    assert.isDefined(dataRevoke.passphrase);
  });

  it('should have default type declaration', function () {
    assert.typeOf(dataRevoke.passphrase, 'string');
  });
});

describe('test dataEncrypt type', function () {
  it('should be defined', function () {
    assert.isDefined(dataEncrypt.passphrase);
    assert.isDefined(dataEncrypt.message);
    assert.isDefined(dataEncrypt.publicKey);
  });

  it('should have default type declaration', function () {
    assert.typeOf(dataEncrypt.passphrase, 'string');
    assert.typeOf(dataEncrypt.message, 'string');
    assert.typeOf(dataEncrypt.publicKey, 'string');
  });
});

describe('test dataDecrypt type', function () {
  it('should be defined', function () {
    assert.isDefined(dataDecrypt.passphrase);
    assert.isDefined(dataDecrypt.encryptedMessage);
    assert.isDefined(dataDecrypt.publicKey);
  });

  it('should have default type declaration', function () {
    assert.typeOf(dataDecrypt.passphrase, 'string');
    assert.typeOf(dataDecrypt.encryptedMessage, 'string');
    assert.typeOf(dataDecrypt.publicKey, 'string');
  });
});

describe('test dataSign type', function () {
  it('should be defined', function () {
    assert.isDefined(dataSign.passphrase);
    assert.isDefined(dataSign.message);
  });

  it('should have default type declaration', function () {
    assert.typeOf(dataSign.passphrase, 'string');
    assert.typeOf(dataSign.message, 'string');
  });
});

describe('test dataVerify type', function () {
  it('should be defined', function () {
    assert.isDefined(dataVerify.passphrase);
    assert.isDefined(dataVerify.message);
    assert.isDefined(dataVerify.publicKey);
  });

  it('should have default type declaration', function () {
    assert.typeOf(dataVerify.passphrase, 'string');
    assert.typeOf(dataVerify.message, 'string');
    assert.typeOf(dataVerify.publicKey, 'string');
  });
});

describe('test dataSessionKey type', function () {
  it('should be defined', function () {
    assert.isDefined(dataSessionKey.date);
    assert.isDefined(dataSessionKey.email);
    assert.isDefined(dataSessionKey.name);
    assert.isDefined(dataSessionKey.publicKey);
  });

  it('should have default type declaration', function () {
    assert.typeOf(dataSessionKey.date, 'string');
    assert.typeOf(dataSessionKey.email, 'string');
    assert.typeOf(dataSessionKey.name, 'string');
    assert.typeOf(dataSessionKey.publicKey, 'string');
  });
});
