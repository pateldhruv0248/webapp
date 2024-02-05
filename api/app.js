import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { routes } from './routes/index.js';
import { cacheNoStore } from './middleware/cache-no-store.js';
import { checkInvalidJson } from './middleware/invalid-json.js';

//Get environment variables
dotenv.config();

//Create express app
const app = express();

//Add middleware
app.use(cacheNoStore);
app.use(express.json());
app.use(checkInvalidJson)
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Go to routes
routes(app);

export default app;