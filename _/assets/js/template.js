/*
 * Joiee v1.0 - Template JS
 *
 * This file is part of Joiee, a HTML template build for sale at ThemeForest.
 * For questions, suggestions or support request, please mail me at maimairel@yahoo.com
 *
 * Development Started:
 * December 10, 2012
 *
 */

;(function( $, window, document, undefined ) {
	
	$(document).ready(function() {

		// Dropdown Menu
		$( '#main-nav ul' ).on( 'mouseenter', ' > li', function(e) {
			$( this ).children('ul').hide().stop( true, true ).slideDown( { easing: 'easeOutExpo', duration: 'fast' } );
			e.stopPropagation();
		}).on( 'mouseleave', ' > li', function(e) {
			$( this ).children('ul').stop( true, true ).slideUp( { easing: 'easeOutExpo', duration: 'fast' } );
		});

		// Select Nav
		$( '#main-nav ul' ).attr( 'id', 'main-nav-list' );
		$.isFunction( selectnav ) && selectnav( 'main-nav-list', {
			label: '--- Navigation --- ', 
			indent: '-'
		});

		// Accordion
		$( '.accordion' ).accordion();

		// Isotope for Filtering
		if( $.fn.isotope && $.fn.waitForImages ) {

			var $container = $( '.portfolio-items.filterable' );
			var $filter = $( '.portfolio-filter' );

			$container.waitForImages(function() {
				$container.isotope({
					resizable: false, // disable normal resizing
					masonry: { columnWidth: $container.width() / 12 }
				});

				$(window).smartresize(function(){
				  $container.isotope({
				    // update columnWidth to a percentage of container width
				    masonry: { columnWidth: $container.width() / 12 }
				  });
				});

				$filter.on( 'click', 'a', function( e ) {
					var filter = $( this ).data( 'filter' );
					$container.isotope({
						filter: filter
					});
					$( 'li', $filter ).removeClass( 'active' );
					$( this ).parent().addClass( 'active' );

					e.preventDefault();
				});
			});
		}

		if( $.fn.carouFredSel && $.fn.waitForImages ) {

			$( '.portfolio-carousel' ).each(function() {
				$( this ).waitForImages(function() {
					$( this ).find('.portfolio-items' ).carouFredSel({
						items: {
							height: 'auto', 
							visible: {
								min: 1, 
								max: 3
							}
						}, 
						responsive: true, 
						auto: {
							play: false
						}, 
						scroll: {
							items: 1, 
							easing: 'easeInOutExpo'
						}, 
						swipe: {
							onTouch: true
						}, 
						next: {
							button: $( this ).find( '.carousel-nav .carousel-next' )
						}, 
						prev: {
							button: $( this ).find( '.carousel-nav .carousel-prev' )
						}
					});
				});
			});

		}

		// FitVids for fluid width videos
		if( $.fn.fitVids ) {
			$('.media.video').fitVids();
		}

		// Tweets Widget
		if( $.fn.tweet ) {
			$('.tweet-stream').tweet({
				username: "envato", 
				template: "{text}{time}"
			});
		}

		// Flickr Feed Widget
		if( $.fn.jflickrfeed ) {
			$('.flickr-stream ul').jflickrfeed({
				qstrings: {
					id: '52617155@N08'
				}, 
				limit: 9, 
				itemTemplate: '<li><a href="{{link}}" title="{{title}}" target="_blank"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
			});
		}

		// Google Maps
		if( $.fn.gmap ) {
			$('.google-maps').gmap({
				zoom: 14, 
				center: '-6.14687, 106.850746'
			});
		}

		// Tooltips
		if( $.fn.tooltip() ) {
			$('[rel="tooltip"]').tooltip();
		}

		// Flexslider
		if( $.fn.flexslider ) {

			$('.slider-wrap .flexslider').waitForImages(function() {
				$( this ).flexslider({
					animation: 'slide', 
					slideshowSpeed: 4000, 
					directionNav: false
				});
			});

			$( '.portfolio .flexslider' ).waitForImages(function() {
				$( this ).flexslider({
					controlNav: false
				});
			});
		}

		// Nivo Slider
		if( $.fn.nivoSlider ) {

			$( '.slider-wrap .nivoslider' ).waitForImages(function() {
				$( this ).nivoSlider({
					directionNav: false
				});
			});
		}

		// Revolution Slider
		if( $.fn.revolution ) {

			$( '.fullwidthbanner' ).revolution({
				delay: 6000, 
				startheight: 550, 
				fullWidth: 'on', 
				shadow: 0, 
				navigationArrows: 'verticalcentered', 
				navigationStyle: 'none'
			});

		}

		// Sharrre
		if( $.fn.sharrre ) {
			$('.post .share .twitter').sharrre({
			  share: {
			    twitter: true
			  },
			  enableHover: false,
			  enableTracking: true,
			  click: function(api, options){
			    api.simulateClick();
			    api.openPopup('twitter');
			  }
			});
			$('.post .share .facebook').sharrre({
			  share: {
			    facebook: true
			  },
			  enableHover: false,
			  enableTracking: true,
			  click: function(api, options){
			    api.simulateClick();
			    api.openPopup('facebook');
			  }
			});
			$('.post .share .googleplus').sharrre({
			  share: {
			    googlePlus: true
			  }, 
			  urlCurl: 'php/sharrre.php', 
			  enableHover: false,
			  enableTracking: true,
			  click: function(api, options){
			    api.simulateClick();
			    api.openPopup('googlePlus');
			  }
			});
		}
	});
	
}) (jQuery, window, document);