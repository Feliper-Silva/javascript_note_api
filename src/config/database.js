const mongoose = require('mongoose');
require('dotenv').config();
mongoose.Promise = global.Promise;

const MONGODB_URL =
  'mongodb+srv://' +
  process.env.DB_USER +
  ':' +
  process.env.DB_PASSOWRD +
  '@cluster0.qenjw.mongodb.net/' +
  process.env.DB_DATA_BASE +
  '?retryWrites=true&w=majority';

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(db => console.log('Connection succesfull' + db.connect()))
  .catch(err => console.log(err));
