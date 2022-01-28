const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require('dotenv').config();
const MONGODB_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(db => console.log('Connection succesfull' + ' ' + db.connection.host))
  .catch(err => console.log(err));
