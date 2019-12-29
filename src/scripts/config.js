import Phaser from 'phaser';
import boot from './scenes/boot';
import menu from './scenes/menu';
import play from './scenes/play';

export default {
  type: Phaser.AUTO,
  width: 1200,
  height: 600,
  pixelArt: true,
  title: 'Arriba',
  author: 'Toma Nistor',
  url: 'https://github.com/tomanistor/arriba',
  banner: {
    text: 'white',
    background: ['#FF6C11', '#FF3864', '#2DE2E6', '#261447', '#0D0221']
  },
  scene: [boot, menu, play]
};
