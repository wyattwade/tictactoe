$(function() {

 
  var availableWinningSets = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8], [3, 5, 7], [3, 6, 9], [4, 5, 6], [7, 8, 9]];   //sets the computer can still win with. This array changes throughout the course of the program.
   var move; // is zero if the computer hasn't gone yet, is one if the computer has gone.
    
    
    var mainArray = [['skip'],[/*1*/[2,3],[5,9],[4,7]], [/*2*/[5,8],[1,3]], [/*3*/[1,2],[5,7],[6,9]], [/*4*/[5,6],[1,7]], [/*5*/[1,9],[2,8],[3,7],[4,6]],[/*6*/[4,5],[3,9]],[/*7*/[1,4],[8,9],[3,5]], [/*8*/[2,5],[7,9]], [/*9*/[3,6],[7,8],[1,5]]]; // zero position is essentially skipped so the index will align with the container being called later on. 
    var cornerMoveArray = [['skip'],[/*1*/[2,4],[2,7],[3,4]],[/*2*/[1,9],[3,7]],[/*3*/[2,6],[2,9],[1,6]],['skip'],['skip'],['skip'],[/*7*/[4,8],[4,9],[1,8]],['skip'],[/*9*/[6,8],[6,7],[3,8]]]; // if the player has gone twice and has any of these combinations, computer needs to move to the corner to tie or win.twice and has any of these combinations, computer needs to move to the corner to tie or win.
  
   var pattern; // The most used varialbe in the program. It's value is highly dynamic.
  var playerArray = []; // all player moves combined;
  var compArray = []; // all computer moves combined;
  var totalArray; // player + computer moves combined;
  var missingMoves; // moves that have yet to be playeed;
  var playerColor = '#d4e88f'; // the default color of the player
  var playerSymbol = ' '; // In the previous versin, I had the player symbol as x, but decided to replace that with a color instead.
  var compSymbol = ' '; // Was 'o'. Replaced it with a color.
  var compColor = 'red';
  var ties = 0; //running total
  var wins = 0; //running total
  var losses = 0; //running total

  $('#compFirstButton').click(function() {
    computerFirst();
  });

  $('#resetButton').click(function() {

    initialize();

  });

  $('.colorButton').click(function() {
    var fieldId;
    fieldId = $(this).attr('id');
    playerColor = fieldId;
    initialize();

  });

  $('.container').click(function() { // When a button (1-9) on the tic tac toe board is clicked, get its ID and run the clickfunction. 
    var fieldId;
    fieldId = $(this).attr('id');;
    clickFunction(fieldId.substr(fieldId.length - 1));
  });

  function clickFunction(num) { // this occurs when a container(1-9) is clicked. 
    if ($('#container-' + num).html() == "") { // if the container that was clicked has a blank html, a move has not occured there. The player can move to this location
      $('#container-' + num).html(playerSymbol).css({ // the players color fills in the container.
        'background-color': playerColor
      });
      playerArray.push(num); //pushes the containers id number to an array that keeps track of all of the players moves. 
      winningSets(num); // removes any winning set that the computer can still win with
      checkForWin(playerArray); // did the player or computer win?
      checkForTie(); // was there a tie?
      computersTurn(); // ** If there is no win or tie, it is the computers turn. If there is a win or a tie, the first move of the next match is the computers. 
    }
  }

  function winningSets(a) { // takes away sets that are no longer winnable to the computer. The availableWinningSets value will be important in evauluating the next computer move in winPosibilitiesMove;

    for (var i = availableWinningSets.length - 1; i >= 0; i--) {
      if (availableWinningSets[i].indexOf(a) !== -1) {
        availableWinningSets.splice(i, 1);
      }
    }
  }







  function checkForWin(pattern) { // the pattern either equels playerArray or compArray. if the pattern equels player array, it's looking for a player win, if it equels compArray, it's looking for a computer win.

    if ((pattern.indexOf(1) !== -1 && pattern.indexOf(2) !== -1 && pattern.indexOf(3) !== -1) || // horizontal wins
      (pattern.indexOf(4) !== -1 && pattern.indexOf(5) !== -1 && pattern.indexOf(6) !== -1) ||
      (pattern.indexOf(7) !== -1 && pattern.indexOf(8) !== -1 && pattern.indexOf(9) !== -1) ||
      (pattern.indexOf(1) !== -1 && pattern.indexOf(4) !== -1 && pattern.indexOf(7) !== -1) || //vertical wins
      (pattern.indexOf(2) !== -1 && pattern.indexOf(5) !== -1 && pattern.indexOf(8) !== -1) ||
      (pattern.indexOf(3) !== -1 && pattern.indexOf(6) !== -1 && pattern.indexOf(9) !== -1) ||
      (pattern.indexOf(1) !== -1 && pattern.indexOf(5) !== -1 && pattern.indexOf(9) !== -1) || // diagonal wins
      (pattern.indexOf(3) !== -1 && pattern.indexOf(5) !== -1 && pattern.indexOf(7) !== -1)){
      
      if (pattern == playerArray){  // if the winning pattern is from players moves, the player won. Initialize the board and update the win count   
      alert("You Win!");
      initialize();
      wins = wins + 1;
      $('#winCount').html('Wins : ' + wins);
  }
      if (pattern == compArray){   // if the winning pattern is from computer moves, the player lost. Initialize the board and update the loss count  
      alert("Computer Wins");
      initialize();
      losses = losses + 1;
      $('#lossCount').html('Losses : ' + losses);
    }
  }
  }







  function checkForTie() { // if a win did not take place, this move is next in the stack. If there are over 8 moves and a win didn't occur, a tie has occured. Initialize and update the tie count.

    totalArray = playerArray.concat(compArray).sort();

    if (totalArray.length > 8) {
       alert("Tie!");
      initialize();
      ties = ties + 1;
      $('#tieCount').html('Ties : ' + ties);

    }
  }

  function initialize() { // clears the board of player and computer moves. Does not clear the tie win and loss count however.

    for (i = 1; i <= 9; i++) {
      $('#container-' + i).html('');
      $('#container-' + i).css('background-color', 'white');
    }

    playerArray = []; // the player now has no moves on the board
    compArray = []; // the computer now has no moves on the board
    availableWinningSets = [  // all of the below sets are now winnable to the computer again.
      [1, 2, 3],
      [1, 4, 7],
      [1, 5, 9],
      [2, 5, 8],
      [3, 5, 7],
      [3, 6, 9],
      [4, 5, 6],
      [7, 8, 9]
    ];
  }

  function computerFirst() { // the computer the first move on the board. This move is random to keep variety in the game. This function triggers either when the compFirstButton is clicked, or when the player had the last move in the previous round.  

    initialize();

    var random = Math.floor((Math.random() * 9) + 1); // chooses random number 1-9

    if (random === 2 || random === 4 || random === 6 || random === 8) { // I don't want the computer to start at any side middle or top/bottom middle position. They can be more difficult to win with. 
      random += 1;
    }
    
    move = 1;

    $('#container-' + random).html(compSymbol).css({
      'background-color': compColor
    });
    compArray.push(random);
    //console.log('computerFirst')
    return;
  }




  function computersTurn() { // Though this function only represents one computer turn at a time, this function has many child functions. It evaluates it's own positions, then the players positions using multiple functions to determine the next best move. 

// ****************************************************************************************************************************************************************

    move = 0; // reset the move to zero. A move has not occured yet
    mainAlgoMove(compArray.join('')); // most important that the computer looks for a game winning move first.
    mainAlgoMove(playerArray.join('')); // does the player have a finishing move next? If so, prevent it.
    firstMove(playerArray.join('')); //the second option for the AI to consider. Has anyone played the board? If not, play a first move.
    cornerWinPreventionMove(playerArray.join('')); // prevents a player win that could take place in two moves. If called, computer plays a corner position.  
    WinPosibilitiesMove(playerArray.join('')); // The board is almost full. if there is any possibility for the computer to still win,  it will move on the first available winning set
    fillBoardMove(playerArray.join('')); // there should be no winning possibilities left when this function triggers.      
    checkForWin(compArray);
    checkForTie();

// ****************************************************************************************************************************************************************




    function mainAlgoMove(pattern) { // This move is evaluated twice every computer turn. The first time it is evaluated, pattern = compArray. In other words, 
    //                                  it checks the computers positioning, and if the computer has a winning strike opportunity, this function is triggered for a game win.
    //                                  Otherwise, this function occurs again and pattern = playerArray. If the player has a winning opportunity, the computer plays that move first to prevent it. 


      if (move == 0) {

        for (var i = 1; i <= mainArray.length - 1; i++) {

          for (var j = 0; j <= mainArray[i].length - 1; j++) {

          //console.log('pattern = ' pattern)
          //console.log('mainArray[i]' mainArray[i]

            if ((pattern.indexOf(mainArray[i][j][0]) !== -1) && ((pattern.indexOf(mainArray[i][j][1]) !== -1)) && ($('#container-' + i).html() == "")) { // if pattern contains two out of three moves needed for a win, the computer plays the third move needed for it's next turn.

              $('#container-' + i).html(compSymbol).css({
                'background-color': compColor
              });
              move = 1;
              compArray.push(i);
            //  console.log('mainAlgoMove')
              return;



            }

          }
        }
      }

    }
    
        function firstMove(pattern) { // This triggers the computers first turn in both which the computer goes first, and in games where the player goes first.  

            if(move == 0){ // if the computer has not gone yet, the follow statements are considered. 

              if (pattern == 5 && $('#container-1').html() == "") { // if the player has only gone once, and occupies the middle container, the first move is 1. 
                compArray.push(1);
                $('#container-1').html(compSymbol).css({
                  'background-color': compColor
                });
                move = 1;
                //console.log('firstMove')
                return;

              }

              if (compArray == 0 && (pattern == 1 || pattern == 2 || pattern == 3 || pattern == 4 || pattern == 6 || pattern == 7 || pattern == 8 || pattern == 9) && $('#container-5').html() == "") {
                compArray.push(5);
                $('#container-5').html(compSymbol).css({
                  'background-color': compColor
                });
                move = 1;
                //console.log('firstMove')
                 return;

              }

              if (playerArray.length == 0 && compArray.length == 0){ // if neither player has gone and it is the computers turn, use the computerFirst function for a random firt move draw. 
                  computerFirst();
              }


            }
        }

    function cornerWinPreventionMove(pattern) { // if the player has gone twice, and the players moves are surrounding a certain corner. That corner should be played.


      if (move == 0 && playerArray.length == 2) {


        for (var i = 1; i <= cornerMoveArray.length - 1; i++) {

          for (var j = 0; j <= cornerMoveArray[i].length - 1; j++) {

            if ((pattern.indexOf(cornerMoveArray[i][j][0]) !== -1) && ((pattern.indexOf(cornerMoveArray[i][j][1]) !== -1)) && ($('#container-' + i).html() == "")) {

              $('#container-' + i).html(compSymbol).css({
                'background-color': compColor
              });
              move = 1;
              compArray.push(i);
              //console.log(cornerWinPrevention)
              return;

            }
          }
        }
      }
    }

    function WinPosibilitiesMove() { // This move checks how many win possibilities moves 1,3,5,7, and 9 have, and if one of these moves has at least two win possibilities it triggers as the next move.  

      if (move == 0) {
        var winPossibilities = 0;
        var nextMove = [0, 0]; // [move location, number of win possibilities];

        for (var b = 1; b <= 9; b++, winPossibilities = 0) {

          for (var i = 0; i < availableWinningSets.length; i++) {
            if ($('#container-' + b).html() == "" && (b == 5 || b == 1 || b == 3 || b == 7 || b == 9)) { // if these positions are currently not played, and one of these moves can win in multiple ways. Play this move. 
              if (availableWinningSets[i].indexOf(b) !== -1) {
                winPossibilities = winPossibilities + 1; 

                if (winPossibilities > nextMove[1]) { // this ensures that the move with the most possibilities of winning is played next. 
                  nextMove[0] = b;
                  nextMove[1] = winPossibilities;
                  if (winPossibilities == 2) {
                              compArray.push(nextMove[0]);
                    $('#container-' + nextMove[0]).html(compSymbol).css({
                        'background-color': compColor
                     });
                        move = 1;
                      //  console.log('winPossibilities');
                       return;
                  }
                }
              }
            }
          }
        
          
        }
      }
    }

    function fillBoardMove() { // this move occurs when there are no win possibilities left for the computer, and the board must be filled for a tie to occur. 


      if (move == 0) {

        missingMoves = []; // initializes missingMoves array.

        for (var i = 1; i <= 9; i++) { 

          if (totalArray.indexOf(i) === -1 && $('#container-' + i).html() == "") { // if any number 1-9 does not exist in totalArray, it has not been played. Push it to missingMoves array.
            missingMoves.push(i);
          }
        }
        compArray.push(missingMoves[0]); // push the first move on missingMoves array (there should only be one or two) to compArray. This is compArrays next turn.
        $('#container-' + missingMoves[0]).html(compSymbol).css({
          'background-color': compColor
        });
        // console.log('fillBoardMove'
         return;
      }
    }
  }
});