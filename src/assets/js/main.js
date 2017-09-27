(function ($) {
 "use strict";
	
	// // stickey menu
	$(window).on('scroll',function() {    
		var scroll = $(window).scrollTop(),
			mainHeader = $('#sticky-header'),
			mainHeaderHeight = mainHeader.innerHeight();
		
		// console.log(mainHeader.innerHeight());
		if (scroll > 1) {
			$("#sticky-header").addClass("sticky");
		}else{
			$("#sticky-header").removeClass("sticky");
		}
	});
	
	// slicknav
	$('ul#navigation').slicknav({
		prependTo:".responsive-menu-wrap"
	});
	
	$(".catagory-wrap a.click2").on("click", function(){
		$(".catagory, .overlay-bg").toggleClass("active");
	});
	$(".overlay-bg").on("click", function(){
		$(".catagory, .overlay-bg").removeClass("active");
	});
	
	$(".click a").on("click", function(){
		$(".show-all-cetagory").toggleClass("active");
	});
	$(".show-all-cetagory span").on("click", function(){
		$(".show-all-cetagory").removeClass("active");
	});
	
	$(".logo2 a").on("click", function(){
		$(".login-area,.logo2").toggleClass("active");
	});
	
	// product-active
	$('.product-active').owlCarousel({
		smartSpeed:1000,
		margin:0,
		nav:true,
		loop:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			450:{
				items:2
			},
			678:{
				items:3
			},
			991:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
	
	
	// arrivel-active
	$('.arrivel-active').owlCarousel({
		smartSpeed:1000,
		margin:0,
		nav:true,
		loop:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			450:{
				items:1
			},
			678:{
				items:2
			},
			991:{
				items:3
			},
			1000:{
				items:3
			}
		}
	})

	// product-details-active
	$('.product-details-active').owlCarousel({
        smartSpeed:1000,
        margin:0,
		loop:true,
        nav:false,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        URLhashListener:true,
        startPosition: 'URLHash',
        responsive:{
            0:{
                items:1
            },
            450:{
                items:1
            },
            678:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
	
	// thamb-active
	$(".thamb-active").owlCarousel({
		loop: true,
		autoplay: false,
		items: 1,
		nav: true,
		autoplayHoverPause: true,
		animateOut: 'slideOutUp',
		animateIn: 'slideInUp',
		navText:['<i class="fa fa-angle-up"></i>','<i class="fa fa-angle-down"></i>'],
	});

	 /*-----------------------
    cart-plus-minus-button 
    -------------------------*/
    $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
	});
	
	jQuery(".catagory-wrap .catagory ul li a").hover(
	  function() {
		jQuery(".overlay-bg").addClass("hasib");
	  },
	  function() {
		jQuery(".overlay-bg").removeClass("hasib");
	  }
	);
	
	/*--------------------------
	 scrollUp
	---------------------------- */	
	$.scrollUp({
		scrollText: '<i class="fa fa-arrow-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});
	
	
	
	
	function toggleCategoryMenu() {
		var top = $('body').innerHeight() - $(window).innerHeight(),
			categroyMenu = $(".header-area .catagory");
		if ($(window).scrollTop() >= top && $(window).innerWidth() > 992) {
			categroyMenu.addClass("toggle-category-menu");
		} else {
			categroyMenu.removeClass("toggle-category-menu");
		}
		
    }
	
	 $(window).on("scroll", function() {

            toggleCategoryMenu();

    });


	jQuery(document).ready(function (e) {
		function t(t) {
			e(t).bind("click", function (t) {
				t.preventDefault();
				e(this).parent().fadeOut()
			})
		}
		e(".dropdown-toggle").click(function () {
			var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
			e(".button-dropdown .dropdown-menu").hide();
			e(".button-dropdown .dropdown-toggle").removeClass("active");
			if (t) {
				e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
			}
		});
		e(document).bind("click", function (t) {
			var n = e(t.target);
			if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
		});
		e(document).bind("click", function (t) {
			var n = e(t.target);
			if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
		})
	});
	
})(jQuery); 