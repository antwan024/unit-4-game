var targetNumber = Math.round(Math.random() * 100);

  $("#pointGoal").text(targetNumber);

  var pointTotal = 0;

  var pointValues = [10, 2, 3, 8];

  var crystalPoint;

  

  
  for (var i = 0; i < pointValues.length; i++) {

    
    var imageCrystal = $("<img class='crystalImage'>");

    
    imageCrystal.attr("src", "assets/images/Ruby-PNG-Picture.png");

    
    imageCrystal.attr("data-crystalvalue", pointValues[i]);

    
    $("#crystals").append(imageCrystal);
  }

  
  $(".crystalImage").on("click", function() {

    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    
    pointTotal += crystalValue;

    
    
    alert("New score: " + pointTotal);

    if (pointTotal === targetNumber) {
      alert("You win!");
    }

    else if (pointTotal >= targetNumber) {
      alert("You lose!!");
    }

  });