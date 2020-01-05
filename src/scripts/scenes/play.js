import Phaser from 'phaser';
import config from '../config';
import helpers from '../helpers';

let player,
    score,
    gameOver;

let palms = [];

function movePalms(palms) {
  palms.forEach(function(palm) {
    palm.x -= 5;
    console.log('first ' + this);

    if (palm.x < -300) {
      console.log('second ' + this);
      console.log('third' + palm);
      this.resetPalm(palm);
    }
  });
}

function resetPalm(palm) {
  palm.x = config.width;
}

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

  create: function() {
    this.add.text(config.width * .5, config.height * .5, 'Game Will Go Here\n\nPress (E) for Game Over', {
      align: 'center'
    }).setOrigin(.5);

    // Add Image: Gradient
    this.add.image(600, 300, 'gradient');

    // Add Image: Horizontal Lines
    // this.add.image(600, 300, 'horizontalLines');

    // Add Images: Palm Trees
    palms[0] = this.add.sprite(0, helpers.randomInteger(110, 175), 'palm1')
      .setOrigin(0)
      .setScale(helpers.randomNumber(.60, .90));
    palms[1] = this.add.sprite(300, helpers.randomInteger(110, 175), 'palm2')
      .setOrigin(0)
      .setScale(helpers.randomNumber(.60, .90));
    palms[2] = this.add.sprite(600, helpers.randomInteger(110, 175), 'palm3')
      .setOrigin(0)
      .setScale(helpers.randomNumber(.60, .90));
    palms[3] = this.add.sprite(900, helpers.randomInteger(110, 175), 'palm4')
      .setOrigin(0)
      .setScale(helpers.randomNumber(.60, .90));

    console.log(palms)

    // Next Scene: Menu
    this.input.keyboard.on('keydown-E', function() {
      config.themeSong.stop();
      this.scene.stop().run('end');
    }, this);
  },

  update: function() {
    movePalms(palms);

    if (gameOver) {
      this.scene.stop().run('end');

      return;
    }
  }
};
