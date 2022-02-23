let item = document.getElementsByClassName('item')

item.onclick = function(e) {
   
   for(var i=0; i<item.length; i++){
      item[i].onclick = function(e){
         alert('ok');
         var price = e.target.getAttribute('data-price');
         alert(price);
         
         
         }
      }
	

}
	




  