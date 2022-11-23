import Phaser from 'phaser';
import config from '../config';
import helpers from '../helpers';

let player,
    score,
    gameOver,
    palms = [];

function movePalms(palms) {
  palms.forEach(function(palm) {
    palm.x -= 5;

    if (palm.x < -350) {
      resetPalm(palm);
    }
  });
}

function resetPalm(palm) {
  palm.x = config.width;
}

function jump() {
  if (player.body.touching.down) {
    player.setVelocityY(-500);
  }
}

export default {
  key: 'play',

  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 1000
      },
      debug: false
    }
  },

  init: function() {
    gameOver = false;
    score = 0;
  },

  preload: function() {
    // Add Image: Gradient
    this.add.image(600, 300, 'gradient');

    // Add Image: Horizontal Lines
    // this.add.image(600, 300, 'horizontalLines');
  },

  create: function() {
    // this.cameras.main.setBounds(0, 0, 1200, 600, 200);
    // this.physics.world.setBounds(0, 0, 1200, 600, 200);

    this.add.text(config.width * .5, config.height * .5, 'Game Will Go Here\n\nPress (E) for Game Over', {
      align: 'center',
      font: '40px Hardpixel',
      shadow: {
        offsetX: -5,
        offsetY: 5,
        color: '#261447',
        stroke: true,
        fill: true
      },
      stroke: '#261447',
      strokeThickness: 5
    }).setOrigin(.5);

    // Add Images: Palm Trees
    palms[0] = this.add.sprite(helpers.randomInteger(-100, 0), helpers.randomInteger(110, 175), 'palm1')
      .setOrigin(0)
      .setScale(helpers.randomNumber(.65, .90));

    palms[1] = this.add.sprite(helpers.randomInteger(300, 400), helpers.randomInteger(110, 175), 'palm2')
      .setOrigin(0)
      .setScale(helpers.randomNumber(.65, .90));

    palms[2] = this.add.sprite(helpers.randomInteger(600, 700), helpers.randomInteger(110, 175), 'palm3')
      .setOrigin(0)
      .setScale(helpers.randomNumber(.65, .90));

    palms[3] = this.add.sprite(helpers.randomInteger(1000, 1100), helpers.randomInteger(110, 175), 'palm4')
      .setOrigin(0)
      .setScale(helpers.randomNumber(.65, .90));

    // Create Sprite Animation: Player
    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('dog'),
      frameRate: 12,
      repeat: -1
    });

    // Add Sprite: Player
    player = this.physics.add.sprite(0, 700, 'dog')
      .setCollideWorldBounds(true)
      .play('run');

    // Key Spacebar: Jump
    this.input.keyboard.on('keydown-SPACE', function() {
      debugger
      jump();
    });

    // Next Scene: Menu
    this.input.keyboard.on('keydown-E', function() {
      config.themeSong.stop();
      this.scene.stop().run('end');
    }, this);
  },

  update: function() {
    movePalms(palms);

    if (gameOver) {
      return this.scene.stop().run('end');
    }
  }
};
