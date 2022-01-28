const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

require('dotenv').config();

const MONGODB_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connection succesfull'))
  .catch(err => console.log(err));
