 var circus = 0;
document.querySelector('#circus').onclick = function() {
    if(circus == 0) {
        document.querySelector('#circus').innerHTML = 'blah blah blah'
        circus++;
    }
    else {
        document.querySelector('#circus').innerHTML = 'click me' 
        circus--;
    }
  } 

  var twin = 0;
   document.querySelector('#twin').onclick = function() {
    if(twin == 0) {
        document.querySelector('#twin').innerHTML = 'blah blah blah'
        twin++;
    }
    else {
        document.querySelector('#twin').innerHTML = 'click me' 
        twin--;
    }
  }
  var ela = 0;
  document.querySelector('#ela').onclick = function() {
   if(ela == 0) {
    document.querySelector('#ela').innerHTML = 'blah blah blah'
    ela++;
}
else {
    document.querySelector('#ela').innerHTML = 'click me' 
    ela--;
}
 } 