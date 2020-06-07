import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 4000;

app.get('/', () => console.log('Hello World'));

mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.on('open', () => {
  app.listen(port, () => {
    console.log(`Server Ready at ${port}`);
  });
});
