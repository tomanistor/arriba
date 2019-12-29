import Phaser from 'phaser';

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

  init: function () {
    gameOver = false;
    score = 0;
  },

  create: function () {

  },

  update: function () {
    if (gameOver) {
      this.scene.stop().run('end');

      return;
    }
  },
};
