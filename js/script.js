$(document).ready(function() {

//-----------------------------------------------
//встановлення навичок при відповідному скролі
//-----------------------------------------------
	$(window).scroll(function(){
		if($(this).scrollTop()>1550){
			var mas = ["width: 79%","width: 90%","width: 69% ","width: 92%"]
			var progres = $(".progress .progress-bar");

			for (var i = 0; i < progres.length; i++) {
	            	// console.log(progres[0]);
	            	$(progres[i]).attr({
	            		style: mas[i]            			
	            	});   	
	            }
	         }
	      });

//-----------------------------------------------
//плавний скрол 
//-----------------------------------------------
	$(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

//-----------------------------------------------
//клік по гамбургер меню
//-----------------------------------------------
	$(".hamburger").click(function(event) {
		$(".menu").toggleClass('clickHum2');
		$(".navigation").toggleClass('clickHum1');
	});

//-----------------------------------------------
//видаляєм клас для гам.меню
//-----------------------------------------------
$(window).resize(function() {
var width = $(window).width();
	if(width > 1024){
		$(".menu").removeClass('clickHum2');
		$(".navigation").removeClass('clickHum1');
	}
})

$(window).resize();

});