import Phaser from 'phaser';
import boot from './scenes/boot';

export default {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  pixelArt: true,
  title: 'Arriba',
  url: 'https://github.com/toma/arriba',
  banner: { text: 'white', background: ['#FD7400', '#FFE11A', '#BEDB39', '#1F8A70', '#004358'] },
  scene: [boot]
};
