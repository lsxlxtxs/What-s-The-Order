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

var gamemenu = {};

	gamemenu = Ti.UI.createWindow();
	gamemenu.orientationModes = [Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT];

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


