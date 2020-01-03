import Phaser from 'phaser';
import config from "../config";
import song1  from "../../audio/dust-to-dust-by-quixotic.mp3";
import song2  from "../../audio/flashlight-by-morgan-willis.mp3";
// import song3  from "../../audio/cruising-by-windows95.mp3";
import dog    from "../../images/dog-running.png";
import palm1  from "../../images/palm-1.svg";
import palm2  from "../../images/palm-2.svg";
import palm3  from "../../images/palm-3.svg";
import palm4  from "../../images/palm-4.svg";

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

    // Load Audio
    this.load.audio('song1', song1);
    this.load.audio('song2', song2);
    // this.load.audio('song3', song3);

    // Add: Gradient Background
    const texture = this.textures.createCanvas('gradient', config.width, config.height);
    const context = texture.getContext();
    const gradient = context.createLinearGradient(0, 0, 0, config.height);

    gradient.addColorStop(0, '#CA52D8');
    gradient.addColorStop(1, '#B292DE');

    context.fillStyle = gradient;
    context.fillRect(0, 0, config.width, config.height);

    texture.refresh();

    // Add: Horizontal Lines
    // const div = this.createElement('div');
    // const lines = div.style.cssText = "background-image:linear-gradient(to right, #fff 5px, transparent 1px), linear-gradient(#ccc 1px, transparent 1px);"

    // Loading Bar
    const rect = new Phaser.Geom.Rectangle(0, config.height - 30, config.width, 30);
    const gfx = this.add.graphics();
    this.load.on('progress', function(progress) {
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

    // Start Scene: Menu
    this.scene.start('menu');
  }
};
