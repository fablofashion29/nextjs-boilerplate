"use client";
import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      console.log('Login response:', data);
      if (!res.ok) throw new Error(data.error || 'Login failed');
      const successMessage = 'Logged in as ' + data.user.email;
      setMessage(successMessage);
      setEmail('');
      setPassword('');
      // persist the flash message so the homepage can show it after redirect
      try {
        sessionStorage.setItem('flashMessage', successMessage);
      } catch (e) {
        // ignore if storage not available
      }
      // simple redirect to home after successful login
      window.location.href = '/';
    } catch (err: any) {
      setMessage(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
      <form onSubmit={submit} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <button disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  );
}
