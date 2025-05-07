const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/mydatabase")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  age: Number,
  
});

const User = mongoose.model("User", userSchema);

const newUser = new User({
  name: "abcd",
  email: "abcd@gmail.com",
  age: 21,
});

newUser
  .save()
  .then((doc) => {
    console.log("User inserted:", doc);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error inserting user:", err);
    mongoose.connection.close();
  });

  //same for Q10