$(document).ready(function() {
	// initial the label
	$('#wrapper label').each(function(index, el) {
		var sop = '<span>';
		var scl = '</span>';
		$(this).html(sop + $(this).html().split('').join(scl + sop) + scl);
	});

	$('#wrapper input').focus(function(event) {
		/* Act on the event */
		$(this).next().addClass('focus').find('span').stop(true).each(function(i) {
			$(this).delay(50*i).animate({top: -20},200);
		});
	});

	$('#wrapper input').blur(function(event) {
		/* Act on the event */
		if ($(this).val() == '') {
			$(this).next().removeClass('focus').find('span').stop(true).each(function(i) {
				$(this).delay(50*i).animate({top: 0},200);
			});
		};

	});
});