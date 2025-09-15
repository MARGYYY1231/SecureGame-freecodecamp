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

const collectibles = new Map();
setMap();

function setMap(){
    collectibles.set(1, 1);
    collectibles.set(2, 5);
    collectibles.set(3, 10);
}

function getRandNum(min, max){
    min = Math.ceil(min); // Ensure min is an integer
    max = Math.floor(max); // Ensure max is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeCollectible(){
    let id = getRandNum(1, 3);
    return new Collectible({x: getRandNum(0, gameWidth), y: getRandNum(0, gameHeight), value: collectibles.get(id), id: id});
}

let player = new Player({x: 200, y:200, score: 0, id: 2});

let food = [makeCollectible(), makeCollectible(), makeCollectible()];

function loopFood(){
    //food.length
    for(let i = 0; i<1; i++){
        let c = food[i];
        // console.log("item ", i);
        // console.log("x: ", c.x);
        // console.log("y: ", c.y);
        // console.log("id: ", c.id);
        // console.log("value: ", c.value);
        if (player.collision(c)) {
            c = makecollectible(); 
            food[i] = c;
        }
        c.draw(context);
    }
}

function animate(){
    player.update(keys);
    player.draw(context);
    loopFood();
}

function frame(){
    context.clearRect(0, 0, gameWidth, gameHeight);
    animate();
    requestAnimationFrame(frame);
}

frame();
