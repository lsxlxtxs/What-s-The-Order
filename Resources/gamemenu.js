/* Play Game Screen
 * 
 * Generates game based on the options selected
 * by the user on the gamemenu.js page
 * 
 * Author: Laura Seletos
 * Advisor: Dr. Branton
 *  
 */

//Game Logic:
	//Image is selected int, set to 0 for a starting null value
	var imageSelected=0;
	
	//Checks to see which placement spot is selected, set to 0 for a starting null value
	var placementSelected=0;
	
	//Int for which round the user is on
	var onRoundNumber= 1;
	
	var isGameOver = false;
	
	//Testing var
	var roundsPerGame = 3;
	
	//current round
	var roundsPerGameNumber = 0;	
	
	var moveOn = false;
	
	var score = 0;
	

if(isGameOver == false)
	{
	
		//creates game menu window
		var gamemenu = Ti.UI.createWindow
			({
				//sets bg border to gray
				backgroundColor: '#333333'
			});
			
			//sets orientation to landscape
			gamemenu.orientationModes = [Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT];
		
		var youWinLabel = Ti.UI.createLabel({
				text:'', 
				color: '#FFFFFF',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:645,
				left:440
		});
		gamemenu.add(youWinLabel);
		
		//Creates background image on game menu screen						
		var gameScreenImg = Ti.UI.createImageView
			({
		 		 image:'images/gamescreen.png'
			});
			
			//Adds in the background image on main screen						
			gamemenu.add(gameScreenImg);
		
		
		
		// Create the banner image
		var topBanner = Ti.UI.createImageView
			({
				image: 'images/bannerpic.png',
				height:'auto',
				width:'auto',
				top : 25,
				left : 359
			});
			topBanner.addEventListener('load', function() {
			});
		
			// Add to the parent view.
			gamemenu.add(topBanner);
			
		
		
		
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
			
			 	placementSelected=1;
						
				Ti.API.info('You clicked on place 1!');

				gameLogic();
			});
			// Add to the parent view.
			gamemenu.add(firstplace);
			
		
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
				placementSelected=2;
				Ti.API.info('You clicked on place 2!');
				
				gameLogic();

		
			});
			// Add to the parent view.
			gamemenu.add(secondplace);
		
		
		// Create 3rd place image holder
		var thirdplace = Ti.UI.createImageView
			({
				image : 'images/3rdplace.jpg',
				height:200,
				width:200,
				top:215,
				right:115
			});
			//Handle touch functionality
			thirdplace.addEventListener('click', function() 
			{
				placementSelected=3;
				
				Ti.API.info('You clicked on place 3!');
				
				gameLogic();
		
						
			});
			// Add to the parent view.
			gamemenu.add(thirdplace);
		
		
		
		// Create 1st image 
		var first = Ti.UI.createImageView
			({
				image : 'images/1.jpg',
				height:200,
				width:200,
				top:425,
				left:125
			});
			//Handle touch functionality
			first.addEventListener('click', function() 
			{
				imageSelected = 1;
				placementSelected = 0;
				
				Ti.API.info('You clicked on img 1!');
				
				gameLogic();

						
			});
			// Add to the parent view.
			gamemenu.add(first);
						

		
		// Create 2nd image 
		var second = Ti.UI.createImageView
			({
				image : 'images/2.jpg',
				height:200,
				width:200,
				top:425,
				left:414
			});
			//Handle touch functionality
			second.addEventListener('click', function() 
			{
				imageSelected = 2;
				
				placementSelected = 0;

				Ti.API.info('You clicked on img 2!');
			
				gameLogic();

		
		
			});
			// Add to the parent view.
			gamemenu.add(second);

		
		// Create 3rd image
		var third = Ti.UI.createImageView
			({
				image : 'images/3.jpg',
				height:200,
				width:200,
				top:425,
				right:115
			});
			//Handle touch functionality
			third.addEventListener('click', function() 
			{
				imageSelected = 3;
				
				placementSelected = 0;

				Ti.API.info('You clicked on img 3!');
				
				gameLogic();

						
			});
			// Add to the parent view.
			gamemenu.add(third);
									

						
		
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
				reset();
				gamemenu.close();
				win.open();
			});
			gamemenu.add(b1);
			
	}

	
else
{
	
	 imageSelected=0;
	
	 placementSelected=0;
	
	 onRoundNumber= 0;
	
	 isGameOver = false;
}



function gameLogic()
{
	//------------------------------Game Logic----------------------------------------------------------
switch (onRoundNumber)
{
	case 1:
			//Check to see if move one is correct:
			if(imageSelected == 1 && placementSelected == 1)
			{
				//change location of 1st image to correct placement on screen
				first.setTop(215);
				first.setLeft(125);
				
				//do this
				Ti.API.info('You beat round 1!');
						
				// Set to move on to next round: 
				onRoundNumber = 2;
			}
			else
			{
				//reset();
			}
	break;

	case 2:
			//Check to see if move one is correct:
			if (onRoundNumber == 2)
			{
				if(imageSelected == 2 && placementSelected == 2)
				{
					//change location of 1st image to correct placement on screen
					second.setTop(215);
					second.setLeft(414);
					
					//do this
					Ti.API.info('You beat round 2!');
				
			
					// Set to move on to next round: 
					onRoundNumber = 3;
		
				}
				else
				{
					//reset();
				}
			}
	break;

	case 3:
		if(imageSelected == 3 && placementSelected == 3)
		{

			//change location of 1st image to correct placement on screen
			third.setTop(215);
			third.setRight(115);

			Ti.API.info('You beat round 3!');
				
			// Set to move on to next round: 
			onRoundNumber = 4;
			gameWon();

		}
		else
		{
			//reset();
		}
	break;
}
}


function gameWon()
{						
	//------------------------------Game Logic----------------------------------------------------------
	
	//Check to see if player had won the round:
	if(onRoundNumber == 4)
	{	
		
		//increment score
		score++;

		//PLAYER WON:			
		Ti.API.info('You Won the game!!');
									
		//Label 'You Win!'
		youWinLabel.setText('You Win! Great Job!');
			
			roundsPerGameNumber++;
			roundsPerGameCheck();
								
	}	
			
}

function roundsPerGameCheck()
{
	if (roundsPerGameNumber == roundsPerGame)
	{
		youWinLabel.setText('All Rounds Completed!');
		Ti.API.info('Your Score: ');
		Ti.API.info(score);
					


	}
	else
	{

		reset();
			

	}

}

function reset()
{
		first.setTop(425);
		first.setLeft(125);
		
		second.setTop(425);
		second.setLeft(414);
		
		third.setTop(425);
		third.setRight(115);
		
		//youWinLabel.setText('');
		
		// stay on same round 
		onRoundNumber = 1;
		imageSelected = 0;
		placementSelected = 0;
	
}

