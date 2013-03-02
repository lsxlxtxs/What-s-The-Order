Ti.include('linearDroid.js','relativeDroid.js');

/* Game Instructions Page
 * 
 * Generates a window to display text for the game's instructions
 * 
 * Author: Laura Seletos
 * Advisor: Dr. Branton
 *  
 */

//creates instructions window
var gameinstructionsDROID = Ti.UI.createWindow
	({
		//sets bg boarder to gray
		backgroundColor: '#333333'
	});
	
	//sets orentation to landscape
	gameinstructionsDROID.orientationModes = [Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT];


// Create the banner image
var topBanner = Ti.UI.createImageView
	({
		image : 'images/bannerpic.png',
		height:'auto',
		width:'auto',
		top : 25,
		left : 489
	});

	// Add to the parent view.
	gameinstructionsDROID.add(topBanner);



var textAreaInstructionsDroid = Titanium.UI.createTextArea({
    value : 'Instructions:                                                             --------------------------------------------                                                                                                                                                                                                   Instructions for Do2Learn What’s the Order? Game:                                                                 What’s the Order? explores the concept of time. A video shows a sequence of steps from daily activities, such as putting on shoes, and asks the player to match photographs from the video to the appropriate vocabulary word that indicates the time order of the steps shown. Examples are “What happened first?” or “before?” another step.                                                             -------------------------------------------->>Select Linear or Relative Time                                                          Linear time presents a sequence of steps to put in order, starting with the first action and asking for each step in time order. An example is “What happened first?” and “What happened next?”  Relative time always has 3 steps. The center step is given and the player is asked what happened ‘relative’ to that step. An example is “If this happened”, “What happened before?” and “What happened after?”                                                             -------------------------------------------->>Select Actions to Place in Order                                                      Only one set of learning words (i.e.: first/next, before/after) can be selected at a time, but several “Actions” can be chosen to show the words. For example, you can “put on socks”, “eat banana”, and “blow bubbles” for the time words “first/last”.  Actions are presented during the game in random order to create more engaging play.                                                             -------------------------------------------->>How to Play                                                                        Enter a “Player’s Name” and click “Play Game” to start. You will see a video of a selected action and then photographs from that video will be placed on the screen. You will be asked to click the photograph that places the steps in the requested time order. You can replay the video during the game by clicking the “Video” button in the upper left corner of the screen. You can set “Video” to “No’ from the menu to stop the video from playing as each action starts, which will speed up play.                                                             -------------------------------------------->>Set Length of Game Play                                                                        “Rounds per game” sets the play count the player must complete before the game ends. If more than one “Action” is selected, the player must complete all action sequences for the selected words before one round is finished and one point is awarded on the screen. Another game will automatically begin if the “Repeat Game” is set to “Yes”.                                                             -------------------------------------------->>Rewards                                                                                                 When a player gets a request right, the program gives a positive audio reward. When all the selected ‘Actions’ have been played once, a round ends and a visual score circle on the score bar is colored. When the player has filled up all the score circles set by the “Rounds per game” count, a short reward screen appears. The “Reward Screen” animation can be set to “No” if the player prefers to play without interruptions.                                                             -------------------------------------------->>Screen Help                                                                                             A “Help” hand is always displayed in the upper right screen corner. Anytime the player clicks “Help”, the hand will demonstrate the requested action. If a player misses a choice once, the program encouraged him or her to try again and repeats the request. If a player misses twice in a row, “Help” demonstrates the correct action and then repeats the request for the player to copy. The game thus never punishes wrong answers and always rewards right answers, while becoming self-teaching through demonstration. “Help” can also be used to demonstrate actions first, as described in the Practice Mode below.                                                             -------------------------------------------->>Practice Mode                                                                                           If “Practice” is set “Yes”, the Help hand always demonstrates the correct action first and then asks the player to repeat the action.                                                             -------------------------------------------->>Show Text of Spoken Instructions                             This game is designed to teach the player to wait until the instruction finishes before doing the action (wait your turn), so clicking while the voice is making a request is ignored. The spoken requests display on the screen as English text to allow children with verbal communication difficulties to read the instructions. If sound is turned off and the player uses only screen text for directions, the player still must wait the full voice delay time before the mouse click is recognized. For children who find the text distracting, set “Text” to “No” to remove it.                                                                 -------------------------------------------->>Performance Report                                                                            “View Report” shows a summary of right and wrong choices for the player. “Save Report” at the bottom of the Performance Report saves to a file. The Performance Report count is reset anytime a new game begins (“Play Game” is clicked) so save any reports (“View Report” and “Save Report”) before starting a new game.                                                             --------------------------------------------NOTE: When you save to an existing file name, the Performance Report is added at the beginning of the file. The information previously stored in the file is NOT destroyed. You can use one file name to save the history of a player’s progress.                                                             -------------------------------------------->>Difficulty levels                                                          Practice: Setting “Practice” to “Yes” will have the Help always show the action first.                                                          Easiest Play: Linear Time, 2 words, one Action.                                                          Moderate Play: Linear Time, 3 words or Relative Time, before/after, multiple actions                                                          Harder Play: “Advanced  Options”. Up to 4 linear steps and complex relative time steps.                                                             -------------------------------------------->>End Program                                                                            To end the program at any time, click “Quit” in the upper right corner of the screen.                                                             -------------------------------------------->>Usefulness                                                                            Time is a difficult abstract thinking skill. Teachers in the schools where we test our programs have indicated it can take a year or longer for a child to learn even a basic two sequence order such as First/Then. This game may require longer than other games to be effective and generalize to real world situations.',
	height : 420,
    width : 420,
    top : 220,
    editable : false,
    font : {fontSize:20,fontFamily:'Marker Felt', fontWeight:'bold'},
    color : '#888',
    textAlign : 'left',
    appearance : Titanium.UI.KEYBOARD_APPEARANCE_ALERT, 
    keyboardType : Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
    returnKeyType : Titanium.UI.RETURNKEY_EMERGENCY_CALL,
    borderWidth : 2,
    borderColor : '#bbb',
    borderRadius : 5
});
	gameinstructionsDROID.add(textAreaInstructionsDroid);


var b1 = Ti.UI.createButton({
	title:'Back',
	width:85,
	height:35,
	top:10,
	right:10
});
b1.addEventListener('click', function()
{
	gameinstructionsDROID.close();
	//Default to Relative Time Display:
	winRelativeDroid.open();
	winDROID.open();

});
gameinstructionsDROID.add(b1);

