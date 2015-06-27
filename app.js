import express from 'express';

let app = express();

// load modules
import config from './config.js'; config(app);
import middlewares from './middlewares.js'; middlewares(app);

export default app;
