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
  }

  preload() {
    this.load.image("background", "./assets/bg.png");
    this.load.image("basket", "./assets/basket.png");
  }

  create() {
    this.add.image(0, 0, "background").setOrigin(0, 0);
    this.add.image(0, 400, "basket").setOrigin(0, 0);
  }

  update() {}
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
