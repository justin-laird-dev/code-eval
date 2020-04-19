require('dotenv').config();

const express = require('express');
const server = express();
const port = 4000;

server.get("/json", (req, res) => {
  res.json({ message: "Hello world" });
});

server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER,  process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
