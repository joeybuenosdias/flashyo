import { MongoClient } from 'mongodb'

const {
  MONGODB_URI,
  MONGODB_DB,
  MONGODB_URI_PRODUCTION,
  MONGODB_PRODUCTION,
  NODE_ENV
} = process.env

const DATABASE_URI = NODE_ENV === 'production' ? MONGODB_URI_PRODUCTION : MONGODB_URI
const DATABASE = NODE_ENV === 'production' ? MONGODB_PRODUCTION : MONGODB_DB

if (!DATABASE_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (!DATABASE) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo

if (!cached) {
  cached = global.mongo = { conn: null, promise: null }
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }

    cached.promise = MongoClient.connect(DATABASE_URI, opts).then((client) => {
      return {
        client,
        db: client.db(DATABASE),
      }
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}
