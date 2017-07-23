$(window).scroll(function () {
	var sc = $(window).scrollTop()
	if (sc > 150) {
		$("#main-navbar").addClass("navbar-scroll")
	} 
	else {
		$("#main-navbar").removeClass("navbar-scroll")
	}
});


$("#myCarousel").carousel();

$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});

$('.carousel').carousel({
     interval: 5000,
});
