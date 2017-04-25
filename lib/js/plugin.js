	$.fn.isCheck = function() {
			var $mobileCheck = $('input.custorm.ismobile');
			$mobileCheck.change(function(e) {
				if($(this).is(':checked')) {
					$(this).parent().addClass('isChecked');
				} else {
					$(this).parent().removeClass('isChecked');
				}
				e.defaultPrevented();
			});
	};
	$.fn.tabMenu = function () {
		$('.tabMenu .tab > li > a').on('click', function(e) {
			$('.tabMenu .tab > li > a').each(function() {
				$(this).parent().removeClass('active');
			});
			$(this).parent().addClass('active');

			var currentTab = $(this).attr('href');
			$('.tabMenu .tabcontainer').hide();
			$(currentTab).show();
			e.preventDefault();
		});
		// $('.tabcontainer').hide();
		$('.tabMenu .tabcontainer:first').show();
		$('.tabMenu .tab > li:first-child').addClass('active');
	};
	// $.fn.lnbTabMenu = function () {
	// 	$('.lnbTab > li > a').on('click', function(e) {
	// 		$('.lnbTab > li > a').each(function() {
	// 			$(this).parent().removeClass('active');
	// 		});
	// 		$(this).parent().addClass('active');
	//
	// 		var currentTab = $(this).attr('href');
	// 		$('.lnbTabWrap .tabcontainer').hide();
	// 		$(currentTab).show();
	// 		e.preventDefault();
	// 	});
	// 	$('.lnbTabWrap .tabcontainer').hide();
	// 	$('.lnbTabWrap .tabcontainer:first').show();
	// 	$('.lnbTabWrap .lnbTab > li:first-child').addClass('active');
	// };

	// 	$('.lnb > li').each(function() {
	// 		var index = $('.lnb > li').index(this)
	// 		$(this).children('.sm').addClass('num' + index);
	// 	});
	// };
	$.fn.acordianMenu = function() {
		$('.depth3').hide();
		$('.depth2 > li.active .depth3').show()
		$('.depth2 > li > a').on('click', function(e) {
			var $this = $('.depth2 > li > a');
			var checkElement = $(this).next('.depth3');

			// var hasChilden = checkElement.is('.depth3');
			//
			// if((checkElement.is('.depth3')) && (checkElement.is(':visible'))) {
			// 	$('.depth3:visible').slideUp('fast').parent().removeClass('active');
			// }
			if((checkElement.is('.depth3')) && (!checkElement.is(':visible'))) {
				$('.depth3:visible').slideUp().parent().removeClass('active');
				checkElement.slideDown().parent().addClass('active');
				e.preventDefault();
			}
		});
	};
	$.fn.acordianMenuM = function() {
		$('.depth2').hide();
		$('.depth3').hide();
		$('.depth1.active .depth2').show()
		$('.depth1 > a').on('click', function(e) {
			var $this = $('.depth1 > a');
			var checkElement = $(this).next('.depth2');

			// if((checkElement.is('.depth2')) && (checkElement.is(':visible'))) {
			// 	$('.depth2:visible').slideUp('fast').parent().removeClass('active');
			// }
			if((checkElement.is('.depth2')) && (!checkElement.is(':visible'))) {
				$('.depth2:visible').slideUp().parent().removeClass('active');
				checkElement.slideDown().parent().addClass('active');
				e.preventDefault();
			}
			if((checkElement.is('.depth3')) && (!checkElement.is(':visible'))) {
				$('.depth3:visible').slideUp().parent().removeClass('active');
				checkElement.slideDown().parent().addClass('active');
				e.preventDefault();
			}
		});
	};
	$.fn.placeHolder = function() {
		/* place holder */
		if(!Modernizr.input.placeholder){
			$('[placeholder]').focus(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
					input.removeClass('placeholder');
				}}).blur(function() {
				var input = $(this);
				if (input.val() === '' || input.val() === input.attr('placeholder')) {
					input.addClass('placeholder');
					input.val(input.attr('placeholder'));
				}
			}).blur();
			$('[placeholder]').parents('form').submit(function() {
				$(this).find('[placeholder]').each(function() {
					var input = $(this);
					if (input.val() == input.attr('placeholder')) {
						input.val('');
					}
				});
			});
		}
	};
	$.fn.isFocus = function() {
		/* tabkey focus */
		$("body").delegate("input[type=text]", "focus blur", function(event) {
			var elem = $(this);
			setTimeout(function() {
				elem.toggleClass("focused", elem.is(":focus") );
			}, 0);
		});
	};
	$.fn.setBoxSize = function() {
		$('.inbox, .sbox').each(function() {
			var boxsize = $(this).attr('data-size');
			$(this).css({ 'width': boxsize })
		});
	};
	$.fn.customFile = function() {
		$(".customfile input[type='file']").change(function(){
			var fileName = $(this).val().split(/\\/).pop();
			$(this).prev('.fileName').val(fileName);
		});
	};

	$.fn.allMenu = function () {
		$('.tab > li > a').on('click', function(e) {
			$('.tab > li > a').each(function() {
				$(this).parent().removeClass('active');
			});
			$(this).parent().addClass('active');

			var currentTab = $(this).attr('href');
			$('.tabcontainer').hide();
			$(currentTab).show();
			e.preventDefault();
		});
		$('.tabcontainer:first').show();
		$('.tab > li:first-child').addClass('active');
	};

