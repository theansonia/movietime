import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();
import { postgres } from '../../settings';

const myURI = postgres;
const URI = process.env.postgres || myURI;

const pool = new Pool({
  connectionString: URI,
});

export default pool;
