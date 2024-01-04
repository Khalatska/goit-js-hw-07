const inputElem = document.querySelector('#name-input');
const spamElem = document.querySelector('#name-output');

inputElem.addEventListener('input', updateInput);

function updateInput (){
    const inputValue = inputElem.value.trim();
    const newOutput = inputValue === '' ? `Anonymous`: inputValue;
  spamElem.textContent = newOutput;
}


// function updateInput () {
//   const inputValue = inputElem.value.trim();
//   if (inputValue === ''){
//     return `Anonymous`
//   } 
//   spamElem.textContent = inputValue; 
// }