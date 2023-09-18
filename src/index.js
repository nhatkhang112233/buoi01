import express from 'express';
import dotenv from 'dotenv';
import configViewEngine from './config/viewEngine';
import initWebRoute from './route/web';
import connection from './config/connectDB';

const app = express();
dotenv.config();
const port = process.env.PORT;

configViewEngine(app);
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})