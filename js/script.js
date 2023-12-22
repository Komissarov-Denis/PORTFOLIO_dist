/* eslint-disable linebreak-style */
window.addEventListener('DOMContentLoaded', () => {

	const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		closeElem = document.querySelector('.menu__close');

	hamburger.addEventListener('click', () => {
		menu.classList.add('menu_active');
	});
	closeElem.addEventListener('click', () => {
		menu.classList.remove('menu_active');
	});

	//шкала процентов в skills
	const percent = document.querySelectorAll('.skills__percent'), //получ все элементы селектора
		scale = document.querySelectorAll('.skills__scale-blue');

	console.log(percent);
	console.log(scale);

	percent.forEach( (item, i) => {
		scale[i].style.width = item.innerHTML;
	});

	// checkbox ready
	// function toCheckCheckbox(selector) {
	// 	const checkbox = document.querySelector(selector);
	// 	checkbox.addEventListener('click', () => {
	// 		if (checkbox.checked) {
	// 			console.log ('Checkbox is checked');
	// 			checkbox.style.border = 'none';
	// 		} else {
	// 			checkbox.style.border = 'red';
	// 			console.log ('Checkbox is not checked');
	// 		}
	// 	});
	// }
	// toCheckCheckbox('#checkbox');	

	$(document).ready(function(){

		//карусель
		// $('.carousel__inner-wrapper').slick({
		// 	// dots: true,
		// 	// infinite: true,
		// 	speed: 1000,
		// 	slidesToShow: 1,
		// 	adaptiveHeight: true,
		// 	autoplay: true,
		// 	autoplaySpeed: 3000,
		// 	prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/arrow_left.png" alt="arrow_left"></button>',
		// 	nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/arrow_right.png" alt="arrow_right"></button>',
		// 	responsive: [{
		// 		breakpoint: 991.98,
		// 		settings: {
		// 			dots: true,
		// 			arrows: false
		// 		}
		// 	}]
		// });


		//каталог - табы
		// $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		// 	$(this)
		// 	  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		// 	  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
		// });

		// кнопки/ссылки промо
		$('.promo__btns').on('click', 'a:not(.promo__btn_active)', function() {
			$(this)
				.addClass('promo__btn_active').siblings().removeClass('promo__btn_active');
		});

		//каталог - слайдер
		// function toggleSlide(item) {
		// 	$(item).each(function(i) {
		// 		$(this).on('click', function(e) {
		// 			e.preventDefault();
		// 			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
		// 			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
		// 		})
		// 	});
		// };
		// toggleSlide('.catalog-item__link');
		// toggleSlide('.catalog-item__list-link');


		//modal-window  $('')-получаем данные документа по атрибуту
		// $('[data-modal=consultation]').on('click', function() {
		// 	$('.modal-window__overlay, #consultation').fadeIn('slow');
		// 	$('[data-modal=consultation]').fadeOut('slow');
		// });
		// $('.modal-window__close').on('click', function() {
		// 	$('.modal-window__overlay, #consultation, #order, #thanks').fadeOut('slow');
		// 	$('[data-modal=consultation]').fadeIn('slow');
		// 	$('.button_mini').fadeIn('slow');
		// });
		// $('.button_mini').each(function(i) {
		// 	$(this).on('click', function() {
		// 		// $('#order .modal-window__description').text($('.catalog-item__subtitle').eq(i).text());
										
		// 		const brandPulse = $('.catalog-item__subtitle').eq(i).text();
		// 		// console.log(brandPulse);
		// 		const pricePulse = $('.catalog-item__price').eq(i).text();
		// 		// console.log(pricePulse);
		// 		const text = [brandPulse, pricePulse].join(', цена: ');
		// 		// console.log(text);
		// 		$('#order .modal-window__description').text(text);

		// 		const orderText = $('#order .modal-window__description').text();			
		// 		$('input[name=order]').val(orderText);
		// 		console.log(orderText);
				
		// 		$('.modal-window__overlay, #order').fadeIn('slow');
		// 		$('.button_mini').fadeOut('slow');
		// 	});		
		// });


		//валидация форм
		function validateForms(form) {
			$(form).validate({
				rules: {
					name: {
						required: true,
						minlength: 3
					},
					phone: 'required',
					email: {
						required: true,
						email: true
					},
					message: {
						required: true,
						minlength: 9
					},				
					checkbox: 'required'
				},
				messages: {
					name: {
						required: 'Введите имя!',
						minlength: jQuery.validator.format('Введите не менее {0} символов!')
					},
					phone: 'Введите номер телефона!',
					email: {
					required: 'Введите почту!',
					email: 'Неправильно введен адрес почты!'
					},
					message: {
						required: 'Введите причину обращения!',
						minlength: jQuery.validator.format('Введите не менее {0} символов!')
					},
					checkbox: '√'
				}
			});
		}
		validateForms('#main-form');


		// маска формы номера телефона
		$('input[name=phone]').mask('+7 (999) 999-99-99');
		

		// отправка формы
		$('form').submit(function(e) {
			const form = e.target;	  
			if (!form.checkValidity()) {	  
			// Форма не прошла валидацию - отменить отправку
			e.preventDefault();
			e.stopImmediatePropagation();	  
			} else {
				e.preventDefault();
				$.ajax({
					type: 'POST',
					url: 'mailer/smart.php',
					data: $(this).serialize()
				}).done(function() {
					$(this).find('input').val('');
					$('#contact-me').fadeOut();
					$('#social-title').fadeOut();
					$('#social-links').fadeOut();
					$('#main-form').fadeOut();
					$('.modal-window__overlay, #thanks').fadeIn('slow');
					$('form').trigger('reset');
				});
				return false;
			}
		});

		//Smooth scroll & pageup
		// $(window).scroll(function() {
		// 	if ($(this).scrollTop() > 1500) {
		// 		$('.pageup').fadeIn();
		// 	} else $('.pageup').fadeOut();
		// });
		// $("a[href^='#up']").click(function() {
		// 	const _href = $(this).attr("href");
		// 	$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		// 	return false;
		// });

		// new WOW().init();

	});
});	