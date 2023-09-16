import { findUpSync } from 'find-up';

export function findEnv() {
  const envPath = findUpSync('.env');

  return envPath;
}
