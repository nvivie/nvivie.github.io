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







        // // HORIZONTAL BUTTON STAY ACTIVE
        // $('.button').click(function() {
        //         // body...
        //         $(this).toggleClass('active');
        //         console.log('scroll');
        // })

        



        //stop the boucing button
        //clearInterval(intervalBoucingButton);

        // keep track on last scroll

        // var lastScroll = 0;
        // $(window).scroll(function(event){
        //         console.log('afaod');
        //         // set the current scroll position
        //         var st = $(this).scrollTop();
        //         //determines up or down scrolling
        //         if(st > lastScroll) {
        //                 $('.scroll-down').css("display","none");
        //         }else{
        //                 $('.scroll-down').css("display", "block");
        //         }
        //         lastScroll = st;

        // });


        // function top(){
        //         console.log("dsdf");
        //         $('#top').scrollIntoView();
        // }

        // function bottom(){
        //          console.log("dsdf");
        //         $('#bottom').scrollIntoView();
        //         // window.setTimeout(function(){
        //         //         top();}, 2000);
        // };

        // bottom();
