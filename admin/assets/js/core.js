jQuery(function($) {

	// return to top of page
	$("#top-of-page").click(function(e){
		$("html,body").animate({scrollTop:0}, "slow");
		e.preventDefault();	
	});
	
	$(".alert").alert();

});