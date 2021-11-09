// IBG =============================================================
jQuery('.ibg').each(function () {
	var src = jQuery(this).find('img').attr('src');
	jQuery(this).css('background', 'url(' + src + ') center / cover no-repeat');
	jQuery(this).find('img').css('display', 'none');
});
// /IBG =============================================================
// MOBILE =============================================================
// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

// 	alert("Вы используете мобильное устройство (телефон или планшет).")

// } else alert("Вы используете ПК.")
// /MOBILE =============================================================

const burger = document.querySelector('.menu_burger');
const menu = document.querySelector('.header_menu')
burger.addEventListener('click', function () {
	menu.classList.toggle('active');
});


const vaccine = document.querySelectorAll('.item-vaccine');

for (var a = 0; a < vaccine.length; a++) {
	vaccine[a].addEventListener('click', function () {
		for (var i = 0; i < vaccine.length; i++) {
			vaccine[i].classList.remove('active');
			this.classList.add('active')
		}
	})
};


var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	ll = selElmnt.length;
	/* For each element, create a new DIV that will act as the selected item: */
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	/* For each element, create a new DIV that will contain the option list: */
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < ll; j++) {
		/* For each option in the original select element,
		create a new DIV that will act as an option item: */
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function (e) {
			/* When an item is clicked, update the original select box,
			and the selected item: */
			var y, i, k, s, h, sl, yl;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			sl = s.length;
			h = this.parentNode.previousSibling;
			for (i = 0; i < sl; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					yl = y.length;
					for (k = 0; k < yl; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function (e) {
		/* When the select box is clicked, close any other select boxes,
		and open/close the current select box: */
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}

function closeAllSelect(elmnt) {
	/* A function that will close all select boxes in the document,
	except the current select box: */
	var x, y, i, xl, yl, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	xl = x.length;
	yl = y.length;
	for (i = 0; i < yl; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < xl; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);



function initMap() {
	// The location of Uluru
	const uluru = { lat: -25.344, lng: 131.036 };
	// The map, centered at Uluru
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 4,
		center: uluru,
		styles: [
			{
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					},
					{
						"color": "#f49f53"
					}
				]
			},
			{
				"featureType": "landscape",
				"stylers": [
					{
						"color": "#f9ddc5"
					},
					{
						"lightness": -7
					}
				]
			},
			{
				"featureType": "road",
				"stylers": [
					{
						"color": "#813033"
					},
					{
						"lightness": 43
					}
				]
			},
			{
				"featureType": "poi.business",
				"stylers": [
					{
						"color": "#645c20"
					},
					{
						"lightness": 38
					}
				]
			},
			{
				"featureType": "water",
				"stylers": [
					{
						"color": "#1994bf"
					},
					{
						"saturation": -69
					},
					{
						"gamma": 0.99
					},
					{
						"lightness": 43
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#f19f53"
					},
					{
						"weight": 1.3
					},
					{
						"visibility": "on"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"featureType": "poi.business"
			},
			{
				"featureType": "poi.park",
				"stylers": [
					{
						"color": "#645c20"
					},
					{
						"lightness": 39
					}
				]
			},
			{
				"featureType": "poi.school",
				"stylers": [
					{
						"color": "#a95521"
					},
					{
						"lightness": 35
					}
				]
			},
			{},
			{
				"featureType": "poi.medical",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#813033"
					},
					{
						"lightness": 38
					},
					{
						"visibility": "off"
					}
				]
			},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{
				"elementType": "labels"
			},
			{
				"featureType": "poi.sports_complex",
				"stylers": [
					{
						"color": "#9e5916"
					},
					{
						"lightness": 32
					}
				]
			},
			{},
			{
				"featureType": "poi.government",
				"stylers": [
					{
						"color": "#9e5916"
					},
					{
						"lightness": 46
					}
				]
			},
			{
				"featureType": "transit.station",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "transit.line",
				"stylers": [
					{
						"color": "#813033"
					},
					{
						"lightness": 22
					}
				]
			},
			{
				"featureType": "transit",
				"stylers": [
					{
						"lightness": 38
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#f19f53"
					},
					{
						"lightness": -10
					}
				]
			},
			{},
			{},
			{}
		],
	});
	// The marker, positioned at Uluru
	const marker = new google.maps.Marker({
		position: uluru,
		map: map,
	});
}


const popupButton = document.querySelector('.intro_button ');
const popup = document.querySelector('.popup');
const popupInner = document.querySelector('.popup_inner')
const close = document.querySelector('.popup_close');

document.documentElement.addEventListener('click', function (e) {
	target = e.target;
	if (target == close || !target.closest('.popup_inner')) {
		popup.classList.remove('active');
		if (!popup.classList.contains('active')) {
			document.body.classList.remove('lock')
		}
	}
	if (target == popupButton) {
		popup.classList.add('active');
		if (popup.classList.contains('active')) {
			document.body.classList.add('lock')
		}
	}

})