import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

let URI: string;
if (process.env.NODE_ENV === 'production') {
  URI = process.env.postgres;
} else {
  const variables = require('../../settings');
  URI = variables.postgres;
}

const pool = new Pool({
  connectionString: URI,
});

export default pool;
