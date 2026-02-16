import { connect } from "mongoose";

const mongodbUri = process.env.MONGODB_URI;

if (!mongodbUri) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

console.log("Mongo URL:", mongodbUri);

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

const connectDb = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
cached.promise = connect(mongodbUri, {
  serverSelectionTimeoutMS: 10000,
}).then((m) => m.connection);

  }

  try {
    cached.conn = await cached.promise;
    console.log("MongoDB connected");
  } catch (error) {
    throw error;
  }

  return cached.conn;
};

export default connectDb;
