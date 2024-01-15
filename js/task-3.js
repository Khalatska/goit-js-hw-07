const inputElem = document.querySelector('#name-input');
const spanElem = document.querySelector('#name-output');

inputElem.addEventListener('input', updateInput);

function updateInput (){
    const inputValue = inputElem.value.trim();
    const newOutput = inputValue === '' ? `Anonymous`: inputValue;
  spanElem.textContent = newOutput;
}


// function updateInput () {
//   const inputValue = inputElem.value.trim();
//   if (inputValue === ''){
//     return `Anonymous`
//   } 
//   spamElem.textContent = inputValue; 
// }