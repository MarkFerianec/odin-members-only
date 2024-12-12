#! /usr/bin/env node

require("dotenv").config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE users (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   username TEXT UNIQUE,
   password TEXT,
   membership_status BOOLEAN,
   admin_status BOOLEAN
);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.connectionString,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
