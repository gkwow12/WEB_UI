window.onload = function(){

		var frm = document.getElementById('frm');
		var inputs = document.querySelectorAll("input");
		
	frm.onsubmit = function(evt) {
		//고유의 이벤트 기능을 못하게 하기
		evt.preventDefault()
		evt.stopPropagation()	
		
		//체크 여부 확인하기
		var agree = document.getElementById('agree').checked;
		if(!agree) {
			alert('체크 필수 사항입니다.')
			return;
		}
		//서버로 전송하기
		frm.submit();
	}

	}