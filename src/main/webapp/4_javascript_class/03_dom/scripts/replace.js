
// window.onload = function(){	
		
  var list = document.getElementById('list');
  var pic = document.getElementById('pic');
  var del = document.getElementById('del');

  // 리스트에서 선택(클릭했을 때)

	list.onclick = function(e) {
		console.log(e.target);
		//속성값을 얻자
		var isbn = e.target.getAttribute('data-isbn');
		//alert(isbn);
		
		if(isbn) { 
			var img = document.createElement("img")
			img.height = 150;
			img.width = 100;
			img.src= 'images/' + isbn + '.jpg';
			//pic.appendChild(img);
			//console.log(img);
			
			
			/*pic.replaceChild(img,pic.lastChild);
			pic.appendChild(img);*/
	
			
			//다른 분이 하신 거 
			if(pic.lastChild == null) {
        	pic.appendChild(img);
		     }else{
		        pic.replaceChild(img, pic.lastChild);
		    }
	}
}
	
			del.onclick = function() {
   pic.removeChild(pic.lastChild);
}		
  
  // *****************삭제 버튼 누르면 pic 아래 자식(img 태그)를 지운다*************
  



  
  
//};
