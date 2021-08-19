import express from 'express';
import bcrypt from 'bcrypt';
import db from '../models/UserModel';
import { createToken } from '../utils/token';
import { createRefreshToken } from '../utils/token';
interface userControllerType {
  addUser: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => void;

  getUser: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => void;
  refreshUser: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => void;
}

const hashPassword = (
  password: string,
  cb: { (err: any, hash: any): void; (arg0: Error, arg1: string): any }
) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      return cb(err, hash);
    });
  });
};
// defining our userController object

// add new user

const userController: userControllerType = {
  addUser: (req, res, next) => {
    const postQuery = `
    INSERT INTO users (first_name, last_name, email, password)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `;
    let { first_name, last_name, email, password } = req.body;
    hashPassword(password, (err: any, hash: any) => {
      if (err) throw err;
      password = hash;
      const queryParams = [first_name, last_name, email, password];
      db.query(postQuery, queryParams)
        .then(async (data: any) => {
          const token = await createToken({ first_name, last_name, email });
          const refreshToken = await createRefreshToken({
            first_name,
            last_name,
            email,
          });
          res.locals.newUser = { token: refreshToken };
          res.cookie('token', token);
          return next();
        })
        .catch((err: any) => {
          res.locals.message = { message: err };
          next({ log: `userController.addUser ERROR: ${err}` });
        });
    });
  },

  getUser: (req, response, next) => {
    let { email, password } = req.body;

    const getQuery = `
      SELECT user_id, first_name, last_name, email, username, password
      FROM users
      WHERE email = $1
    `;
    // SELECT movie_id FROM Favorites WHERE user_id = ?
    const queryParams = [email];

    db.query(getQuery, queryParams).then(async (result: any) => {
      const {
        user_id,
        first_name,
        last_name,
        email,
        username,
      } = result.rows[0];
      const token = await createToken({ first_name, last_name, email });
      const refreshToken = await createRefreshToken({
        first_name,
        last_name,
        email,
      });
      bcrypt
        .compare(password, result.rows[0].password)
        .then((res) => {
          if (res) {
            response.locals.userObj = {
              user_id: user_id,
              first_name: first_name,
              last_name: last_name,
              email: email,
              username: username,
            };
            response.locals.token = refreshToken;
            response.cookie('token', token);
            return next();
          } else {
            response.status(401).send('The password does not match');
            // return next();
          }
        })
        .catch((err) => next({ error: err.message }));
    });
  },

  refreshUser: (req, response, next) => {
    let { email } = req.body;

    const getQuery = `
      SELECT user_id, first_name, last_name, email, username
      FROM users
      WHERE email = $1
    `;
    // SELECT movie_id FROM Favorites WHERE user_id = ?
    const queryParams = [email];

    db.query(getQuery, queryParams).then(async (result: any) => {
      const {
        user_id,
        first_name,
        last_name,
        email,
        username,
      } = result.rows[0];
      const token = await createToken({ first_name, last_name, email });

      try {
        response.locals.userObj = {
          user_id: user_id,
          first_name: first_name,
          last_name: last_name,
          email: email,
          username: username,
        };
        response.cookie('token', token);
        return next();
      } catch (err) {
        next({ error: err.message });
      }
    });
  },
};

export default userController;
module.exports = userController;
