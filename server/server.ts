/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
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
const PORT: Number = parseInt(<string>process.env.PORT, 10) || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('build'));

app.use('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// serves index.html at root endpoint
app.get('/', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
);

app.use('/user', userRouter);
app.get('/user', (req: express.Request, res, next) => {
  if (!req.user) {
    console.log('error ocurred');
    res.status(300).send('no user found');
  } else {
    console.log('no error');
    res.status(200).json(req.user);
  }
});

app.get('/home', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
);

app.get('/movies', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
);

app.get('/registration', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
);
app.get('/signin', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
);
app.get('/shows', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
);
app.get('/details/*', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
);

app.get('/details/*', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
);

/* route handlers */

/* catch all */

app.use('*', (req, res) => res.status(404).send('Oops! Wrong page!'));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* global error handler */
app.use(
  (
    err: express.ErrorRequestHandler,
    req: express.Request,
    res: express.Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: express.NextFunction
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
