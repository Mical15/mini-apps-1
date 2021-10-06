console.log('yo')

/// NAIVE SOLUTION FIRST <--- COME BACK AND FIXX ALL THIS PLEASE IT'S UGLY

window.onload = function () {

  var startingbool = true;

  var one = document.getElementById('1');
  var two = document.getElementById('2');
  var three = document.getElementById('3');
  var four = document.getElementById('4');
  var five = document.getElementById('5');
  var six = document.getElementById('6');
  var seven = document.getElementById('7');
  var eight = document.getElementById('8');
  var nine = document.getElementById('9');
  var resetButton = document.getElementById('10');

// eight wins:
// 1,2,3
// 4,5,6
// 7,8,9
// 1.4.7
// 2,5,8
// 3,6,9
// 1,5,9
// 3,5,7

  var solutionArray = [];
  var combonationsArray = ['1,2,3' , '4,5,6' , '7,8,9', '1,4,7' , '2,5,8' , '3,6,9' , '1,5,9' , '3,5,7']

  var placeLetter = function(number, letter) {
    solutionArray[number] = letter;
  }

  var clearBoard = function() {
    solutionArray.splice(0, solutionArray.length);
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].innerHTML = 'Click Me!';
    }
    resetButton.innerHTML = 'Reset';
  }

  var checkSolution = function() {
    console.log(solutionArray)
    var indexesOfX = [];
    var indexesOfO = [];
    if (solutionArray.length > 9) { // <--- old test, can clean up
      var amount = 0;
      var tie = 9;
      var drawTest = false;
      for (var i = 1; i < solutionArray.length; i++) {
        if (solutionArray[i]) {
          amount++;
        }
      }
      if (tie === amount) {
        drawTest = true;
      }
      if (drawTest) {
        // debugger;
        clearBoard();
        alert('It\s a draw!!!');
      }
    }
    if (solutionArray.length < 3) {
      indexesOfX.splice(0, indexesOfX.length);
      indexesOfO.splice(0, indexesOfO.length);
    }
    for (var i = 0; i < solutionArray.length + 1; i++) {
      if (solutionArray[i] === 'X') {
        indexesOfX.push(i);
      } else if (solutionArray[i] === 'O') {
        indexesOfO.push(i);
      }
    }
    var X = indexesOfX.sort().toString();
    var O = indexesOfO.sort().toString();
    for (var i = 0; i < combonationsArray.length; i++) {
      if (combonationsArray[i] === X) {
        alert('X WINS!!!');
        clearBoard();
      }
      if (combonationsArray[i] === O) {
        alert('O WINS');
        clearBoard();
      }
    }
  };

  resetButton.onclick = function() {
    clearBoard();
    resetButton.innerHTML = 'Reset';
  }

  // LOOP THRU "BUTTONS" ARRAY Have "onclick" inside;  <---- DOESN'T WORK
  // var buttons = document.getElementsByTagName("button");
  // // debugger;
  // for (var i = 0; i <= buttons.length - 1; i++) {
  //   buttons[i].onclick = function(e) {
  //     console.log(buttons[i])
  //     var letter = 'X';
  //     if (!startingbool) {
  //       letter = "O"
  //     }
  //     this.innerHTML = letter;
  //     placeLetter( i , letter); // <---can't figure out how to pull button number (everything else works)
  //     startingbool = !startingbool;
  //     checkSolution(solutionArray);
  //   }
  // };

  one.onclick = function () {
    var letter = 'X';
    if (!startingbool) {
      letter = "O"
    }
    this.innerHTML = letter;
    // console.log(number);
    placeLetter( 1 , letter);
    // solutionArray.push(letter);
    startingbool = !startingbool;
    checkSolution(solutionArray);
  }

  two.onclick = function () {
    var letter = 'X';
    if (!startingbool) {
      letter = "O"
    }
    startingbool = !startingbool;
    this.innerHTML = letter;
    placeLetter(2, letter);
    checkSolution(solutionArray);
  }

  three.onclick = function () {
    var letter = 'X';
    if (!startingbool) {
      letter = "O"
    }
    startingbool = !startingbool;
    this.innerHTML = letter;
    placeLetter(3, letter);
    checkSolution(solutionArray);
  }

  four.onclick = function () {
    var letter = 'X';
    if (!startingbool) {
      letter = "O"
    }
    startingbool = !startingbool;
    this.innerHTML = letter;
    placeLetter(4, letter);
    checkSolution(solutionArray);
  }

  five.onclick = function () {
    var letter = 'X';
    if (!startingbool) {
      letter = "O"
    }
    startingbool = !startingbool;
    this.innerHTML = letter;
    placeLetter(5, letter);
    checkSolution(solutionArray);
  }

  six.onclick = function () {
    var letter = 'X';
    if (!startingbool) {
      letter = "O"
    }
    startingbool = !startingbool;
    this.innerHTML = letter;
    placeLetter(6, letter);
    checkSolution(solutionArray);
  }

  seven.onclick = function () {
    var letter = 'X';
    if (!startingbool) {
      letter = "O"
    }
    startingbool = !startingbool;
    this.innerHTML = letter;
    placeLetter(7, letter);
    checkSolution(solutionArray);
  }

  eight.onclick = function () {
    var letter = 'X';
    if (!startingbool) {
      letter = "O"
    }
    startingbool = !startingbool;
    this.innerHTML = letter;
    placeLetter(8, letter);
    checkSolution(solutionArray);
  }

  nine.onclick = function () {
    var letter = 'X';
    if (!startingbool) {
      letter = "O"
    }
    startingbool = !startingbool;
    this.innerHTML = letter;
    placeLetter(9, letter);
    checkSolution(solutionArray);
  }

}

