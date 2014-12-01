$(window).load(function() {
	'use strict';


	$('#multiscroll').multiscroll({
	verticalCentered : true,
        scrollingSpeed: 700,
        easing: 'easeInQuart',
        menu: false,
        sectionsColor: [],
        navigation: false,
        navigationPosition: 'right',
        navigationColor: '#000',
        navigationTooltips: [],
        loopBottom: false,
        loopTop: false,
        css3: false,
        paddingTop: 0,
        paddingBottom: 0,
        normalScrollElements: null, 
        keyboardScrolling: true,
        touchSensitivity: 5,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},

        
	});
 

});




