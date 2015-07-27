(function($) {
  'use strict';

	$(function () {

		var googleAPI = "https://ajax.googleapis.com/ajax/services/search/web?v=1.0";
		
		$( ".searchText" ).keypress(function( event ) {
			if ( event.which == 13 ) {
				getSearchData();
				return false;
			 }
		});

		$( ".searchButton" ).click(function() {
			console.log("searchButton");
			getSearchData();
		});

		function getSearchData(){
			$('.resultContainer').empty();	
			$.ajax({
			  type: 'GET',
			  url: googleAPI + "&q=" + $('.searchText').val(),
			  dataType: "jsonp",
			}).done(function(data) {

				var feed = data.responseData.results;

				if (feed === undefined || feed.length == 0) {
					$('.resultContainer').append('<h3 class="results">No Results</h3>');
				}
				else {
					$('.resultContainer').append('<h3 class="results">Search Results:</h3>');
					
					$('.resultContainer').append(feed);
					for (var p in feed) {
					    if( feed.hasOwnProperty(p) ) {
					    	$('.resultContainer').append('<div class="title"><a href="' + feed[p].url + '"' + feed[p].title +'</a></div><div class="description">' + feed[p].content +'</div><br />');
					    }
					}
					
				}

			  }).fail(function() {
			    console.log( "error" );
			});
		}

	});

}(jQuery));