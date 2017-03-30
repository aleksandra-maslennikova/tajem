$(document).ready(function(){
$('.navbar-toggler').on('click', function(){
	var target = $(this).attr('href');
	$(this).toggleClass('active');	
	$(target).toggleClass('collapse');
})

$('#carousel').slick({
	dots: true,
	infinite: true,
	speed: 500,
	cssEase: 'linear'
});
});