	$(document).ready(function(){
		particlesJS("particles-js", {
	  "particles": {
	    "number": {
	      "value": 60,
	      "density": {
	        "enable": true,
	        "value_area": 1000
	      }
	    },
	    "color": {
	      "value": "#ffffff"
	    },
	    "shape": {
	      "type": "",
	      "stroke": {
	        "width": 0,
	        "color": "#ffffff"
	      },
	      "polygon": {
	        "nb_sides": 5
	      },
	      "image": {
	        "src": "img/github.svg",
	        "width": 100,
	        "height": 100
	      }
	    },
	    "opacity": {
	      "value": 0.5,
	      "random": false,
	      "anim": {
	        "enable": false,
	        "speed": 1,
	        "opacity_min": 0.1,
	        "sync": false
	      }
	    },
	    "size": {
	      "value": 3,
	      "random": true,
	      "anim": {
	        "enable": false,
	        "speed": 40,
	        "size_min": 0.1,
	        "sync": false
	      }
	    },
	    "line_linked": {
	      "enable": true,
	      "distance": 150,
	      "color": "#ffffff",
	      "opacity": 0.8,
	      "width": 1
	    },
	    "move": {
	      "enable": true,
	      "speed": 6,
	      "direction": "none",
	      "random": false,
	      "straight": false,
	      "out_mode": "out",
	      "bounce": false,
	      "attract": {
	        "enable": false,
	        "rotateX": 600,
	        "rotateY": 1200
	      }
	    }
	  },
	  "interactivity": {
	    "detect_on": "canvas",
	    "events": {
	      "onhover": {
	        "enable": false,
	        "mode": "grab"
	      },
	      "onclick": {
	        "enable": false,
	        "mode": "push"
	      },
	      "resize": true
	    },
	    "modes": {
	      "grab": {
	        "distance": 140,
	        "line_linked": {
	          "opacity": 1
	        }
	      },
	      "bubble": {
	        "distance": 400,
	        "size": 40,
	        "duration": 2,
	        "opacity": 8,
	        "speed": 3
	      },
	      "repulse": {
	        "distance": 200,
	        "duration": 0.4
	      },
	      "push": {
	        "particles_nb": 4
	      },
	      "remove": {
	        "particles_nb": 2
	      }
	    }
	  },
	  "retina_detect": true
	});

});

var scene = $('.header_block').get(0);
var parallaxInstance = new Parallax(scene);

var scene2 = $('.logo_block').get(0);
var parallaxInstance = new Parallax(scene2);


// var color_theme = document.querySelector('color_theme_checkbox'); 
// var header = document.querySelector('main_header');   

// if (color_theme.checked) {
//     header.classList.addClass('light_theme');
// }

$(function() {
$( ".color_theme_checkbox" ).on( "click", function() {
            if($(this).is(":checked")) {
            	$('.dark_theme').addClass('light_theme');
            	$('.light_theme').removeClass('dark_theme');
            }
   			else {
            	$('.light_theme').addClass('dark_theme');
            	$('.dark_theme').removeClass('light_theme');
   			}
})
});

$('.settings_button').on("click", function() {
	$('.settings').removeClass('hidden');
	$('.settings').addClass('visible');
	$('.settings_bg').removeClass('hidden');
});

$('.settings_close').on("click", function() {
	$('.settings').addClass('hidden');
	$('.settings').removeClass('visible');
	$('.settings_bg').addClass('hidden');
});


// var languageURL = 'word.json';
// var language = new XMLHttpRequest();
// var words;
// language.open('GET', languageURL);
// words = language.response;
// language.onload = function() {
// 	// translateToRussia(words);
// 	translateToBritain(words);
// }

// function translateToBritain(obj) {
// 	var container = document.querySelector('.menu_list');
// 	var allElements = Array.from(document.querySelectorAll(".translate"));
// 	allElements[1].html(obj[allElements[1].text]);
// 	console.log(allElements);
// }  


