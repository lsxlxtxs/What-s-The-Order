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
 		 image:'images/gameinfobg.png'
	});
	
	//Adds in the background image on main screen						
	gameinformation.add(background);



// Create the banner image
var topBanner = Ti.UI.createImageView
	({
		image : 'images/bannerpic.png',
		height:'auto',
		width:'auto',
		top : 25,
		left : 359
	});

	// Add to the parent view.
	gameinformation.add(topBanner);



//Create label text for Whats the Order
var l1 = Ti.UI.createLabel({
	text:'"What\'s The Order"', 
	color:'#000000',
	font:{fontSize:25},
	height:'auto',
	width:'auto',
	left:416,
	top:230
});
gameinformation.add(l1);


//create sub title "Time Sequence Activity"
var l2 = Ti.UI.createLabel({
	text:'-----------', 
	color:'#000000',
	font:{fontSize:19},
	height:'auto',
	width:'auto',
	left:485,
	top:255
});
gameinformation.add(l2);


//create sub title "Time Sequence Activity"
var l3 = Ti.UI.createLabel({
	text:'Time Sequence Activity', 
	color:'#000000',
	font:{fontSize:19},
	height:'auto',
	width:'auto',
	left:415,
	top:275
});
gameinformation.add(l3);



//create middle text 1/5
var middle1 = Ti.UI.createLabel({
	text:'This interactive game helps children master the', 
	color:'#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:335,
	top:330
});
gameinformation.add(middle1);


//create middle text 2/5
var middle2 = Ti.UI.createLabel({
	text:'techniques of time sequencing. Players watch a', 
	color:'#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:335,
	top:355
});
gameinformation.add(middle2);


//create middle text 3/5
var middle3 = Ti.UI.createLabel({
	text:'video of a live person doing an activity, and then', 
	color:'#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:335,
	top:375
});
gameinformation.add(middle3);


//create middle text 4/5
var middle4 = Ti.UI.createLabel({
	text:'are challenged to put the individual actions into', 
	color:'#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:335,
	top:395
});
gameinformation.add(middle4);


//create middle text 5/5
var middle5 = Ti.UI.createLabel({
	text:'the right order', 
	color:'#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:335,
	top:415
});
gameinformation.add(middle5);



//create footer text: by laura & do2learn
var creditLabel = Ti.UI.createLabel({
	text:'By: Laura Seletos & Do2Learn.com', 
	color:'#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left:375,
	top:460
});
gameinformation.add(creditLabel);





//Creates the button for going back to the main menu screen
var b1 = Ti.UI.createButton({
	title:'Back',
	width:85,
	height:35,
	top:10,
	right:10
});
b1.addEventListener('click', function()
{
	gameinformation.close();
	win.open();
});
gameinformation.add(b1);



