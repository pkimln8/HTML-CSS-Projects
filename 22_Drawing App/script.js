const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
const context = canvas.getContext('2d');

let size = 10;
let isPressed = false;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;

})

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
})

function drawCircle(x, y) {
  context.beginPath();
  context.arc(x, y, size, 0, Math.PI * 2, true);
  context.fillStyle = color;
  context.fill();
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.strokeStyle = color;
  context.lineWidth = size * 2;
  context.stroke();
}

function updateSizeOnScreen() {
  sizeEl.innerText = size;
}

increaseBtn.addEventListener('click', () => {
  size += 5;

  if (size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
})

decreaseBtn.addEventListener('click', () => {
  size -= 5;

  if (size < 5) {
    size = 5;
  }

  updateSizeOnScreen();
})



colorEl.addEventListener('change', (e) => color = e.target.value);

clearEl.addEventListener('click', () => context.clearRect(0,0, canvas.width, canvas.height));