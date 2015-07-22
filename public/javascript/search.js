(function($) {
  'use strict';

	$(function () {

		var googleAPI = "https://www.googleapis.com/customsearch/v1?key=AIzaSyBi0YWuGGEsgUy9Nh7CUIFYCBuYg9o-UNc&cx=017576662512468239146:omuauf_lfve";
		
		$( ".searchText" ).keypress(function( event ) {
			if ( event.which == 13 ) {
				getSearchData();
				return false;
			 }
		});

		$( ".searchButton" ).click(function() {
			getSearchData();
		});

		function getSearchData(){
			$('.resultContainer').empty();	
			$.ajax({
			  type: 'GET',
			  url: googleAPI + "&q=" + $('.searchText').val(),
			  dataType: "json",
			}).done(function(resultContainer) {
				feed = resultContainer.data;
				if (feed.children === undefined || feed.children.length == 0) {
					$('.resultContainer').append('<h3 class="results">No Results</h3>');
				}
				else {
					$('.resultContainer').append('<h3 class="results">Results:</h3>');
					
				}  
			  }).fail(function() {
			    console.log( "error" );
			});
		}

	});

}(jQuery));