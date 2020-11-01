const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./database/mongo.config');
const corsConfig = require('./config');
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

// creating an app instance using express. This will start a server
const app = express();
connectDB();

// app configurations for parsing incoming requests into JSON. Otherwise, these are readableStreams.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app configuration for CORS
app.use(corsConfig);

// actual REST calls configurations
app.use(postRoutes);
app.use(userRoutes);


module.exports = app;