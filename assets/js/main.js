jQuery( function($){
	var body = $('body'),
		html = $('html'),
		$document = $(document),
		$header = $('.header');

	$document.scroll( function(){
		$header.toggleClass( 'scrolled', $document.scrollTop() > 0 );
	} );

	html

	.on('click', '.price__right button', function() {
		var that = $(this),
			price = that.closest('.price'),
			price__left_bottom = price.find( '.price__left-bottom' );

		that.toggleClass('active');
		price.toggleClass('active');

		price__left_bottom.css( {
			'height': ( that.hasClass( 'active' ) ) ? price__left_bottom[0] .scrollHeight + 'px' : '0px',
			'border-top-width': ( that.hasClass( 'active' ) ) ? '1px' : '0px'
		} );
	} )

	.on( 'click', '.menu__list form:not(.active) .search', function(e){
		e.preventDefault();

		var that = $(this),
			form = that.closest( 'form' );

		form.addClass('active');

		body.addClass('search__open');
	} )

	.on( 'click', 'body.search__open', function(e){
		var that = $(e.target),
			closest = that.closest('#main-search');

		if( closest.length != 0 ) return;

		body.removeClass('search__open');
		$('.menu__list form.active').removeClass('active');
	} )

	.on( 'click', 'body.main_menu__open', function(e){
		var that = $(e.target),
			closest = that.closest('.top_main_menu');

		if( closest.length != 0 ) return;

		body.removeClass('main_menu__open');
		$('.top_main_menu.active').removeClass('active');
	} )

	.on( 'click', 'body.mobile_menu__open', function(e){
		var that = $(e.target),
			closest = that.closest('.top_main_menu_mobile');

		if( closest.length != 0 ) return;

		body.removeClass('mobile_menu__open');
		$('.top_main_menu_mobile.active').removeClass('active');
	} )

	.on( 'change', '.file__upload', function(e){
		var that = $(this),
			container = $('.upload__container');

		if ( that[0].files.length > 4 ) {
			alert( 'Только 4 файлов максимум' );

			e.preventDefault();

			return;
		}

		$('.input__photo img').remove();

		$(this.files).each(function(){
			var file = this,
				reader = new FileReader();

			reader.onload = function (e) {
				container.prepend('<a href="' + e.target.result + '" data-fancybox="download-gallery"><img src="' + e.target.result + '"></a>');
			};

			reader.readAsDataURL(file);
		});
	} )

	.on( 'click', 'a[href^="#"]:not([href$="#"])', function(e){
		var that = $(this),
			aid = that.attr('href');

		if( $(aid).length == 0 ) return;

		$('html,body').animate( {
			scrollTop: $(aid).offset().top - 120
		}, 300 );
	} )

	.on( 'click', '.add__plus .inputs .remove_input', function(e){
		e.preventDefault();

		var that = $(this),
			closest = that.closest( 'span' );

		closest.remove();
	} )

	.on( 'click', '.add__sign .button', function(e){
		e.preventDefault();

		var that = $(this),
			closest = that.closest( '.add__plus' ),
			inputs = closest.find( '.inputs' ),
			plus_or_minus = ( that.hasClass( 'red__button' ) ) ? 'minus[]' : 'plus[]';

		inputs.append( '<span><input type="text" name="' + plus_or_minus + '"><button class="remove_input"></button></span>' );
	} )

	.on( 'click', 'header .border', function(e){
		e.preventDefault();

		$('.top_main_menu').addClass('active');
		body.addClass( 'main_menu__open' );
	} )

	.on( 'click', '.top_main_menu .btn-close', function(e){
		e.preventDefault();

		$('.top_main_menu').removeClass('active');
		body.removeClass( 'main_menu__open' );
	} )

	.on( 'click', 'header .burger', function(e){
		e.preventDefault();

		$('.top_main_menu_mobile').addClass('active');
		body.addClass( 'mobile_menu__open' );
	} )

	.on( 'click', '.top_main_menu_mobile .btn-close', function(e){
		e.preventDefault();

		$('.top_main_menu_mobile').removeClass('active');
		body.removeClass( 'mobile_menu__open' );
	} )

	.on( 'click', '.rating .rating-item', function(e){
		e.preventDefault();

		var that = $(this),
			value = that.attr('data-rate'),
			closest = that.closest( '.rating' );

		$('[name="rating"]').val( value );

		closest.attr( 'data-rate', value );
	} )
} );