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

    // Prevent duplicate registrations
    const existing = await users.findOne({ email });
    if (existing) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 });
    }

    const passwordHash = hashPassword(password);
    const insertResult = await users.insertOne({
      email,
      passwordHash,
      createdAt: new Date(),
    });

    const createdUser = { _id: insertResult.insertedId, email };
    return NextResponse.json({ ok: true, user: createdUser }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Registration failed' }, { status: 500 });
  }
}
