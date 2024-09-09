import express from 'express';
import dotenv from 'dotenv';
import { router } from './routes/router.js';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

app.use('/', router);

const server = app.listen(4020, async () => {
  try {
    
  } catch (err) {
    console.error(err);
  }
  console.log(`Server running on port ${server.address().port}`);
});
