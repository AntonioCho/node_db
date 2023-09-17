const express    = require('express');
const mysql      = require('mysql');
const dbconfig   = {
  host     : '',
  user     : '',
  password : '',
  database : '',
  typeCast: function (field, next) {
    if (field.type == 'VAR_STRING') {
        return field.string();
    }
    return next();
  }
}
const connection = mysql.createConnection(dbconfig);
const router = express.Router();

const app = express();
app.use('/', router);

// router ==================================
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

// configuration =========================
app.set('port', process.env.PORT || 8000);

app.get('/', (req, res) => {
  res.send('Root');
});

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});