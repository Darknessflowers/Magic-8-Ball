const ball = document.querySelector('#ball');
const submit = document.querySelector('.askQuestion');
const input = document.querySelector('.askMe');
//shake ball
function shake() {
  ball.classList.add('animate__animated', 'animate__animate__headShake');
}

function handleSubmit(e) {
  e.preventDefault();
  shake();
}

ball.addEventListener('click', handleSubmit);

//user types into input box 
//user either clickes submit or submit is triggered with enter key

//shake animation is triggered (takes same length of time as delay)
//random number is generated between 1 and 20
//Delay answer by 2 seconds
//trigger animation that starts at scale of 0.2 and 0 opacity and transitions to regular opacity and scale
// corresponding answer is displayed
//clear input