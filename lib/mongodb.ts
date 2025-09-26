import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  // Do not throw here to allow dev workflows without env set, but warn.
  console.warn('MONGODB_URI environment variable is not set. MongoDB client will not connect until it is provided.');
}

const uri = process.env.MONGODB_URI || '';

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient> | undefined;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!uri) {
  // Provide a dummy unresolved promise to avoid runtime crashes in serverless environments when not configured.
  clientPromise = Promise.reject(new Error('MONGODB_URI not configured'));
} else if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
