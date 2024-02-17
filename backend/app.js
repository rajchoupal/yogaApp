const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const classesRoutes = require('./routes/classesRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost:27017/yoga_booking_app';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(bodyParser.json());
app.use('/api/classes', classesRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));