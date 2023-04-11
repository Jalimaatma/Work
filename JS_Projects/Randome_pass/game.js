window.onload = function () {
    // Step 1: Canvas Setup
    const canvas = document.getElementById("canvas");
    canvas.width = 400;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");
    const backgroundColor = "#70c5ce";

    // Step 2: Image Files
    const imageFiles = {
        bird: "bird.png",
        pipe: "pipe.png",
        ground: "ground.png",
        background: "background1.jpg",
    };

    // Step 3: Load Images
    const images = {};

    function loadImages(callback) {
        let loaded = 0;
        let total = Object.keys(imageFiles).length;

        for (let key in imageFiles) {
            let img = new Image();
            img.onload = function () {
                loaded++;
                if (loaded === total) {
                    callback();
                }
            };
            img.src = imageFiles[key];
            images[key] = img;
        }
    }
    loadImages();
    // Step 4: Draw Function
    function draw() {
        // draw background
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // draw pipes
        for (let i = 0; i < pipes.length; i++) {
            let pipe = pipes[i];
            ctx.drawImage(images.pipe, pipe.x, pipe.y, pipe.width, pipe.height);
        }

        // draw bird
        ctx.drawImage(images.bird, bird.x, bird.y, bird.width, bird.height);

        // draw ground
        ctx.drawImage(images.ground, ground.x, ground.y, ground.width, ground.height);
    }

    // Step 5: Update Function
    function update() {
        // update bird
        bird.velocity += bird.gravity;
        bird.y += bird.velocity;

        // update pipes
        for (let i = 0; i < pipes.length; i++) {
            let pipe = pipes[i];
            pipe.x -= pipe.speed;
            if (pipe.x < -pipe.width) {
                pipes.splice(i, 1);
                i--;
            }
            if (pipe.x === 100) {
                let newPipe = {
                    x: canvas.width,
                    y: Math.floor(Math.random() * (canvas.height - gap - ground.height - 100)) + 50,
                    width: 60,
                    height: 400,
                    speed: 2,
                };
                pipes.push(newPipe);
            }
            if (
                bird.x < pipe.x + pipe.width &&
                bird.x + bird.width > pipe.x &&
                (bird.y < pipe.y + pipe.height || bird.y + bird.height > pipe.y + gap)
            ) {
                gameOver();
            }
        }

        // update ground
        ground.x -= ground.speed;
        if (ground.x < -ground.width) {
            ground.x = 0;
        }

        // check for collision with ground
        if (bird.y + bird.height > canvas.height - ground.height) {
            gameOver();
        }
    }

    // Step 6: Reset Function
    function reset() {
        bird.x = 100;
        bird.y = 245;
        bird.velocity = 0;
        score = 0;
        pipes = [];
        pipes.push(new Pipe(canvas.width));
        gameState.current = gameState.getReady;
    }

    function gameOver() {
        gameState.current = gameState.over;
        if (score > highScore) {
            highScore = score;
            localStorage.setItem("highScore", highScore);
        }
        setTimeout(function () {
            if (confirm("Game Over! \nScore: " + score + "\nHigh Score: " + highScore + "\n\nPress OK to restart.")) {
                reset();
            }
        }, 100);
    }
    function gameLoop() {
        update();
        draw();
        requestAnimationFrame(gameLoop);
    }
    function startGame() {
        canvas.style.display = "block";
        // gameStartScreen.style.display = "none";
        reset();
        gameLoop();
    }
    startGame();


};