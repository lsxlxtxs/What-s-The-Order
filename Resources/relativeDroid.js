/* ANDROID
 * 
 * Linear Button Option
 * 
 * Author: Laura Seletos
 * Advisor: Dr. Branton
 *  
 */


var adjustPosition = 0;

//Creates the window and sets the orientation to landscape
var winRelativeDroid = Ti.UI.createWindow
	({
		width:600,
		height:500,
		top:210,
		left:270
	});
					

//Creates button for switching to Linear Time
var linearbuttonA = Ti.UI.createButton({
	color: '#000000',
	left:0,
	top:0,
	width:115,
	height:35,
	title:'Linear Time'
});
	//Adds click functionality to the play game function 
	linearbuttonA.addEventListener('click', function()
	{
		//opens up the game play menu
		winLinearDroid.open();
		//closes current/main window (without this they two windows open on top of each other)
		winRelativeDroid.close();
	});
	//Adds game play button to view
	winRelativeDroid.add(linearbuttonA);


//Creates button for switching to Relative Time
var relativebuttonA = Ti.UI.createButton({
	color: '#C8C8C8',
	left:120,
	top:0,
	width:115,
	height:35,
	title:'Relative Time'
});
	//Adds game play button to view
	winRelativeDroid.add(relativebuttonA);
	
	
	
//Label for 'A video shows...'
var middleText1A = Ti.UI.createLabel({
	text:'A video shows an action. The action is divided into 3 Steps. The', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left: adjustPosition,
	top:60
});
//add label to window
winRelativeDroid.add(middleText1A);


//Label for 'middle step is...'
var middleText2A = Ti.UI.createLabel({
	text:'middle step is placed on the screen and the player is asked to tell', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left: adjustPosition,
	top:80
});
//add label to window
winRelativeDroid.add(middleText2A);

//Label for 'what occured before...'
var middleText3A = Ti.UI.createLabel({
	text:'what occured before and after that step.', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left: adjustPosition,
	top:100
});
//add label to window
winRelativeDroid.add(middleText3A);


	
//Label for 'basic play'
var basicPlayLabelA = Ti.UI.createLabel({
	text:'Basic Play:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left: adjustPosition,
	top:150
});
//add label to window
winRelativeDroid.add(basicPlayLabelA);


//Label for 'Step 1: before'
var step1LabelA = Ti.UI.createLabel({
	text:'Step 1: before', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left: 261,
	top:175
});
//add label to window
winRelativeDroid.add(step1LabelA);


//Label for 'Step 2: now'
var step2LabelA = Ti.UI.createLabel({
	text:'Step 2: now', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left: 261,
	top:195
});
//add label to window
winRelativeDroid.add(step2LabelA);


//Label for 'Step 3: to finish'
var step3LabelA = Ti.UI.createLabel({
	text:'Step 3: to finish', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:261,
	top:215
});
//add label to window
winRelativeDroid.add(step3LabelA);

//Creates button for switching to advanced options button
var advancedButtonA = Ti.UI.createButton({
	color: '#000000',
	left:261,
	top:255,
	width:165,
	height:30,
	title:'Advanced Options'
});
//Adds save button to view
winRelativeDroid.add(advancedButtonA);
	
			//Labels
				var labelYesBeforeEarlier = Ti.UI.createLabel({
				text:'before/after', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				left:0,
				top:175
				});
				var labelNoBeforeEarlier = Ti.UI.createLabel({
				text:'earlier/later', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				left:0,
				top:195
				});
					winRelativeDroid.add(labelYesBeforeEarlier);
					winRelativeDroid.add(labelNoBeforeEarlier);


			//Labels
				var labelAdvanced = Ti.UI.createLabel({
				text:'Advanced', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				left: 261,
				top:150
				});
					winRelativeDroid.add(labelAdvanced);
				
