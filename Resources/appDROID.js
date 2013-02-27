//Includes the .js files that the buttons on this screen will be navigating to.
Ti.include( 'gameinfoDROID.js','gameinstrDROID.js','playGameDROID.js','rewardAnimation.js','rewardVideo.js');


/* ANDROID
 * 
 * Game Menu Screen
 * 
 * Generates a window to display the pre-game playing
 * options. This page will allow users to customize 
 * their game play. The play game button is on this
 * page.
 * 
 * Author: Laura Seletos
 * Advisor: Dr. Branton
 *  
 */


//Creates the window and sets the orientation to landscape
var winDROID = Ti.UI.createWindow
	({
		backgroundColor: '#333333'
	});
	winDROID.orientationModes = [
							Ti.UI.LANDSCAPE_LEFT,
							Ti.UI.LANDSCAPE_RIGHT
							];
					
					
							
//Creates background image on main screen						
var background = Ti.UI.createImageView
	({
 		 image:'images/droidbg.png'
	});
	
	//Adds in the background image on main screen						
	winDROID.add(background);


// Create an ImageView.
var topBanner = Ti.UI.createImageView
	({
		image : 'images/bannerpic.png',
		height:'auto',
		width:'auto',
		top : 25,
		left : 365
	});

	// Add to the parent view.
	winDROID.add(topBanner);
														


