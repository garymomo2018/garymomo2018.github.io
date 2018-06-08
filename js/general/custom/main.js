$(document).ready(function() {
	var width = window.innerWidth;
	var ori_width = "0";

	resize();
	$(window).on("resize", resize);

	function resize() {
		width = window.innerWidth;

		$(".mainContain").css("height","auto");
		if($(window).height() > $(".mainContain").css("height").substring(0, $(".mainContain").css("height").indexOf("px"))) {
			var setheight = $(window).height();
			$(".mainContain").css("height", setheight);
		}

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

window.onload = function afterload() {
	var actionTL = new TimelineMax({paused : true});
	var arrowTL = new TimelineMax();

	var itemsSelector = $(".items");

	itemsSelector.sort(function(a, b) {
		var aVal = $(a).attr("id");
		var bVal = $(b).attr("id");

		if (aVal < bVal) {return -1;}
		if (aVal > bVal) {return 1;}
	});

	$.each(itemsSelector, function(key, value) {
		actionTL.from($(this), 0.5, {
			alpha : 0,
			scale : 5,
			ease : SlowMo.ease.config(0.1, 0.1, false)
		});
	});

	arrowTL.from($("#arrowHead"), 1, {
		alpha : 0
	})
	.from($("#arrowBody"), 2, {
		height : 0
	}, "-=1.2");

	actionTL.play();
}