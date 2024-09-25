import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    console.log("Already Connected to Database");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URL || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database Connection Failed", error);
    process.exit(1);
  }
}
export default dbConnect;
