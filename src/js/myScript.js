"use strict"

/*let objFull = {};
let objTerms = {};

let typeSite = prompt("Какой тип сайта ты хочешь себе?\n(Для выбора какого-либо типа сайта, просто введи его название!)\n\nВарианты: 'Сайт-визитка - 2000руб., Шаблонный - 1500руб., Лендинг - 2500руб., Информационный - 3000руб.'...\n\nДля большего ознакомления и подробностей, пишите на почту (вкладка 'контакты' в 'шапке' сайта!)");

if (typeSite == "Сайт-визитка"){
    let conf = confirm("Вы выбрали тип сайта: 'Сайт-визитка', далее?")
        if (conf == true){
            objFull["Сайт-визитка"] = 2000;
			objTerms["Первый срок"] = 3;
}
};
if (typeSite == 'Шаблонный'){
    let conf = confirm("Вы выбрали тип сайта: 'Шаблонный', далее?")
        if (conf == true){
            objFull["Шаблонный"] = 1500;
			objTerms["Второй срок"] = 2;
}
};
if (typeSite == 'Лендинг'){
    let conf = confirm("Вы выбрали тип сайта: 'Лендинг', далее?")
        if (conf == true){
            objFull["Лендинг"] = 2500;
			objTerms["Третий срок"] = 4;
}
};
if (typeSite == 'Информационный'){
    let conf = confirm("Вы выбрали тип сайта: 'Информационный', далее?")
        if (conf == true){
            objFull["Информационный"] = 3000;
			objTerms["Четвертый срок"] = 5;
}
};

let designSite = prompt("Какой дизайн сайта ты хочешь себе?\n(Для выбора какого-либо дизайна сайта, просто введи его название!)\n\nВарианты: 'Классический - 2000руб., Информационный - 1500руб., Корпоративный - 2500руб., Рисованный - 3000руб.'...\n\nДля большего ознакомления и подробностей, пишите на почту (вкладка 'контакты' в 'шапке' сайта!)");

if (designSite == 'Классический'){
    let conf = confirm("Вы выбрали дизайн сайта: 'Классический', далее?")
        if (conf == true){
            objFull["Классический"] = 2000;
} 
}; 
if (designSite == 'Информационный'){
    let conf = confirm("Вы выбрали дизайн сайта: 'Информационный', далее?")
        if (conf == true){
            objFull["Информационный"] = 1500;
} 
}; 
if (designSite == 'Корпоративный'){
    let conf = confirm("Вы выбрали дизайн сайта: 'Корпоративный', далее?")
        if (conf == true){
            objFull["Корпоративный"] = 2500;
			objTerms["Пятый срок"] = 3;
} 
}; 
if (designSite == 'Рисованный'){
    let conf = confirm("Вы выбрали дизайн сайта: 'Рисованный', далее?")
        if (conf == true){
            objFull["Рисованный"] = 3000;
			objTerms["Шестой срок"] = 3;
} 
};     

let adaptiveSite = prompt("Какую адаптивность сайта ты хочешь себе?\n(Для выбора какой-либо адаптивности сайта, просто введи его название!)\n\nВарианты: 'Адаптивный - 2000руб., Неадаптивный - 1500руб.\n\nДля большего ознакомления и подробностей, пишите на почту (вкладка 'контакты' в 'шапке' сайта!)");

if (adaptiveSite == 'Адаптивный'){
    let conf = confirm("Вы выбрали 'Адаптивный' сайт, далее?")
        if (conf == true){
            objFull["Адаптивный"] = 2000;
			objTerms["Седьмой срок"] = 4;
} 
}; 
if (adaptiveSite == 'Неадаптивный'){
    let conf = confirm("Вы выбрали 'Неадаптивный' сайт, далее?")
        if (conf == true){
            objFull["Неадаптивный"] = 1500;
			objTerms["Восьмой срок"] = 2;
} 
}; 
let objSum = 0;
for (let key in objFull){
    objSum += objFull[key];
};

let objSumTerms = 0;
for (let key in objTerms){
	objSumTerms += objTerms[key];
};

confirm("Конечная стоимость сайта: " + objSum + "руб.\n\nСроки для созданания сайта: " + objSumTerms + " дней." + "\n\nЕсли что-то не устраивает, вы всегда можете обратиться  ко мне по почте (ссылку на нее можно найти в 'шапке' сайта).")*/

$(document).ready(function(){	
	function calc(){
	let sumCalc = parseInt($('#sel_1 option:selected').val()) + parseInt($('#sel_2 option:selected').val()) + parseInt($('#sel_3 option:selected').val());
		if(isNaN(sumCalc)) sumCalc = 0;
	let daysCalc = parseInt($('#sel_1 option:selected').attr('days')) + parseInt($('#sel_2 option:selected').attr('days')) + parseInt($('#sel_3 option:selected').attr('days'));
		if(isNaN(daysCalc)) daysCalc = 0;
	$('.terms h4').text(daysCalc)
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
	let options = {
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
        };
	
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
			}, 10000));
			
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




