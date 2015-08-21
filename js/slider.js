$(document).ready(function() {
	var max,min,rn;
	max = $('#input-range').attr('max');
	min = $('#input-range').attr('min');
	rn = '';
	for (var i = min; i <= max; i++) {
		rn += "<span>"+i+"</span>"
	};
	$('#rn').html(rn);

	updateH(false);

	$('#input-range').bind('input', function(){updateH(true);});
	// $('#input-range').change(function(event) {
	// 	 Act on the event 
	// 	$('#input-wrapper').removeClass('active');		
	// });
	$('#input-range').mouseup(function(event) {
		 // Act on the event 
		$('#input-wrapper').removeClass('active');
	});
		

	function updateH(active) {
		if (active) {$('#input-wrapper').addClass('active');	};		
		var h = $('#input-range').val()/max*($('#input-wrapper').width()-$('#reel').width());
		$('#reel').css('left', h);
		$('#static-output').css('left',h);
		var num = Math.round($('#input-range').val());
		$('#static-output').html(num);
		var v = -1*num*$('#reel').height();
		$('#rn').css('top',v);		
	}
	
});