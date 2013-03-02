/* ANDROID
 * 
 * Linear Button Option
 * 
 * Author: Laura Seletos
 * Advisor: Dr. Branton
 *  
 */



//Creates the window and sets the orientation to landscape
var winLinearDroid = Ti.UI.createWindow
	({
		width:600,
		height:500,
		top:210,
		left:270
	});

//Creates button for switching to Linear Time
var linearbuttonA = Ti.UI.createButton({
	color: '#C8C8C8',
	left:0,
	top:0,
	width:115,
	height:35,
	title:'Linear Time'
});

	//Adds game play button to view
	winLinearDroid.add(linearbuttonA);


//Creates button for switching to Relative Time
var relativebuttonA = Ti.UI.createButton({
	color: '#000000',
	left:120,
	top:0,
	width:115,
	height:35,
	title:'Relative Time'
});
	//Adds click functionality to the play game function 
	relativebuttonA.addEventListener('click', function()
	{
		//opens up the game play menu
		winRelativeDroid.open();
		//closes current/main window (without this they two windows open on top of each other)
		winLinearDroid.close();
	});
	//Adds game play button to view
	winLinearDroid.add(relativebuttonA);
	