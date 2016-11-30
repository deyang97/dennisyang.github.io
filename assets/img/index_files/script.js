$(document).ready(function() {

	$(".home-button").hover(
		function () {
			$(this).addClass("active");
		}, function () {
			$(this).removeClass('active');
		}
	);

	$(".internship-button").hover(
		function () {
			$(this).addClass("active");
		}, function () {
			$(this).removeClass('active');
		}
	);

	$(".photos-button").hover(
		function () {
			$(this).addClass("active");
		}, function () {
			$(this).removeClass('active');
		}
	);

	$(".blog-button").hover(
		function () {
			$(this).addClass("active");
		}, function () {
			$(this).removeClass('active');
		}
	);

	$(".home-button").click( function() {
		 $('html, body').animate({
        	'scrollTop' : $("#home-section").position().top
    	});
	});

	$(".internship-button").click( function() {
		 $('html, body').animate({
        	'scrollTop' : $("#internship-section").position().top
    	});
	});

	$(".photos-button").click( function() {
		 $('html, body').animate({
        	'scrollTop' : $("#photos-section").position().top
    	});
	});

	$(".blog-button").click( function() {
		 $('html, body').animate({
        	'scrollTop' : $("#blog-section").position().top
    	});
	});

	$(".container").hover(
		function() {
			$(this).css("opacity", "1");
		}, function() {
			$(this).css("opacity", ".5");
		});
			


});