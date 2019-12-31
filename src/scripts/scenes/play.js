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
    this.add.text(config.width * .5, config.height * .5, 'Game Will Go Here\n\nPress (E) for Game Over', {
      align: 'center'
    }).setOrigin(.5);

    // Next Scene: Menu
    this.input.keyboard.on('keydown-E', function() {
      config.themeSong.stop();
      this.scene.stop().run('end');
    }, this);
  },

  update: function() {
    if (gameOver) {
      this.scene.stop().run('end');

      return;
    }
  }
};
