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
  }

  preload() {
    this.load.image("background", "./assets/bg.png");
    this.load.image("basket", "./assets/basket.png");
  }

  create() {
    this.add.image(0, 0, "background").setOrigin(0, 0);
    this.basket = this.physics.add.image(0, 420, "basket").setOrigin(0, 0);
    this.basket.body.allowGravity = false;
    this.basket.setCollideWorldBounds(true);
    this.cursor = this.input.keyboard.createCursorKeys();
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
