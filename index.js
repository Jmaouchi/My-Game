const character = document.getElementById('character'),
block = document.getElementById('block'),
timer = document.querySelector('.time'),
btn = document.querySelector('.btn-jump'),
running = document.querySelector('.running'),
openBtn = document.getElementById('open-btn'),
closeBtn = document.getElementById('close-btn'),
modalOverlay = document.querySelector('.modal-overlay'),
myScore = document.querySelector('.score'),
playAgain = document.querySelector('.play'),
closeAll = document.querySelector('.closeAll')

// this function is a listener that will make the moto to jump 
function jump(){
  // this will stop creating the className everytime this function is invoked
  if(character.classList != 'animate'){
    character.classList.add('animate');
  }

  // we need to add a setTimeout to remove the class in order for us to jump again 
  setTimeout(function(){
    character.classList.remove('animate')
  },500);
}

// call the TrackMyScore function inside the setInterval method
let time = 0
var setTime = setInterval (trackMyScore, 100);
function trackMyScore(){
  const score =  timer.textContent = time++ 
  let characterTop =  parseInt(window.getComputedStyle(character).getPropertyValue('top')); // the parsInt is to give us the number and take off the px
  let blockleft =  parseInt(window.getComputedStyle(block).getPropertyValue('left'));

  // lets see where the moto div touch the rock
  if(blockleft<20 && blockleft>0 && characterTop>=130){ // the 20 and 0 coming from the motocycle div, because it has a width of 20px
    running.textContent = 'lost'
    running.classList.add('lost')
    // if the classlist exist, then dont add it again 
    if(modalOverlay.classList != 'modal-overlay active'){
      modalOverlay.classList.toggle('active');
      // stop displaying the black block on the screen when it hits the motocycle
      block.style.display = 'none'
      // clear the interval to stop counting 
      clearInterval(setTime)
    }  
    myScore.textContent= score;
  }
};

// start game
function startGame(){
  window.location.reload();
}

function closeIt(){
  // assign to the first page
  window. close()
}

btn.addEventListener('click', jump)
playAgain.addEventListener('click', startGame)
closeAll.addEventListener('click', closeIt)