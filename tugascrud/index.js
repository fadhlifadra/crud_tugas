//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
//use mysql database
const mysql = require('mysql');
const app = express();
 
//konfigurasi koneksi
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_tugas'
});
 
//connect ke database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//set folder public sebagai static folder untuk static file
app.use('/assets',express.static(__dirname + '/public'));
 
//route untuk homepage
app.get('/',(req, res) => {
  let sql = "SELECT * FROM mechanic";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.render('mecha_view',{
      results: results
    });
  });
});
 
//route untuk insert data
app.post('/save',(req, res) => {
  let data = {nama: req.body.nama, notelp: req.body.notelp, plat: req.body.plat, diagnosa: req.body.diagnosa, mwnginap: req.body.menginap, mecha: req.body.mecha, pembayaran: req.body.pembayaran};
  let sql = "INSERT INTO mechanic SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});
 
//route untuk update data
app.post('/update',(req, res) => {
  let sql = "UPDATE mechanic SET nama='"+req.body.nama+"', notelp='"+req.body.notelp+"', plat='"+req.body.plat+"', diagnosa='"+req.body.diagnosa+"', menginap='"+req.body.menginap+"', mecha='"+req.body.mecha+"', pembayaran='"+req.body.pembayaran+"' WHERE id="+req.body.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});
 
//route untuk delete data
app.post('/delete',(req, res) => {
  let sql = "DELETE FROM product WHERE id="+req.body.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.redirect('/');
  });
});
 
//server listening
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});