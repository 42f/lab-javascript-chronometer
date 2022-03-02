const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
}

function printMinutes() {
}

function printSeconds() {
}

// ==> BONUS
function printMilliseconds() {
}

function printSplit() {
}

function clearSplits() {
}

// left

function setStopBtn() {
  btnLeftElement.classList.toggle('start', false)
  btnLeftElement.classList.toggle('stop')
  btnLeftElement.innerText = 'STOP';
}

function setStartBtn() {
  btnLeftElement.classList.toggle('stop', false)
  btnLeftElement.classList.toggle('start');
  btnLeftElement.innerText = 'START';
}

// right

function setSplitBtn() {
  btnRightElement.classList.toggle('reset', false)
  btnRightElement.classList.toggle('split');
  btnRightElement.innerText = 'SPLIT';
}

function setResetBtn() {
  btnRightElement.classList.toggle('split', false)
  btnRightElement.classList.toggle('reset');
  btnRightElement.innerText = 'RESET';
}

let chronoStarted = false;

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  console.log('yey');
  chronoStarted = !chronoStarted;
  if (chronoStarted) {
    chronometer.start(() => {
      chronometer.currentTime++;
      console.log(chronometer.currentTime)
    });
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // if (chronoStarted) {
  //   setStopBtn();
  //   setSplitBtn();
  // } else {
  //   setStartBtn();
  //   setResetBtn();
  // }
});
