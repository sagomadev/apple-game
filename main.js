import "./style.css";
import Phaser from "phaser";

const sizes = {
  width: 500,
  height: 500,
};

const speedDown = 300;

class GameScene extends Phaser.Scene {
  constructor() {
    super("scene-game");
    this.basket;
    this.cursor;
    this.basketSpeedMove = 550;

    this.target;
  }

  preload() {
    this.load.image("background", "./assets/bg.png");
    this.load.image("basket", "./assets/basket.png");
    this.load.image("apple", "./assets/apple.png");
  }

  create() {
    this.add.image(0, 0, "background").setOrigin(0, 0);
    this.basket = this.physics.add.image(0, 420, "basket").setOrigin(0, 0);
    this.basket.body.allowGravity = false;
    this.basket.setCollideWorldBounds(true);
    this.cursor = this.input.keyboard.createCursorKeys();
    this.target = this.physics.add.image(0, 0, "apple").setOrigin(0, 0);
    this.target.setMaxVelocity(0, speedDown);
  }

  update() {
    const { left, right } = this.cursor;

    if (left.isDown) {
      this.basket.setVelocityX(-this.basketSpeedMove);
    } else if (right.isDown) {
      this.basket.setVelocityX(this.basketSpeedMove);
    } else {
      this.basket.setVelocityX(0);
    }

    if (this.target.y >= sizes.height) {
      const { posX, posY } = this.getRandomPosition();
      this.target.setY(posY);
      this.target.setX(posX);
    }
  }

  getRandomPosition() {
    return {
      posX: Math.floor(Math.random() * 450),
      posY: Math.floor(Math.random() * 280),
    };
  }
}

const config = {
  type: Phaser.WEBGL,
  width: sizes.width,
  height: sizes.height,
  canvas: gameCanvas,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: speedDown },
      debug: true,
    },
  },
  scene: [GameScene],
};

const game = new Phaser.Game(config);
