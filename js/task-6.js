function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
    }

const inputElem = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxElem = document.querySelector('#boxes');

function createBoxes(amount) {

    let size = 30;

    for (let i = 0; i < amount; i++){
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxElem.append(box);

    size +=10;
    }
    
}

function destroyBoxes() {
    boxElem.innerHTML = '';

}

btnCreate.addEventListener( 'click', onBtnClick);

function onBtnClick () {
    inputValue = inputElem.value;
    if (inputValue >= 1 && inputValue <= 100){
    createBoxes(inputValue);
    inputElem.value = '';
}
}

 btnDestroy.addEventListener ( 'click', destroyBoxes);
