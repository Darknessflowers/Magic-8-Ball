const ball = document.querySelector('.ball');
const submit = document.querySelector('.askQuestion');
const question = document.querySelector('.question');
const inputQuestion = document.querySelector('#askMe');
const display = document.querySelector('.inner p');
const magicValues = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes – definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.'
]
function wait(ms=2000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

//shake ball
async function shake() {
  if(display.classList.contains('opacity')) {
    display.classList.remove('opacity');
  }
  ball.classList.add('animate__animated','animate__headShake');
  await wait(400);
  let ranNum = getRandomIntInclusive(1, 20); 

  display.innerHTML = magicValues[ranNum-1]; 
  display.classList.add('opacity');

  ball.addEventListener('animationend', function() {
    ball.classList.remove('animate__animated','animate__headShake');
  },
  { once: true });
}

function handleSubmit(e) {
  e.preventDefault();
  question.reset();
  shake();
}

function focus() {
  console.log(inputQuestion);
  inputQuestion.focus();
}

window.addEventListener('load', focus);
submit.addEventListener('click', handleSubmit);