import Player from './Player.mjs';
import Collectible from './Collectible.mjs';

const socket = io();
const canvas = document.getElementById('game-window');
const context = canvas.getContext('2d');

console.log("Game script loaded");
console.log(document.getElementById("game-window"));

context.font = '40px sans-serif';
context.fillStyle = "white";
context.fillText("Hello Player!", canvas.width/2, canvas.height/2);
