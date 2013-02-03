/* Game Instructions Page
 * 
 * Generates a window to display text for the game's instructions
 * 
 * Author: Laura Seletos
 * Advisor: Dr. Branton
 *  
 */

//creates instructions window
var gameinstructions = Ti.UI.createWindow
	({
		//sets bg boarder to gray
		backgroundColor: '#333333'
	});
	
	//sets orentation to landscape
	gameinstructions.orientationModes = [Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT];

//Creates background image on game instructions screen						
var background = Ti.UI.createImageView
	({
 		 image:'gameinfobg.png'
	});
	
	//Adds in the background image on main screen						
	gameinstructions.add(background);



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
	gameinstructions.add(topBanner);



var l = Ti.UI.createLabel({
	text:'Game Instructions Page', 
	color:'#888',
	font:{fontSize:20},
	height:'auto',
	width:'auto',
	left:380,
	right:20,
	top:10
});
gameinstructions.add(l);

var b1 = Ti.UI.createButton({
	title:'Back',
	width:85,
	height:35,
	top:10,
	right:10
});
b1.addEventListener('click', function()
{
	gameinstructions.close();
	win.open();
});
gameinstructions.add(b1);

