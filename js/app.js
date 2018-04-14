
const multiple = () => 100 + Math.floor(Math.random() * 400);

// Enemies our player must avoid
const Enemy = function (x_coord, y_coord, player) {
   // Variables applied to each of our instances go here,
   // we've provided one for you to get started
   this.x = x_coord;
   this.y = y_coord;

   // we pass our player object here so we can access it's
   // x and y postion when checking for collisions.
   this.player = player;

   this.speedFactor = multiple();
   // The image/sprite for our enemies, this uses
   // a helper we've provided to easily load images
   this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
   // You should multiply any movement by the dt parameter
   // which will ensure the game runs at the same speed for
   // all computers.
   if (this.x < 505) {
      this.x = this.x + (dt * this.speedFactor);
   } else {
      this.speedFactor = multiple();
      this.x = 0;
   }

   // checks for collisions here;
   if (this.y - player.y > -12 && this.y - player.y < 12) {
      if (player.x - 25 < this.x && player.x + 25 > this.x) {
         player.reset();
      }
   }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
   ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

const Player = function (x_coord, y_coord) {
   this.x = x_coord;
   this.y = y_coord;
   this.sprite = 'images/char-boy.png';
};

Player.prototype.reset = function (dt, new_x, new_y) {
   this.x = 202;
   this.y = 404;
};

Player.prototype.handleInput = function (key) {
   switch (key) {
      case 'left':
         if (this.x > 0) this.x -= 101;
         break;
      case 'up':
         if (this.y > 0) this.y -= 84;
         break;
      case 'right':
         if (this.x < 404) this.x += 101;
         break;
      case 'down':
         if (this.y < 404) this.y += 84;
         break;
   }
};

Player.prototype.render = function () {
   ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Player(202, 404);
const allEnemies = [new Enemy(0, 62, player), new Enemy(0, 144, player), new Enemy(0, 226, player)];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
   const allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down',

      // W,A,S,D
      65: 'left',
      87: 'up',
      68: 'right',
      83: 'down',
   };

   player.handleInput(allowedKeys[e.keyCode]);
});
