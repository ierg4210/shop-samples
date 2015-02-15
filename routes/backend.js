var express = require('express');
var anyDB = require('any-db');
var config = require('../shopXX-ierg4210.config.js');

var app = express.Router();

var pool = anyDB.createPool(config.dbURI, {
	min: 2, max: 10
});

// URL expected: http://hostname/admin
app.get('/', function (req, res) {

	// async fetch data from SQL, render page when ready
	pool.query('SELECT * FROM categories', function (error, categories) {
		if (error) {
			console.error(error);
			res.status(500).end();
			return;
		}

		pool.query('SELECT * FROM products', function (error, products) {
			if (error) {
				console.error(error);
				res.status(500).end();
				return;
			}

			res.render('admin-panel', {
				layout: 'admin',
		    	title: 'IERG4210 ShopXX Admin',
		    	cat: categories.rows,
		    	prod: products.rows
		    });

		});
	});
});

module.exports = app;