import express from 'express';

import userController from '../contollers/UserController';
// const verifyController = require("../controllers/verifyController");
const router = express();

// get user
router.post(
  '/get',
  // verifyController.verifyUser,
  userController.getUser,
  (_req, res) => {
    const token = res.locals.token;
    res.status(200).json({ user: res.locals.userObj, token });
  }
);

// router.post(
//   '/auth',
//   userController.getFBUser,
//   (req, res) => res.status(200).json(res.locals.countryCodes)
// );

// router.get(
//   '/auth',
//   userController.getFBUser,
//   (req, res) => res.status(200).json(res.locals.countryCodes)
// );

// create new user
router.post('/create', userController.addUser, (_req, res) => {
  res.status(200).json(res.locals.newUser);
});

// router.get("/logout", (req, res) => {
//   console.log("before", req.user);
//   req.logout();
//   console.log("after", req.user);
//   res.redirect("/");
// });

module.exports = router;
