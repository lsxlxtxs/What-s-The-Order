//Includes the .js files that the buttons on this screen will be navigating to:
	Ti.include('appDROID.js','appIPAD.js','notSupported.js');


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


// //bootstrap and check dependencies
// if (Ti.version < 1.8 ) {
	// alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');	  	
// }

 
if(platform=='ipad')
{
	    // open window for iOS 
	    winIPAD.open();

}
else if(platform=='android')
{

	    winIPAD.close();
	    
	  	// open window for Droid
		winDROID.open();
	
}
else
{
		winIPAD.close();
	  	winDROID.close();

		// open window for a non supported OS 
		notSupportedWin.open();
		

}




