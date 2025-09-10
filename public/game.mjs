import Player from './Player.mjs';
import Collectible from './Collectible.mjs';

const socket = io();
const canvas = document.getElementById('game-window');
const context = canvas.getContext('2d');

const gameWidth = canvas.width;
const gameHeight = canvas.height;

console.log("Game script loaded");
console.log(document.getElementById("game-window"));

context.font = '20px sans-serif';
context.fillStyle = "white";
context.fillText("Controls: WASD", gameWidth/8, 30);
context.fillText("Coin Race", gameWidth/4, 30);
context.fillText("Rank: 1/1", gameWidth/4 * 3, 30);

let randX = Math.round(Math.random() * gameWidth);
let randY = Math.round(Math.random() * gameHeight);
const pancake = new Collectible({ x: randX, y: randY, value: 5, id: 3 });
pancake.draw(context);
randX = Math.round(Math.random() * gameWidth);
randY = Math.round(Math.random() * gameHeight);
const cake = new Collectible({ x: randX, y: randY, value: 2, id: 2 });
cake.draw(context);
randX = Math.round(Math.random() * gameWidth);
randY = Math.round(Math.random() * gameHeight);
const donut = new Collectible({ x: randX, y: randY, value: 1, id: 1 });
donut.draw(context);

const keys = {};
window.addEventListener("keydown", e => keys[e.key.toLowerCase()] = true);
window.addEventListener("keyup", e => keys[e.key.toLowerCase()] = false);

