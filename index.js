var inquirer = require("inquirer");

start();
function start() {
    inquirer
      .prompt({
          name: "guessWord",
          type: "input",
          message: "Guess a letter!",
          //default: "___________"
      })
      .then(function(respond) {
          message: "-------",
          respond();
      })

}