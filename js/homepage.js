$(function () {
	$('.nav a').on('click', function () {
		$('.nav .active').removeClass('active');
		$(this).addClass('active');
	})
})