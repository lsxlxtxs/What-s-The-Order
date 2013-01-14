/* Play Game Screen
 * 
 * Generates game based on the options selected
 * by the user on the gamemenu.js page
 * 
 * Author: Laura Seletos
 * Advisor: Dr. Branton
 *  
 */


var playgame = {};

	playgame = Ti.UI.createWindow();
	playgame.orientationModes = [Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT];

var l = Ti.UI.createLabel({
	text:'Play Game Screen', 
	color:'#888',
	font:{fontSize:20},
	height:'auto',
	width:'auto',
	left:380,
	right:20,
	top:10
});
playgame.add(l);

var b1 = Ti.UI.createButton({
	title:'Back to main screen',
	width:300,
	height:50,
	top:100
});
b1.addEventListener('click', function()
{
	playgame.close();
	win.open();
});
playgame.add(b1);

