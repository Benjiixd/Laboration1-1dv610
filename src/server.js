import express from 'express';
import dotenv from 'dotenv';
import { router } from './routes/router.js';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use((req, res, next) => {
    if (req.is('json')) {
        req.headers['content-type'] = 'application/json';
    }
    next();
});

app.use('/', router);

const server = app.listen(4020, async () => {
  try {
    
  } catch (err) {
    console.error(err);
  }
  console.log(`Server running on port ${server.address().port}`);
  await fetch ('http://localhost:4020/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: 'world'})
  })
});
