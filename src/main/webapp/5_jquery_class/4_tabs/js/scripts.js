
$(function() {
	let topDiv= $('.tabSet');
	let anchors = topDiv.find('ul.tabs a');
	let panelDivs = topDiv.find('div.panel');
	anchors.show();
	panelDivs.hide();
	
	let lastAnchor = anchors.filter('.on');
	let lastPanel = $(lastAnchor.attr('href'));
	lastPanel.show();
	
	anchors.click(function() {
		let nAnchors = $(this)
		let aPanel = $(nAnchors.attr('href'));
		nAnchors.addClass('on')
		lastAnchor.removeClass('on');
		
		lastPanel.hide();
		aPanel.show();
		
		lastAnchor=nAnchors;
		lastPanel=aPanel;
		
		/*
		1) 현재 이벤트 발생한 a 태그와 그 href값의 panel 얻어와서 변수에 지정
		2) 기존 a 태그에 있던 on 클래스 제거
		3) 현재 이벤트 발생한 a 태그에 'on' 클래스 추가
		4) 기존 패널 감추기
		5) 현재패널 보이기(1번의 변수 )
		6) 현재 a 태그와 현재 패널을 lastAnchor / lastPanel 변수에 지정
		
		 */
	})
})