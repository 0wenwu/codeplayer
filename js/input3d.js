$(document).ready(function() {	

	$('#email').focus(function(event) {
		/* Act on the event */
		$('#wrapper form').addClass('ready');
	});

	$('#email').blur(function(event) {
		/* Act on the event */
		if ($('#email').val()=='') {
			$('#wrapper form').removeClass('ready');
		};
		
	});

	$('#email').keyup(function(event) {
		/* Act on the event */
		$('.submit-icon').toggleClass('active',$(this).val().length>0);		
	});

	$('#wrapper form').submit(function(event) {
		/* Act on the event */
		$('#wrapper form').removeClass('ready').addClass('loading');
		setTimeout(complete,3000);
		return false;
	});

	$('.reset-icon').click(function(event) {
		/* Act on the event */
		$('#wrapper form').removeClass('complete');
	});

	function complete(){
		$('#wrapper form').removeClass('loading').addClass('complete');
	}	
});