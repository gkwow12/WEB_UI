
 // 인원수에 따른 가격 계산
 
 window.onload = function() {

	let adult = document.getElementById('adult');
	let kid = document.getElementById('kid');
	let baby = document.getElementById('baby');
	
	
	adult.onchange=calc;
	kid.onchange=calc;
	baby.onchange=calc;
	
	function calc() {
		document.getElementById('total').value = adult.value*39000 + kid.value*29000 + baby.value*19000;
		}
	
	//약관동의
	let frm = document.getElementById('frm');
	
	frm.onsubmit = function(evt) {
		evt.preventDefault()
		evt.stopPropagation()	
	
	let agree = document.getElementById('agree').checked;
	let agree2 = document.getElementById('agree2').checked;
	let idx = document.frm.select.selectedIndex;
	//let optSel = document.frm.select.options;
	if(!agree || !agree2) {
		alert('필수 선택 사항입니다.')
		return;
	}
	if(idx==0){
		alert("연령기준을 선택해주세요.")
		return;
	}
	frm.submit();
	
	}
}
 
