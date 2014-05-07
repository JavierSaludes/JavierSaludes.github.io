$( document ).ready( function(){


//alert("my jQuery is working yo");
	$("#sizer button:first-child").on({
		click: function(){
			$("body").css("font-size", "200%");
		}
	});

	$("#sizer button:last-child").on({
		click: function(){
			$("body").css({
				"font-size": "100%",
				/*"color": "red",
				"background-color": "blue"*/
			});
		}
	});


} );