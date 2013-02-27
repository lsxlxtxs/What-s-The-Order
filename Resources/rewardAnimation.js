/* Play Game Screen
 * 
 * Generates game based on the options selected
 * by the user on the playGameIPAD.js page
 * 
 * Author: Laura Seletos
 * Advisor: Dr. Branton
 *  
 */

//Game Logic:


	//Image is selected int, set to 0 for a starting null value
	var imagePlace = 1;
	
	// //Array of images for reward animation
	// var rewardAnimationArray = new Array();
// 	
	// //Load images 1 through 28 into array to be used later
	// for (var i = 0; i < 28; i++)
	// {
		// rewardAnimationArray[i] = ("RewardAnimationStills/" + (i+1) + ".png");
	// }

	//creates game menu window
	var rewardWin = Ti.UI.createWindow
	({
		//sets bg border to gray
		backgroundColor: '#333333'
	});

	
	//sets orientation to landscape
	rewardWin.orientationModes = [Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT];
	
	

	//Adds in the background image on main screen						
	
	var images = [];
	  for(var i=0; i<28; i++) 
	  {
	    var file = ("RewardAnimationStills/" + (i+1) + ".png");
	    images.push(file);
	  }
 
  var rewardAnimation = Ti.UI.createImageView({
    image: images[28],
    images: images,
    duration: 1000,
    borderColor: '#888'
  });
 
	rewardAnimation.addEventListener('load', function(e) {
	setTimeout(function(e){
	rewardAnimation.images = images;
	// start animation
	rewardAnimation.start();
	},1);
	});
 	rewardWin.add(rewardAnimation);

  
