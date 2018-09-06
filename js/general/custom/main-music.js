$(document).ready(function() {
	var width = window.innerWidth;
	var ori_width = "0";
	var setheight = "0";
	var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

	resize();
	$(window).on("resize", resize);

	function resize() {
		width = window.innerWidth;

		$(".mainContain").css("height","auto");
		if($(window).height() > $(".mainContain").css("height").substring(0, $(".mainContain").css("height").indexOf("px"))) {
			setheight = $(window).height();
			$(".mainContain").css("height", setheight);
		}

		if (width != ori_width) {
			if (width > 767) {
				$(".container-fluid").css("padding-right", "0px");
				$(".container-fluid").css("padding-left", "0px");
				$(".music-intro-dummy-1").show();
				$(".music-intro-dummy-2").show();
			} else {
				$(".container-fluid").css("padding-right", "15px");
				$(".container-fluid").css("padding-left", "15px");
				$(".music-intro-dummy-1").hide();
				$(".music-intro-dummy-2").hide();
			}
		}
		ori_width = width;
	}

	var fontTL = new TimelineMax({repeat: -1});
	var fTLTime = 8;

	fontTL.to($(".colorControl"), fTLTime, {
		css : {color : "#f596aa", borderColor: "#f596aa"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#ffb11b", borderColor: "#ffb11b"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#e83015", borderColor: "#e83015"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#986db2", borderColor: "#986db2"},
		ease:Back.easeOut
	});

	$(".music-cover").on("click tap", function() {
		$(this).addClass("animated zoomOutLeft").one(animationEnd, function() {
			$(this).hide();
			var target = $(this).parents(".music-items").find(".music-intro-1");
			target.show();
			target.addClass("animated fadeInLeft");
			target = $(this).parents(".music-items").find(".music-intro-2");
			target.show();
			target.addClass("animated fadeInLeft");
			target = $(this).parents(".music-items").find(".music-intro-3");
			target.show();
			target.addClass("animated fadeInRight");
			resize();
			$("html, body").animate({scrollTop: $("#" + $(this).parents(".music-items").attr("id")).offset().top}, 500);
		});
	});
});