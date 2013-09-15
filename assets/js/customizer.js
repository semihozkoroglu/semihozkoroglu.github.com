/*
 * Joiee v1.0 - Customizer JS
 *
 * This file is part of Joiee, a HTML template build for sale at ThemeForest.
 * For questions, suggestions or support request, please mail me at maimairel@yahoo.com
 *
 * Development Started:
 * December 10, 2012
 *
 */

;(function( $, window, document, undefined ) {
	function clamp( val ) {
		return Math.min(1, Math.max(0, val));
	}

	function rgbToHSL(r, g, b){
		r = r / 255; g = g / 255; b = b / 255;

        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2, d = max - min;

        if (max === min) {
            h = s = 0;
        } else {
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2;               break;
                case b: h = (r - g) / d + 4;               break;
            }
            h /= 6;
        }
        return { h: h * 360, s: s, l: l };
	}

	function hslToRGB(h, s, l) {
        h = (h % 360) / 360;
        var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        var m1 = l * 2 - m2;

        return {
        	r: hue(h + 1/3) * 255, 
        	g: hue(h)       * 255, 
        	b: hue(h - 1/3) * 255
        }

        function hue(h) {
            h = h < 0 ? h + 1 : (h > 1 ? h - 1 : h);
            if      (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
            else if (h * 2 < 1) return m2;
            else if (h * 3 < 2) return m1 + (m2 - m1) * (2/3 - h) * 6;
            else                return m1;
        }
    }

	function hexToRgb(color) {
		var num = parseInt(color.charAt(0)==='#'?color.substring(1) : color, 16);
        return { r: num >> 16, g: num >> 8 & 255, b: num & 255 };
	}

	function rgbToHex(r, g, b) {
		return ((b | g << 8 | r << 16) | 1 << 24).toString(16).slice(1);
	}

	function darken(hex, percent) {
	    var rgb = hexToRgb(hex);
	    var hsl = rgbToHSL(rgb.r, rgb.g, rgb.b);
	    hsl.l = clamp( hsl.l - parseFloat(percent / 100.0) );

	    rgb = hslToRGB(hsl.h, hsl.s, hsl.l);

	    return '#' + rgbToHex(rgb.r, rgb.g, rgb.b).toLowerCase();
	}

	var JoieeCustomizer = function( element, presets, targets ) {
		return this.init( element, presets, targets );
	}

	JoieeCustomizer.prototype = {
		init: function( element, presets, targets ) {
			this.element = $( element );
			this.presets = presets;
			this.targets = targets;

			this._attachPresets();

			this.modal = this._attachModal();

			this.element.append( $( '<a href="#joiee-customizer-modal" class="btn btn-mini btn-block btn-inverse" data-toggle="modal">Get CSS</a>' ) );

			this.element.addClass( 'active' );

			presets.length && this._generateCSS( presets[0] );
		}, 

		_attachModal: function() {
			var modal = $( '<div id="joiee-customizer-modal" class="modal hide fade"><div class="modal-body"><textarea readonly rows="" cols="" style="width: 100%; height: 400px;"></textarea></div><div class="modal-footer"><a href="#" data-dismiss="modal" class="btn btn-primary">Close</a></div></div>' );
			return modal.appendTo( this.element );
		}, 

		_attachPresets: function() {
			var ul = $( '<ul class="color-list clearfix"></ul>' ), 
				li = $( '<li></li>' ), 
				that = this;

			$.each( this.presets, function( k, color ) {
				var span = $( '<span data-color="' + color + '" class="color-pick" style="background-color: ' + color + '"></span>' );
				li.clone().append( span ).appendTo( ul );
			});

			ul.on( 'click', '.color-pick', function( e ) {
				var css = that._generateCSS( $( this ).data( 'color' ) );
				that._attachCSS( css );
				e.preventDefault();
			});

			this.element.append( ul );
		}, 

		_filter: function( color, filterCallback ) {
			if( typeof filterCallback === 'undefined' ) return color;

			return filterCallback.apply( this, [ color ] );
		}, 

		_attachCSS: function( css ) {
			var cssContainer = $( '#joiee-custom-css' ).length? $( '#joiee-custom-css' ) : $( '<div id="joiee-custom-css"></div>' ).appendTo( 'body' );
			cssContainer.html( $( '<style>' + css + '</style>') );
		}, 

		_generateCSS: function( color ) {
			var css = '/* Save and include the following CSS styles on your page. */\n\n', that = this;
			$.map( this.targets, function( data, selector ) {
				var styles = '';
				var attributes = typeof data[ 'attributes' ] !== 'undefined'? data.attributes.toString().split(',') : [];

				$.each(attributes, function( i, k ) {
					styles += '\t' + k + ': ' + that._filter( color, data[ 'filter' ] ) + ';\n';
				});

				css += selector + ' {\n' + styles + '}\n\n';
			});

			this.modal.find( 'textarea' ).val( css );

			return css;
		}
	}

	$.fn.joieeCustomizer = function( presets, targets ) {
		return this.each(function() {
			new JoieeCustomizer( this, presets, targets );
		});
	}

	$( document ).ready( function() {
		$( '#joiee-customizer' ).joieeCustomizer([ '#8ecd44', '#77a6ee', '#f78234', '#d84d5a', '#4dd0d8', '#d34c92' ], {
			'a': {
				attributes: 'color'
			}, 
			'a:hover': {
				attributes: 'color', 
				filter: function( color ) {
					return darken( color, 15 );
				}
			}, 
			'#main-nav ul li.active': {
				attributes: 'border-top-color'
			}, 
			'#main-nav ul li.active:before': {
				attributes: 'border-top-color'
			}, 
			'#main-nav ul ul li a:hover': {
				attributes: 'background-color'
			}, 
			'.blog .post .side .post-type': {
				attributes: 'background-color'
			}, 
			'.blog .post .content .meta li a:hover': {
				attributes: 'color'
			}, 
			'.blog .post .wrap .read-more a': {
				attributes: 'background-color'
			}, 
			'.portfolio-filter ul li.active a, .portfolio-filter ul li:hover a': {
				attributes: 'background-color'
			}, 
			'.portfolio-filter ul li.active a:after': {
				attributes: 'border-top-color'
			}, 
			'.portfolio-items .item .image .overlay .actions li a:hover': {
				attributes: 'color'
			}, 
			'.portfolio-row .read-more a': {
				attributes: 'background-color'
			}, 
			'.portfolio .portfolio-meta span:before': {
				attributes: 'background-color'
			}, 
			'.highlight': {
				attributes: 'color'
			}, 
			'.underline': {
				attributes: 'border-bottom-color'
			}, 
			'.underline-heading h1, .underline-heading h2, .underline-heading h3, .underline-heading h4, .underline-heading h5, .underline-heading h6': {
				attributes: 'border-bottom-color'
			}, 
			'.check-list li:before': {
				attributes: 'color'
			}, 
			'.arrow-list li:before': {
				attributes: 'border-left-color'
			}, 
			'.skill .circles span.filled': {
				attributes: 'background-color'
			}, 
			'.our-team .photo .info': {
				attributes: 'border-left-color'
			}, 
			'.our-team .social ul': {
				attributes: 'border-top-color'
			}, 
			'.service .read-more a': {
				attributes: 'background-color'
			}, 
			'.highlights.bold .highlight-item:hover .icon': {
				attributes: 'background-color'
			}, 
			'.callout .link': {
				attributes: 'background-color'
			}, 
			'.callout .link:before': {
				attributes: 'border-right-color'
			}, 
			'.portfolio-carousel .carousel-nav li a': {
				attributes: 'background-color'
			}, 
			'.latest-blog .overlay .post-type': {
				attributes: 'background-color'
			}, 
			'.accordion .accordion-header': {
				attributes: 'border-left-color'
			}
		});
	});

}) (jQuery, window, document);