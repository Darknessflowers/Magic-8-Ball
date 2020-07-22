const ball = document.querySelector('.ball');
const heading = document.querySelector('h1');
const submit = document.querySelector('.askQuestion');
const input = document.querySelector('.askMe');
const displayWhite = document.querySelector('.inner');
const display = document.querySelector('.inner p');

function wait(ms=2000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
//shake ball
async function shake() {
  if(display.classList.contains('opacity')) {
    display.classList.remove('opacity');
  }
  ball.classList.add('animate__animated','animate__headShake');
  await wait(400);
  display.classList.add('opacity');
  display.innerHTML = 'Yes'; 

  ball.addEventListener('animationend', function() {
    ball.classList.remove('animate__animated','animate__headShake');
  },
  { once: true });
}

function handleSubmit(e) {
  e.preventDefault();
  shake();
}

// ball.addEventListener('click', shake);
heading.addEventListener('click', shake);


//user types into input box 
//user either clickes submit or submit is triggered with enter key

//shake animation is triggered (takes same length of time as delay)
//random number is generated between 1 and 20
//Delay answer by 2 seconds
//trigger animation that starts at scale of 0.2 and 0 opacity and transitions to regular opacity and scale
// corresponding answer is displayed
//clear input