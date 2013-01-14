/* Game Instructions Page
 * 
 * Generates a window to display text for the game's instructions
 * 
 * Author: Laura Seletos
 * Advisor: Dr. Branton
 *  
 */

var gameinstructions = {};

	gameinstructions = Ti.UI.createWindow();
	gameinstructions.orientationModes = [Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT];

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
	title:'Back to main screen',
	width:300,
	height:50,
	top:100
});
b1.addEventListener('click', function()
{
	gameinstructions.close();
	win.open();
});
gameinstructions.add(b1);

