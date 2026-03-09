const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

/* const window_height = window.innerHeight;
const window_width = window.innerWidth; */

canvasOOP.height = "200";
canvasOOP.width = "300";

canvasRandom.height = "200";
canvasRandom.width = "300";

canvasMultiple.height = "200";
canvasMultiple.width = "300";

canvasOOP.style.background = "#ff8";
canvasRandom.style.background = "#e6f7f6";
canvasMultiple.style.background = "#fcfb97";

/* FUNCION PARA GENERAR COLORES ALEATORIOS */
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

class Circle {
  constructor(x, y, radius, color, text, backcolor) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.backcolor = backcolor;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);

    context.fillStyle = this.backcolor;
    context.fill();

    context.lineWidth = 5;
    context.strokeStyle = this.color;
    context.stroke();

    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 20px cursive";
    context.fillStyle = "white";
    context.fillText(this.text, this.posX, this.posY);

    context.closePath();
  }
}

let randomX = Math.random() * canvasRandom.width;
let randomY = Math.random() * canvasRandom.height;
let randomRadius = Math.floor(Math.random() * 100 + 30);

let miCirculo = new Circle(
  canvasOOP.width / 2,
  canvasOOP.height / 2,
  50,
  "red",
  "Tec",
  "rgb(66, 135, 245)"
);
miCirculo.draw(ctx);

let miCirculoRandom = new Circle(
  randomX,
  randomY,
  randomRadius,
  "green",
  "Tec",
  "rgb(83, 186, 52)"
);
miCirculoRandom.draw(ctxRandom);

let arrayCircle = [];
let MaxCircles = 10;

for (let i = 0; i < MaxCircles; i++) {

  let randomRadius = Math.floor(Math.random() * 10 + 20);

  // evitar que el círculo se salga del canvas
  let randomX = Math.random() * (canvasMultiple.width - randomRadius * 2) + randomRadius;
  let randomY = Math.random() * (canvasMultiple.height - randomRadius * 2) + randomRadius;

  let borderColor = randomColor();
  let fillColor = randomColor();

  let miCirculoMultiple = new Circle(
    randomX,
    randomY,
    randomRadius,
    borderColor,
    i + 1,
    fillColor
  );

  arrayCircle.push(miCirculoMultiple);
  arrayCircle[i].draw(ctxMultiple);
}