
/* Not Supported Message Screen
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


//Creates the window and sets the orientation to landscape
var notSupportedWin= Ti.UI.createWindow
	({
		backgroundColor: '#333333'
	});
	notSupportedWin.orientationModes = [
							Ti.UI.LANDSCAPE_LEFT,
							Ti.UI.LANDSCAPE_RIGHT
							];
			    
			    
			    // default message:
				var defaultMessage = Ti.UI.createLabel({
				text:'Your OS does not support this application.', 
				color: '#FFFFFF',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:200,
				left:350
				});
				//add label to window
				notSupportedWin.add(defaultMessage);


			    // default message:
				var defaultMessage2 = Ti.UI.createLabel({
				text:'Supported OS: Android Tablet & iPad Tablet', 
				color: '#FFFFFF',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:300,
				left:350
				});
				//add label to window
				notSupportedWin.add(defaultMessage2);
				
				
			
				Ti.API.info(platform);
				notSupportedWin.open;
