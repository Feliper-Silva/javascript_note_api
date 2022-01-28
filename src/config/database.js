const mongoose = require('mongoose');
require('dotenv').config();
mongoose.Promise = global.Promise;

const MONGODB_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connection succesfull'))
  .catch(err => console.log(err));
