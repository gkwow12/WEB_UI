/**
 * 
 */
 
 $(function(){
 $('.rollover > img').mouseenter(function(){
		let a = $(this).attr('src');
		$(this).attr('src', a.replace('off', 'on'));
	})
	
	$('.rollover > img').mouseleave(function(){
		let a = $(this).attr('src');
		$(this).attr('src', a.replace('on', 'off'));
	})

/*$('img').hover(function(){}, function() {
		let a = $(this).attr('src');
		$(this).attr('src', a.replace('off', 'on'));
	})*/


});