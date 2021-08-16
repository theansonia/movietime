import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const variables = require('../../settings.ts');

const myURI = variables.postgres;
const URI = process.env.postgres || myURI;

const pool = new Pool({
  connectionString: URI,
});

export default pool;
