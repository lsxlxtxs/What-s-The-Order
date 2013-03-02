//Includes the .js files that the buttons on this screen will be navigating to.
Ti.include( 'gameInfoDROID.js','gameInstrDROID.js','playGameDROID.js','linearDroid.js','relativeDroid.js');



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

//Save username in a variable
var userName = "";

//Creates the window and sets the orientation to landscape
var winDROID = Ti.UI.createWindow
	({
		backgroundColor: '#333333',
		tabBarHidden: true
	});
	winDROID.orientationModes = [
							Ti.UI.LANDSCAPE_LEFT,
							Ti.UI.LANDSCAPE_RIGHT
							];
					
					
var adjustPosition = 90;
			
//Creates background image on main screen						
var background = Ti.UI.createImageView
	({
 		 image:'images/droidbg.png'
	});
	
	//Adds in the background image on main screen						
	winDROID.add(background);


// Create an ImageView.
var topBannerA = Ti.UI.createImageView
	({
		image : 'images/bannerpic.png',
		height:'auto',
		width:'auto',
		top : 25,
		left : 489
	});

	// Add to the parent view.
	winDROID.add(topBannerA);
														


//Label for 'Player's Name:'
var step2LabelA = Ti.UI.createLabel({
	text:'Player Name:', 
	color: '#FFFFFF',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	top:5,
	left:25

});
//add label to window
winDROID.add(step2LabelA);


		
// User Input for Username
var fieldA = Ti.UI.createTextField({
	color: '#000000',
	top:35,
	left:20,
	bottom:5,
	width:200,
	height:50,
	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
//Adds username input to view
winDROID.add(fieldA);




//Creates button for saving your username
var buttonA = Ti.UI.createButton({
	color: '#000000',
	left:225,
	top:35,
	width:80,
	height:50,
	title:'Save'
});
	//Adds click functionality to the play game function 
	buttonA.addEventListener('click', function(e)
	{
		userName = field.value;
		alert(userName);
	});
	//Adds save button to view
	winDROID.add(buttonA);




//Label for 'Actions:'
var actionsA = Ti.UI.createLabel({
	text:'Actions:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	right:245 + adjustPosition,
	top:257
});
//add label to window
winDROID.add(actionsA);



var adjustDroid2 = 25;

//Label for 'Repeat Game:'
var basicPlayLabelA = Ti.UI.createLabel({
	text:'Repeat Game:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:140 + adjustPosition + adjustDroid2,
	top:567
});
//add label to window
winDROID.add(basicPlayLabelA);



//Label for 'Reward Screen:'
var rewardScreenLabelA = Ti.UI.createLabel({
	text:'Reward Screen:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:140 + adjustPosition + adjustDroid2,
	top:647
});
//add label to window
winDROID.add(rewardScreenLabelA);



//Label for 'Practice:'
var practiceLabel = Ti.UI.createLabel({
	text:'Practice:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:349 + adjustPosition + adjustDroid2,
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
	left:349 + adjustPosition + adjustDroid2,
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
	left:549 + adjustPosition + adjustDroid2,
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
	left:549 + adjustPosition + adjustDroid2,
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
	height:65,
	top:660,
	right:150 + adjustPosition
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
	right:15 + adjustPosition
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
	right:15 + adjustPosition
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
				left:181 + adjustPosition + adjustDroid2
				});
				var labelNoRepeatGame = Ti.UI.createLabel({
				text:'No', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:592,
				left:245 + adjustPosition + adjustDroid2
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
				right:424 + adjustPosition + adjustDroid2
				});
				var labelRPG2 = Ti.UI.createLabel({
				text:'2', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592,
				right:381 + adjustPosition + adjustDroid2
				});
				var labelRPG3 = Ti.UI.createLabel({
				text:'3', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592,
				right:340 + adjustPosition + adjustDroid2
				});
				var labelRPG4 = Ti.UI.createLabel({
				text:'4', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592,
				right:301 + adjustPosition + adjustDroid2
				});
				var labelRPG5 = Ti.UI.createLabel({
				text:'5', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592,
				right:260 + adjustPosition + adjustDroid2
				});
				var labelRPG6 = Ti.UI.createLabel({
				text:'6', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592,
				right:217 + adjustPosition + adjustDroid2
				});
				var labelRPG7 = Ti.UI.createLabel({
				text:'7', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592,
				right:176 + adjustPosition + adjustDroid2
				});
				var labelRPG8 = Ti.UI.createLabel({
				text:'8', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592,
				right:136 + adjustPosition + adjustDroid2
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
				left:744 + adjustPosition + adjustDroid2
				});
				var labelActionsPaper = Ti.UI.createLabel({
				text:'Cutting paper', 
				color: '#000000',
				font:{fontSize:18},
				height:'auto',
				width:'auto',
				top:309,
				left:744 + adjustPosition + adjustDroid2
				});
				var labelActionsDrink = Ti.UI.createLabel({
				text:'Drinking', 
				color: '#000000',
				font:{fontSize:18},
				height:'auto',
				width:'auto',
				top:335,
				left:744 + adjustPosition + adjustDroid2
				});
				var labelActionsBlow = Ti.UI.createLabel({
				text:'Blow up a balloon', 
				color: '#000000',
				font:{fontSize:18},
				height:'auto',
				width:'auto',
				top:361,
				left:744 + adjustPosition + adjustDroid2
				});
				var labelActionsDot = Ti.UI.createLabel({
				text:'Dot-to-dot', 
				color: '#000000',
				font:{fontSize:18},
				height:'auto',
				width:'auto',
				top:387,
				left:744 + adjustPosition + adjustDroid2
				});
				var labelActionsEating = Ti.UI.createLabel({
				text:'Eating a bannana', 
				color: '#000000',
				font:{fontSize:18},
				height:'auto',
				width:'auto',
				top:413,
				left:744 + adjustPosition + adjustDroid2
				});
				var labelActionsCoat = Ti.UI.createLabel({
				text:'Putting on a coat', 
				color: '#000000',
				font:{fontSize:18},
				height:'auto',
				width:'auto',
				top:439,
				left:744 + adjustPosition + adjustDroid2
				});
				var labelActionsBlowing = Ti.UI.createLabel({
				text:'Blowing bubbles', 
				color: '#000000',
				font:{fontSize:18},
				height:'auto',
				width:'auto',
				top:465,
				left:744 + adjustPosition + adjustDroid2
				});
				var labelActionsMaking = Ti.UI.createLabel({
				text:'Making a sandwich', 
				color: '#000000',
				font:{fontSize:18},
				height:'auto',
				width:'auto',
				top:491,
				left:744 + adjustPosition + adjustDroid2
				});
				var labelActionsBlocks = Ti.UI.createLabel({
				text:'Using blocks', 
				color: '#000000',
				font:{fontSize:18},
				height:'auto',
				width:'auto',
				top:517,
				left:744 + adjustPosition + adjustDroid2
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
				left:388 + adjustPosition + adjustDroid2
				});
				var labelNoText = Ti.UI.createLabel({
				text:'No', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:672,
				left:452 + adjustPosition + adjustDroid2
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
				left:592 + adjustPosition + adjustDroid2
				});
				var labelNoVideo = Ti.UI.createLabel({
				text:'No', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:672,
				left:656 + adjustPosition + adjustDroid2
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
				left:181 + adjustPosition + adjustDroid2
				});
				var labelNoReward = Ti.UI.createLabel({
				text:'No', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:672,
				left:245 + adjustPosition + adjustDroid2
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
				left:388 + adjustPosition + adjustDroid2
				});
				var labelNoPractice = Ti.UI.createLabel({
				text:'No', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:592,
				left:452 + adjustPosition + adjustDroid2
				});
					winDROID.add(labelYesPractice);
					winDROID.add(labelNoPractice);
	
	//opens up the main/current window in viewer
	winDROID.open();
	//Default to Relative Time Display:
	winRelativeDroid.open();


