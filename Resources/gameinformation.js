/* Game Information Page
 * 
 * Generates a window to display text for the game
 * 
 * Author: Laura Seletos
 * Advisor: Dr. Branton
 *  
 */

//creates information window
var gameinformation = Ti.UI.createWindow
	({
		//sets bg boarder to gray
		backgroundColor: '#333333'
	});
	
	//sets orentation to landscape
	gameinformation.orientationModes = [Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT];
	
	
//Creates background image on game instructions screen						
var background = Ti.UI.createImageView
	({
 		 image:'gameinfobg.png'
	});
	
	//Adds in the background image on main screen						
	gameinformation.add(background);


var l = Ti.UI.createLabel({
	text:'Game Information Page', 
	color:'#888',
	font:{fontSize:20},
	height:'auto',
	width:'auto',
	left:380,
	right:20,
	top:20
});
gameinformation.add(l);

var b1 = Ti.UI.createButton({
	title:'Back to main screen',
	width:300,
	height:50,
	top:100
});
b1.addEventListener('click', function()
{
	gameinformation.close();
	win.open();
});
gameinformation.add(b1);



