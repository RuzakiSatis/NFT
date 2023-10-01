$(document).ready(function(){
    $('.slider_three').slick({
        arrows: false,
        dots: true,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 800,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1121,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 861,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,   
                }
            }
        ]
    });
});
