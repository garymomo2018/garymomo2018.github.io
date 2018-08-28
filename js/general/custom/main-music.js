$(document).ready(function() {
	var width = window.innerWidth;
	var ori_width = "0";
	var setheight = "0";

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
				$("#arrowBody").css("height", $(".actions").css("height"));
			} else {
				$(".container-fluid").css("padding-right", "15px");
				$(".container-fluid").css("padding-left", "15px");
				$("#arrowBody").css("height", $(".actions").css("height"));
			}
		}
		ori_width = width;
	}
});