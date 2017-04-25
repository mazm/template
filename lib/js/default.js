	jQuery(document).ready(function($) {
		$('[placeholder]').placeHolder(); // place holder
		$('body').isFocus();
		$('.inbox, .sbox').setBoxSize();
		$(".customfile input[type='file']").customFile();
		$(".tab > li > a").tabMenu();
		$('input.custorm.ismobile').isCheck();
		$('input,select,textarea').cancelZoom();

		var lnbNum = $('.faq-tab > ul > li').length;
		$('.faq-tab').addClass('num' + lnbNum);
		$('.item').matchHeight();
		$('.local-gov2').find('.local-infor-cont').matchHeight({ target: $('.local-gov2').find('table') });
		$('.local-gov2').find('.lc-infor-cont').matchHeight({ target: $('.local-gov2').find('table') });

		$('.pTop a').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					$('.top-link li:first-child a').focus();
					return false;
				}
			}
		});
	});
















