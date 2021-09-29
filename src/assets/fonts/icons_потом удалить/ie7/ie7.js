/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'_icon-minus': '&#xe900;',
		'_icon-plus': '&#xe902;',
		'_icon-arrow': '&#xe904;',
		'_icon-circle': '&#xe905;',
		'_icon-arrow_up': '&#xe906;',
		'_icon-arrow_down': '&#xe907;',
		'_icon-favorite': '&#xe908;',
		'_icon-favorite_border': '&#xe909;',
		'_icon-ellipse': '&#xe90a;',
		'_icon-logo': '&#xe90b;',
		'_icon-info': '&#xe90c;',
		'_icon-smile': '&#xe90d;',
		'_icon-city': '&#xe90e;',
		'_icon-logotext': '&#xe90f;',
		'_icon-ellipse_border': '&#xe913;',
		'_icon-star': '&#xe915;',
		'_icon-star_border': '&#xe916;',
		'_icon-toxin': '&#xe917;',
		'_icon-ellipse_button': '&#xe918;',
		'_icon-circle_button': '&#xe919;',
		'_icon-check_mark': '&#xe91a;',
		'_icon-facebook': '&#xe91b;',
		'_icon-twitter': '&#xe91c;',
		'_icon-instagram': '&#xe91d;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/_icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
