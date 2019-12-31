import Phaser from 'phaser';
import boot   from './scenes/boot';
import load   from './scenes/load';
import menu   from './scenes/menu';
import play   from './scenes/play';
import end    from './scenes/end';

let themeSong;

export default {
  type: Phaser.AUTO,
  width: 1200,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
  },
  pixelArt: true,
  title: 'Arriba',
  author: 'Toma Nistor',
  url: '\nhttps://github.com/tomanistor/arriba',
  version: '1.0.0',
  banner: {
    text: '#FF3864',
    background: [
      '#FF6C11',
      '#FF3864',
      '#2DE2E6',
      '#261447',
      '#0D0221'
    ]
  },
  scene: [
    boot,
    load,
    menu,
    play,
    end
  ],
  backgroundColor: '#261447',
  themeSong: themeSong
};
