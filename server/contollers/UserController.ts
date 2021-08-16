import express from 'express';

import db from '../models/UserModel';

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
}

// defining our userController object

// add new user

const userController: userControllerType = {
  addUser: (req, res, next) => {
    const { first_name, last_name, email, password } = req.body;

    const postQuery = `
    INSERT INTO users (first_name, last_name, email, password)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `;

    const queryParams = [first_name, last_name, email, password];
    db.query(postQuery, queryParams)
      .then((data: any) => {
        res.locals.newUser = data.rows[0];
        return next();
      })
      .catch((err: any) => {
        next({ log: `userController.addUser ERROR: ${err}` });
      });
  },

  getUser: (req, res, next) => {
    const { first_name, last_name, email, password } = req.body;
    const getQuery = `
      SELECT * 
      FROM users
      WHERE username = $1
    `;
    // SELECT movie_id FROM Favorites WHERE user_id = ?
    const queryParams = [first_name, last_name, email, password];
    db.query(getQuery, queryParams)
      .then((data: any) => {
        res.locals.userObj = data.rows[0];
        return next();
      })
      .catch((err: any) => {
        console.log(err);
        next({ log: `userController.getUser ERROR: ${err}` });
      });
  },
};

export default userController;
module.exports = userController;
