  
  var pointTotal = 0;
  var pointValues = [10, 2, 3, 8];
  var crystalPicArray = ['assets/images/blue.png', 'assets/images/green.png', 'assets/images/red.png', 'assets/images/yellow.png']
  var wins = 0;
  var losses = 0;
  var targetNumber;


  var startGame = function (){

    targetNumber = Math.round(Math.random() * 100);
    $("#pointGoal").text(targetNumber);
    pointTotal = 0;

  };


  startGame();

  
  for (var i = 0; i < pointValues.length; i++) {

     
    var imageCrystal = $("<img class='crystalImage'>");
    imageCrystal.attr("src", crystalPicArray[i]);        
    imageCrystal.attr("crystalValue", pointValues[i]);
    $("#crystals").append(imageCrystal);


  }

  
  $(".crystalImage").on("click", function() {

    
    var crystalValue = ($(this).attr("crystalValue"));
    var crystalPoint = parseInt(crystalValue);
    
    
    pointTotal += crystalPoint;

    
    if (pointTotal === targetNumber) {
      wins++;
      startGame();
    }

    else if (pointTotal >= targetNumber) {
      losses++;
      startGame();
    }


    $("#wins").text("Wins:   " + wins);
    $("#losses").text("Losses: " + losses);
    $("#points").text("You have " + pointTotal + " points");


  });




  $("#reset").on("click", function() { 

    var pointTotal = 0;
    var wins = 0;
    var losses = 0;
    $("#wins").text("Wins:   " + wins);
    $("#losses").text("Losses: " + losses);
    $("#points").text("You have " + pointTotal + " points");
    startGame();

  });