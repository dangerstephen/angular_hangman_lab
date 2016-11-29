console.log('app.js loaded!');

// initialize the application
angular
.module("hangmanApp", [])
.controller("HangmanController", HangmanController);

  function HangmanController() {
  var vm = this;

  vm.game = new HangmanGame('elephant');
  vm.guessLetter = function (){

    vm.game.guess(vm.game.input);
    vm.game.input=''
  }



};
