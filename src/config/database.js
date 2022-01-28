const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
mongoose.Promise = global.Promise;

require('dotenv').config();
const MONGODB_URL = process.env.MONGO_URL;

const client = new MongoClient(MONGODB_URL);
// Function to connect to the server
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db('admin').command({ ping: 1 });
    console.log('Connected successfully to server');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    directConnection: true,
    connectTimeoutMS: 10000
  })
  .then(db => console.log('Connection succesfull' + ' ' + db.connection.host))
  .catch(err => console.log(err));
