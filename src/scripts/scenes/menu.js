import config from "../config";

export default {
  key: 'menu',

  create: function() {
    this.add.text(config.width * .5, config.height * .5, 'Play Arriba\n\n(spacebar)', {
      align: 'center',
      fill: '#FFFFFF',
      font: '48px Hardpixel',
      fontSize: 48
    }).setOrigin(0.5);

    this.input.keyboard.on('keydown-SPACE', function() {
      this.scene.start('play');
    }, this);
  },
};