//Label for 'Player's Name:'
var step2Label = Ti.UI.createLabel({
	text:'Player Name:', 
	color: '#FFFFFF',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	top:5,
	left:25

});
//add label to window
winDROID.add(step2Label);


		
// User Input for Username
var field = Ti.UI.createTextField({
	color: '#000000',
	top:35,
	left:20,
	bottom:5,
	width:200,
	height:40,
	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
//Adds username input to view
winDROID.add(field);




//Creates button for saving your username
var button = Ti.UI.createButton({
	color: '#000000',
	left:225,
	top:37,
	width:80,
	title:'Save'
});
//Adds save button to view
winDROID.add(button);


//Creates button for switching to Linear Time
var linearbutton = Ti.UI.createButton({
	color: '#000000',
	left:130,
	top:210,
	width:115,
	height:30,
	title:'Linear Time'
});
//Adds save button to view
winDROID.add(linearbutton);



//Creates button for switching to Relative Time
var relativebutton = Ti.UI.createButton({
	color: '#000000',
	left:255,
	top:210,
	width:115,
	height:30,
	title:'Relative Time'
});
//Adds save button to view
winDROID.add(relativebutton);



//Creates button for switching to advanced options button
var advancedButton = Ti.UI.createButton({
	color: '#000000',
	left:470,
	top:480,
	width:165,
	height:30,
	title:'Advanced Options'
});
//Adds save button to view
winDROID.add(advancedButton);



//Label for 'Actions:'
var actions = Ti.UI.createLabel({
	text:'Actions:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	right:245,
	top:257
});
//add label to window
winDROID.add(actions);



//Label for 'A video shows...'
var middleText1 = Ti.UI.createLabel({
	text:'A video shows an action. The action is divided into 3 Steps. The', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:155,
	top:300
});
//add label to window
winDROID.add(middleText1);


//Label for 'middle step is...'
var middleText2 = Ti.UI.createLabel({
	text:'middle step is placed on the screen and the player is asked to tell', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:155,
	top:320
});
//add label to window
winDROID.add(middleText2);


//Label for 'what occured before...'
var middleText3 = Ti.UI.createLabel({
	text:'what occured before and after that step.', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:155,
	top:340
});
//add label to window
winDROID.add(middleText3);


//Label for 'basic play'
var basicPlayLabel = Ti.UI.createLabel({
	text:'Basic Play:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:155,
	top:380
});
//add label to window
winDROID.add(basicPlayLabel);


//Label for 'Step 1: before'
var step1Label = Ti.UI.createLabel({
	text:'Step 1: before', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:475,
	top:400
});
//add label to window
winDROID.add(step1Label);


//Label for 'Step 2: now'
var step2Label = Ti.UI.createLabel({
	text:'Step 2: now', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:475,
	top:420
});
//add label to window
winDROID.add(step2Label);


//Label for 'Step 3: to finish'
var step3Label = Ti.UI.createLabel({
	text:'Step 3: to finish', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:475,
	top:440
});
//add label to window
winDROID.add(step3Label);


//Label for 'Repeat Game:'
var basicPlayLabel = Ti.UI.createLabel({
	text:'Repeat Game:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:140,
	top:567
});
//add label to window
winDROID.add(basicPlayLabel);



//Label for 'Reward Screen:'
var rewardScreenLabel = Ti.UI.createLabel({
	text:'Reward Screen:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:140,
	top:647
});
//add label to window
winDROID.add(rewardScreenLabel);



//Label for 'Practice:'
var practiceLabel = Ti.UI.createLabel({
	text:'Practice:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:340,
	top:567
});
//add label to window
winDROID.add(practiceLabel);



//Label for 'Text:'
var textLabel = Ti.UI.createLabel({
	text:'Text:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:340,
	top:647
});
//add label to window
winDROID.add(textLabel);


//Label for 'Video:'
var videoLabel = Ti.UI.createLabel({
	text:'Video:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:540,
	top:647
});
//add label to window
winDROID.add(videoLabel);



//Label for 'Rounds per Game:'
var roundsperGameLabel = Ti.UI.createLabel({
	text:'Rounds per Game:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:540,
	top:567
});
//add label to window
winDROID.add(roundsperGameLabel);





//Creates button for Play Game
//When clicked - opens gamemenu file
var b1 = Ti.UI.createButton({
	color: '#000000',
	title:'Play Game',
	width:155,
	height:50,
	top:650,
	right:125
});
//Adds click functionality to the play game function 
b1.addEventListener('click', function()
{
	//opens up the game play menu
	playGameDROID.open();
	//closes current/main window (without this they two windows open on top of each other)
	winDROID.close();
});
//Adds game play button to view
winDROID.add(b1);



//Creates button for viewing the instructions 
var b2 = Ti.UI.createButton({
	color: '#000000',
	title:'View Instructions',
	width:180,
	height:40,
	top:25,
	right:15
});
//Adds click functionality to the play game function 
b2.addEventListener('click', function()
{
	//opens up the game instructions 
	gameinstructionsDROID.open();
	
	//closes current/main window (without this they two windows open on top of each other)
	winDROID.close();

});
//Adds instructions button to view
winDROID.add(b2);



//Creates game information page
var b3 = Ti.UI.createButton({
	color: '#000000',
	title:'View Game Information',
	width:180,
	height:40,
	top:75,
	right:15
});
//Adds click functionality to the game information button
b3.addEventListener('click', function()
{
	//opens up the game information 
	gameinformationDROID.open();
	
	//closes current/main window (without this they two windows open on top of each other)
	winDROID.close();

});
//Adds information button to view
winDROID.add(b3);



			//Labels
				var labelYesRepeatGame = Ti.UI.createLabel({
				text:'Yes', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:592,
				left:181
				});
				var labelNoRepeatGame = Ti.UI.createLabel({
				text:'No', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:592,
				left:245
				});
				//add label to window
					winDROID.add(labelYesRepeatGame);
					winDROID.add(labelNoRepeatGame);


			//Labels
				var labelRPG1 = Ti.UI.createLabel({
				text:'1', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592,
				right:424
				});
				var labelRPG2 = Ti.UI.createLabel({
				text:'2', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592,
				right:381
				});
				var labelRPG3 = Ti.UI.createLabel({
				text:'3', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592,
				right:340
				});
				var labelRPG4 = Ti.UI.createLabel({
				text:'4', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592,
				right:301
				});
				var labelRPG5 = Ti.UI.createLabel({
				text:'5', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592,
				right:260
				});
				var labelRPG6 = Ti.UI.createLabel({
				text:'6', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592,
				right:217
				});
				var labelRPG7 = Ti.UI.createLabel({
				text:'7', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592,
				right:176
				});
				var labelRPG8 = Ti.UI.createLabel({
				text:'8', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592,
				right:136
				});
					winDROID.add(labelRPG1);
					winDROID.add(labelRPG2);
					winDROID.add(labelRPG3);
					winDROID.add(labelRPG4);
					winDROID.add(labelRPG5);
					winDROID.add(labelRPG6);
					winDROID.add(labelRPG7);
					winDROID.add(labelRPG8);




			//Labels
				var labelActionsSocks = Ti.UI.createLabel({
				text:'Putting on socks', 
				color: '#000000',
				font:{fontSize:18},
				height:'auto',
				width:'auto',
				top:283,
				left:744
				});
				var labelActionsPaper = Ti.UI.createLabel({
				text:'Cutting paper', 
				color: '#000000',
				font:{fontSize:18},
				height:'auto',
				width:'auto',
				top:309,
				left:744
				});
				var labelActionsDrink = Ti.UI.createLabel({
				text:'Drinking', 
				color: '#000000',
				font:{fontSize:18},
				height:'auto',
				width:'auto',
				top:335,
				left:744
				});
				var labelActionsBlow = Ti.UI.createLabel({
				text:'Blow up a balloon', 
				color: '#000000',
				font:{fontSize:18},
				height:'auto',
				width:'auto',
				top:361,
				left:744
				});
				var labelActionsDot = Ti.UI.createLabel({
				text:'Dot-to-dot', 
				color: '#000000',
				font:{fontSize:18},
				height:'auto',
				width:'auto',
				top:387,
				left:744
				});
				var labelActionsEating = Ti.UI.createLabel({
				text:'Eating a bannana', 
				color: '#000000',
				font:{fontSize:18},
				height:'auto',
				width:'auto',
				top:413,
				left:744
				});
				var labelActionsCoat = Ti.UI.createLabel({
				text:'Putting on a coat', 
				color: '#000000',
				font:{fontSize:18},
				height:'auto',
				width:'auto',
				top:439,
				left:744
				});
				var labelActionsBlowing = Ti.UI.createLabel({
				text:'Blowing bubbles', 
				color: '#000000',
				font:{fontSize:18},
				height:'auto',
				width:'auto',
				top:465,
				left:744
				});
				var labelActionsMaking = Ti.UI.createLabel({
				text:'Making a sandwich', 
				color: '#000000',
				font:{fontSize:18},
				height:'auto',
				width:'auto',
				top:491,
				left:744
				});
				var labelActionsBlocks = Ti.UI.createLabel({
				text:'Using blocks', 
				color: '#000000',
				font:{fontSize:18},
				height:'auto',
				width:'auto',
				top:517,
				left:744
				});
					winDROID.add(labelActionsSocks);
					winDROID.add(labelActionsPaper);
					winDROID.add(labelActionsDrink);
					winDROID.add(labelActionsBlow);			
					winDROID.add(labelActionsDot);
					winDROID.add(labelActionsEating);			
					winDROID.add(labelActionsCoat);
					winDROID.add(labelActionsBlowing);			
					winDROID.add(labelActionsMaking);
					winDROID.add(labelActionsBlocks);

			//Labels
				var labelYesText = Ti.UI.createLabel({
				text:'Yes', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:672,
				left:388
				});
				var labelNoText = Ti.UI.createLabel({
				text:'No', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:672,
				left:452
				});
					winDROID.add(labelYesText);
					winDROID.add(labelNoText);
			

			//Labels
				var labelYesVideo = Ti.UI.createLabel({
				text:'Yes', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:672,
				left:592
				});
				var labelNoVideo = Ti.UI.createLabel({
				text:'No', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:672,
				left:656
				});
					winDROID.add(labelYesVideo);
					winDROID.add(labelNoVideo);
			

			//Labels
				var labelYesReward = Ti.UI.createLabel({
				text:'Yes', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:672,
				left:181
				});
				var labelNoReward = Ti.UI.createLabel({
				text:'No', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:672,
				left:245
				});
					winDROID.add(labelYesReward);
					winDROID.add(labelNoReward);
			
			

			//Labels
				var labelYesPractice = Ti.UI.createLabel({
				text:'Yes', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:592,
				left:388
				});
				var labelNoPractice = Ti.UI.createLabel({
				text:'No', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:592,
				left:452
				});
					winDROID.add(labelYesPractice);
					winDROID.add(labelNoPractice);
			
			

			//Labels
				var labelYesBeforeEarlier = Ti.UI.createLabel({
				text:'before/after', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				left:181,
				top:406
				});
				var labelNoBeforeEarlier = Ti.UI.createLabel({
				text:'earlier/later', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				left:181,
				top:440
				});
					winDROID.add(labelYesBeforeEarlier);
					winDROID.add(labelNoBeforeEarlier);
	
	

			//Labels
				var labelAdvanced = Ti.UI.createLabel({
				text:'Advanced', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				left:496,
				top:376,
				});
					winDROID.add(labelAdvanced);
				
	//opens up the main/current window in viewer
	winDROID.open();

				

	topBanner.setTop(25);
	topBanner.setLeft(370);
	
	button.setTop(37);
	button.setLeft(225);
	
	
	linearbutton.setTop(210);
	topBanner.setLeft(130);
	
	relativebutton.setTop(210);
	topBanner.setLeft(255);
	
	
	advancedButton.setTop(480);
	topBanner.setLeft(470);
	
	actions.setTop(257);
	topBanner.setRight(245);
	
	
	middleText1.setTop(300);
	topBanner.setLeft(155);
	
	
	middleText2.setTop(320);
	topBanner.setLeft(155);
	
	
	middleText3.setTop(340); 
	topBanner.setLeft(155);
	
	
	basicPlayLabel.setTop(380); 
	topBanner.setLeft(155);

// 
// 
// 
// step1Label.setTop(25); 
	// left:475,
	// top:400
// 
// 
// step2Label.setTop(25);
	// left:475,
	// top:420
// 
// 
// step3Label.setTop(25);
	// left:475,
	// top:440
// 
// 
// basicPlayLabel.setTop(25); 
	// left:140,
	// top:567
// 
// 
// rewardScreenLabel.setTop(25);
	// left:140,
	// top:647
// 
// 
// practiceLabel.setTop(25); 
	// left:340,
	// top:567
// 
// 
// textLabel.setTop(25);
	// left:340,
	// top:647
// 
// 
// videoLabel.setTop(25);
	// left:540,
	// top:647
// 
// 
// roundsperGameLabel.setTop(25);
	// left:540,
	// top:567
// 
// 
// b1.setTop(25);  
// title:'Play Game',
	// top:650,
	// right:125
// 
// 
// b2.setTop(25);
 // = 'View Instructions',
	// top:25,
	// right:15
// 
// b3.setTop(25);
 // =   'View Game Information',
	// top:75,
	// right:15
// 
// 
// labelYesRepeatGame.setTop(25); 
				// top:592,
				// left:181
// 				
// labelNoRepeatGame.setTop(25); 
		// top:592,
		// left:245
// 
// 	
// 
			// //Labels
				// var labelRPG1 = Ti.UI.createLabel({
				// text:'1', 
				// color: '#000000',
				// font:{fontSize:20},
				// height:'auto',
				// width:'auto',
				// top:592,
				// right:424
				// });
				// var labelRPG2 = Ti.UI.createLabel({
				// text:'2', 
				// color: '#000000',
				// font:{fontSize:20},
				// height:'auto',
				// width:'auto',
				// top:592,
				// right:381
				// });
				// var labelRPG3 = Ti.UI.createLabel({
				// text:'3', 
				// color: '#000000',
				// font:{fontSize:20},
				// height:'auto',
				// width:'auto',
				// top:592,
				// right:340
				// });
				// var labelRPG4 = Ti.UI.createLabel({
				// text:'4', 
				// color: '#000000',
				// font:{fontSize:20},
				// height:'auto',
				// width:'auto',
				// top:592,
				// right:301
				// });
				// var labelRPG5 = Ti.UI.createLabel({
				// text:'5', 
				// color: '#000000',
				// font:{fontSize:20},
				// height:'auto',
				// width:'auto',
				// top:592,
				// right:260
				// });
				// var labelRPG6 = Ti.UI.createLabel({
				// text:'6', 
				// color: '#000000',
				// font:{fontSize:20},
				// height:'auto',
				// width:'auto',
				// top:592,
				// right:217
				// });
				// var labelRPG7 = Ti.UI.createLabel({
				// text:'7', 
				// color: '#000000',
				// font:{fontSize:20},
				// height:'auto',
				// width:'auto',
				// top:592,
				// right:176
				// });
				// var labelRPG8 = Ti.UI.createLabel({
				// text:'8', 
				// color: '#000000',
				// font:{fontSize:20},
				// height:'auto',
				// width:'auto',
				// top:592,
				// right:136
				// });
// 
// 
// 
// labelActionsSocks.setTop(25);
				// top:283,
				// left:744
// labelActionsPaper.setTop(25);
				// top:309,
				// left:744
// 				
// labelActionsDrink.setTop(25);
				// top:335,
				// left:744
// 
// labelActionsBlow.setTop(25); 
				// top:361,
				// left:744
// 
// labelActionsDot.setTop(25); 
				// top:387,
				// left:744
// 			
// 		
// labelActionsEating.setTop(25); 
				// top:413,
				// left:744
// 				
// labelActionsCoat.setTop(25); 
				// top:439,
				// left:744
// 
// labelActionsBlowing.setTop(25); 
				// top:465,
				// left:744 
// 
// labelActionsMaking.setTop(25);
				// top:491,
				// left:744
// 
// labelActionsBlocks.setTop(25); 
				// top:517,
				// left:744
// 				
// 
// labelYesText.setTop(25); 
				// top:672,
				// left:388
// 				
// labelNoText.setTop(25);
				// top:672,
				// left:452
// 
// 
// labelYesVideo.setTop(25);
				// top:672,
				// left:592
// 				
// labelNoVideo.setTop(25); 
				// top:672,
				// left:656
// 
// 	
// labelYesReward.setTop(25); 
				// top:672,
				// left:181
// labelNoReward.setTop(25); 
				// top:672,
				// left:245
// 			
// 
// labelYesPractice.setTop(25); 
				// top:592,
				// left:388
// 
// labelNoPractice.setTop(25); 
				// top:592,
				// left:452
// 			
// 
// labelYesBeforeEarlier.setTop(25); 
				// left:181,
				// top:406
// labelNoBeforeEarlier.setTop(25); 
				// left:181,
				// top:440
// 		
// 	
// labelAdvanced.setTop(25);
				// left:496,
				// top:376,



	//Creates button for Play Game
	//When clicked - opens gamemenu file
	var rewardA = Ti.UI.createButton({
		color: '#000000',
		title:'Play Animated Image Array',
		width:230,
		height:50,
		top:100,
		right:100
	});
	//Adds click functionality to the play game function 
	rewardA.addEventListener('click', function()
	{
		//opens up the game play menu
		rewardWin.open();
		//closes current/main window (without this they two windows open on top of each other)
		winDROID.close();
	});
	//Adds game play button to view
	winDROID.add(rewardA);
	
	
	//Creates button for Play Game
	//When clicked - opens gamemenu file
	var rewardB = Ti.UI.createButton({
		color: '#000000',
		title:'Play Video',
		width:155,
		height:50,
		top:20,
		right:125
	});
	//Adds click functionality to the play game function 
	rewardB.addEventListener('click', function()
	{
		//opens up the game play menu
		rewardVideoWin.open();
		//closes current/main window (without this they two windows open on top of each other)
		winDROID.close();
	});
	//Adds game play button to view
	winDROID.add(rewardB);





