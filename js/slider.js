$(function(){
	'use strict';
	
	$('.sp').first().addClass('active');
	$('.sp').hide();
	$('.active').show();

	// $('#button-previous').first().addClass('active');
	// $('#button-previous').hide();

	$('#button-next').click(function(){
		// $('#button-next').load('issey.html');
		// console.log('active='+$('.active').attr('id'));
		$('.active').removeClass('active').addClass('oldActive');
		// console.log('oldActive='+$('.oldActive').attr('id'))

		if($('.oldActive').is(':last-child')){
			$('.sp').first().addClass('active');
			//show the navigation control when it goes back to the first image
			$('.control-content').addClass('active-control').show();
			console.log('show last');
			// $('#button-previous').hide();
		}else{
			// console.log($('.oldActive').next())
			$('.oldActive').next().addClass('active');
			//hide the navigational control when its not the first image
			$('.control-content').removeClass('active-control').hide();
			// $('#button-previous').show();
		}

		$('.oldActive').removeClass('oldActive');
			console.log('clicks');
		$('.sp').fadeOut();
		$('.active').fadeIn();
		
	});


	$('#button-previous').click(function(){
	    $('.active').removeClass('active').addClass('oldActive');    
        if ( $('.oldActive').is(':first-child')) {
	        $('.sp').last().addClass('active');
	        //show the navigation control when it goes back to the last image
	        $('.control-content').addClass('active-control').show();
       	}else{
   			$('.oldActive').prev().addClass('active');
   			//hide the navigational control when its not the first image
   			$('.control-content').removeClass('active-control').hide();
   			
   		}
	    $('.oldActive').removeClass('oldActive');
	    $('.sp').fadeOut();
	    $('.active').fadeIn();

    });






	// MENU ROLL LEFT

	$('#showMenu').click(function(e){
		e.preventDefault();
		console.log('menu roll');
		$('#menu').toggleClass('show');
	});

	$('#menu a').click(function(e){
		// e.preventDefault();
		if($(this).next('ul').length){
			$(this).next().toggle('fast');
			console.log('dfsdfaafd');
			$(this).children('i:last-child').toggleClass('fa-caret-down fa-caret-left');
		}
	});



	// navigation controls RIGHT

	// $('#button-next').on('click',':last-child',function(e){
	// 	console.log('#works-controls');
	// 	// e.preventDefault();
	// 	$('#content-controls').show();
		
		
	// });
	


});//la fin