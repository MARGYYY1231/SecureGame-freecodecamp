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

let player = new Player({x: 200, y:200, score: 0, id: 1});

function animate(){
    player.update(keys);
    player.draw(context);
}

function frame(){
    context.clearRect(0, 0, gameWidth, gameHeight);
    animate();
    requestAnimationFrame(frame);
}

frame();