// * iOS zooms on form element focus. This script prevents that behavior.
// * <meta name="viewport" content="width=device-width,initial-scale=1">
//      If you dynamically add a maximum-scale where no default exists,
//      the value persists on the page even after removed from viewport.content.
//      So if no maximum-scale is set, adds maximum-scale=10 on blur.
//      If maximum-scale is set, reuses that original value.
// * <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=2.0,maximum-scale=1.0">
//      second maximum-scale declaration will take precedence.
// * Will respect original maximum-scale, if set.
// * Works with int or float scale values.
	function cancelZoom(){function e(e){t.content=n+("blur"==e.type?n.match(a,"")?"":o+10:o+1)}var t,n,c=document,o=",maximum-scale=",a=/,*maximum\-scale\=\d*\.*\d*/;this.addEventListener&&c.querySelector&&(t=c.querySelector('meta[name="viewport"]'),n=t.content,this.addEventListener("focus",e,!0),this.addEventListener("blur",e,!1))}$.fn.cancelZoom=function(){return this.each(cancelZoom)};
	// Use
	// $('input,select,textarea').cancelZoom();

/* ------------------------- orientationchange ------------------------- */
// ! A fix for the iOS orientationchange zoom bug. Script by @scottjehl, rebound by @wilto.MIT / GPLv2 License. https://github.com/scottjehl/iOS-Orientationchange-Fix
(function(a){function m(){d.setAttribute("content",g),h=!0}function n(){d.setAttribute("content",f),h=!1}function o(b){l=b.accelerationIncludingGravity,i=Math.abs(l.x),j=Math.abs(l.y),k=Math.abs(l.z),(!a.orientation||a.orientation===180)&&(i>7||(k>6&&j<8||k<8&&j>6)&&i>5)?h&&n():h||m()}var b=navigator.userAgent;if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(b)&&b.indexOf("AppleWebKit")>-1))return;var c=a.document;if(!c.querySelector)return;var d=c.querySelector("meta[name=viewport]"),e=d&&d.getAttribute("content"),f=e+",maximum-scale=1",g=e+",maximum-scale=10",h=!0,i,j,k,l;if(!d)return;a.addEventListener("orientationchange",m,!1),a.addEventListener("devicemotion",o,!1)})(this);

/*!
 * mqGenie v0.5.0
 * Adjusts CSS media queries in browsers that include the scrollbar's width in the viewport width so they fire at the intended size
 * Returns the mqGenie object containing .adjusted, .width & fontSize for use in re-calculating media queries in JavaScript with mqAdjust(string)
 * Copyright (c) 2014 Matt Stow
 * http://mattstow.com
 * Licensed under the MIT license
 */
