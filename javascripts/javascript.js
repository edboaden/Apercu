
/* jQuery */

$(function() {
	
	// Position body centre horizontally

	body_width = $('main').width()
	$('body').css('width', body_width)

	// Position body centre vertically

	page_height = $(window).height()
	body_height = $('body').height()
	margin = (page_height - body_height) / 2 - 100
	
	$('body').css('margin-top', margin)

	$(window).resize(function() {
		page_height = $(window).height()
		margin = (page_height - body_height) / 2

		$('body').css('margin-top', margin)
	})
})
