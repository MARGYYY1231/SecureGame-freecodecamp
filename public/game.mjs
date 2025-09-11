import Player from './Player.mjs';
import Collectible from './Collectible.mjs';

const socket = io();
const canvas = document.getElementById('game-window');
const context = canvas.getContext('2d');

const gameWidth = canvas.width;
const gameHeight = canvas.height;

console.log("Game script loaded");
console.log(document.getElementById("game-window"));

// const keys = {};
// window.addEventListener("keydown", e => keys[e.key.toLowerCase()] = true);
// window.addEventListener("keyup", e => keys[e.key.toLowerCase()] = false);

let player = new Player({x: 200, y: 200, score: 0, id:1});
function gameloop(){
    player.draw(context);
}

function frame(){
    context.clearRect(0, 0 , width, height);
    gameloop();
    requestAnimationFrame(gameloop);
}

frame();

// let player;

// function loadImage(src) {
//   return new Promise((resolve, reject) => {
//     const img = new Image();
//     img.src = src;
//     img.onload = () => resolve(img);
//     img.onerror = reject;
//   });
// }

// function gameloop(){
//     context.clearRect(0, 0, gameWidth, gameHeight);

//     context.font = '20px sans-serif';
//     context.fillStyle = "white";
//     context.fillText("Controls: WASD", gameWidth/8, 30);
//     context.fillText("Coin Race", gameWidth/4, 30);
//     context.fillText("Rank: 1/1", gameWidth/4 * 3, 30);

//     player.update(keys);
//     player.draw(context);

//   requestAnimationFrame(gameloop);
// }

// Promise.all([
//   loadImage("assets/characters/Slime1_Idle_full.png"),
//   loadImage("assets/characters/Slime1_Walk_body.png")
// ]).then(([idleImage, moveImage]) => {
//   player = new Player({ x: 200, y: 200, score: 0, id: 1,});
//   player.setSheets(moveImage, idleImage);
//   requestAnimationFrame(gameloop);
// });

// let randX = Math.round(Math.random() * gameWidth);
// let randY = Math.round(Math.random() * gameHeight);
// const pancake = new Collectible({ x: randX, y: randY, value: 5, id: 3 });
// pancake.draw(context);
// randX = Math.round(Math.random() * gameWidth);
// randY = Math.round(Math.random() * gameHeight);
// const cake = new Collectible({ x: randX, y: randY, value: 2, id: 2 });
// cake.draw(context);
// randX = Math.round(Math.random() * gameWidth);
// randY = Math.round(Math.random() * gameHeight);
// const donut = new Collectible({ x: randX, y: randY, value: 1, id: 1 });
// donut.draw(context);

