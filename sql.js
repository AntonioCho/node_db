const express    = require('express');
const mysql      = require('mysql');
const dbconfig   = require('./config/database');
const connection = mysql.createConnection(dbconfig);
const router = express.Router();

router.get('/codes', (req, res) => {
  connection.query('SELECT * from codes limit 1', (error, rows) => {
    if (error) throw error;
    console.log('code info is: ', rows);
    res.json(rows);
  });
});

router.get('/codes/:id', (req, res) => {
    connection.query("SELECT * from codes where stock_code = '" + req.params.id + "'", (error, rows) => {
      if (error) throw error;
      console.log('code info is: ', rows);
      res.json(rows);
    });
  });

  module.exports = router;