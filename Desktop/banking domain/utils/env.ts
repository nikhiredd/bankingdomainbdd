import * as dotenv from 'dotenv';

// Load variables from .env file
dotenv.config();

export const env = {
  baseUrl: process.env.BASE_URL || '',
  username: process.env.USERNAME || '',
  password: process.env.PASSWORD || '',
};