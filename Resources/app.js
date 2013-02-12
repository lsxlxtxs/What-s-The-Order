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
	topBanner.addEventListener('load', function() {
	Ti.API.info('Image loaded!');
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

//opens up the main/current window in viewer
win.open();






//Add in custom radio buttons
//Adapted from tutorial
//Source at: https://github.com/Lukic/TiRadioButtonGroup
(function() {
		
	//for horizontal buttons
	var radioButtonRepeatGame = require('ui/tiRadioButtonREPEATGAME');
	
	//for verdical buttons
	var radioButtonActions	= require('ui/tiRadioButtonVerdicalACTIONS');
	
	//for verdical buttons
	var radioButtonRPG	= require('ui/tiRadioButtonRPG');

		

		//Radio Button = Repeat Game
			var radioGroupRepeatGame = radioButtonRepeatGame.createGroup({
			groupId:1,
			width:700,
			height:800,
			layout:'horizontal',
			radioItemsValue:['One', 'Two'],
			radioItemsPadding:35,
			radioItemsBackgroundSelectedImage:'radioButtonActive.png',
			radioItemsBackgroundImage:'radioButton.png',
			radioItemsWidth:23,
			radioItemsHeight:24
			});
			var textRepeatGameYes = Ti.UI.createLabel({
			text:'Yes',
			color:'#fff',
			font:{fontSize:20,fontWeight:'Bold'},
			shadowColor:'#000',
			shadowOffset:{x:1,y:1},
			top:10,
			textAlign:'center'
			});	
			var textRepeatGameNo = Ti.UI.createLabel({
			text:'No',
			color:'#fff',
			font:{fontSize:20,fontWeight:'Bold'},
			shadowColor:'#000',
			shadowOffset:{x:1,y:1},
			top:10,
			textAlign:'center'
			});
			win.add(radioGroupRepeatGame);
			win.add(textRepeatGameYes);
			win.add(textRepeatGameNo);
	
		//Radio Button = Rounds per Game
			var radioGroupRoundsPerGame = radioButtonRPG.createGroup({
			groupId:1,
			width:509,
			height:34,
			layout:'horizontal',
			radioItemsValue:['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven','Eight'],
			radioItemsPadding:25,
			radioItemsBackgroundSelectedImage:'radioButtonActive.png',
			radioItemsBackgroundImage:'radioButton.png',
			radioItemsWidth:18,
			radioItemsHeight:19
			});
			win.add(radioGroupRoundsPerGame);

	
		//Radio Button = ACTIONS 
			var radioGroupActions = radioButtonActions.createGroup({
			groupId:1,
			width:34,
			height:650,
			layout:'vertical',
			radioItemsValue:['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven','Eight','Nine','Ten'],
			radioItemsPadding:7,
			radioItemsBackgroundSelectedImage:'radioButtonActive.png',
			radioItemsBackgroundImage:'radioButton.png',
			radioItemsWidth:18,
			radioItemsHeight:19
			});	
			win.add(radioGroupActions);

	
	
	var button = Ti.UI.createButton({
		title:'Get value'
	});
	
	button.addEventListener('singletap', function(e) {
    		alert("Horizontal radio group: " + radioGroup.selectedValue + "\n Vertical radio group: " + radioGroup2.selectedValue);
		});
	
	

	
	win.add(button);
	win.open();

})();



