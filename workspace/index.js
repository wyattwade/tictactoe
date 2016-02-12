$(function() {

    var availableWinningSets = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8], [3, 5, 7], [3, 6, 9], [4, 5, 6], [7, 8, 9]];   //sets the computer can still win with
    var playerArray = []; // all player moves combined;
    var compArray = []; // all computer moves combined;
    var totalArray;  // player + computer moves combined;
    var playerJoined = 0; // A sorted string version of playerArray; Helps me make certain algorythms shorter;
    var compJoined = 0; // A sorted string version of compArray; Helps me make certain algorythms shorter;
    var playerSymbol = 'X'; 
    var compSymbol = 'O';


    $('#compFirst').click(function () {
        computerFirst();
    });

    $('#reset').click(function () {
        initialize();
    });
    $('#container-1').click(function () {
        if ($('#container-1').html() == "") {
            $('#container-1').html(playerSymbol);
            playerArray.push(1); // pushes 1 to the sequence that the player has played
            winningSets(1); // removes any winning set containing the number 1 in it. The computer can no longer win in those rows/columns.
            checkForXWin(); // did the player win? **rename this
            checkForTie();
            computersTurn();

        }
    });

    $('#container-2').click(function () {
        if ($('#container-2').html() == "") {
            $('#container-2').html(playerSymbol);
            playerArray.push(2);
            winningSets(2);
            checkForXWin();
            checkForTie();
            computersTurn();


        }
    });

    $('#container-3').click(function () {
        if ($('#container-3').html() == "") {
            $('#container-3').html(playerSymbol);
            playerArray.push(3);
            winningSets(3);
            checkForXWin();
            checkForTie();
            computersTurn();
        }
    });

    $('#container-4').click(function () {
        if ($('#container-4').html() == "") {
            $('#container-4').html(playerSymbol);
            playerArray.push(4);
            winningSets(4);
            checkForXWin();
            checkForTie();
            computersTurn();

        }
    });

    $('#container-5').click(function () {
        if ($('#container-5').html() == "") {
            $('#container-5').html(playerSymbol);
            playerArray.push(5);
            winningSets(5);
            checkForXWin();
            checkForTie();
            computersTurn();

        }
    });

    $('#container-6').click(function () {
        if ($('#container-6').html() == "") {
            $('#container-6').html(playerSymbol);
            playerArray.push(6);
            winningSets(6);
            checkForXWin();
            checkForTie();
            computersTurn();

        }
    });

    $('#container-7').click(function () {
        if ($('#container-7').html() == "") {
            $('#container-7').html(playerSymbol);
            playerArray.push(7);
            winningSets(7);
            checkForXWin();
            checkForTie();
            computersTurn();


        }
    });

    $('#container-8').click(function () {
        if ($('#container-8').html() == "") {
            $('#container-8').html(playerSymbol);
            playerArray.push(8);
            winningSets(8);
            checkForXWin();
            checkForTie();
            computersTurn();

        }
    });

    $('#container-9').click(function () {
        if ($('#container-9').html() == "") {
            $('#container-9').html(playerSymbol);
            playerArray.push(9);
            winningSets(9);
            checkForXWin();
            checkForTie();
            computersTurn();

        }
    });


    function winningSets(a) {  // takes away sets that are no longer winnable to the computer

        for (i = availableWinningSets.length - 1; i >= 0; i--) {
            if (availableWinningSets[i].indexOf(a) !== -1) {
                availableWinningSets.splice(i, 1);
            }
        }
        // console.log(availableWinningSets);
    }


    function checkForXWin() {

        // sort playerArray ascending numerically
        // console.log(playerArray);


        if (playerArray.indexOf(1) !== -1 && playerArray.indexOf(2) !== -1 && playerArray.indexOf(3) !== -1    // horizontal wins
            || playerArray.indexOf(4) !== -1 && playerArray.indexOf(5) !== -1 && playerArray.indexOf(6) !== -1
            || playerArray.indexOf(7) !== -1 && playerArray.indexOf(8) !== -1 && playerArray.indexOf(9) !== -1
            || playerArray.indexOf(1) !== -1 && playerArray.indexOf(4) !== -1 && playerArray.indexOf(7) !== -1 //vertical wins
            || playerArray.indexOf(2) !== -1 && playerArray.indexOf(5) !== -1 && playerArray.indexOf(8) !== -1
            || playerArray.indexOf(3) !== -1 && playerArray.indexOf(6) !== -1 && playerArray.indexOf(9) !== -1
            || playerArray.indexOf(1) !== -1 && playerArray.indexOf(5) !== -1 && playerArray.indexOf(9) !== -1 // diagonal wins
            || playerArray.indexOf(3) !== -1 && playerArray.indexOf(5) !== -1 && playerArray.indexOf(7) !== -1
        ) {
            alert("X Wins!");
            initialize();

        }
    }

    function checkForOWin() {
        
         console.log('checkforOWin ---------- oArray  ' + compArray + '           xArray----------' + playerArray);
        
        
        if ((compArray.indexOf(1) !== -1 && compArray.indexOf(2) !== -1 && compArray.indexOf(3) !== -1)    // horizontal wins
            || (compArray.indexOf(4) !== -1 && compArray.indexOf(5) !== -1 && compArray.indexOf(6) !== -1)
            || (compArray.indexOf(7) !== -1 && compArray.indexOf(8) !== -1 && compArray.indexOf(9) !== -1)
            || (compArray.indexOf(1) !== -1 && compArray.indexOf(4) !== -1 && compArray.indexOf(7) !== -1) //vertical wins
            || (compArray.indexOf(2) !== -1 && compArray.indexOf(5) !== -1 && compArray.indexOf(8) !== -1)
            || (compArray.indexOf(3) !== -1 && compArray.indexOf(6) !== -1 && compArray.indexOf(9) !== -1)
            || (compArray.indexOf(1) !== -1 && compArray.indexOf(5) !== -1 && compArray.indexOf(9) !== -1) // diagonal wins
            || (compArray.indexOf(3) !== -1 && compArray.indexOf(5) !== -1 && compArray.indexOf(7) !== -1)
        ) {
            alert("O Wins!");
            initialize();

        }
    }

    function checkForTie() {
        
           // alert('checkforTie' + compArray + playerArray);
        
        if (( $('#container-1').html() == compSymbol || $('#container-1').html() == playerSymbol)
            && ($('#container-2').html() == compSymbol || $('#container-2').html() == playerSymbol)
            && ($('#container-3').html() == compSymbol || $('#container-3').html() == playerSymbol)
            && ($('#container-4').html() == compSymbol || $('#container-4').html() == playerSymbol)
            && ($('#container-5').html() == compSymbol || $('#container-5').html() == playerSymbol)
            && ($('#container-6').html() == compSymbol || $('#container-6').html() == playerSymbol)
            && ($('#container-7').html() == compSymbol || $('#container-7').html() == playerSymbol)
            && ($('#container-8').html() == compSymbol || $('#container-8').html() == playerSymbol)
            && ($('#container-9').html() == compSymbol || $('#container-9').html() == playerSymbol)

        ) {
            alert("Tie!");
            initialize();
        }
    }

    function initialize() {
        $('#container-1').html('');
        $('#container-2').html('');
        $('#container-3').html('');
        $('#container-4').html(''); 
        $('#container-5').html('');
        $('#container-6').html('');
        $('#container-7').html('');
        $('#container-8').html('');
        $('#container-9').html('');

        playerArray = [];
        playerJoined = 0;
        compArray = [];
        compJoined = 0;
        availableWinningSets = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8], [3, 5, 7], [3, 6, 9], [4, 5, 6], [7, 8, 9]];


    }


    function computerFirst() {

        initialize();

        var random = Math.floor((Math.random() * 9) + 1);

        if (random === 2 || random === 4 || random === 6 || random === 8) {
            random += 1;
        }


        $('#container-' + random).html(compSymbol);
        compArray.push(random);
        // console.log(compArray);
    }


    function computersTurn() {


        var move = 0; // reset the move to zero. A move has not occured yet

        playerJoined = playerArray.sort(function (a, b) {
            return a - b;
        }).join('');
        // console.log(playerJoined);

        compJoined = compArray.sort(function (a, b) {
            return a - b;
        }).join('');
       


        //******************************* if computer goes second -- default for now


        //******************************* Winning move
        var pattern = compJoined; // The computer looks at its own positions/pattern to look for a winning move
         // console.log(pattern + '                                       PATTERN IS----------------------');
        // winningmove();
        mainAlgoMove();// most important that the computer looks for a game winning move first.
        //*******************************


        var pattern = playerJoined; // the computer looks at the opponents positions since there are no game winning moves
        firstMove(); //the second option for the AI to consider. Has anyone played the board? If not, play a first move.
        // alert('1');
        mainAlgoMove(); // does the player have a finishing move next? If so, prevent it.
        // alert('2');
        mostWinPosibilitiesMove(); // The board is almost full. if there is any possibility for the computer to still win,  it will move on the first available winning set
        // alert('3')
        fillBoardMove(); // there should be no winning possibilities left when this function triggers.
        // alert('check for winnnnnnnnnnnnnnnnn');
        checkForOWin();
        checkForTie();


        function firstMove() {

            if (move == 0 && (pattern == 5 && $('#container-1').html() == "")) {
                compArray.push(1);
            //    // console.log(compArray);
                $('#container-1').html(compSymbol);
                move = 1;
                // console.log(compArray);
            }

            if (compArray == 0 && (move == 0 && (pattern == 1 || pattern == 2 || pattern == 3 || pattern == 4 || pattern == 6 || pattern == 7 || pattern == 8 || pattern == 9) && $('#container-5').html() == "")) {
                compArray.push(5);
             //   // console.log(compArray);
                $('#container-5').html(compSymbol);
                move = 1;
                // console.log(compArray);
             //   alert('firstMove');
        checkForOWin();
        checkForTie();
            }
        }


        function mainAlgoMove() { // *********** bug happens because it finds multiple winnning computer combinations. Sometimes the one it finds comes up with the container being taken by an x. In this event
 alert(move + ' before mainAlgo')
 alert(pattern);
// console.log('finish move working' + pattern);


            if (move == 0 && playerArray.length == 0 && compArray.length == 0){    //This will trigger when the board is cleared and the player had the last turn. The computer will go first and have a random move
                 computerFirst();
        //                  alert('computer First');
            }

            if (move == 0 && (          (pattern.length == 2 && compJoined.length == 1 && pattern.indexOf(24) !== -1) || (pattern.length == 2 && compJoined.length == 1 && pattern.indexOf(34) !== -1) || (pattern.length == 2 && compJoined.length == 1 && pattern.indexOf(27) !== -1) ||                               (pattern.indexOf(2) !== -1 && pattern.indexOf(3) !== -1) || (pattern.indexOf(5) !== -1 && pattern.indexOf(9) !== -1) || (pattern.indexOf(4) !== -1 && pattern.indexOf(7) !== -1)) && $('#container-1').html() == "") {
                compArray.push(1);
                $('#container-1').html(compSymbol);
                move = 1;
                // console.log(compArray);
                checkForOWin();
                checkForTie();
            }

            if (move == 0 && ((pattern.indexOf(5) !== -1 && pattern.indexOf(8) !== -1) || (pattern.indexOf(1) !== -1 && pattern.indexOf(3) !== -1) || (pattern.indexOf(1) !== -1 && pattern.indexOf(9) !== -1) ||
                (pattern.indexOf(2) !== -1 && pattern.indexOf(8) !== -1)) && $('#container-2').html() == "") {
                compArray.push(2);
                $('#container-2').html(compSymbol);
                move = 1;
                // console.log(compArray);
            //    alert('mainAlgoMove 2');
                checkForOWin();
                checkForTie();
            }


            if (move == 0 && (                   (pattern.length == 2 && compJoined.length == 1 && pattern.indexOf(16) !== -1) || (pattern.length == 2 && compJoined.length == 1 && pattern.indexOf(26) !== -1) || (pattern.length == 2 && compJoined.length == 1 && pattern.indexOf(29) !== -1) ||                      (pattern.indexOf(1) !== -1 && pattern.indexOf(2) !== -1 ) || (pattern.indexOf(5) !== -1 && pattern.indexOf(7) !== -1 ) || (pattern.indexOf(6) !== -1) && pattern.indexOf(9) !== -1) && $('#container-3').html() == "") {
                compArray.push(3);
                $('#container-3').html(compSymbol); 
                move = 1;
                // console.log(compArray);
                checkForOWin();
                checkForTie();
            }

            if (move == 0 &&((pattern.indexOf(1) !== -1 && pattern.indexOf(7) !== -1) || (pattern.indexOf(5) !== -1 && pattern.indexOf(6) !== -1 ) || (pattern.indexOf(2) !== -1 && pattern.indexOf(8) !== -1) || (pattern.indexOf(3) !== -1 && pattern.indexOf(7) !== -1) || (pattern.indexOf(4) !== -1 && pattern.indexOf(6) !== -1)) && $('#container-4').html() == "") {
                compArray.push(4);
                $('#container-4').html(compSymbol);
                move = 1;
            //    alert('mainAlgoMove 4');

                // console.log(compArray);
                checkForOWin();
                checkForTie();
            }


            if (move == 0 && ((pattern.indexOf(1) !== -1 && pattern.indexOf(9) !== -1) || (pattern.indexOf(2) !== -1 && pattern.indexOf(8) !== -1) || (pattern.indexOf(3) !== -1 && pattern.indexOf(7) !== -1) || (pattern.indexOf(4) !== -1 && pattern.indexOf(6) !== -1)) && $('#container-5').html() == "") {
                compArray.push(5);
                $('#container-5').html(compSymbol);
                move = 1;
         //       alert('mainAlgoMove');
                // console.log(compArray);
                checkForOWin();
                checkForTie();
            }


            if (move == 0 && ((pattern.indexOf(3) !== -1 && pattern.indexOf(9) !== -1) || (pattern.indexOf(4) !== -1 && pattern.indexOf(5) !== -1)) && $('#container-6').html() == "") {
                compArray.push(6);
                $('#container-6').html(compSymbol);
                move = 1;
                // console.log(compArray);
                checkForOWin();
                checkForTie();
            }

            if (move == 0 && (                  (pattern.length == 2 && compJoined.length == 1 && pattern.indexOf(48) !== -1) || (pattern.length == 2 && compJoined.length == 1 && pattern.indexOf(49) !== -1) || (pattern.length == 2 && compJoined.length == 1 && pattern.indexOf(18) !== -1) ||                   (pattern.indexOf(1) !== -1 && pattern.indexOf(4) !== -1) || (pattern.indexOf(3) !== -1 && pattern.indexOf(5) !== -1) || (pattern.indexOf(8) !== -1 && pattern.indexOf(9) !== -1)) && $('#container-7').html() == "") {
                compArray.push(7);
                $('#container-7').html(compSymbol);
                move = 1;
                // console.log(compArray);
                checkForOWin();
                checkForTie();
            }

            if (move == 0 && ((pattern.indexOf(2) !== -1 && pattern.indexOf(5) !== -1) || (pattern.indexOf(7) !== -1 && pattern.indexOf(9) !== -1)) && $('#container-8').html() == "") {
                compArray.push(8);
                $('#container-8').html(compSymbol);
                move = 1;
                // console.log(compArray);
                checkForOWin();
                checkForTie();
                
            }

            if (move == 0 && (               (pattern.length == 2 && compJoined.length == 1 && pattern.indexOf(68) !== -1) || (pattern.length == 2 && compJoined.length == 1 && pattern.indexOf(38) !== -1) || (pattern.length == 2 && compJoined.length == 1 && pattern.indexOf(67) !== -1) ||          (pattern.indexOf(1) !== -1 && pattern.indexOf(5) !== -1) || (pattern.indexOf(3) !== -1 && pattern.indexOf(6) !== -1) || (pattern.indexOf(7) !== -1 && pattern.indexOf(8) !== -1)) && $('#container-9').html() == "") {
                compArray.push(9);
                $('#container-9').html(compSymbol);
                move = 1;
                // console.log(compArray);
                checkForOWin();
                checkForTie();
            }

        }


        function mostWinPosibilitiesMove() {
            alert(move + ' before mostWins');// finds the move with the most ammount of win possibilities
            
            if (move == 0){
            var winPossibilities = 0;
            var nextMove  = [0,0];  // [move location, number of win possibilities];

            for (var b = 1; b <= 9; b++, winPossibilities = 0){
               // if ($('#container-' + b).html() !== ""){
               //     break };
            for (var i = 0; i < availableWinningSets.length; i++) {
                if ($('#container-' + b).html() == "" && (b == 1 || b== 3 || b == 7 || b == 9)){        
                    if (availableWinningSets[i].indexOf(b) !== -1) {
                        winPossibilities = winPossibilities + 1;
                        
                    if(winPossibilities > 0){ // If any win possibilities exist for the computer, a move should occur and the comps turn is over. 
                        move = 1;
                        }
                     //   // console.log(availableWinningSets[i]);
                     //  // console.log(b);
                     //   // console.log(b + 'has' + winPossibilities + ' Win Possibilities');

                        if (winPossibilities > nextMove[1]){
                            nextMove[0] = b; nextMove[1] = winPossibilities;
                            if (winPossibilities == 2){ break } 
                         //   // console.log(nextMove[0] + ' has ' + nextMove[1] + ' winning possibilities');
                        }
                    }
                }
            }
            }

   // alert('mostpossiblewinsmove')
            compArray.push(nextMove[0]);
            $('#container-' + nextMove[0]).html(compSymbol); 

        checkForOWin();
        checkForTie();
}
        }




function fillBoardMove(){
  //  alert('fillBoardMove');
    alert(move + ' fillBoardMove');
if (move == 0){
    
    
    
    
    
      totalArray = playerArray.concat(compArray).sort();
      var missingMoves = [];

        for (var i = 1; i <= 9; i++){
           
                if (totalArray.indexOf(i) === -1){
                 missingMoves.push(i);
            }
            
            
        }
       alert(missingMoves);
      compArray.push(missingMoves[0]);
    $('#container-' + missingMoves[0]).html(compSymbol);
            checkForOWin();
            checkForTie();    
    }
     
 }





    }
});