import fetch, { Request, Response, Headers } from 'node-fetch';

// @ts-ignore
globalThis.fetch ??= fetch;
// @ts-ignore
globalThis.Request ??= Request;
// @ts-ignore
globalThis.Response ??= Response;
// @ts-ignore
globalThis.Headers ??= Headers;
