//Includes the .js files that the buttons on this screen will be navigating to.
Ti.include( 'gameInfoIPAD.js','gameInstrIPAD.js','playGameIPAD.js','linearIPAD.js','relativeIPAD.js');

/* IPAD
 * 
 * Game Menu Screen
 * 
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
var winIPAD = Ti.UI.createWindow
	({
		backgroundColor: '#333333'
	});
	winIPAD.orientationModes = [
							Ti.UI.LANDSCAPE_LEFT,
							Ti.UI.LANDSCAPE_RIGHT
							];



//Creates background image on main screen						
var background = Ti.UI.createImageView
	({
 		 image:'images/droidbg.png'
	});

	//Adds in the background image on main screen						
	winIPAD.add(background);


// Create an ImageView.
var topBanner = Ti.UI.createImageView
	({
		image : 'images/bannerpic.png',
		height:'auto',
		width:'auto',
		top : 25,
		left : 359
	});

	// Add to the parent view.
	winIPAD.add(topBanner);



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
winIPAD.add(step2Label);



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
winIPAD.add(field);




//Creates button for saving your username
var button = Ti.UI.createButton({
	color: '#000000',
	left:225,
	top:37,
	width:80,
	title:'Save'
});
	//Adds click functionality to the play game function 
	button.addEventListener('click', function(e)
	{
		userName = field.value;
		alert("Hello" + userName +"!");
	});
	//Adds save button to view
	winIPAD.add(button);


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
winIPAD.add(actions);

var adjustPositioning = 12;
var adjustPositioning2 = 9

//Label for 'Repeat Game:'
var basicPlayLabel = Ti.UI.createLabel({
	text:'Repeat Game:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:140,
	top:567+adjustPositioning2
});
//add label to window
winIPAD.add(basicPlayLabel);



//Label for 'Reward Screen:'
var rewardScreenLabel = Ti.UI.createLabel({
	text:'Reward Screen:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:140,
	top:647+adjustPositioning2
});
//add label to window
winIPAD.add(rewardScreenLabel);



//Label for 'Practice:'
var practiceLabel = Ti.UI.createLabel({
	text:'Practice:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:340,
	top:567+adjustPositioning2
});
//add label to window
winIPAD.add(practiceLabel);



//Label for 'Text:'
var textLabel = Ti.UI.createLabel({
	text:'Text:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:340,
	top:647+adjustPositioning2
});
//add label to window
winIPAD.add(textLabel);


//Label for 'Video:'
var videoLabel = Ti.UI.createLabel({
	text:'Video:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:540,
	top:647+adjustPositioning2
});
//add label to window
winIPAD.add(videoLabel);



//Label for 'Rounds per Game:'
var roundsperGameLabel = Ti.UI.createLabel({
	text:'Rounds per Game:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:540,
	top:567+adjustPositioning2
});
//add label to window
winIPAD.add(roundsperGameLabel);





//Creates button for Play Game
//When clicked - opens gamemenu file
var b1 = Ti.UI.createButton({
	color: '#000000',
	title:'Play Game',
	width:155,
	height:50,
	top:650+adjustPositioning,
	right:125
});
//Adds click functionality to the play game function 
b1.addEventListener('click', function()
{
	//opens up the game play menu
	playGameIPAD.open();
	//closes current/main window (without this they two windows open on top of each other)
	winIPAD.close();
});
//Adds game play button to view
winIPAD.add(b1);



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
	gameinstructionsIPAD.open();

	//closes current/main window (without this they two windows open on top of each other)
	winIPAD.close();

});
//Adds instructions button to view
winIPAD.add(b2);



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
	gameinformationIPAD.open();

	//closes current/main window (without this they two windows open on top of each other)
	winIPAD.close();

});
//Adds information button to view
winIPAD.add(b3);





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

	//for practice radio buttons
	var radioButtonPractice	= require('ui/CustomRadioButtonClasses/tiRadioButtonPRACTICE');

	//for rewards radio buttons
	var radioButtonRewards	= require('ui/CustomRadioButtonClasses/tiRadioButtonREWARDSCREEN');

	//for text radio buttons
	var radioButtonText	= require('ui/CustomRadioButtonClasses/tiRadioButtonTEXT');

	//for video radio buttons
	var radioButtonVideo = require('ui/CustomRadioButtonClasses/tiRadioButtonVIDEO');





		//Radio Button = Repeat Game
			var radioGroupRepeatGame = radioButtonRepeatGame.createGroup({
			groupId:1,
			width:126,
			height:64,
			layout:'horizontal',
			radioItemsValue:['One', 'Two'],
			radioItemsPadding:45,
			radioItemsBackgroundSelectedImage:'images/radioButtonActive.png',
			radioItemsBackgroundImage:'images/radioButton.png',
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
				top:592+adjustPositioning,
				left:181
				});
				var labelNoRepeatGame = Ti.UI.createLabel({
				text:'No', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:592+adjustPositioning,
				left:245
				});
				//add label to window
					winIPAD.add(radioGroupRepeatGame);
					winIPAD.add(labelYesRepeatGame);
					winIPAD.add(labelNoRepeatGame);

		//Radio Button = Rounds per Game
			var radioGroupRoundsPerGame = radioButtonRPG.createGroup({
			groupId:2,
			width:330,
			height:34,
			layout:'horizontal',
			radioItemsValue:['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven','Eight'],
			radioItemsPadding:23,
			radioItemsBackgroundSelectedImage:'images/radioButtonActive.png',
			radioItemsBackgroundImage:'images/radioButton.png',
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
				top:592+adjustPositioning,
				right:424
				});
				var labelRPG2 = Ti.UI.createLabel({
				text:'2', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592+adjustPositioning,
				right:381
				});
				var labelRPG3 = Ti.UI.createLabel({
				text:'3', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592+adjustPositioning,
				right:340
				});
				var labelRPG4 = Ti.UI.createLabel({
				text:'4', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592+adjustPositioning,
				right:301
				});
				var labelRPG5 = Ti.UI.createLabel({
				text:'5', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592+adjustPositioning,
				right:260
				});
				var labelRPG6 = Ti.UI.createLabel({
				text:'6', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592+adjustPositioning,
				right:217
				});
				var labelRPG7 = Ti.UI.createLabel({
				text:'7', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592+adjustPositioning,
				right:176
				});
				var labelRPG8 = Ti.UI.createLabel({
				text:'8', 
				color: '#000000',
				font:{fontSize:20},
				height:'auto',
				width:'auto',
				top:592+adjustPositioning,
				right:136
				});
				radioGroupRoundsPerGame.addEventListener('load', function() 
				{
					// console.log("MAIN selected id: ");
					// console.log(radioGroupRoundsPerGame.selectedValue);

				});
					winIPAD.add(radioGroupRoundsPerGame);
					winIPAD.add(labelRPG1);
					winIPAD.add(labelRPG2);
					winIPAD.add(labelRPG3);
					winIPAD.add(labelRPG4);
					winIPAD.add(labelRPG5);
					winIPAD.add(labelRPG6);
					winIPAD.add(labelRPG7);
					winIPAD.add(labelRPG8);



		//Radio Button = ACTIONS 
			var radioGroupActions = radioButtonActions.createGroup({
			groupId:3,
			width:34,
			height:260,
			layout:'vertical',
			radioItemsValue:['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven','Eight','Nine','Ten'],
			radioItemsPadding:7,
			radioItemsBackgroundSelectedImage:'images/radioButtonActive.png',
			radioItemsBackgroundImage:'images/radioButton.png',
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
					winIPAD.add(radioGroupActions);
					winIPAD.add(labelActionsSocks);
					winIPAD.add(labelActionsPaper);
					winIPAD.add(labelActionsDrink);
					winIPAD.add(labelActionsBlow);			
					winIPAD.add(labelActionsDot);
					winIPAD.add(labelActionsEating);			
					winIPAD.add(labelActionsCoat);
					winIPAD.add(labelActionsBlowing);			
					winIPAD.add(labelActionsMaking);
					winIPAD.add(labelActionsBlocks);

		//Radio Button = Text 
			var radioGroupText = radioButtonText.createGroup({
			groupId:4,
			width:126,
			height:64,
			layout:'horizontal',
			radioItemsValue:['Yes', 'No'],
			radioItemsPadding:45,
			radioItemsBackgroundSelectedImage:'images/radioButtonActive.png',
			radioItemsBackgroundImage:'images/radioButton.png',
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
				top:672+adjustPositioning,
				left:388
				});
				var labelNoText = Ti.UI.createLabel({
				text:'No', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:672+adjustPositioning,
				left:452
				});
					winIPAD.add(radioGroupText);
					winIPAD.add(labelYesText);
					winIPAD.add(labelNoText);


			//Radio Button = Video 
			var radioGroupVideo = radioButtonVideo.createGroup({
			groupId:5,
			width:126,
			height:64,
			layout:'horizontal',
			radioItemsValue:['Yes', 'No'],
			radioItemsPadding:45,
			radioItemsBackgroundSelectedImage:'images/radioButtonActive.png',
			radioItemsBackgroundImage:'images/radioButton.png',
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
				top:672+adjustPositioning,
				left:592
				});
				var labelNoVideo = Ti.UI.createLabel({
				text:'No', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:672+adjustPositioning,
				left:656
				});
					winIPAD.add(radioGroupVideo);
					winIPAD.add(labelYesVideo);
					winIPAD.add(labelNoVideo);


			//Radio Button = Rewards 
			var radioGroupRewards = radioButtonRewards.createGroup({
			groupId:6,
			width:126,
			height:64,
			layout:'horizontal',
			radioItemsValue:['Yes', 'No'],
			radioItemsPadding:45,
			radioItemsBackgroundSelectedImage:'images/radioButtonActive.png',
			radioItemsBackgroundImage:'images/radioButton.png',
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
				top:672+adjustPositioning,
				left:181
				});
				var labelNoReward = Ti.UI.createLabel({
				text:'No', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:672+adjustPositioning,
				left:245
				});
					winIPAD.add(radioGroupRewards);
					winIPAD.add(labelYesReward);
					winIPAD.add(labelNoReward);


			//Radio Button = Practice 
			var radioGroupPractice = radioButtonPractice.createGroup({
			groupId:7,
			width:126,
			height:64,
			layout:'horizontal',
			radioItemsValue:['Yes', 'No'],
			radioItemsPadding:45,
			radioItemsBackgroundSelectedImage:'images/radioButtonActive.png',
			radioItemsBackgroundImage:'images/radioButton.png',
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
				top:592+adjustPositioning,
				left:388
				});
				var labelNoPractice = Ti.UI.createLabel({
				text:'No', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:592+adjustPositioning,
				left:452
				});
					winIPAD.add(radioGroupPractice);
					winIPAD.add(labelYesPractice);
					winIPAD.add(labelNoPractice);







 	//opens up the main/current window in viewer
	winIPAD.open();
	
	//Default to Relative Time Display:
	winRelativeIPAD.open();


})();