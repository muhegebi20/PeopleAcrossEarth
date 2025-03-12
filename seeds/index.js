const mongoose = require("mongoose");
const data = require("./data");
const Story = require("../models/Story");

mongoose
  .connect("mongodb://127.0.0.1:27017/confess")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

let seedDB = async () => {
  Story.deleteMany({});
  for (let i = 0; i < data.length; i++) {
    let story = new Story(data[i]);
    await story.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
