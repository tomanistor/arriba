import config from "../config";

export default {
  key: 'menu',

  create: function() {
    // console.log('Scene: menu');

    // Add Image: Background
    const background = this.add.image(900, 500, 'background').setScale(2);

    // Load Audio: Theme
    config.themeSong = this.sound.add('theme');

    // Play Audio: Theme
    config.themeSong.play({
      seek: 64.5,
      loop: true
    });

    // Add Text: Title
    const title = this.add.text(config.width * .5, config.height * .5, config.title + ' ', {
      font: '120px Lazer84',
      shadow: {
        offsetX: -5,
        offsetY: 5,
        color: '#2DE2E6',
        stroke: true,
        fill: true
      },
      stroke: '#2DE2E6',
      strokeThickness: 5,
      fill: '#FFFFFF'
    }).setOrigin(0.5).setScale(10);

    // Add Text: Credit
    const credit = this.add.text(50, 550, `Created by ${config.author}`, {
      font: '20px Hardpixel',
      shadow: {
        offsetX: -1,
        offsetY: 1,
        color: '#261447',
        stroke: true,
        fill: true
      },
      stroke: '#261447',
      strokeThickness: 5,
      fill: '#FFFFFF'
    });

    // Add Text: Spacebar
    const play = this.add.text(config.width * .5, config.height * .75, '(spacebar)', {
      font: '48px Hardpixel',
      align: 'center',
      shadow: {
        offsetX: -1,
        offsetY: 1,
        color: '#FF3864',
        stroke: true,
        fill: true
      },
      stroke: '#FF3864',
      strokeThickness: 5,
      fill: '#FFFFFF',
    }).setOrigin(0.5);

    // Animate: Background
    this.tweens.timeline({
      tweens: [{
        targets: background,
        x: 800,
        duration: 6000,
        ease: 'Power2'
      }, {
        targets: background,
        x: 810,
        duration: 2000,
        ease: 'Power4',
        yoyo: true,
        loop: -1,
        loopDelay: 2000
      }]
    });

    this.tweens.add({
      targets: background,
      y: 510,
      duration: 3000,
      ease: 'Power4',
      yoyo: true,
      loop: -1
    });

    this.tweens.add({
      targets: background,
      rotation: .005,
      duration: 1200,
      ease: 'Power2',
      yoyo: true,
      loop: -1
    });

    // Animate: Title
    this.tweens.add({
      targets: title,
      scale: 1,
      duration: 1800,
      ease: 'Bounce'
    });

    // Animate: Play
    this.tweens.add({
      targets: play,
      delay: 1500,
      alpha: { start: 0, to: 1 },
      duration: 3000,
      ease: 'Power2'
    });

    // Animate: Credit
    this.tweens.add({
      targets: credit,
      delay: 2000,
      alpha: { start: 0, to: 1 },
      duration: 3000,
      ease: 'Power2',
      // onComplete: function() {
      //   thisScene.scene.start('menu');
      // }
    });

    // Start Scene: Play
    this.input.keyboard.on('keydown-SPACE', function() {
      this.scene.start('play');
    }, this);

    this.input.on('pointerdown', function() {
      this.scene.start('play');
    }, this);
  },
};
