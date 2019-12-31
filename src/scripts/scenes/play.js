import Phaser from 'phaser';
import config from '../config';

let player,
    score,
    gameOver;

export default {
  key: 'play',

  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 50 },
      debug: false
    }
  },

  init: function() {
    gameOver = false;
    score = 0;
  },

  create: function() {
    // Add: Gradient Background
    const texture = this.textures.createCanvas('gradient', config.width, config.height);
    const context = texture.getContext();
    const gradient = context.createLinearGradient(0, 0, 0, config.height);

    gradient.addColorStop(0, '#CA52D8');
    gradient.addColorStop(1, '#B292DE');

    context.fillStyle = gradient;
    context.fillRect(0, 0, config.width, config.height);

    texture.refresh();

    this.add.image(600, 300, 'gradient');
  },

  update: function() {
    if (gameOver) {
      this.scene.stop().run('end');

      return;
    }
  },
};