(function(d,b){if(!b.addEventListener){d.mqGenie={adjustMediaQuery:function(i){return i}};return}function e(k,l){var o=k.cssRules?k.cssRules:k.media,n,p=[],j=0,m=o.length;for(j;j<m;j++){n=o[j];if(l(n)){p.push(n)}}return p}function a(i){return e(i,function(j){return j.constructor===CSSMediaRule})}function g(j){var k=d.location,i=b.createElement("a");i.href=j;return i.hostname===k.hostname&&i.protocol===k.protocol}function c(i){return i.ownerNode.constructor===HTMLStyleElement}function f(i){return i.href&&g(i.href)}function h(){var n=b.styleSheets,k,m=n.length,j=0,l=[];for(j;j<m;j++){k=n[j];if(f(k)||c(k)){l.push(k)}}return l}b.addEventListener("DOMContentLoaded",function(){d.mqGenie=(function(){var r=b.documentElement;r.style.overflowY="scroll";var l=d.innerWidth-r.clientWidth,s={adjusted:l>0,fontSize:parseFloat(d.getComputedStyle(r).getPropertyValue("font-size")),width:l,adjustMediaQuery:function(j){if(!mqGenie.adjusted){return j}var i=j.replace(/\d+px/gi,function(w){return parseInt(w,10)+mqGenie.width+"px"});i=i.replace(/\d.+?em/gi,function(w){return((parseFloat(w)*mqGenie.fontSize)+mqGenie.width)/mqGenie.fontSize+"em"});return i}};if(s.adjusted){if("WebkitAppearance" in r.style){var k=/Chrome\/(\d*?\.\d*?\.\d*?\.\d*?)\s/g,q=navigator.userAgent.match(k),u;if(q){q=q[0].replace(k,"$1");u=q.split(".");u[0]=parseInt(u[0]);u[2]=parseInt(u[2]);u[3]=parseInt(u[3]);if(u[0]<=29){if(u[0]===29&&u[2]<1548&&u[3]<57){s.adjusted=false}else{if(u[0]<29){s.adjusted=false}}}}else{s.adjusted=false}if(!s.adjusted){return s}}var t=h(),m=t.length,p=0,n,v;for(p;p<m;p++){n=a(t[p]);v=n.length;for(var o=0;o<v;o++){n[o].media.mediaText=n[o].media.mediaText.replace(/m(in|ax)-width:\s*(\d|\.)+(px|em)/gi,function(i){if(i.match("px")){return i.replace(/\d+px/gi,function(j){return parseInt(j,10)+s.width+"px"})}else{return i.replace(/\d.+?em/gi,function(j){return((parseFloat(j)*s.fontSize)+s.width)/s.fontSize+"em"})}})}}}return s})()})})(window,document);

/*
 * jquery-match-height 0.7.0 by @liabru
 * http://brm.io/jquery-match-height/
 * License MIT
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,i=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),n=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-i(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(n-a))<=o?r[r.length-1]=s.add(e):r.push(e),n=a}),r},n=function(e){var o={
	byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=n(e);if(o.remove){var i=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(i)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.0",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
	r._afterUpdate=null,r._rows=a,r._parse=i,r._parseOptions=n,r._apply=function(e,o){var s=n(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
	"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),n=0;if(s.target)n=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),i=e.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block");var a={
	display:i};a[s.property]="",e.css(a),e.outerHeight(!1)>n&&(n=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=i(e.css("border-top-width"))+i(e.css("border-bottom-width")),o+=i(e.css("padding-top"))+i(e.css("padding-bottom"))),e.css(s.property,n-o+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
	this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),i=o.attr("data-mh")||o.attr("data-match-height");i in e?e[i]=e[i].add(o):e[i]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(i,a){if(a&&"resize"===a.type){var n=t(window).width();if(n===e)return;e=n;
}i?-1===o&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})});

/*
* rwdImageMaps jQuery plugin v1.6
* Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
* Copyright (c) 2016 Matt Stow
* https://github.com/stowball/jQuery-rwdImageMaps
* http://mattstow.com
* Licensed under the MIT license
*/
;(function(a){a.fn.rwdImageMaps=function(){var c=this;var b=function(){c.each(function(){if(typeof(a(this).attr("usemap"))=="undefined"){return}var e=this,d=a(e);a("<img />").on('load',function(){var g="width",m="height",n=d.attr(g),j=d.attr(m);if(!n||!j){var o=new Image();o.src=d.attr("src");if(!n){n=o.width}if(!j){j=o.height}}var f=d.width()/100,k=d.height()/100,i=d.attr("usemap").replace("#",""),l="coords";a('map[name="'+i+'"]').find("area").each(function(){var r=a(this);if(!r.data(l)){r.data(l,r.attr(l))}var q=r.data(l).split(","),p=new Array(q.length);for(var h=0;h<p.length;++h){if(h%2===0){p[h]=parseInt(((q[h]/n)*100)*f)}else{p[h]=parseInt(((q[h]/j)*100)*k)}}r.attr(l,p.toString())})}).attr("src",d.attr("src"))})};a(window).resize(b).trigger("resize");return this}})(jQuery);

