const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Validate user input
  if (!user || !user.name || !user.email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  // ... further processing of user data ...
  res.status(201).json({ message: 'User created' });
}).catch(err => {
  console.error(err);
  res.status(500).json({ error: 'Failed to create user' });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});