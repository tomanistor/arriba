import Phaser    from 'phaser';
import game      from "../../app";
import config    from "../config";
import logo      from "../../images/logo.jpg";
import hardpixel from "../../fonts/hardpixel.otf";

export default {
  key: 'boot',

  preload: function() {
    this.load.image('logo', logo);
  },

  create: function() {
    const logo = this.add.image(600, 500, 'logo'),
          title = this.add.text(config.width * .5, config.height * .5, config.title + ' ', {
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
            fill: '#ffffff'
          }),
          credit = this.add.text(50, 550, `Created by ${config.author}`, {
            font: '20px Hardpixel',
            fill: '#ffffff'
          });

    title.setOrigin(.5);
    title.setScale(10);

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1
    });

    this.tweens.add({
      targets: title,
      scale: 1,
      duration: 1500,
      ease: 'Bounce'
    });
  }
};
