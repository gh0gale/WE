const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  
});

const User = mongoose.model('User', userSchema);

app.use(express.json());

app.get('/', async (req, res) => {
    try {
      const users = await User.find();
      const list = users.map(u => `<li>${u.name} - ${u.email} - Age: ${u.age}</li>`).join('');
      res.send(`<h1>All Users</h1><ul>${list}</ul>`);
    } catch {
      res.status(500).send('Could not retrieve users');
    }
  });
  

mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err);
  });

  //same for Q7 replace find with fndOne