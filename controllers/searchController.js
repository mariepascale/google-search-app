var async = require('async');
var searchLoader = require('../models/').searchLoader;


// ### function SearchController()
// #### @req {object} request object
// #### @res {object} response object
// Returns Rendered Mobile page.
function SearchController(req, res)
{
	console.log("inside S")
	var _self = this;
	
	//return rendered HTML
	return _self.render(req, res);
};


// ### function render(req, res)
// #### @req {object} request object
// #### @res {object} response object
// Render html page.
SearchController.prototype.render = function(req, res) {
	var _self = this;
	var searchData = [];
	var title = "Search Results";

	/*if(req.params.searchData){
		_self.searchData = req.params.searchData;
	}
	else{
		_self.searchData = "";
	}*/

	res.render('index', {
		title: title
	});


	/*searchLoader.getData(_self.results, function callback(data){
		if (data.error) {
			callback(null, {'error': 'results'});
		}
		else {

			res.render('index', {
				title: title
			});
		}
	});*/
	
};


module.exports = SearchController;