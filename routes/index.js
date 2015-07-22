var express = require('express');
var router = express.Router();
var SearchController = require('../controllers/searchController');


router.get('/', function(req, res, next) {
	new SearchController(req, res);
});

module.exports = router;
