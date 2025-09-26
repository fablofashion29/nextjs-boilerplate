import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';
import { hashPassword } from '../../../../lib/auth';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;
    if (!email || !password) {
      return NextResponse.json({ error: 'Missing email or password' }, { status: 400 });
    }

    if (!clientPromise) {
      return NextResponse.json({ error: 'MONGODB_URI not configured' }, { status: 500 });
    }

    const client = await clientPromise;
    const db = client.db('sample_mflix');
    const users = db.collection('users');

    const user = await users.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const passwordHash = hashPassword(password);
    if (user.passwordHash !== passwordHash) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Return minimal user info
    return NextResponse.json({ ok: true, user: { email: user.email, _id: user._id } });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Login failed' }, { status: 500 });
  }
}
