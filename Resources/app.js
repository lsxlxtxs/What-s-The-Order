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


var win = Ti.UI.createWindow();
	win.orientationModes = [
							Ti.UI.LANDSCAPE_LEFT,
							Ti.UI.LANDSCAPE_RIGHT
							];
	win.UI.setBackgroundImage( '/What's The Order/Resources/android/droidbg.png' );


var l = Ti.UI.createLabel({
	text:'Welcome to Whats The Order!', 
	color:'#888',
	font:{fontSize:20},
	height:'auto',
	width:'auto',
	left:380,
	right:20,
	top:10
});
win.add(l);

		
// User Input for Username
var field = Ti.UI.createTextField({
	top:5,
	left:5,
	right:90,
	bottom:5,
	width:120,
	height:40,
	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(field);

var button = Ti.UI.createButton({
	right:5,
	top:5,
	width:80,
	title:'Save'
});
win.add(button);


var b1 = Ti.UI.createButton({
	title:'Play Game',
	width:300,
	height:50,
	top:100
});
b1.addEventListener('click', function()
{
	gamemenu.open();
	win.close();
});
win.add(b1);

var b2 = Ti.UI.createButton({
	title:'View Instructions',
	width:300,
	height:50,
	top:170
});
b2.addEventListener('click', function()
{
	gameinstructions.open();
	win.close();

});
win.add(b2);

var b3 = Ti.UI.createButton({
	title:'View Game Information',
	width:300,
	height:50,
	top:240
});
b3.addEventListener('click', function()
{
	gameinformation.open();
	win.close();

});
win.add(b3);


win.open();



