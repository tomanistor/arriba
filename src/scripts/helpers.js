export default {
  randomInteger: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  randomNumber: function(min, max) {
    return Math.random() * (max - min) + min;
  }
}
