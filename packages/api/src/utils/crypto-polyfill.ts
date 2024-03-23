import crypto from 'crypto';

// @ts-ignore
globalThis.crypto ??= crypto.webcrypto;
