/* Play Game Screen
 * 
 * Generates game based on the options selected
 * by the user on the gamemenu.js page
 * 
 * Author: Laura Seletos
 * Advisor: Dr. Branton
 *  
 */

/*
 * To Do:
 * Add in touch gestures
 * game play
 */

//Game Logic Booleans:
	//Check to see if 1st image is selected
	var isFirstImageSelected=new Boolean();
	
	//Check to see if 1st placement spot is selected
	var isFirstPlacementSelected=new Boolean();
	
	//Check to see if 2nd image is selected
	var isSecondImageSelected=new Boolean();
	
	//Check to see if 2nd placement spot is selected
	var isSecondPlacementSelected=new Boolean();
	
	//Check to see if 3rd image is selected
	var isThirdImageSelected=new Boolean();
	
	//Check to see if 3rd placement spot is selected
	var isThirdPlacementSelected=new Boolean();

//Booleans for round completion
	// Round 1 completed
	var roundOneIsCompleted=new Boolean();
	
	// Round 2 completed
	var roundTwoIsCompleted=new Boolean();
	
	// Round 3 completed
	var roundThreeIsCompleted=new Boolean();

//Set all booleans to false because no clicks have been made yet.
	isFirstImageSelected = false;
	
	isFirstPlacementSelected= false;
	
	isSecondImageSelected= false;
	
	isSecondPlacementSelected= false;
	
	isThirdImageSelected= false;
	
	isThirdPlacementSelected= false;


//Setting all rounds to false because none start off being completed
	// Round 1 completed
	roundOneIsCompleted = false;
	
	// Round 2 completed
	roundTwoIsCompleted = false;
	
	// Round 3 completed
	roundThreeIsCompleted = false;


//creates game menu window
var playGameMenu = Ti.UI.createWindow
	({
		//sets bg boarder to gray
		backgroundColor: '#333333'
	});
	
	//sets orentation to landscape
	playGameMenu.orientationModes = [Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT];



//Creates background image on game menu screen						
var gameScreenImg = Ti.UI.createImageView
	({
 		 image:'images/gamescreen.png'
	});
	
	//Adds in the background image on main screen						
	playGameMenu.add(gameScreenImg);



// Create the banner image
var topBanner = Ti.UI.createImageView
	({
		image : 'images/bannerpic.png',
		height:'auto',
		width:'auto',
		top : 25,
		left : 359
	});

	// Add to the parent view.
	playGameMenu.add(topBanner);



// Create 1st place image holder
var firstplace = Ti.UI.createImageView
	({
		image : 'images/1stplace.jpg',
		height:200,
		width:200,
		top:215,
		left:125
	});
	//Handle touch functionality
	firstplace.addEventListener('click', function() 
	{
		//Set isFirstPlacementSelected to true
		isFirstPlacementSelected= true;
		
		//Set the rest to false		
		isSecondPlacementSelected= false;		
		isThirdPlacementSelected= false;
				
		Ti.API.info('You clicked on place 1!');

	});
	// Add to the parent view.
	playGameMenu.add(firstplace);
	

// Create 2nd place image holder
var secondplace = Ti.UI.createImageView
	({
		image : 'images/2ndplace.jpg',
		height:200,
		width:200,
		top:215,
		left:414
	});
	//Handle touch functionality
	secondplace.addEventListener('click', function() 
	{
		//Set isSecondPlacementSelected to true		
		isSecondPlacementSelected= true;
		
		//Set the rest to false		
		isFirstPlacementSelected= false;		
		isThirdPlacementSelected= false;
		
		Ti.API.info('You clicked on place 2!');


	});
	// Add to the parent view.
	playGameMenu.add(secondplace);


// Create 3rd place image holder
var thirdplace = Ti.UI.createImageView
	({
		image : '3rdplace.jpg',
		height:200,
		width:200,
		top:215,
		right:115
	});
	//Handle touch functionality
	thirdplace.addEventListener('click', function() 
	{
		//Set isThirdPlacementSelected to true
		isThirdPlacementSelected= true;
		
		//Set the rest to false		
		isFirstPlacementSelected= false;		
		isSecondPlacementSelected= false;
		
		Ti.API.info('You clicked on place 3!');

				
	});
	// Add to the parent view.
	playGameMenu.add(thirdplace);






// Create 1st image 
var first = Ti.UI.createImageView
	({
		image : '1.jpg',
		height:200,
		width:200,
		top:425,
		left:125
	});
	//Handle touch functionality
	first.addEventListener('click', function() 
	{
		//Set isFirstPlacementSelected to true
		isFirstImageSelected = true;
		
		//Set the rest to false
		isSecondImageSelected= false;
		isThirdImageSelected= false;
		
		Ti.API.info('You clicked on img 1!');
				
	});
	// Add to the parent view.
	playGameMenu.add(first);
	

// Create 2nd image 
var second = Ti.UI.createImageView
	({
		image : '2.jpg',
		height:200,
		width:200,
		top:425,
		left:414
	});
	//Handle touch functionality
	second.addEventListener('click', function() 
	{
		//Set isSecondPlacementSelected to true
		isSecondImageSelected= true;
		
		//Set the rest to false
		isFirstImageSelected = false;
		isThirdImageSelected= false;
		
		Ti.API.info('You clicked on img 2!');


	});
	// Add to the parent view.
	playGameMenu.add(second);


// Create 3rd image
var third = Ti.UI.createImageView
	({
		image : '3.jpg',
		height:200,
		width:200,
		top:425,
		right:115
	});
	//Handle touch functionality
	third.addEventListener('click', function() 
	{
		//Set isThirdPlacementSelected to true
		isThirdPlacementSelected= true;
		
		//Set the rest to false
		isFirstImageSelected = false;
		isSecondImageSelected= false;
		
		Ti.API.info('You clicked on img 3!');

				
	});
	// Add to the parent view.
	playGameMenu.add(third);




//back button -> to main menu screen
var b1 = Ti.UI.createButton
	({
		title:'Back to main screen',
		width:300,
		height:50,
		top:700
	});
	b1.addEventListener('click', function()
	{
		gamemenu.close();
		win.open();
	});
	playGameMenu.add(b1);
	
	
	//GAME LOGIC:
	
	//Check to see if move one is correct:
	if(isFirstImageSelected == true && isFirstPlacementSelected == true)
	{
		//do this
		Ti.API.info('You beat round 1!');

		// Set Round 1 as completed 
		roundOneIsCompleted = true;
	}
	//Check to see if move two is correct:
	if(roundOneIsCompleted == true && isSecondImageSelected == true 
		&& isSecondPlacementSelected == true)
	{
		//do this
		Ti.API.info('You beat round 2!');

		// Set Round 2 as completed 
		roundTwoIsCompleted = true;
	}	
	//Check to see if move three, the final move, is correct:
	if(roundTwoIsCompleted == true && isThirdImageSelected == true 
		&& isThirdPlacementSelected == true)
	{
		//do this
		Ti.API.info('You beat round 3!');

		// Set Round 2 as completed 
		roundThreeIsCompleted = true;
	}		

	//Check to see if player had won the round:
	if(roundThreeIsCompleted == true)
	{	
		//PLAYER WON:			
		Ti.API.info('You Won the game!!');
									
			//Label 'You Win!'
			var youWinLabel = Ti.UI.createLabel({
				text:'You Win! Great Job!', 
				color: '#FFFFFF',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:100,
				left:350
			
			});
			//add label to window
			playGameMenu.add(youWinLabel);
	}	


