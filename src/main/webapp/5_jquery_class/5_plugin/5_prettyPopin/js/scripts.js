/**
 * 
 */
 $(function() {
	// a태그이면서 속성이 rel = prettyPopin 인 요소를 찾고 그 중에 첫 번째 
	$('a[rel="prettyPopin"]:first').prettyPopin({
		width: 550
	});
	// a태그이면서 속성이 rel = prettyPopin 인 요소를 찾고 그 중에 두 번째 (nth-child(2) -> 1부터 시작함)
	$('a[rel="prettyPopin"]:eq(1)').prettyPopin({
		width: 550,
		callback : function(){alert('나감')}
	});
});