import config from "../config";

export default {
  key: 'end',


  preload: function() {
  },

  create: function() {
    this.sound.add('theme').stop();

    // Flash: Background Color: #261447
    this.cameras.main.flash(1000, 38, 20, 71);

    // Add Image: Background
    const background = this.add.image(900, 500, 'background').setScale(2);

    // Add Overlay
    const overlay = this.add.renderTexture(0, 0, config.width, config.height);
    overlay.fill(0x261447, 0.75);

    // Animate: Background
    this.tweens.timeline({
      tweens: [{
        targets: background,
        x: 1100,
        duration: 6000,
        ease: 'Power2'
      }, {
        targets: background,
        x: 1110,
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

    // Add Text: Game Over
    this.add.text(config.width * .5, config.height * .5, 'Game Over ', {
      font: '120px Summer85',
      shadow: {
        offsetX: -5,
        offsetY: 5,
        color: '#261447',
        stroke: true,
        fill: true
      },
      stroke: '#261447',
      strokeThickness: 5,
      fill: '#ffffff'
    }).setOrigin(0.5);

    // Add Text: Spacebar
    this.add.text(config.width * .5, config.height * .75, '(spacebar) ', {
      font: '48px Hardpixel',
      shadow: {
        offsetX: -1,
        offsetY: 1,
        color: '#FF3864',
        stroke: true,
        fill: true
      },
      stroke: '#FF3864',
      strokeThickness: 5,
      fill: '#ffffff'
    }).setOrigin(0.5);

    // Next Scene: Menu
    this.input.keyboard.on('keydown-SPACE', function() {
      this.scene.switch('menu');
    }, this);
    this.input.on('pointerdown', function () {
      this.scene.switch('menu');
    }, this);
  }
};
