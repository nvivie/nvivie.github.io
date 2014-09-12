$(function(){
	'use strict';
	
	 // $('#js-plain').hover(
  //         function() {

  //           $('#js-wrapper').addClass('closed');
  //         }, function() {
  //           $('#js-wrapper').removeClass('closed');
  //           console.log('skewed');
  //         }
  //       );       
  //    $( 'ul.stuff' ).click(function() {
  //    	console.log('fdfd');
  // 		$(this).toggleClass( "active" );
		// });


  var polygons = $('polygon');
  

  for(var i =0; i < polygons.length; i++){
    console.log('V');
    polygons[i].style.fillOpacity = '0.1';
    polygons[i].style.stroke = '1';
    polygons[i].onmouseover = function(e){
      e.preventDefault();
      this.style.fillOpacity = '0';
      this.style.stroke ='white';
    }
  }

  var fill = function(p){
    var i = 0; 
    window.setInterval(function(){
      if(p.length == i){return}
        p[i].style.fillOpacity ='1.0';
        p[i].style.stroke ='none';
        i++},14);
    };
  
  fill(polygons);
});