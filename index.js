import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

const userSchema = new mongoose.Schema({
  name: String,
});

const User = new mongoose.model("User", userSchema);

app.get("/", async (req, res) => {
  await User.insertOne({ name: "Prasad" });
  res.send("Server is running, CORS is enabled, and MongoDB is connected!");
});

app.delete("/", async(req, res)=> {
  await User.deleteOne({ name: "Prasad" });
  res.send("Server is running, CORS is enabled, and MongoDB is connected!");
})

export default app;
