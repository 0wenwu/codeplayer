$(document).ready(function() {
	/*load gallery*/
	var gallery = '';
	var count = 50;
	for (var i = 1; i <= count; i++) {		
		gallery += "<div></div>";
	};
	$('#gallery').append(gallery);

	$('#gallery > div').each(function(index, el) {
		var color = "#"+index+index+index;
		$(this).css('background', color);
	});

	/*bind click event*/
	var d = 0;//delay time
	$('.button').click(function(event) {
		/* Act on the event */
		$('#gallery > div').each(function(index, el) {
			d = Math.random()*1000;
			$(this).delay(d).animate({opacity: 0},{
				step:function(n){
					s = 1 - n;
					$(this).css('transform','scale('+s+')');
				},
				duration:1000
			});
		}).promise().done(function() {storm();});
		
	});	
	/*bring back gallery*/
	
	function storm(){
		var tz, ry;
		$('#gallery > div').each(function(index, el) {
			d = Math.random()*1000;
			$(this).delay(d).animate({opacity: 1},
			{				
				step:function(n){
					ry = (1-n)*360;
					tz = (1-n)*1000;
					$(this).css('transform', 'rotateY('+ry+'deg) translateZ('+tz+'px)');
				},
				duration:3000,
				easing:'easeOutQuint'
			});
		});
	}
});