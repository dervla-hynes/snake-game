//Snake game

//start the game with spacebar

document.addEventListener("keydown", event => {
  if (event.keyCode == 32) { 
    mySnakeGame();
    document.getElementById("starting-screen").style.display = "none";
    document.getElementById("game-background").style.display = "block";
    document.getElementById("game-info").style.display = "block";
  }
}, {once : true});

//function for running the game

const mySnakeGame = () => {
  
  //Snake object

  const snake = {
    body : document.getElementById('snake'),
    width : 50,
    height : 50,
    speedX : 1,
    speedY : 0,
    positionX : 0,
    positionY : 0,
    maxXPosition : 500,
    maxYPosition : 500
  }

  //apple object

  const apple = {
    body : document.getElementById('apple'),
    width : 50,
    height : 50,
    positionX : document.getElementById('apple').style.top,
    positionY : document.getElementById('apple').style.left
  }

  //refresh rate 

  const refreshRate = 1;

  //score

  let scoreDisplay = document.getElementById('score');
  let score = 0;

  //detect if snake is outside the box

  const isOutsideXValues = () => {
    return snake.positionX > snake.maxXPosition || snake.positionX < 0;
  }

  const isOutsideYValues = () => {
    return snake.positionY > snake.maxYPosition || snake.positionY < 0;
  }

  //sideways constant movement of snake

  const moveSnakeAcross = () => {
    snake.positionX = snake.positionX + snake.speedX;
    snake.body.style.left = snake.positionX + "px";
  }

  window.setInterval(() => {
    moveSnakeAcross();
    if (isOutsideXValues()) {
      resetGame();
    }
    moveSnakeDownwards();
    if (isOutsideYValues()) {
      resetGame();
    }
    (eatApple())
  }, refreshRate);

  //vertical constant movement of snake

  const moveSnakeDownwards = () => {
    snake.positionY = snake.positionY + snake.speedY;
    snake.body.style.top = snake.positionY + "px";
  }

  //reset the game
  
  const resetGame = () => {
    resetSnake();
    resetApple();
    score = 0;
    updateScore(score);
  }


  const resetSnake = () => {
    snake.positionX = 0;
    snake.positionY = 0;
    snake.speedX = 1;
    snake.speedY = 0;
    snake.speedX = snake.speedX * -1;
  }

  const resetApple = () => {
    apple.positionX = 300;
    apple.positionY = 300;
    apple.body.style.top = '300px';
    apple.body.style.left = '300px';
  }

  //allow the arrow keys to change direction

  document.addEventListener("keydown", event => {
    switch (event.keyCode) {
      case 37:
        //right arrow
        moveRight();
        break;
      case 38:
        //down arrow
        moveDown();
        break;
      case 39:
        //left arrow
        moveLeft();
        break;
      case 40:
        //up arrow
        moveUp();
        break;
    }
  });

  //functions for each arrow key

  const moveUp = () => {
    snake.speedY = 1;
    snake.speedX = 0;
    if (snake.speedY < 0) {
      snake.speedY = snake.speedY * -1;
    } else snake.speedY = snake.speedY;
  }

  const moveDown = () => {
    snake.speedY = 1;
    snake.speedX = 0;
    if (snake.speedY > 0) {
      snake.speedY = snake.speedY * -1;
    } else snake.speedY = snake.speedY;
  }

  const moveRight = () => {
    snake.speedY = 0;
    snake.speedX = 1;
    if (snake.speedX > 0) {
      snake.speedX = snake.speedX * -1;
    } else snake.speedX = snake.speedX;
  }

  const moveLeft = () => {
    snake.speedY = 0;
    snake.speedX = 1;
    if (snake.speedX < 0) {
      snake.speedX = snake.speedX * -1;
    } else snake.speedX = snake.speedX;
  }

  //detect if the snake is touching the apple, and then move the apple and add 1 to score

  const isColliding = () => {
    return ((snake.positionX < apple.positionX + apple.width) && (snake.positionX + snake.width > apple.positionX) && (snake.positionY < apple.positionY + apple.height) && (snake.positionY + snake.height > apple.positionY));
  }

  const eatApple = () => {
    if (isColliding()) {
        updateScore(++score);
        moveApple();
    }
  }

  //randomise apple position each time it moves


  const moveApple = () => {
    apple.positionX = Math.floor(Math.random() * 500);
    apple.positionY = Math.floor(Math.random() * 500);
    apple.body.style.top = apple.positionY + 'px';
    apple.body.style.left = apple.positionX + 'px';
  }

  //update the score by 1

  const updateScore = (score) => {
    return scoreDisplay.innerHTML = "Score : " + score;
  }
};





