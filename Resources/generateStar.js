Ti.include( 'appDROID.js');

var positionODD = 0;
var positionEVEN = 0;
var positionFromTop = 700;

function generateStars(roundsPerGame)
{
	
		//Score counter on bottom of screen-----------------------------------------	
		if(roundsPerGame == 1)
		{
			// score images
			var score1 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 359
			});
			// Add to the parent view.
			playGameDROID.add(score1);
		}
		else if(roundsPerGame == 2)
		{
			// score images
			var score1 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 349
			});
			// Add to the parent view.
			playGameDROID.add(score1);
			// score images
			var score2 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 369
			});
			// Add to the parent view.
			playGameDROID.add(score2);
			
		}
		else if(roundsPerGame == 3)
		{
			// score images
			var score1 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 349
			});
			// Add to the parent view.
			playGameDROID.add(score1);
			// score images
			var score2 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 359
			});
			// Add to the parent view.
			playGameDROID.add(score2);
			// score images
			var score3 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 369
			});
			// Add to the parent view.
			playGameDROID.add(score3);
			
		}
		else if(roundsPerGame == 4)
		{
			// score images
			var score1 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 330
			});
			// Add to the parent view.
			playGameDROID.add(score1);
			// score images
			var score2 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 340
			});
			// Add to the parent view.
			playGameDROID.add(score2);
			// score images
			var score3 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 360
			});
			// Add to the parent view.
			playGameDROID.add(score3);
			// score images
			var score4 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 370
			});
			// Add to the parent view.
			playGameDROID.add(score4);
			
		}
		else if(roundsPerGame == 5)
		{
			// score images
			var score1 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 339
			});
			// Add to the parent view.
			playGameDROID.add(score1);
			// score images
			var score2 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 349
			});
			// Add to the parent view.
			playGameDROID.add(score2);
			// score images
			var score3 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 359
			});
			// Add to the parent view.
			playGameDROID.add(score3);
			// score images
			var score4 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 369
			});
			// Add to the parent view.
			playGameDROID.add(score4);
			// score images
			var score5 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 379
			});
			// Add to the parent view.
			playGameDROID.add(score5);
			
		}
		else if(roundsPerGame == 6)
		{
			// score images
			var score1 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 330
			});
			// Add to the parent view.
			playGameDROID.add(score1);
			// score images
			var score2 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 340
			});
			// Add to the parent view.
			playGameDROID.add(score2);
			// score images
			var score3 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : 700,
				left : 350
			});
			// Add to the parent view.
			playGameDROID.add(score3);
			// score images
			var score4 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 360
			});
			// Add to the parent view.
			playGameDROID.add(score4);
			// score images
			var score5 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 370
			});
			// Add to the parent view.
			playGameDROID.add(score5);
			// score images
			var score6 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 380
			});
			// Add to the parent view.
			playGameDROID.add(score6);
			
		}
		else if(roundsPerGame == 7)
		{
			// score images
			var score1 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 329
			});
			// Add to the parent view.
			playGameDROID.add(score1);
			// score images
			var score2 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 339
			});
			// Add to the parent view.
			playGameDROID.add(score2);
			// score images
			var score3 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 349
			});
			// Add to the parent view.
			playGameDROID.add(score3);
			// score images
			var score4 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 359
			});
			// Add to the parent view.
			playGameDROID.add(score4);
			// score images
			var score5 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 369
			});
			// Add to the parent view.
			playGameDROID.add(score5);
			// score images
			var score6 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 379
			});
			// Add to the parent view.
			playGameDROID.add(score6);
			// score images
			var score7 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 389
			});
			// Add to the parent view.
			playGameDROID.add(score7);
		}
		else if(roundsPerGame == 8)
		{
			// score images
			var score1 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 320
			});
			// Add to the parent view.
			playGameDROID.add(score1);
			// score images
			var score2 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 330
			});
			// Add to the parent view.
			playGameDROID.add(score2);
			// score images
			var score3 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 340
			});
			// Add to the parent view.
			playGameDROID.add(score3);
			// score images
			var score4 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 350
			});
			// Add to the parent view.
			playGameDROID.add(score4);
			// score images
			var score5 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 360
			});
			// Add to the parent view.
			playGameDROID.add(score5);
			// score images
			var score6 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 370
			});
			// Add to the parent view.
			playGameDROID.add(score6);
			// score images
			var score7 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 380
			});
			// Add to the parent view.
			playGameDROID.add(score7);
			// score images
			var score8 = Ti.UI.createImageView
			({
				image: 'images/nopoints.jpeg',
				height:'auto',
				width:'auto',
				top : positionFromTop,
				left : 390
			});
			// Add to the parent view.
			playGameDROID.add(score8);
			
		}
		
}		
		
		
function changeScoreImage()
{
			if (roundsPerGame == 1)
			{
				if (score == 1)
				{
					score1.setImage('images/star.png');
				}
			} 
			if (roundsPerGame == 2)
			{
				if (score == 1)
				{
					score1.setImage('images/star.png');
				}
				if (score == 2)
				{
					score2.setImage('images/star.png');
				}
				
			} 
			if (roundsPerGame == 3)
			{
				if (score == 1)
				{
					score1.setImage('images/star.png');
				}
				if (score == 2)
				{
					score2.setImage('images/star.png');
				}	
				if (score == 3)
				{
					score3.setImage('images/star.png');
				}			
			} 
			if (roundsPerGame == 4)
			{
				if (score == 1)
				{
					score1.setImage('images/star.png');
				}
				if (score == 2)
				{
					score2.setImage('images/star.png');
				}	
				if (score == 3)
				{
					score3.setImage('images/star.png');
				}	
				if (score == 4)
				{
					score4.setImage('images/star.png');
				}					
			}
			if (roundsPerGame == 5)
			{
				if (score == 1)
				{
					score1.setImage('images/star.png');
				}
				if (score == 2)
				{
					score2.setImage('images/star.png');
				}	
				if (score == 3)
				{
					score3.setImage('images/star.png');
				}	
				if (score == 4)
				{
					score4.setImage('images/star.png');
				}		
				if (score == 5)
				{
					score5.setImage('images/star.png');
				}				
			}
			if (roundsPerGame == 6)
			{
				if (score == 1)
				{
					score1.setImage('images/star.png');
				}
				if (score == 2)
				{
					score2.setImage('images/star.png');
				}	
				if (score == 3)
				{
					score3.setImage('images/star.png');
				}	
				if (score == 4)
				{
					score4.setImage('images/star.png');
				}
				if (score == 5)
				{
					score5.setImage('images/star.png');
				}	
				if (score == 6)
				{
					score6.setImage('images/star.png');
				}					
			}
			if (roundsPerGame == 7)
			{
				if (score == 1)
				{
					score1.setImage('images/star.png');
				}
				if (score == 2)
				{
					score2.setImage('images/star.png');
				}	
				if (score == 3)
				{
					score3.setImage('images/star.png');
				}	
				if (score == 4)
				{
					score4.setImage('images/star.png');
				}
				if (score == 5)
				{
					score5.setImage('images/star.png');
				}	
				if (score == 6)
				{
					score6.setImage('images/star.png');
				}
				if (score == 7)
				{
					score7.setImage('images/star.png');
				}	
				
			}
			if (roundsPerGame == 8)
			{
				if (score == 1)
				{
					score1.setImage('images/star.png');
				}
				if (score == 2)
				{
					score2.setImage('images/star.png');
				}	
				if (score == 3)
				{
					score3.setImage('images/star.png');
				}	
				if (score == 4)
				{
					score4.setImage('images/star.png');
				}
				if (score == 5)
				{
					score5.setImage('images/star.png');
				}	
				if (score == 6)
				{
					score6.setImage('images/star.png');
				}	
				if (score == 7)
				{
					score7.setImage('images/star.png');
				}	
				if (score == 8)
				{
					score8.setImage('images/star.png');
				}	
				
			}

			
}