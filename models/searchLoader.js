var unirest = require('unirest');
var dataAPI = "https://www.googleapis.com/customsearch/v1?key=AIzaSyBi0YWuGGEsgUy9Nh7CUIFYCBuYg9o-UNc&cx=017576662512468239146:omuauf_lfve";

var SearchLoader = function() {

};



// ### function getData (callback)
// #### @path {String} Request URL
// #### @callback {Function} Continuation function
SearchLoader.prototype.getData = function(searchText, callback) {
	console.log("inside getData");
	var self = this;
	var options = {
		url: dataAPI
	};
	var request = unirest.get(options.url);

	request.end(function(response) {
		if (response.body && response.body.errorResponse) {
			console.log("errorResponse");
			callback({'error': 'no response'});
		}
		else {
			callback(response.body);
		}
	});

};

module.exports = new SearchLoader();