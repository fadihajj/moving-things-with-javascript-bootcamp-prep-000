const app = "I don't do much.";

document.addEventListener('keydown', function(e){

  if(e.which === 37){
   moveDodger('left'); 
  }
  else if(e.which ===39){
    moveDodger('right');
  }
  
});

function moveDodger(direction){
  
  var dodger =  document.getElementById('dodger');
  var rightNumbers = dodger.style.right.replace('px', '');
  var right = parseInt(rightNumbers, 10);

  if(right < 360 && direction === 'left')
    {
      dodger.style.right = `${right +4}px`;   
    }
      
  else if(right > 0 && direction === 'right')
    {
      dodger.style.right = `${right -4}px`; console.log(right);
    }
}

  console.log(e.key);
  if(e.which === 37){
   moveDodgerLeft(); 
  }
});

function moveDodgerLeft(){
  
  var dodgerLeft =  $('#dodger').style.left;
  var leftNumbers = dodgerLeft.replace('px', '');
  var left = parseInt(leftNumbers, 10);
  
  dodgerLeft = `${left -1}px`;
}
>>>>>>> 5bb820ccc316d2f57203d0a915d04bc408518c68
