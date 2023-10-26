import "./style.css";
import Phaser from "phaser";

const config = {
  type: Phaser.WEBGL,
  with: 500,
  height: 500,
  canvas: gameCanvas,
};

const game = new Phaser.Game(config);