/*
 * DD ScrollSpy Menu Script (c) Dynamic Drive (www.dynamicdrive.com)
 * Last updated: Aug 1st, 14'
 * Visit http://www.dynamicdrive.com/ for this script and 100s more.
 */
// Aug 1st, 14': Updated to v1.2, which supports showing a progress bar inside each menu item (except in iOS devices). Other minor improvements.
	Array.prototype.filter||(Array.prototype.filter=function(e){"use strict";if(null==this)throw new TypeError;var t=Object(this),o=t.length>>>0;if("function"!=typeof e)throw new TypeError;for(var s=[],r=arguments[1],n=0;n<o;n++)if(n in t){var i=t[n];e.call(r,i,n,t)&&s.push(i)}return s}),function(e){function t(e,t,o){var s=t[1]-t[0],r=o[1]-o[0];return t[0]-o[0]>=0&&t[0]-o[0]<r||t[0]-o[0]<=0&&t[0]+s>o[0]}var o={spytarget:window,scrolltopoffset:0,scrollbehavior:"smooth",scrollduration:500,highlightclass:"selected",enableprogress:"",mincontentheight:30},s=/iPhone|iPad|iPod/i.test(navigator.userAgent);e.fn.ddscrollSpy=function(r){var n=e(window),i=e(window.opera?"CSS1Compat"==document.compatMode?"html":"body":"html,body");return this.each(function(){function l(t){var o=t.find('a[href^="#"]');g=[],p="",y=0,o.each(function(t){var o=e(this),s=e(o.attr("href")),r=s.get(0),n=null;if(0==s.length)return!0;o.off("click.goto").on("click.goto",function(e){if(h.spytarget!=window||"jump"!=h.scrollbehavior&&history.pushState||(window.location.hash=o.attr("href")),"smooth"==h.scrollbehavior||0!=h.scrolltopoffset){var s=h.spytarget==window?i:d,r=1;"smooth"!=h.scrollbehavior||!history.pushState&&h.spytarget==window?s.prop("scrollTop",g[t].offsettop+r):s.animate({scrollTop:g[t].offsettop+r},h.scrollduration,function(){h.spytarget==window&&history.pushState&&history.pushState(null,null,o.attr("href"))}),e.preventDefault()}}),h.enableprogress&&(0==o.find("div."+h.enableprogress).length&&(o.css({position:"relative",overflow:"hidden"}),e('<div class="'+h.enableprogress+'" style="position:absolute; left: -100%" />').appendTo(o)),n=o.find("div."+h.enableprogress));var l=h.spytarget==window?s.offset().top:r.offsetParent==h.spytarget?r.offsetTop:r.offsetTop-h.spytarget.offsetTop;l+=h.scrolltopoffset;var a=parseInt(s.data("spyrange"))>0?parseInt(s.data("spyrange")):s.outerHeight()||h.mincontentheight,f=l+a;c==-1&&f>m-u&&(c=t),g.push({$menuitem:o,$des:s,offsettop:l,height:a,$progress:n,index:t})}),g.length>0&&(y=g[g.length-1].offsettop+g[g.length-1].height)}function a(){if(0!=g.length){var e=p,o=d.scrollTop(),s=g.filter(function(e,s){return t(e,[e.offsettop,e.offsettop+e.height],[o,o+u])});if(s.length>0){if(p=s.shift(),e&&e!=p&&e.$menuitem.removeClass(h.highlightclass),p.$menuitem.hasClass(h.highlightclass)||p.$menuitem.addClass(h.highlightclass),p.index>=c&&o>=m-u){if(h.enableprogress)for(var r=0;r<g.length;r++)g[r].$menuitem.find("div."+h.enableprogress).css("left",0);return p.$menuitem.removeClass(h.highlightclass),p=g[g.length-1],void(p.$menuitem.hasClass(h.highlightclass)||p.$menuitem.addClass(h.highlightclass))}if(h.enableprogress){var n=(o-p.offsettop)/p.height*100;p.$menuitem.find("div."+h.enableprogress).css("left",-100+n+"%");for(var r=0;r<g.length;r++)r<p.index?g[r].$menuitem.find("div."+h.enableprogress).css("left",0):r>p.index&&g[r].$menuitem.find("div."+h.enableprogress).css("left","-100%")}}else if(o>y&&h.enableprogress){p.$menuitem.removeClass(h.highlightclass);for(var r=0;r<g.length;r++)g[r].$menuitem.find("div."+h.enableprogress).css("left",0)}}}function f(){if(0!=g.length){g[0].$menu;u=d.outerHeight(),m=h.spytarget==window?i.get(0).scrollHeight:d.get(0).scrollHeight,y=0,c=-1;for(var e=0;e<g.length;e++){var t=g[e].$des,o=t.get(0),s=h.spytarget==window?t.offset().top:o.offsetParent==h.spytarget?o.offsetTop:o.offsetTop-h.spytarget.offsetTop;if(s+=h.scrolltopoffset,g[e].offsettop=s,g[e].height=parseInt(t.data("spyrange"))>0?parseInt(t.data("spyrange")):t.outerHeight()||h.mincontentheight,h.enableprogress){var r=s+g[e].height;c==-1&&r>m-u&&(c=e)}}y=g[g.length-1].offsettop+g[g.length-1].height}}var h=e.extend({},o,r);h.enableprogress=s?"":h.enableprogress;var g=[],p="",c=-1,d=e(h.spytarget).eq(0),u=d.outerHeight(),m=h.spytarget==window?i.get(0).scrollHeight:d.get(0).scrollHeight,v=e(this),y=0;l(v),v.on("updatespy",function(){l(v),a()}),d.on("scroll resize",function(){a()}),a(),n.on("load resize",function(){f()})})}}(jQuery);
	
