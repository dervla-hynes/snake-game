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

//Snake should move continuously

const mySnakeGame = () => {
  
  //Snake parameters
  let snake = document.getElementById('snake');
  let snakeWidth = 50;
  let snakeHeight = 50;

  //apple parameters
  let apple = document.getElementById('apple');
  const appleWidth = 50;
  const appleHeight = 50;
  let applePositionX = apple.style.top;
  let applePositionY = apple.style.left;

  //speed and position 
  let speedX = 1;
  let speedY = 0;
  let positionX = 0;
  let positionY = 0;

  const refreshRate = 10;
  const maxXPosition = 500 - snakeWidth;
  const maxYPosition = 500 - snakeHeight;

  //score

  let scoreDisplay = document.getElementById('score');
  let score = 0;

  //sideways movement
  window.setInterval(() => {
    positionX = positionX + speedX;
    if (positionX > maxXPosition || positionX < 0) {
      resetGame();
    }
    snake.style.left = positionX + "px";
    eatApple();
  }, refreshRate);

  //vertical movement
  window.setInterval(() => {
    positionY = positionY + speedY;
    if (positionY > maxYPosition || positionY < 0) {
      resetGame();
    }
    snake.style.top = positionY + "px";
    eatApple();
  }, refreshRate);

  //reset the game
  
  const resetGame = () => {
    positionX = 0;
    positionY = 0;
    speedX = 1;
    speedY = 0;
    speedX = speedX * -1;
    applePositionX = 300;
    applePositionY = 300;
    apple.style.top = '300px';
    apple.style.left = '300px';
    score = 0;
    updateScore(0);
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
    speedY = 1;
    speedX = 0;
    if (speedY < 0) {
        speedY = speedY * -1;
    } else speedY = speedY;
  }

  const moveDown = () => {
    speedY = 1;
    speedX = 0;
    if (speedY > 0) {
        speedY = speedY * -1;
    } else speedY = speedY;
  }

  const moveRight = () => {
    speedY = 0;
    speedX = 1;
    if (speedX > 0) {
        speedX = speedX * -1;
    } else speedX = speedX;
  }

  const moveLeft = () => {
    speedY = 0;
    speedX = 1;
    if (speedX < 0) {
        speedX = speedX * -1;
    } else speedX = speedX;
  }

  //detect if snake is touching apple and move it

  const eatApple = () => {
    if ((positionX < applePositionX + appleWidth) && (positionX + snakeWidth > applePositionX) && (positionY < applePositionY + appleHeight) && (positionY + snakeHeight > applePositionY)) {
        // console.log("hit apple");
        // apple.style.display = 'none';
        updateScore(++score);
        moveApple();
    }
  }

  //randomise apple position each time

  const moveApple = () => {
    applePositionX = Math.floor(Math.random() * 450);
    applePositionY = Math.floor(Math.random() * 450);
    apple.style.top = applePositionY + 'px';
    apple.style.left = applePositionX + 'px';
    console.log("The style is x: " + apple.style.top + " y: " + apple.style.left);
    console.log("The position is x: " + applePositionX + " y: " + applePositionY);
  }

  //update the score by 1

  const updateScore = (score) => {
    return scoreDisplay.innerHTML = "Score : " + score;
  }

  //speed up when you eat an apple

  

};

mySnakeGame();




