'use strict';

const tsMin = document.querySelector('.js__user-ts');
const resultHHMM = document.querySelector('.js__result-hhmm');
const resultDecimal = document.querySelector('.js__result-decimal');
const sizer = document.querySelector('.js__field-sizer');

function setFieldWidth(content) {
  sizer.innerHTML = content;
  const newSize = sizer.offsetWidth + 'px';
  tsMin.style.width = newSize;
}

function getTS(ts) {
  const hours = Math.floor(ts / 60);
  const minutes = ts % 60;
  return {hours, minutes};
}

function getDecimalTS(ts) {
  const hours = Math.floor(ts / 60);
  const minutes = ts % 60;
  return hours + minutes/60;
}

function writeTime(el,content) {
  el.innerHTML = content;
}

function getTime(event) {
  const userMinutes = parseInt(event.currentTarget.value) || 0;
  const {hours, minutes} = getTS(userMinutes);
  const decimal = getDecimalTS(userMinutes);
  setFieldWidth(userMinutes);
  writeTime(resultHHMM, `${hours}<span classs="unit">h</span> ${minutes}<span classs="unit">min</span>`);
  writeTime(resultDecimal, `${decimal.toFixed(2)}<span classs="unit">h</span>`);
}

tsMin.addEventListener('keyup', getTime);
