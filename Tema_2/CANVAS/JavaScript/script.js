// Ejemplo básico de uso de Canvas en JavaScript
const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

// Color y tamaño del rectángulo relleno
ctx.fillStyle = '#FF8F43';
ctx.fillRect(20, 20, 100, 50);

// Borde del rectángulo
ctx.strokeStyle = '#8f9814';
ctx.lineWidth = 3;
ctx.strokeRect(150, 50, 100, 50);
