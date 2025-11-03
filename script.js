const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const matrixChars = 'ABCDEFGHIJLKMNOPQRSTUVWXYZ1234567890!@#$%^&*()-+=[]{}|;:,.<>?/\\';

const fontSize = 16;
let columns = canvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0F0';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
    const x = i * fontSize;
    const y = drops[i] * fontSize;
    ctx.fillText(text, x, y);
    if (y > canvas.height && Math.random() > 0.9) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 33);

window.addEventListener('resize', () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  columns = canvas.width / fontSize;
  drops.length = 0;
  for (let i = 0; i < columns; i++) {
    drops[i] = 1;
  }
});