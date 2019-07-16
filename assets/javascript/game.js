var targetNumber = Math.round(Math.random() * 100);

  $("#pointGoal").text(targetNumber);

  var pointTotal = 0;

  var pointValues = [10, 2, 3, 8];

  var crystalPicArray = ['assets/images/blue.png', 'assets/images/green.png', 'assets/images/red.png', 'assets/images/yellow.png']

  

  

  
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

    
    
    alert("New score: " + pointTotal);

    if (pointTotal === targetNumber) {
      alert("You win!");
    }

    else if (pointTotal >= targetNumber) {
      alert("You lose!!");
    }

  });