//let input;
//input =document.getElementById('input'); 
//const sinon = require('sinon');
//nsinon.spy(input,'addEventListener');
function addingEventListener() {
    const input = document.getElementById('input');

    function clickAlert() {
      alert('I was clicked!');
    }
    
    input.addEventListener('click', clickAlert);
     
}