/*!
 * Clamp.js 0.5.1
 *
 * Copyright 2011-2013, Joseph Schmitt http://joe.sh
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 */
	(function(){window.$clamp=function(c,d){function s(a,b){n.getComputedStyle||(n.getComputedStyle=function(a,b){this.el=a;this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;"float"==b&&(b="styleFloat");c.test(b)&&(b=b.replace(c,function(a,b,c){return c.toUpperCase()}));return a.currentStyle&&a.currentStyle[b]?a.currentStyle[b]:null};return this});return n.getComputedStyle(a,null).getPropertyValue(b)}function t(a){a=a||c.clientHeight;var b=u(c);return Math.max(Math.floor(a/b),0)}function x(a){return u(c)*
		a}function u(a){var b=s(a,"line-height");"normal"==b&&(b=1.2*parseInt(s(a,"font-size")));return parseInt(b)}function l(a){if(a.lastChild.children&&0<a.lastChild.children.length)return l(Array.prototype.slice.call(a.children).pop());if(a.lastChild&&a.lastChild.nodeValue&&""!=a.lastChild.nodeValue&&a.lastChild.nodeValue!=b.truncationChar)return a.lastChild;a.lastChild.parentNode.removeChild(a.lastChild);return l(c)}function p(a,d){if(d){var e=a.nodeValue.replace(b.truncationChar,"");f||(h=0<k.length?
		k.shift():"",f=e.split(h));1<f.length?(q=f.pop(),r(a,f.join(h))):f=null;m&&(a.nodeValue=a.nodeValue.replace(b.truncationChar,""),c.innerHTML=a.nodeValue+" "+m.innerHTML+b.truncationChar);if(f){if(c.clientHeight<=d)if(0<=k.length&&""!=h)r(a,f.join(h)+h+q),f=null;else return c.innerHTML}else""==h&&(r(a,""),a=l(c),k=b.splitOnChars.slice(0),h=k[0],q=f=null);if(b.animate)setTimeout(function(){p(a,d)},!0===b.animate?10:b.animate);else return p(a,d)}}function r(a,c){a.nodeValue=c+b.truncationChar}d=d||{};
		var n=window,b={clamp:d.clamp||2,useNativeClamp:"undefined"!=typeof d.useNativeClamp?d.useNativeClamp:!0,splitOnChars:d.splitOnChars||[".","-","\u2013","\u2014"," "],animate:d.animate||!1,truncationChar:d.truncationChar||"\u2026",truncationHTML:d.truncationHTML},e=c.style,y=c.innerHTML,z="undefined"!=typeof c.style.webkitLineClamp,g=b.clamp,v=g.indexOf&&(-1<g.indexOf("px")||-1<g.indexOf("em")),m;b.truncationHTML&&(m=document.createElement("span"),m.innerHTML=b.truncationHTML);var k=b.splitOnChars.slice(0),
			h=k[0],f,q;"auto"==g?g=t():v&&(g=t(parseInt(g)));var w;z&&b.useNativeClamp?(e.overflow="hidden",e.textOverflow="ellipsis",e.webkitBoxOrient="vertical",e.display="-webkit-box",e.webkitLineClamp=g,v&&(e.height=b.clamp+"px")):(e=x(g),e<=c.clientHeight&&(w=p(l(c),e)));return{original:y,clamped:w}}})();
	
