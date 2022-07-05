//import app from "./app.js";
import express, {json} from 'express';
import chalk from 'chalk';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import router from './routers/index.js';

const app = express();
app.use(cors());
app.use(json());

app.use(router);

const port = +process.env.PORT || 4000;
app.listen(port, () => {
  console.log(chalk.bold.green(`Server is listening on port ${port}.`));
});
