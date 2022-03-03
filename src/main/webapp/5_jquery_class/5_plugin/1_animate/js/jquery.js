$(document).ready(function() {
	
	$('div#bio > div').hide();
	$('div#bio > div:first').show();
	$('div#bio > h3').css('cursor', 'pointer')
	$('#bio h3').click(function(){
		//$(this).next().toggle();
		$(this).next().animate({'height': 'toggle'}, 2000, 'easeOutBounce');
	})
	
});