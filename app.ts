import * as express from 'express';
import { Application } from 'express-serve-static-core';

const app: Application = express();

app.get('/get', (req, res) => {
  res.send('Hello world');
});

app.listen(3000, () => {
    console.log("App listenting on 3000");
});
