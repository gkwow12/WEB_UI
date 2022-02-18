/**
 * 
 */
 
 document.getElementById('frm').onsubmit = function() {
        if( document.getElementById('empno').value == '') {
              alert('사번은 필수입력사항입니다.')
              return false;
        }
        return true;
  }