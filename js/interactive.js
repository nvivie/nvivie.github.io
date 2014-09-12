$(function(){
	'use strict';
	$("li").each(function(index){
		//set amount of time and fade each element
		// this works by multiplying the time to wait by the index of the element
		//Delay 400*1
		// Delay 400*2
		// Delay 400*3
		$(this).delay(100*index).hide().fadeIn(300);

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

 //    //************* HAMBURGER ************
	// // var button = document.querySelector('.bt-menu-trigger');
	// 	$('.bt-menu-trigger').click(function(){
	// 		('.bt-menu-trigger').classList.toggle('bt-menu-open');
	// 	});
		  
		
});

	//console.log('dfsf');
	// $('.image-container').hover(function(){
 //                $(this).find(".change-image").stop(true,true).fadeOut(800);
 //        }, function(){
 //                $(this).find(".change-image").stop(true, true).fadeIn(800);
 //        });