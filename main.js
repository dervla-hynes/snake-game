//Snake game

//1. Create a backdrop (DONE)
//2. Create a box that you can move around (DONE)
//3. Make box move around by itself too (DONE)
//4. Create an apple that you can put on the backdrop (DONE)
//5. When snake touches the apple, it dissapears (DONE)
//6. When snake touches boundary you reset (DONE)
//7. When snake bumps into itself it resets
//8. Randomise where the apple appears
//9. When snake touches the apple, it also increases length


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
    maxXPosition : 450,
    maxYPosition : 450
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

  const refreshRate = 10;

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

  //sideways movement

  const moveSnakeAcross = () => {
    snake.positionX = snake.positionX + snake.speedX;
    snake.body.style.left = snake.positionX + "px";
  }

  window.setInterval(() => {
    moveSnakeAcross();
    if (isOutsideXValues()) {
      resetGame();
    }
    eatApple();
  }, refreshRate);

  //vertical movement

  const moveSnakeDownwards = () => {
    snake.positionY = snake.positionY + snake.speedY;
    snake.body.style.top = snake.positionY + "px";
  }

  window.setInterval(() => {
    moveSnakeDownwards();
    if (isOutsideYValues()) {
      resetGame();
    }
    eatApple();
  }, refreshRate);

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

  //arrow keys change direction

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

  //functions for move keys

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

  //detect if snake is touching apple and move it

  const isColliding = () => {
    return ((snake.positionX < apple.positionX + apple.width) && (snake.positionX + snake.width > apple.positionX) && (snake.positionY < apple.positionY + apple.height) && (snake.positionY + snake.height > apple.positionY));
  }

  const eatApple = () => {
    if (isColliding()) {
        updateScore(++score);
        moveApple();
    }
  }

  //randomise apple position each time

  const moveApple = () => {
    apple.positionX = Math.floor(Math.random() * 450);
    apple.positionY = Math.floor(Math.random() * 450);
    apple.body.style.top = apple.positionY + 'px';
    apple.body.style.left = apple.positionX + 'px';
  }

  //update the score by 1

  const updateScore = (score) => {
    return scoreDisplay.innerHTML = "Score : " + score;
  }

  //speed up when you eat an apple?

};

mySnakeGame();




