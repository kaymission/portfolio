 var circus = 0;
document.querySelector('#circus').onclick = function() {
    if(circus == 0) {
        document.querySelector('#circus').innerHTML = '(TRUE) I did a program with Prescott Circus in elementary school and over the summer'
        circus++;
    }
    else {
        document.querySelector('#circus').innerHTML = 'I was in a circus' 
        circus--;
    }
  } 

  var twin = 0;
   document.querySelector('#twin').onclick = function() {
    if(twin == 0) {
        document.querySelector('#twin').innerHTML = '(TRUE) I have a twin brother, but I am older by one minute'
        twin++;
    }
    else {
        document.querySelector('#twin').innerHTML = 'I am a twin' 
        twin--;
       
    }
  }
  var ela = 0;
  document.querySelector('#ela').onclick = function() {
   if(ela == 0) {
    document.querySelector('#ela').innerHTML = '(FALSE) This is my least favorite because I do not like to read books or write essays'
    ela++;
}
else {
    document.querySelector('#ela').innerHTML = 'My favorite subject is ELA' 
    ela--;
}
 } 