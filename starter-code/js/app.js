console.log('app.js loaded!');

// initialize the application
angular
.module("hangmanApp", [])
.controller("HangmanController", HangmanController);

  function HangmanController() {
  var vm = this;

  var randomWord = ["mystery", "elephant", "barmen"];

  vm.game = new HangmanGame(randomWord[Math.floor(Math.random() * randomWord.length)]);
  vm.guessLetter = function (){

    vm.game.guess(vm.game.input);
    vm.game.input=''
  }



};
