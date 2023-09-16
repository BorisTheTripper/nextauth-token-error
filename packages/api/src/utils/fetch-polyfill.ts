import fetch, { Request } from 'node-fetch';

if (!globalThis.fetch) {
  // @ts-ignore
  globalThis.fetch = fetch;
  // @ts-ignore
  globalThis.Request = Request;
}
