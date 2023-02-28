"use strict"

$(document).ready(function(){	
new WOW().init();
	
	function calc(){
	let sumCalc = parseInt($('#sel_1 option:selected').val()) + parseInt($('#sel_2 option:selected').val()) + parseInt($('#sel_3 option:selected').val());
		if(isNaN(sumCalc)) sumCalc = 0;
	let daysCalc = parseInt($('#sel_1 option:selected').attr('days')) + parseInt($('#sel_2 option:selected').attr('days')) + parseInt($('#sel_3 option:selected').attr('days'));
		if(isNaN(daysCalc)) daysCalc = 0;
	$('.terms h4').text(daysCalc);
	$('.cost h4').text(sumCalc);
}	
$('select').on('change', function(){
	calc();
});
calc();
	
$(window).scroll(() => {
	let scrollDist = $(window).scrollTop();
	$(".section").each((i, el) => {
		if($(el).offset().top - $("nav").outerHeight() <= scrollDist){
			$("nav a").each((i, el) => {
				if($(el).hasClass("li_menu")){
					$(el).removeClass("li_menu");
				}
			});
			$('nav li:eq('+ i +')').find('a').addClass('li_menu');
		}
	});
});
	$('.form_message').submit(function(event){
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "php/telegram.php",
			data: $(this).serialize()
		}).done(function(){
			const elemModal = document.querySelector('#exampleModal');
			const modal = new bootstrap.Modal(elemModal);
			modal.show();
			$(this).find('.inpt_f').val("");
			$('.form_message').trigger('reset');
		});
		return false;
	});
	
	$('.form_application').submit(function(event){
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "php/application.php",
			data: $(this).serialize()
		}).done(function(){
			const elemModal = document.querySelector('#exampleModal2');
			const modal = new bootstrap.Modal(elemModal);
			modal.show();
			$(this).find('.inpt_f').val("");
			$('.form_application').trigger('reset');
			$('#exampleModal1').modal('hide');
			
		});
		return false;
	});
	
	$("#application_button").click(function(){
		$(".sum_n_days").text('0')
	});

	/*let options = {
            threshold: [0.3]
        };
        let observer = new IntersectionObserver(onEntry, options);
        let elements = $('.sect');

        elements.each((i, el) => {
            observer.observe(el);
        });


        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.classList.add('sect-show');
                }
            });
        };*/
	
			let optionsImage = {
				threshold: [0.2]
			};
			let observerImage = new IntersectionObserver(onEntryImage, optionsImage);
			let elementsImage = $('.all_photo');

			elementsImage.each((i, el) => {
				observerImage.observe(el);
			});


			function onEntryImage(entry) {
				entry.forEach(change => {
					if (change.isIntersecting) {
						change.target.src = change.target.dataset.src;					
					};
				});
			};
	
			 $(document).ready(function(){('load', setTimeout(function () {
			const elemModal = document.querySelector('#modal');
			const modal = new bootstrap.Modal(elemModal);
			modal.show();
			}, 45000));
			
				let optionsStatistic = {
					threshold: [0.3]
				};
				let observerStatistic = new IntersectionObserver(onEntryStatistic, optionsStatistic);
				let elementsStatistic = $('.animate_numbers');

				elementsStatistic.each((i, el) => {
					observerStatistic.observe(el);
				});


				function onEntryStatistic(entry) {
            		entry.forEach(change => {
						if (change.isIntersecting) {
							$('.animate_numbers').delay(200).spincrement({
							 thousandSeparator: "",
							 duration: 3000
                    });
				}
			});
		};
	});
				$('.image-link').magnificPopup({
					type: 'image'
				});
});	
	

$(window).on('load', function(){
    $(".loader").fadeOut().end().delay(500).fadeOut('slow');    
	

});

$("a[href^='#']").click(function(){
	let valHref = $(this).attr("href");
	$("html, body").animate({scrollTop: $(valHref).offset().top - 55 + 'px'});
});



	
	
