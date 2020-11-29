//init the vars
let name = document.querySelector('#myText').value;
const displaymsg = document.querySelector('#display');
const checker = document.querySelector('#check');

checker.onclick = function() {
  myPassFunction();
}

function myPassFunction() {
  name = document.querySelector('#myText').value;
  // console.log(name);
  if (name === 'Humam') {
    displaymsg.textContent = 'welcome ' + name;
  } else if (name === 'Bernie') {
    displaymsg.textContent = 'wagwan the hustle ' + name;
  } else {
    display.textContent = 'get lost ' + name;
  }
}
