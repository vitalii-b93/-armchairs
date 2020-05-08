jQuery(document).ready(function($) {

	var href = $('.button');
	var overlay = $('.overlay');
	var modal1 = $('.form-modal');
	var close = $('.close');
	var modal2 = $('.modal-thank');
	var button = $('button'); 

	href.on('click', function(event) {
		event.preventDefault();
		overlay.show();
		modal1.show();
		$('body').addClass('hidden');
	});

	close.click(function() {
		overlay.hide();
		modal1.hide();
		modal2.hide();
		$('body').removeClass('hidden');
	});

	button.click(function() {
		overlay.show();
		modal2.show();
		$('body').addClass('hidden');
	});


		


});