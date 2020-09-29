const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
// Init middleware i.e the bodyparser

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API RUNNING'));
// defining routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

app.listen(PORT, () => console.log(`SERVER  RUNNING AT ${PORT}`));
