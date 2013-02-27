//Includes the .js files that the buttons on this screen will be navigating to:
	Ti.include( 'gameinformation.js','gameinstructions.js','gamemenu.js',
	'appDROID.js','gameinfoDROID.js','gameinstrDROID.js','playGameDROID.js',
	'appIPAD.js','gameinfoIPAD.js','gameinstrIPAD.js','playGameIPAD.js',
	'notSupported.js');


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

//Detect if OS is android or ipad:
var platform = Ti.Platform.osname;


//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');	  	
}

	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
//var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));


//Creates the window and sets the orientation to landscape
// var win = Ti.UI.createWindow
	// ({
		// backgroundColor: '#333333'
	// }); 
//  
 	// win.open();
 
switch(platform)
	{
	case 'ipad':
	    // open window for iOS 
	    winIPAD.open();
//	    win.close();

  		  break;
	case 'android':
		// open window for Droid
		winDROID.open();
//		win.close();
				
		  break;
	      
	default:
				 // open window for a non supported OS 
		//	    win.close();
				notSupportedWin.open();

}




