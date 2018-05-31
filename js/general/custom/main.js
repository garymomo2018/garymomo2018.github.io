$(document).ready(function() {
	var width = window.innerWidth;
	var ori_width = "0";

	resize();
	$(window).on("resize", resize);

	function resize() {
		width = window.innerWidth;
		height = $(document).innerHeight;
		$(".mainContain").css("height", height);

		if (width != ori_width) {
			if (width > 767) {
				$(".container-fluid").css("padding-right", "0px");
				$(".container-fluid").css("padding-left", "0px");
			} else {
				$(".container-fluid").css("padding-right", "15px");
				$(".container-fluid").css("padding-left", "15px");
			}
		}
		ori_width = width;
	}
});