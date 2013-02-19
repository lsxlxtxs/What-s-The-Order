//Includes the .js files that the buttons on this screen will be navigating to.
Ti.include( 'gameinformation.js','gameinstructions.js','gamemenu.js');

/* Main Splash Screen
 * 
 * Senior Project
 * Cross Platform 
 * Appcelerator
 * Do2Learn.com web application ported on to the iPad and Android tablets
 * 
 * Author: Laura Seletos
 * Advisor: Dr. Branton
 *  
 */

/* Game Menu Screen
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

var isButtonClicked = '';

//Creates the window and sets the orientation to landscape
var win = Ti.UI.createWindow
	({
		backgroundColor: '#333333'
	});
	win.orientationModes = [
							Ti.UI.LANDSCAPE_LEFT,
							Ti.UI.LANDSCAPE_RIGHT
							];
					
					
							
//Creates background image on main screen						
var background = Ti.UI.createImageView
	({
 		 image:'droidbg.png'
	});
	
	//Adds in the background image on main screen						
	win.add(background);


// Create an ImageView.
var topBanner = Ti.UI.createImageView
	({
		image : 'bannerpic.png',
		height:'auto',
		width:'auto',
		top : 25,
		left : 359
	});

	// Add to the parent view.
	win.add(topBanner);
														


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
win.add(step2Label);


		
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
win.add(field);




//Creates button for saving your username
var button = Ti.UI.createButton({
	color: '#000000',
	left:225,
	top:37,
	width:80,
	title:'Save'
});
//Adds save button to view
win.add(button);


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
win.add(linearbutton);



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
win.add(relativebutton);



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
win.add(advancedButton);



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
win.add(actions);



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
win.add(middleText1);


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
win.add(middleText2);


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
win.add(middleText3);


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
win.add(basicPlayLabel);


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
win.add(step1Label);


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
win.add(step2Label);


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
win.add(step3Label);


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
win.add(basicPlayLabel);



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
win.add(rewardScreenLabel);



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
win.add(practiceLabel);



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
win.add(textLabel);


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
win.add(videoLabel);



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
win.add(roundsperGameLabel);


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
	gamemenu.open();
	//closes current/main window (without this they two windows open on top of each other)
	win.close();
});
//Adds game play button to view
win.add(b1);



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
	gameinstructions.open();
	
	//closes current/main window (without this they two windows open on top of each other)
	win.close();

});
//Adds instructions button to view
win.add(b2);



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
	gameinformation.open();
	
	//closes current/main window (without this they two windows open on top of each other)
	win.close();

});
//Adds information button to view
win.add(b3);





//Add in custom radio buttons
//Adapted from tutorial
//Source at: https://github.com/Lukic/TiRadioButtonGroup
(function() {
		
	//for repeat radio buttons
	var radioButtonRepeatGame = require('ui/CustomRadioButtonClasses/tiRadioButtonREPEATGAME');
	
	//for actions radio buttons
	var radioButtonActions	= require('ui/CustomRadioButtonClasses/tiRadioButtonVerdicalACTIONS');
	
	//for rounds per game radio buttons
	var radioButtonRPG	= require('ui/CustomRadioButtonClasses/tiRadioButtonRPG');
	
	//for before/earlier radio buttons
	var radioButtonBeforeEarlier = require('ui/CustomRadioButtonClasses/tiRadioButtonBEFOREEARLIER');
	
	//for practice radio buttons
	var radioButtonPractice	= require('ui/CustomRadioButtonClasses/tiRadioButtonPRACTICE');
	
	//for rewards radio buttons
	var radioButtonRewards	= require('ui/CustomRadioButtonClasses/tiRadioButtonREWARDSCREEN');
	
	//for text radio buttons
	var radioButtonText	= require('ui/CustomRadioButtonClasses/tiRadioButtonTEXT');
	
	//for video radio buttons
	var radioButtonVideo = require('ui/CustomRadioButtonClasses/tiRadioButtonVIDEO');
	
	//for Advanced radio buttons
	var radioButtonAdvanced = require('ui/CustomRadioButtonClasses/tiRadioButtonAdvanced');





		//Radio Button = Repeat Game
			var radioGroupRepeatGame = radioButtonRepeatGame.createGroup({
			groupId:1,
			width:126,
			height:64,
			layout:'horizontal',
			radioItemsValue:['One', 'Two'],
			radioItemsPadding:45,
			radioItemsBackgroundSelectedImage:'radioButtonActive.png',
			radioItemsBackgroundImage:'radioButton.png',
			radioItemsWidth:18,
			radioItemsHeight:19
			});
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
					win.add(radioGroupRepeatGame);
					win.add(labelYesRepeatGame);
					win.add(labelNoRepeatGame);
	
		//Radio Button = Rounds per Game
			var radioGroupRoundsPerGame = radioButtonRPG.createGroup({
			groupId:2,
			width:330,
			height:34,
			layout:'horizontal',
			radioItemsValue:['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven','Eight'],
			radioItemsPadding:23,
			radioItemsBackgroundSelectedImage:'radioButtonActive.png',
			radioItemsBackgroundImage:'radioButton.png',
			radioItemsWidth:18,
			radioItemsHeight:19
			});
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
				radioGroupRoundsPerGame.addEventListener('load', function() 
				{
					// console.log("MAIN selected id: ");
					// console.log(radioGroupRoundsPerGame.selectedValue);

				});
					win.add(radioGroupRoundsPerGame);
					win.add(labelRPG1);
					win.add(labelRPG2);
					win.add(labelRPG3);
					win.add(labelRPG4);
					win.add(labelRPG5);
					win.add(labelRPG6);
					win.add(labelRPG7);
					win.add(labelRPG8);



		//Radio Button = ACTIONS 
			var radioGroupActions = radioButtonActions.createGroup({
			groupId:3,
			width:34,
			height:260,
			layout:'vertical',
			radioItemsValue:['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven','Eight','Nine','Ten'],
			radioItemsPadding:7,
			radioItemsBackgroundSelectedImage:'radioButtonActive.png',
			radioItemsBackgroundImage:'radioButton.png',
			radioItemsWidth:18,
			radioItemsHeight:19
			});	
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
					win.add(radioGroupActions);
					win.add(labelActionsSocks);
					win.add(labelActionsPaper);
					win.add(labelActionsDrink);
					win.add(labelActionsBlow);			
					win.add(labelActionsDot);
					win.add(labelActionsEating);			
					win.add(labelActionsCoat);
					win.add(labelActionsBlowing);			
					win.add(labelActionsMaking);
					win.add(labelActionsBlocks);

		//Radio Button = Text 
			var radioGroupText = radioButtonText.createGroup({
			groupId:4,
			width:126,
			height:64,
			layout:'horizontal',
			radioItemsValue:['Yes', 'No'],
			radioItemsPadding:45,
			radioItemsBackgroundSelectedImage:'radioButtonActive.png',
			radioItemsBackgroundImage:'radioButton.png',
			radioItemsWidth:18,
			radioItemsHeight:19
			});	
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
					win.add(radioGroupText);
					win.add(labelYesText);
					win.add(labelNoText);
			
			
			//Radio Button = Video 
			var radioGroupVideo = radioButtonVideo.createGroup({
			groupId:5,
			width:126,
			height:64,
			layout:'horizontal',
			radioItemsValue:['Yes', 'No'],
			radioItemsPadding:45,
			radioItemsBackgroundSelectedImage:'radioButtonActive.png',
			radioItemsBackgroundImage:'radioButton.png',
			radioItemsWidth:18,
			radioItemsHeight:19
			});	
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
					win.add(radioGroupVideo);
					win.add(labelYesVideo);
					win.add(labelNoVideo);
			
			
			//Radio Button = Rewards 
			var radioGroupRewards = radioButtonRewards.createGroup({
			groupId:6,
			width:126,
			height:64,
			layout:'horizontal',
			radioItemsValue:['Yes', 'No'],
			radioItemsPadding:45,
			radioItemsBackgroundSelectedImage:'radioButtonActive.png',
			radioItemsBackgroundImage:'radioButton.png',
			radioItemsWidth:18,
			radioItemsHeight:19
			});	
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
					win.add(radioGroupRewards);
					win.add(labelYesReward);
					win.add(labelNoReward);
			
			
			//Radio Button = Practice 
			var radioGroupPractice = radioButtonPractice.createGroup({
			groupId:7,
			width:126,
			height:64,
			layout:'horizontal',
			radioItemsValue:['Yes', 'No'],
			radioItemsPadding:45,
			radioItemsBackgroundSelectedImage:'radioButtonActive.png',
			radioItemsBackgroundImage:'radioButton.png',
			radioItemsWidth:18,
			radioItemsHeight:19
			});	
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
					win.add(radioGroupPractice);
					win.add(labelYesPractice);
					win.add(labelNoPractice);
			
			
			//Radio Button = Before & Earlier 
			var radioGroupBeforeEarlier = radioButtonBeforeEarlier.createGroup({
			groupId:8,
			width:20,
			height:83,
			layout:'vertical',
			radioItemsValue:['Before', 'Earlier'],
			radioItemsPadding:15,
			radioItemsBackgroundSelectedImage:'radioButtonActive.png',
			radioItemsBackgroundImage:'radioButton.png',
			radioItemsWidth:18,
			radioItemsHeight:19
			});	
			radioGroupBeforeEarlier.addEventListener('load', function() 
			{

			});
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
					win.add(radioGroupBeforeEarlier);
					win.add(labelYesBeforeEarlier);
					win.add(labelNoBeforeEarlier);
	
	
	

				//Radio Button = Advanced
			var radioGroupAdvanced = radioButtonAdvanced.createGroup({
			groupId:9,
			width:20,
			height:83,
			layout:'vertical',
			radioItemsValue:['On'],
			radioItemsPadding:15,
			radioItemsBackgroundSelectedImage:'radioButtonActive.png',
			radioItemsBackgroundImage:'radioButton.png',
			radioItemsWidth:18,
			radioItemsHeight:19
			});	
			radioGroupAdvanced.addEventListener('load', function() 
			{

			});
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
					win.add(radioGroupAdvanced);
					win.add(labelAdvanced);
						
					
 	//opens up the main/current window in viewer
	win.open();

})();



