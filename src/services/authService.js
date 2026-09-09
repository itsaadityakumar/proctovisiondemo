import { demoAccounts } from '../config/brand';

const SESSION_KEY = 'procto_vision_session';

export function getSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setSession(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

export async function login(email, password, role) {
  // Simulate network delay
  await new Promise((r) => setTimeout(r, 800));

  const account = role === 'student' ? demoAccounts.student : demoAccounts.teacher;
  if (email === account.email && password === account.password) {
    const user = { ...account };
    setSession(user);
    return { success: true, user };
  }
  return { success: false, error: 'Invalid email or password.' };
}

export async function signup(data) {
  await new Promise((r) => setTimeout(r, 1000));
  // Simulate successful registration
  return {
    success: true,
    message: 'Account created. Verification link sent to your email.',
  };
}

export async function forgotPassword(email) {
  await new Promise((r) => setTimeout(r, 600));
  return { success: true, message: 'Reset link sent to your email.' };
}

export function logout() {
  clearSession();
}

export function isAuthenticated() {
  return getSession() !== null;
}
