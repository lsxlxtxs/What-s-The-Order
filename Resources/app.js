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
		left : 380
	});
	topBanner.addEventListener('load', function() {
	Ti.API.info('Image loaded!');
	});

	// Add to the parent view.
	win.add(topBanner);
														



		
// User Input for Username
var field = Ti.UI.createTextField({
	color: '#000000',
	top:5,
	left:20,
	right:90,
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
	top:7,
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



//Creates button for Play Game
//When clicked - opens gamemenu file
var b1 = Ti.UI.createButton({
	color: '#000000',
	title:'Play Game',
	width:175,
	height:70,
	top:640,
	right:115
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



