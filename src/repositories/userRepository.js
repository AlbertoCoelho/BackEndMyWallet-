import connection from "../database.js";

export async function findUserQuery ({ email }) {
  return await connection.query(`
  SELECT * 
  FROM "users" 
  WHERE "email"=$1
  `, [email]);
}

export async function createUserQuery ({ name, email, password }) {
  await connection.query(`
  INSERT INTO "users" ("name", "email", "password") 
  VALUES ($1, $2, $3)
  `, [name, email, hashedPassword]);
}