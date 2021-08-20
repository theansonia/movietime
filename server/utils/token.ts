import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

// import createGravatarUrl from './createGravatar';

dotenv.config();

let secret: string;
if (process.env.NODE_ENV === 'production') {
  secret = process.env.SECRET_KEY;
} else {
  const variables = require('../../settings');
  secret = variables.SECRET_KEY;
}

export function createToken(user) {
  // let scope;
  // Check if the user object passed in
  // has admin set to true, and if so, set
  // scopes to admin
  // if (user.admin) {
  //   scope = 'admin';
  // }
  console.log(process.env.SECRET_KEY);
  // Sign the JWT
  return jwt.sign(
    {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,

      // role: 'admin',
      // gravatar: createGravatarUrl(user.email),
      // scope,
    },
    secret,
    {
      algorithm: 'HS256',
      expiresIn: '1h',
    }
  );
}

export function createRefreshToken(user) {
  // let scope;
  // Check if the user object passed in
  // has admin set to true, and if so, set
  // scopes to admin
  // if (user.admin) {
  //   scope = 'admin';
  // }

  // Sign the JWT
  return jwt.sign(
    {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,

      // role: 'admin',
      // gravatar: createGravatarUrl(user.email),
      // scope,
    },
    secret,
    {
      algorithm: 'HS256',
      expiresIn: '72h',
    }
  );
}

module.exports = { createToken, createRefreshToken };
