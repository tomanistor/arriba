import Phaser     from 'phaser';
import config     from "../config";
import background from "../../images/background-trees.jpg";

export default {
  key: 'boot',

  preload: function() {
    // Load Image: Background
    this.load.image('background', background);
  },

  create: function() {
    // Add Image: Background
    this.add.image(900, 500, 'background').setScale(2);

    // Start Scene: Load
    this.scene.start('load');
  }
};
