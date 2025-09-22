import crypto from 'crypto';

type User = {
  email: string;
};

// Simple in-memory user store for demo purposes
const users = new Map<string, string>(); // email -> passwordHash

export function hashPassword(password: string) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

export async function registerUser(email: string, password: string): Promise<User> {
  if (users.has(email)) {
    throw new Error('User already exists');
  }
  const hash = hashPassword(password);
  users.set(email, hash);
  return { email };
}

export async function authenticateUser(email: string, password: string): Promise<User> {
  const hash = hashPassword(password);
  const stored = users.get(email);
  if (stored && stored === hash) {
    return { email };
  }
  throw new Error('Invalid credentials');
}

// Exported for debugging (not for production)
export function _listUsers() {
  return Array.from(users.keys());
}
