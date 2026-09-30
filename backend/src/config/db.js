const mongoose = require("mongoose");

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

const connectToDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGO_URI);
  }

  try {
    cached.conn = await cached.promise;
    console.log("Successfully connected to DB");
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    console.error("Error in connecting to DB:", error);
    throw error;
  }
};

module.exports = connectToDB;
