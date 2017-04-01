;$.fn.extend({
	mousewheel: function(up, down) {
		$(this).on("mousewheel", function(e) {
			// console.log(e)
			if(e.originalEvent.wheelDelta > 0) {
				up && up();
			}else {
				down && down();
			}
		})

		$(this).on("DOMMouseScroll", function(e) {
			// console.log("mouse")
			if(e.originalEvent.detail < 0) {
				up && up();
			}else {
				down && down();
			}
		})

		return $(this);
	}
})