import Phaser     from 'phaser';
import config     from "../config";
import background from "../../images/background-trees.jpg";

export default {
  key: 'boot',

  preload: function() {
    this.load.image('background', background);
  },

  create: function() {
    const thisScene = this;

    // Image - Background
    const background = this.add.image(900, 500, 'background').setScale(2);

    // Text - Title
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
      fill: '#ffffff'
    }).setOrigin(0.5).setScale(10);

    // Text - Credit
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
      fill: '#ffffff'
    });

    // Animation - Background
    const timelineBackground = this.tweens.timeline({
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

    // Animation - Title
    this.tweens.add({
      targets: title,
      scale: 1,
      duration: 1800,
      ease: 'Bounce'
    });

    // Animation - Credit
    this.tweens.add({
      targets: credit,
      delay: 1500,
      alpha: { start: 0, to: 1 },
      duration: 3000,
      ease: 'Power2',
      onComplete: function() {
        thisScene.scene.start('menu');
      }
    });
  }
};
