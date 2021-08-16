/* Particles.js */

particlesJS("particles-js", {
    particles: {
        number: {
        value: 300,
        density: { enable: true, value_area: 1000.1416867389551 }
        },
        color: { value: "#ffffff" },
        shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 3 },
        image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
        value: 0.5000708433694776,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
        value: 6,
        random: true,
        anim: {
            enable: false,
            speed: 131.85970127784034,
            size_min: 27.970239664996438,
            sync: false
        }
        },
        line_linked: {
        enable: true,
        distance: 0,
        color: "#ffffff",
        opacity: 0.5417434136502673,
        width: 0
        },
        move: {
        enable: true,
        speed: 1,
        direction: "top",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "window",
        events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: false, mode: "bubble" },
        resize: true
        },
        modes: {
        grab: {
            distance: 152.02702702702692,
            line_linked: { opacity: 0.44514069013927765 }
        },
        bubble: {
            distance: 250,
            size: 5,
            duration: 2,
            opacity: 0.844594594594594,
            speed: 3
        },
        repulse: { distance: 616.5540540540536, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});

/* Audio Button */

var volume = document.getElementById('volume');
var audio = document.getElementById('audio');

if(volume == null){
    volume = null;
}else{
    volume.addEventListener("click", () => {
        if (audio.volume === 0){
            audio.volume = 1;
        } else{
            audio.volume = 0;
        }
    })
}

/* Game Logics */

const playArea = document.getElementById("game-box");
if(playArea == null){

}else{
    const context = playArea.getContext("2d");

    class SnakePart{
        constructor(x, y){
            this.x = x;
            this.y = y;
        }
    }
    
    
    let tileCount = 24;
    let tileSize = playArea.width / tileCount - 3;
    let headX = 10;
    let headY = 10;
    const snakeParts = [];
    let tailLength = 2;
    
    let xVelocity = 0;
    let yVelocity = 0;
    
    let appleX = 5;
    let appleY = 5;
    
    let score = 0;
    
    
    
    function drawGame(){
        positionSnake();
        let status = isGameOver();
        if(status){
            return;
        }
        drawCanvas();
        eatApple();
        drawApple();
        drawSnake();
        drawScore();
        setTimeout(drawGame, 1000/8);
    }
    
    function isGameOver(){
        let gameOver = false;
    
        if(yVelocity === 0 && xVelocity === 0){
            return false;
        }
    
        if(headX < 0){
            gameOver = true;
        }else if(headX === tileCount){
            gameOver = true;
        }else if(headY < 0){
            gameOver = true;
        }else if(headY === tileCount){
            gameOver = true;
        }
    
        for(let i=0; i < snakeParts.length; i++){
            let part = snakeParts[i];
            if(part.x == headX && part.y === headY){
                gameOver = true;
                break;
            }
        }
    
        if(gameOver){
            context.fillStyle = "white";
            context.font = "50px Verdana";
            context.fillText("Game Over!", playArea.width / 4, playArea.height / 2);
            context.fillStyle = "white";
            context.font = "50px Verdana";
            context.fillText("Press R play again!", playArea.width / 10, playArea.height / 1.5);
        }
        return gameOver;
    }
    
    function drawScore(){
        context.fillStyle = "white";
        context.font = "15px Verdana";
        context.fillText("Score: " + score, playArea.width - 80, 15)
    }
    
    function drawCanvas(){
        context.fillStyle = "black";
        context.fillRect(0, 0, playArea.width, playArea.height);
    }
    
    function drawSnake(){
        context.fillStyle = "green";
        for(let i=0; i < snakeParts.length; i++){
            let part = snakeParts[i];
            context.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize)
        }
    
        snakeParts.push(new SnakePart(headX, headY));
        while (snakeParts.length > tailLength){
            snakeParts.shift();
        }
    
        context.fillStyle = "green";
        context.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
    }
    
    function positionSnake(){
        headX = headX + xVelocity;
        headY = headY + yVelocity;
    }
    
    function drawApple(){
        context.fillStyle = "red";
        context.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
    }
    
    function eatApple(){
        if(appleX === headX && appleY === headY){
            appleX = Math.floor(Math.random() * tileCount)
            appleY = Math.floor(Math.random() * tileCount)
            tailLength++;
            score++;
            new Audio("assets/audio/eating-sound.mp3").play();
        }
    }
    
    document.body.addEventListener("keydown", keyDown);
    
    function keyDown(event){
        if(event.keyCode == 38){
            if(yVelocity == 1)
                return;
                yVelocity = -1;
                xVelocity = 0;
        }else if(event.keyCode == 40){
            if(yVelocity == -1)
                return;
                yVelocity = 1;
                xVelocity = 0;
        }else if(event.keyCode == 37){
            if(xVelocity == 1)
                return;
                yVelocity = 0;
                xVelocity = -1;
        }else if(event.keyCode == 39){
            if(xVelocity == -1)
                return;
                yVelocity = 0;
                xVelocity = 1;
        }
    
    }
    
    drawGame();

    document.body.addEventListener("keydown", restart);

    function restart(key){
        if(key.keyCode == 82){
            window.location.reload();
        }
    }
}
