import { neon } from '@neondatabase/serverless';

// Initialize the Neon database client
// The DATABASE_URL is read from the .env.development.local file
export const sql = neon(process.env.DATABASE_URL!);
