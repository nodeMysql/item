var express = require('express');
var router = express.Router();

var mysql = require('mysql')
var pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'dna'
})

/* GET home page. */
router.get('/list', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*')
	
	pool.query('SELECT * FROM item',function(e,rows){
		res.send(rows)
//		console.log(rows)
	})
});


router.post('/detail', function(req, res, next) {
//  	res.header('Access-Control-Allow-Origin','*')
	
	var id=req.body.a
	console.log(req.body)
	console.log(id)

	pool.query('SELECT * FROM item WHERE id='+id,function(e,rows){
		res.header('Access-Control-Allow-Origin','*')
	
		res.send(rows)
		console.log(rows)
	})
});


module.exports = router;
