/* Game Information Page
 * 
 * Generates a window to display text for the game
 * 
 * Author: Laura Seletos
 * Advisor: Dr. Branton
 *  
 */

var gameinformation = {};

	gameinformation = Ti.UI.createWindow();
	gameinformation.orientationModes = [Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT];

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



