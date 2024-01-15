function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

const spanElem = document.querySelector('.color');
const btnElem = document.querySelector('.change-color');
const bodyElem = document.body;

btnElem.addEventListener( 'click', onBtnClick);

function onBtnClick() { 
    const randomColor = getRandomHexColor();
    spanElem.textContent = randomColor;
    bodyElem.style.backgroundColor = randomColor;
    
}