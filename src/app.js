import Phaser from 'phaser';
import config from './scripts/config';
import styles from './styles/app.scss';

function newGame() {
  if (game) return;
  game = new Phaser.Game(config);
}

function destroyGame() {
  if (!game) return;
  game.destroy(true);
  game.runDestroy();
  game = null;
}

let game;

if (module.hot) {
  module.hot.dispose(destroyGame);
  module.hot.accept(newGame);
}

if (!game) newGame();
