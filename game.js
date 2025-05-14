// game.js
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const map = new Image();
map.src = "assets/mapa.png";

// Jogador
const player = {
  x: 500,
  y: 300,
  width: 32,
  height: 32,
  speed: 2.5,
  color: "lime"
};

const keys = {};
document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

// Função principal
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(map, 0, 0, canvas.width, canvas.height);

  // Movimento
  if (keys["w"]) player.y -= player.speed;
  if (keys["s"]) player.y += player.speed;
  if (keys["a"]) player.x -= player.speed;
  if (keys["d"]) player.x += player.speed;

  // Desenha o jogador
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);

  requestAnimationFrame(gameLoop);
}

map.onload = gameLoop;
