import Phaser from 'phaser';
import logo from "../../images/logo.jpg";

export default {
  key: 'boot',

  preload: function() {
    this.load.image('logo', logo);
  },

  create: function() {
    const logo = this.add.image(350, 433, 'logo');

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1
    });
  }
};
