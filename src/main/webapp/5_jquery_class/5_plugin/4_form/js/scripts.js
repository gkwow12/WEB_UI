/**
 * 
 */
$(function(){
	
/*	$('xxx').validate({
		rules : ccc -
		success : ddd
	})*/
	
	$('#signup > form').validate({
		rules : {
			name : {required  : true},
			email : {required  : true, email : true},
			website : {url : true},
			password : { required : true, minlength : 6},
			passconf : { equalTo: '#password'}
		},
		success : function(label){
			label.addClass('valid')
			label.text('성공')//출력은 안되지만 이 코드 없으면 녹색 체크 안 됨
		}

	});
	// ''위 조항 모두'' 체크하면 위의 모든 항목 체크
	//반대로 헤제도 같이 

/*$('.check-all').click(function(){
	if($(this).is(':checked')){
		$('.agree').prop("checked", true);
	}else{ $('.agree').prop("checked", false);}
})*/
	
$('.check-all').click(function(){
	//true 자리에 넣어버리기 ( if문 안 쓰기)
	$('.agree').prop("checked", $(this).is(':checked'));
})

	});