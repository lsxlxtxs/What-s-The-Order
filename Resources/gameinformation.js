gameinforamtion = {};

var win = Ti.UI.createWindow();
	win.orientationModes = [Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT];

var l1 = Ti.UI.createLabel({
	text:'Game Information Page', 
	color:'#888',
	font:{fontSize:20},
	height:'auto',
	width:'auto',
	left:380,
	right:20,
	top:10
});
win.add(l1);

var b1 = Ti.UI.createButton({
	title:'Play Game',
	width:300,
	height:50,
	top:100
});
b1.addEventListener('click', function()
{
	//MainTests.open();
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
	//SplitViewPlain.open();
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
	//SplitViewNav.open();
});
win.add(b3);


win.open();


