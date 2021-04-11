// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!

const gray = document.querySelector('#grayButton');

const whiteButton = document.querySelector('#whiteButton');

//const text = 
//document.querySelector('h1, p');


function changeToGray() {
 // grayButton.className = 'gray';
  document.body.style.background = 'gray';
  document.body.style.color = 'white';
}

gray.addEventListener('click', changeToGray);

function changeToWhite() {
  document.body.style.background = 'white';
  document.body.style.color = 'black';
}

whiteButton.addEventListener('click', changeToWhite);
