var Letter = require("./letter.js");

function Word(answer) {
    this.objArray = [];
  for (var i = 0; i < answer.length; i++) {
      var letter = new Letter(answer[i]);
      this.objArray.push(letter);
  }
}

this.log = function () {
    inputLog= "";
    for (var i = 0; i < this.objArray.length; i++) {
        inputLog += this objArray[i] + " ";
    }
    console.log(inputLog + "\n\n");
}
//= new Letter("")
//var words = letter(i)}