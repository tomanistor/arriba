import config from "../config";

export default {
  key: 'menu',

  create: function () {
    this.add.text(config.width * .5, config.height * .5, 'Play Arriba\n\n(start)', {
      align: 'center',
      fill: '#FFFFFF',
      font: '48px Hardpixel',
      fontSize: 48
    }).setOrigin(0.5);

    this.input.on('pointerdown', function () {
      this.scene.switch('boot');
    }, this);
  }

};
