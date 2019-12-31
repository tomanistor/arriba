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
      gravity: {
        y: 50
      },
      debug: false
    }
  },

  init: function() {
    gameOver = false;
    score = 0;
  },

  preload: function() {
    this.add.image(600, 300, 'gradient');
  },

  create: function() {





    // Next Scene: Menu
    this.input.keyboard.on('keydown-E', function() {
      this.scene.start('end');
    }, this);
  },

  update: function() {
    if (gameOver) {
      this.scene.stop().run('end');

      return;
    }
  },
};