// 	translateToBritain(words);

var toEng = {
	"О нас": "About me",
	"Портфолио": "Portfolio",
	"Калькулятор цен": "Price Calculate",
	"Контакты": "Contacts",
	"Мы превратим вашу идею в готовый продукт": "We will turn yours idea in ready product",
	"Посмотреть портфолио": "Check Portfolio",
	"Про нас": "About me",
	"Портфоліо": "Portfolio",
	"Калькулятор Цін": "Price Calculate",
	"Контакти": "Contacts",
	"Ми перетворимо вашу ідею в готовий продукт": "We will turn yours idea in ready product",
	"Подивитись Портфоліо": "Check Portfolio"
}

var toRus = {
	"About me": "О нас",
	"Portfolio": "Портфолио",
	"Price Calculate": "Калькулятор цен",
	"Contacts": "Контакты",
	"We will turn yours idea in ready product": "Мы превратим вашу идею в готовый продукт",
	"Check Portfolio": "Посмотреть портфолио",
	"Про нас": "О нас",
	"Портфоліо": "Портфолио",
	"Калькулятор Цін": "Калькулятор цен",
	"Контакти": "Контакты",
	"Ми перетворимо вашу ідею в готовий продукт": "Мы превратим вашу идею в готовый продукт",
	"Подивитись Портфоліо": "Посмотреть портфолио"
}

var toUkr = {
	"О нас": "Про нас",
	"Портфолио": "Портфоліо",
	"Калькулятор цен": "Калькулятор Цін",
	"Контакты": "Контакти",
	"Мы превратим вашу идею в готовый продукт": "Ми перетворимо вашу ідею в готовий продукт",
	"Посмотреть портфолио": "Подивитись Портфоліо",
	"About me": "Про нас",
	"Portfolio": "Портфоліо",
	"Price Calculate": "Калькулятор Цін",
	"Contacts": "Контакти",
	"We will turn yours idea in ready product": "Ми перетворимо вашу ідею в готовий продукт",
	"Check Portfolio": "Подивитись Портфоліо",
}
var allElements = Array.from(document.querySelectorAll(".translate"));	
function translate(obj) {
	for(var i = 0; i < allElements.length; i++) { 
		allElements[i].innerHTML = obj[allElements[i].innerHTML];
	}		
}

$('#rus').on('click', function() {
	translate(toRus);
	$('#rus').attr('disabled', 'disabled');
	$('#rus').css('border', '2px solid #fff');
	$('#ukr').removeAttr("disabled");
	$('#ukr').css('border', 'none');
	$('#eng').removeAttr("disabled");
	$('#eng').css('border', 'none');
});

$('#ukr').on('click', function() {
	translate(toUkr);
	$('#ukr').attr('disabled', 'disabled');
	$('#ukr').css('border', '2px solid #fff');
	$('#rus').removeAttr("disabled");
	$('#rus').css('border', 'none');
	$('#eng').removeAttr("disabled");
	$('#eng').css('border', 'none');
});

$('#eng').on('click', function() {
	translate(toEng);
	$('#eng').attr('disabled', 'disabled');
	$('#eng').css('border', '2px solid #fff');
	$('#ukr').removeAttr("disabled");
	$('#ukr').css('border', 'none');
	$('#rus').removeAttr("disabled");
	$('#rus').css('border', 'none');
});






function adaptive() {
    if(device.mobile() || device.tablet())
    {   
        //$('#particles-js').remove();
	} else {
		$('.main_header').append('<divid="particles-js"></div')
	}
}

adaptive();

$('.menu_toggle').on('click', function() {
		$('.menu_list').toggle();
		$('.mobile_menu_bg').toggle();
		if($('.menu_toggle').hasClass('toggle_active')) {
			$('.menu_toggle').removeClass('toggle_active');
		} else {
			$('.menu_toggle').addClass('toggle_active');
		}
});