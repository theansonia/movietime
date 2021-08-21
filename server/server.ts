/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
const userRouter = require('./routes/user');

declare global {
  namespace Express {
    interface Request {
      user?: Record<string, any>;
    }
  }
}
dotenv.config();
const app = express();
app.use(cors());
const PORT: Number = parseInt(<string>process.env.PORT, 10) || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('build'));

app.use('/*', function (_req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/home', (_req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
);

app.get('/signin', (_req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
);

app.get('/movies', (_req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
);

app.get('/registration', (_req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
);

app.get('/shows', (_req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
);
app.get('/details/*', (_req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
);

app.get('/details/*', (_req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
);
// serves index.html at root endpoint
app.get('/', (_req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
);

/* route handlers */
app.use('/signin', userRouter);

// app.use('/signin', userRouter);
/* catch all */

app.use('*', (_req, res) => res.status(404).send('Oops! Wrong page!'));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* global error handler */
app.use(
  (
    err: express.ErrorRequestHandler,
    _req: express.Request,
    res: express.Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: express.NextFunction
  ) => {
    console.log('got and error', err);
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'Internal Server Error' },
    };

    const errorObj = Object.assign(defaultErr, err);
    console.log('Error message from global err handler: ', errorObj.log);
    return res.status(errorObj.status).send(errorObj.message);
  }
);

app.listen(PORT, () => {
  console.log(`Getting served on port: http://localhost/${PORT}`);
});

module.exports = app;
