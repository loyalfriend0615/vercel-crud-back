import { Pool } from "pg"

// Create a new pool instance with your connection string
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgresql://vercel-crud-app_owner:npg_sOw3CR5xHeVf@ep-gentle-band-a2p3srx9.eu-central-1.aws.neon.tech/vercel-crud-app?sslmode=require",
  ssl: {
    rejectUnauthorized: false, // Required for some PostgreSQL providers like Neon
  },
})

// Test the connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Database connection error:", err)
  } else {
    console.log("Database connected successfully")
  }
})

export default pool

