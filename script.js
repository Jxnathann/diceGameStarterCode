$(document).ready(function(){
  function rolldice(){
    // Get a random value between 0 and 5
    var randomNum = Math.random() * 6;
    // round our random number down and add 1 
    // to get a whole number between 1 and 6
    var dice = Math.floor() + 1;
    
    // return the value of dice
    return dice;
  };
  
  $("#roll-dice").click(function(){
    // remove all previous dice classes from previous rolls
    $('#first-die').removeClass();
    $('#second-die').removeClass();
    
    // get a random side for dice 1
    var dice = rolldice();
    // create a class name using this random number
    var className = 'dice-' + dice;
    // make the first die have our new class name
    $('#first-die').addClass(className);
    
    // get a random side for dice 2
    var dice2 = rolldice();
    // create a class name using this random number
    className = 'dice-' + dice2;
    // make the second die have our new class name
    $('#second-die').addClass(className);
  });
  
});
