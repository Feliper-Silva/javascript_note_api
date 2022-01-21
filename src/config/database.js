const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const MONGODB_URL = 'mongodb://localhost/javascriptNote';

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log('Connection succesfull'))
  .catch(err => console.log(err));
