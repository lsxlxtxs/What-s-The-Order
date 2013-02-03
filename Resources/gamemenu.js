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

	//creates game menu window
	var gamemenu = Ti.UI.createWindow
	({
		//sets bg boarder to gray
		backgroundColor: '#333333'
	});
	
	//sets orentation to landscape
	gamemenu.orientationModes = [Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT];



//Creates background image on game menu screen						
var gameScreenImg = Ti.UI.createImageView
	({
 		 image:'gamescreen.png'
	});
	
	//Adds in the background image on main screen						
	gamemenu.add(gameScreenImg);



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
	gamemenu.add(topBanner);


var l = Ti.UI.createLabel({
	text:'Game Menu Screen', 
	color:'#888',
	font:{fontSize:20},
	height:'auto',
	width:'auto',
	left:380,
	right:20,
	top:10
});
gamemenu.add(l);


var b1 = Ti.UI.createButton({
	title:'Back to main screen',
	width:300,
	height:50,
	top:100
});
b1.addEventListener('click', function()
{
	gamemenu.close();
	win.open();
});
gamemenu.add(b1);


