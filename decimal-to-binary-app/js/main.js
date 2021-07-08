const submit = document.querySelector('#submit');
const result = document.querySelector('#result');

function binary(e) {
  e.preventDefault();

  const num = document.querySelector('#number').value;

  if( num === '') {

    alert('Please enter a number');

  } else if( num < 0) {

    alert('Please enter a Positive number');

  } else {

    result.style.visibility = 'visible'
  }

  const bNumber = Number(num).toString(2);

  result.innerText = bNumber;
}

submit.addEventListener('click', binary)