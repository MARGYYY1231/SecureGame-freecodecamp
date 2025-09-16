import Player from './Player.mjs';
import Collectible from './Collectible.mjs';

const socket = io();
const canvas = document.getElementById('game-window');
const context = canvas.getContext('2d');

const gameWidth = canvas.width;
const gameHeight = canvas.height;

console.log("Game script loaded");
console.log(document.getElementById("game-window"));

const keys = {};
window.addEventListener("keydown", e => keys[e.key.toLowerCase()] = true);
window.addEventListener("keyup", e => keys[e.key.toLowerCase()] = false);

//     context.font = '20px sans-serif';
//     context.fillStyle = "white";
//     context.fillText("Controls: WASD", gameWidth/8, 30);
//     context.fillText("Coin Race", gameWidth/4, 30);
//     context.fillText("Rank: 1/1", gameWidth/4 * 3, 30);

// -----------------
// GAME STATE
// -----------------

const players = {};
const food = [];

const collectibles = new Map([
  [1, 1],
  [2, 5],
  [3, 10],
]);

function getRandNum(min, max){
    min = Math.ceil(min); // Ensure min is an integer
    max = Math.floor(max); // Ensure max is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeCollectible(){
    let id = getRandNum(1, 3);
    return new Collectible({x: getRandNum(50, gameWidth * 0.75), y: getRandNum(50, gameHeight * 0.75), value: collectibles.get(id), id: id});
}

//let player = new Player({x: 200, y:200, score: 0, id: 2});

// -----------------
// SOCKET EVENTS
// -----------------

let myId = null;

socket.on('connect', () => {
  myId = socket.id;
  players[myId] = new Player({
    x: 200,
    y: 200,
    score: 0,
    id: myId,
    isLocal: true,   // this one responds to keyboard
  });
  console.log("Connected as", myId);
  socket.emit("newPlayer", players[myId]);
});

// When a new player joins
socket.on("newPlayer", (data) => {
  if (!players[data.id]) {
    players[data.id] = new Player({ ...data, isLocal: false });
    console.log("New player joined:", data.id);
  }
});

// When players update positions
socket.on("stateUpdate", (data) => {
  for (let id in data) {
    if (id !== myId) {
      if (!players[id]) {
        players[id] = new Player({ ...data[id], isLocal: false });
      } else {
        // Update remote player
        players[id].x = data[id].x;
        players[id].y = data[id].y;
        players[id].score = data[id].score;
      }
    }
  }
});

// When a player disconnects
socket.on("playerLeft", (id) => {
  delete players[id];
  console.log("Player left:", id);
});

// -----------------
// GAME LOOP
// -----------------

function loopFood() {
  for (let i = 0; i < food.length; i++) {
    let c = food[i];
    // Only my local player checks collisions
    if (players[myId] && players[myId].collision(c)) {
      food[i] = makeCollectible();
      // send updated score
      socket.emit("scoreUpdate", { id: myId, score: players[myId].score });
    }
    food[i].draw(context);
  }
}

function animate() {
  // Update + draw all players
  for (let id in players) {
    let p = players[id];
    p.update(keys);   // only moves if isLocal
    p.draw(context);
  }

  loopFood();

  // Draw local player's rank
  const allScores = Object.values(players).map(p => p.score);
  if (players[myId]) {
    const rankText = players[myId].calculateRank(allScores);
    context.font = '20px sans-serif';
    context.fillStyle = 'white';
    context.fillText(rankText, gameWidth * 0.75, 30);
  }

  // Send my state to server
  if (players[myId]) {
    socket.emit("move", {
      id: myId,
      x: players[myId].x,
      y: players[myId].y,
      score: players[myId].score,
    });
  }
}

function frame() {
  context.clearRect(0, 0, gameWidth, gameHeight);
  animate();
  requestAnimationFrame(frame);
}

// Init some food
for (let i = 0; i < 3; i++) {
  food.push(makeCollectible());
}

frame();
