/**
 * 
 */
 
 $(document).ready(function(){
	
	//$('div#celebs > table.data > tbody > tr:even').css({'background-color' : 'pink'})
	
	$('div#celebs > table.data > tbody > tr').hover(function() { 
		$(this).addClass('table_striping');
		}, function() {
		$(this).removeClass('table_striping');
	});
	
	$('#hideButton').click(function() {
		$('p > img').fadeOut(slow);
	})
	$('#showButton').click(function() {
		$('p > img').css('visibility', 'visible')();
	})
	
	


$('#toggleButton').click(function(){
			if($('#intro > img').is(':visible')){
				$('#intro > img').fadeOut('slow');
			}
			else{
				$('#intro > img').fadeIn('slow');
				
			}
		
	})


});