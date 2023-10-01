$(document).ready(function(){
	$('.slider_second').slick({
		arrows:false,
		dots:true,
		infinite: true,
		slidesToScroll: 1,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 1350,
				settings: {
					slidesToShow:3,
					slidesToScroll: 1,
      
				}
			},
			{
				breakpoint: 1135,
				settings: {
					slidesToShow:2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 821,
				settings: {
					slidesToShow:1,
					slidesToScroll: 1,
					
				}
			}
		]
	});
});