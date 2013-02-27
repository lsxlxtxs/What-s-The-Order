/* Reward Video Window
 * 
 * Generates game based on the options selected
 * by the user on the playGameIPAD.js page
 * 
 * Author: Laura Seletos
 * Advisor: Dr. Branton
 *  
 * Video tutorial: http://developer.appcelerator.com/question/137134/play-video-in-titanium-studio
 */

//Game Logic:

	var videoURL = "RewardAnimationStills/tempvideo.mp4";

	//creates game menu window
	var rewardVideoWin = Ti.UI.createWindow
	({
		//sets bg border to gray
		backgroundColor: '#333333'
	});

	
	//sets orientation to landscape
	rewardVideoWin.orientationModes = [Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT];
 
 
	var openButton = Ti.UI.createButton({
	    title : "Start Video",
	    top : "0dp",
	    height : "40dp",
	    left : "10dp",
	    right : "10dp"
	});
 
	openButton.addEventListener('click', function() {
 
    var activeMovie = Titanium.Media.createVideoPlayer({
        url : videoURL,
        movieControlMode : Titanium.Media.VIDEO_CONTROL_DEFAULT,
        movieControlStyle : Titanium.Media.VIDEO_CONTROL_FULLSCREEN,
        scalingMode : Titanium.Media.VIDEO_SCALING_MODE_FILL,
        fullscreen : true,
        autoplay : true
    });
    rewardVideoWin.add(activeMovie);
 
    var closeButton = Ti.UI.createButton({
        title : "Exit Video",
        top : "0dp",
        height : "40dp",
        left : "10dp",
        right : "10dp"
    });
 
   closeButton.addEventListener('click', function() {
        activeMovie.hide();
        activeMovie.release();
        activeMovie = null;
    });
 
    activeMovie.add(closeButton);
});
rewardVideoWin.add(openButton);