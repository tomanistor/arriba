import Phaser from 'phaser';
import config from '../config';
import helpers from '../helpers';

let player,
    score,
    gameOver,
    camera,
    keys,
    pointer,
    palms = [];

function movePalms(palms, direction) {
  palms.forEach(function(palm) {
    if (direction === 'left') {
      palm.x += 2;
    }

    if (direction === 'right') {
      palm.x -= 10;
    }

    // if (direction === 'down') {
    //   palm.y += 5;
    // }

    // if (direction === 'up') {
    //   palm.y -= 5;
    // }

    if (!direction) {
      palm.x -= 5;
    }

    if (palm.x < -350) {
      resetPalm(palm);
    }
  });
}

function resetPalm(palm) {
  palm.x = config.width;
}

function jump() {
  if (player.body.blocked.down) {
    movePalms(palms, 'down');

    player.setAngle(-15).play('jump').setVelocityY(-500).once('animationcomplete', () => {
      player.setAngle(10)
      player.play('run');
      movePalms(palms, 'up');
    });
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
    // Set World Bounds
    this.physics.world.setBounds(0, 0, config.width, config.height);

    this.add.text(config.width * .5, config.height * .2, 'Press (Space) to Jump\n\nPress (E) for Quit', {
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

    // Create Sprite Animation: Player Running
    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('dog'),
      frameRate: 12,
      repeat: -1,
    });

    // Create Sprite Animation: Player Jumping
    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNumbers('dog', {
        frames: [6, 7, 8, 0]
      }),
      frameRate: 6,
    });

    // Create Player
    player = this.physics.add.sprite(0, config.height, 'dog')
      .setBounce(0.2)
      .setCollideWorldBounds(true)
      .play('run');

    // Create Keys
    keys = this.input.keyboard.addKeys({
      up: 'UP',
      down: 'DOWN',
      left: 'LEFT',
      right: 'RIGHT',
      space: 'SPACE',
      w: 'W',
      a: 'A',
      s: 'S',
      d: 'D',
    });

    keys.jump = [keys.space, keys.up, keys.w]

    // Create Pointer
    pointer = this.input.activePointer;

    // Next Scene: Menu
    this.input.keyboard.on('keydown-E', function() {
      config.themeSong.stop();
      this.scene.stop().run('end');
    }, this);
  },

  update: function() {
    movePalms(palms);

    // Control Player
    [keys.jump, pointer].forEach(key => {
      if (key.isDown) {
        jump();
      };
    });

    if (keys.left.isDown || keys.a.isDown) {
      movePalms(palms, 'left');
    }

    if (keys.right.isDown || keys.d.isDown) {
      movePalms(palms, 'right');
    }

    if (player.body.blocked.down) {
      player.setAngle(0);
    }

    if (gameOver) {
      return this.scene.stop().run('end');
    }
  }
};
