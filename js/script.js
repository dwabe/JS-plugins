'use strict';
(function(){
	
  var template = document.getElementById('template').innerHTML;
  
	Mustache.parse(template);
	
	var listItems = '';

	
	for(var i = 0; i < slidesData.length; i++){
		console.log(slidesData);
		listItems += Mustache.render(template, slidesData[i]);
  }
  
  var fullSlidesList = Mustache.render(template, {
    slides: listItems
  });

  var results = document.getElementById('carousel');
	
	results.insertAdjacentHTML('beforeend', fullSlidesList);
	
})(); 


var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  hash: true
});


var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});