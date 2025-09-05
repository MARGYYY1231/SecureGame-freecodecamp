import Player from './Player.mjs';
import Collectible from './Collectible.mjs';

const socket = io();
const canvas = document.getElementById('game-window');
const context = canvas.getContext('2d');

console.log("Game script loaded");
console.log(document.getElementById("game-window"));

context.font = '20px sans-serif';
context.fillStyle = "white";
context.fillText("Controls: WASD", canvas.width/8, 30);
context.fillText("Coin Race", canvas.width/8 * 3, 30);
context.fillText("Rank: 1/1", canvas.width/4 * 3, 30);
