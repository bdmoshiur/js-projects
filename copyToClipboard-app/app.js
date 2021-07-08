const inputData = document.querySelector('#input');
const button = document.querySelector('button');

button.onclick = function() {
  inputData.select();
  document.execCommand('copy');

  alert('Copied');
}
