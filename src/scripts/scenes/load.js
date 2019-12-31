import Phaser from 'phaser';
import config from "../config";
import theme  from "../../audio/dust-to-dust-by-quixotic.mp3";
import dog    from "../../images/dog-running.png";
import palm1  from "../../images/palm-1.png";
import palm2  from "../../images/palm-2.png";
import palm3  from "../../images/palm-3.png";
import palm4  from "../../images/palm-4.png";

export default {
  key: 'load',

  preload: function() {
    // Add Image: Background
    this.add.image(900, 500, 'background').setScale(2);

    // Load Images
    this.load.image('dog', dog);
    this.load.image('palm1', palm1);
    this.load.image('palm2', palm2);
    this.load.image('palm3', palm3);
    this.load.image('palm4', palm4);

    // Load Audio: Theme
    this.load.audio('theme', theme);

    // Add: Gradient Background
    const texture = this.textures.createCanvas('gradient', config.width, config.height);
    const context = texture.getContext();
    const gradient = context.createLinearGradient(0, 0, 0, config.height);

    gradient.addColorStop(0, '#CA52D8');
    gradient.addColorStop(1, '#B292DE');

    context.fillStyle = gradient;
    context.fillRect(0, 0, config.width, config.height);

    texture.refresh();

    // Loading Bar
    const rect = new Phaser.Geom.Rectangle(400, this.cameras.main.centerY, 400, 30);
    const gfx = this.add.graphics();
    this.load.on('progress', function(progress) {
      console.log(progress)
      gfx
        .clear()
        .fillStyle('#261447')
        .fillRectShape(rect)
        .fillStyle('#2DE2E6')
        .fillRect(rect.x, rect.y, progress * rect.width, rect.height);
    });
  },

  create: function() {
    // console.log('Scene: load');

    // Start Scene: Menu
    this.scene.start('menu');
  }
};
