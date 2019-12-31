import Phaser from 'phaser';
import config from "../config";
import dog    from "../../images/dog-running.png";

export default {
  key: 'load',

  preload: function() {
    // Add Image: Background
    this.add.image(900, 500, 'background').setScale(2);

    // Load Image: Dog
    this.load.image('dog', dog);

    // Loading Bar
    const rect = new Phaser.Geom.Rectangle(400, this.cameras.main.centerY, 400, 30);
    const gfx = this.add.graphics();
    this.load.on('progress', function(progress) {
      console.log(progress)
      gfx
        .clear()
        .fillStyle(0x261447)
        .fillRectShape(rect)
        .fillStyle(0x2DE2E6)
        .fillRect(rect.x, rect.y, progress * rect.width, rect.height);
    });
  },

  create: function() {
    // console.log('Scene: load');

    // Start Scene: Meun
    this.scene.start('menu');
  }
};
