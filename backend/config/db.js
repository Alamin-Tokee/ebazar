import mongoose from "mongoose";
import color from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndex: true,
    });
    console.log(
      color.cyan.underline(`Mongo connected ${conn.connection.host}`)
    );
  } catch (error) {
    console.log(color.red.underline(`Error: ${error.message}`));
    process.exit(1);
  }
};

export default connectDB;