/*! calc-polyfill 25-01-2016 */
	!function(win,doc){"use strict";function contentLoaded(a,b){var c=!1,d=!0,e=a.document,f=e.documentElement,g=e.addEventListener,h=g?"addEventListener":"attachEvent",i=g?"removeEventListener":"detachEvent",j=g?"":"on",k=function(d){("readystatechange"!=d.type||"complete"==e.readyState)&&(("load"==d.type?a:e)[i](j+d.type,k,!1),!c&&(c=!0)&&b.call(a,d.type||d))},l=function(){try{f.doScroll("left")}catch(a){return void setTimeout(l,50)}k("poll")};if("complete"==e.readyState)b.call(a,"lazy");else{if(!g&&f.doScroll){try{d=!a.frameElement}catch(m){}d&&l()}e[h](j+"DOMContentLoaded",k,!1),e[h](j+"readystatechange",k,!1),a[h](j+"load",k,!1)}}if(function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)}(),!doc.querySelectorAll)return!1;var EMPTY="",CALC_RULE="^(\\s*?[\\s\\S]*):(\\s*?[\\s\\S]*?((\\-(webkit|moz)\\-)?calc\\(([\\s\\S]+)\\))[\\s\\S]*)?$",CSSRULES="((\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",KEYFRAMES=new RegExp("((@(-webkit-)?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi"),FONTFACE=new RegExp("((@font-face\\s*?){([\\s\\S]*?)})","gi"),COMMENTS=new RegExp("(\\/\\*[\\s\\S]*?\\*\\/)","gi"),IMPORTS=new RegExp("@import .*?;","gi"),CHARSET=new RegExp("@charset .*?;","gi"),PERCENT=/[\d\.]+%/,PT=/\d+pt/,PIXEL=/(\d+)px/g,REMEM=/[\d\.]+r?em/,REM=/[\d\.]+rem/,EM=/[\d\.]+em/,MATH_EXP=/[\+\-\/\*]?[\d\.]+(px|%|em|rem)?/g,PLACEHOLDER="$1",ONLYNUMBERS=/[\s\-0-9]/g,FONTSIZE="font-size",ADDMEDIA="@media",onTextResize=[],onWindowResize=[],cssTexts=[],docLoaded=!1,utilities={camelize:function(a){return a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()})},trim:function(a){var b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;return String.prototype.trim?a.trim():a.replace(b,"")},indexOf:function(a,b,c){var d=a.length>>>0;for(c=Number(c)||0,c=0>c?Math.ceil(c):Math.floor(c),0>c&&(c+=d);d>c;c++)if(c in a&&a[c]===b)return c;return-1},getStyle:function(a,b){return a.currentStyle?a.currentStyle[utilities.camelize(b)]:doc.defaultView&&doc.defaultView.getComputedStyle?doc.defaultView.getComputedStyle(a,null).getPropertyValue(b):a.style[utilities.camelize(b)]},getFontsize:function(a){var b,c=doc.createElement("span");return c.innerHTML="&nbsp;",c.style.position="absolute",c.style.lineHeight="1em",c.style.fontSize="1em",a.appendChild(c),b=c.offsetHeight,a.removeChild(c),b},addEvent:function(a,b,c){doc.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)},textResize:function(a){var b,c,d=function(){b=doc.createElement("span"),b.id="text-resize-control",b.innerHTML="&nbsp;",b.style.position="absolute",b.style.left="-9999px",b.style.lineHeight="1em",b.style.fontSize="1em",doc.body.insertBefore(b,doc.body.firstChild),c=b.offsetHeight},e=function(){var d=b.offsetHeight;return c===d?(win.requestAnimationFrame(e),!1):(c=d,a&&"function"==typeof a&&a(),void win.requestAnimationFrame(e))};d(),win.requestAnimationFrame(e)}},calcTest=function(){var a=document.createElement("div");return a.style.cssText="width: -moz-calc(10px); width: -webkit-calc(10px); width: calc(10px)",!!a.style.length},getStyleSheets=function(){for(var a,b=[],c=0,d=doc.styleSheets.length;d>c;c++)a=doc.styleSheets[c],cssTexts[c]="",a.href&&a.href!==EMPTY?a.rawCssText&&a.rawCssText!==EMPTY?cssTexts[c]=a.rawCssText:b.push(a.href):a.ownerNode&&"style"===a.ownerNode.nodeName.toLowerCase()&&(cssTexts[c]=a.ownerNode.textContent);(b.length>0||cssTexts.length>0)&&loadStylesheets(b)},loadStylesheets=function(a){var b,c=0,d=a.length;if(win.XMLHttpRequest)b=new XMLHttpRequest;else try{b=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){b=null}if(b)for(;d>c;c++)try{b.open("GET",a[c],!1),b.send(),200===b.status&&(cssTexts[c]=b.responseText)}catch(e){console.log("Error making request for file "+a[c]+": "+e.message)}cssTexts.length>0&&parseStylesheets(cssTexts)},parseStylesheets=function(a){for(var b=0,c=a.length;c>b;b++)a[b].length&&(a[b]=a[b].replace(COMMENTS,EMPTY).replace(CHARSET,EMPTY).replace(IMPORTS,EMPTY).replace(KEYFRAMES,EMPTY).replace(FONTFACE,EMPTY),dotheCalc(parseCSS(a[b])))},removeStyles=function(a){for(var b=0,c=a.length;c>b;b++)JSON.parse(a[b].getAttribute("data-calced"))||a[b].removeAttribute("style")},parseCSS=function(a,b){var c,d,e,f,g,h,i,j,k,l=[];for(b=b||"",e=new RegExp(CSSRULES,"gi");;){if(f=e.exec(a),null===f)break;if(g=utilities.trim((f[2]||f[5]).split("\r\n").join("\n")),-1!==g.indexOf(ADDMEDIA))h=f[3]+"\n}",l=l.concat(parseCSS(h,g.replace(ADDMEDIA,"")));else for(h=f[6].split("\r\n").join("\n").split(";"),c=0,d=h.length;d>c;c++){i=new RegExp(CALC_RULE,"gi").exec(h[c]);try{j=doc.querySelectorAll(g)}catch(m){console.log('Error trying to select "'+g+'": '+m.message);break}null!==i&&j.length&&(k={elements:j,media:b,values:utilities.trim(i[2]),formula:i[6],prop:utilities.trim(i[1]),placholder:utilities.trim(i[3])},k.formula.match(PERCENT)&&(k.onresize=!0),k.formula.match(REMEM)&&(k.ontextresize=!0),l.push(k))}}return l},dotheCalc=function(calcRules){for(var index=0,len=calcRules.length,obj,calc=function(obj){for(var i=0,len=obj.elements.length,refValue,modifier,matches,l,j,result,formula;len>i;i++){for(formula=obj.formula.replace(PIXEL,PLACEHOLDER),matches=formula.match(MATH_EXP),l=matches.length,j=0;l>j;j++)modifier=null,matches[j].match(PERCENT)&&(refValue=obj.elements[i].parentNode.clientWidth,modifier=parseFloat(matches[j],10)/100),matches[j].match(EM)&&(refValue=obj.elements[i].currentStyle?utilities.getFontsize(obj.elements[i]):parseInt(utilities.getStyle(obj.elements[i],FONTSIZE).replace(/px/,EMPTY),10),refValue.match&&refValue.match(PT)&&(refValue=Math.round(1.333333333*parseInt(refValue.replace(/pt/,""),10))),modifier=parseFloat(matches[j],10)),matches[j].match(REM)&&(refValue=utilities.getStyle(doc.body,FONTSIZE).match(PERCENT)?16*parseInt(utilities.getStyle(doc.body,FONTSIZE).replace(/%/,EMPTY),10)/100:utilities.getStyle(doc.body,FONTSIZE).match(PT)?Math.round(1.333333333*parseInt(utilities.getStyle(doc.body,FONTSIZE).replace(/pt/,""),10)):parseInt(utilities.getStyle(doc.body,FONTSIZE).replace(/px/,EMPTY),10),modifier=parseFloat(matches[j],10)),modifier&&(formula=formula.replace(matches[j],refValue*modifier));try{formula.match(ONLYNUMBERS)&&(result=eval(formula),obj.elements[i].style[utilities.trim(utilities.camelize(obj.prop))]=obj.values.replace(obj.placholder,result+"px"),obj.elements[i].setAttribute("data-calced",!0))}catch(e){}}};len>index;index++)obj=calcRules[index],obj.onresize&&-1===utilities.indexOf(onWindowResize,obj)&&onWindowResize.push(obj),obj.ontextresize&&-1===utilities.indexOf(onTextResize,obj)&&onTextResize.push(obj),obj.media!==EMPTY?win.matchMedia&&win.matchMedia(obj.media).matches?calc(obj):removeStyles(obj.elements):calc(obj)};win.dotheCalc=function(){cssTexts.length>0&&docLoaded&&parseStylesheets(cssTexts)},contentLoaded(win,function(){calcTest()||(docLoaded=!0,getStyleSheets(),onTextResize.length>0&&utilities.textResize(function(){dotheCalc(onTextResize)}),onWindowResize.length>0&&utilities.addEvent(win,"resize",function(){dotheCalc(onWindowResize)}))}),function(a){!function(){if(!a.requestAnimationFrame){a.webkitRequestAnimationFrame&&(a.requestAnimationFrame=a.webkitRequestAnimationFrame,a.cancelAnimationFrame=a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame);var b=0;a.requestAnimationFrame=function(c){var d=(new Date).getTime(),e=Math.max(0,16-(d-b)),f=a.setTimeout(function(){c(d+e)},e);return b=d+e,f},a.cancelAnimationFrame=function(a){clearTimeout(a)}}}(),"function"==typeof define&&define(function(){return a.requestAnimationFrame})}(window)}(window,document);
