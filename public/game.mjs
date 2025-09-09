import Player from './Player.mjs';
import Collectible from './Collectible.mjs';

const socket = io();
const canvas = document.getElementById('game-window');
const context = canvas.getContext('2d');

const gameWidth = canvas.width;
const gameHeight = canvas.width;

console.log("Game script loaded");
console.log(document.getElementById("game-window"));

context.font = '20px sans-serif';
context.fillStyle = "white";
context.fillText("Controls: WASD", gameWidth/8, 30);
context.fillText("Coin Race", gameWidth/4, 30);
context.fillText("Rank: 1/1", gameWidth/4 * 3, 30);
