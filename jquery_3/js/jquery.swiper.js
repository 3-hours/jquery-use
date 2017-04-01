;$.fn.extend({
	swiper: function() {
		$(this).each(function(i, ele) {
			var _this = $(ele);
			var len = _this.find(".swiper-slide").length;
			var paganationBox = _this.find(".paganation");
			var perWidth = _this.find(".swiper-slide").eq(0).outerWidth();
			var index = 0;
			
			//生成小圆点
			for(var i = 0; i < len; i++) {
				var span = $("<span />", {
					text: i + 1
				});
				if(i === 0) {
					span.addClass("paganation-active");
				}
				paganationBox.append(span);
			}
			paganationBox.on("click", "span", function() {
				// alert($(this).index())
				index = $(this).index();
				tab();
			})

			function tab() {
				paganationBox.find("span").eq(index).addClass("paganation-active")
					   .siblings()
					   .removeClass("paganation-active");

				_this.find(".swiper-inner")
					 .animate({
					 	left: - perWidth * index
					 }, 300)
			}
			_this.find(".right-arrow").on("click", function() {
				index++;
				if(index > len - 1) {
					index = 0;
				}
				tab();
			})
			_this.find(".left-arrow").on("click", function() {
				index--;
				if(index < 0) {
					index = len - 1;
				}
				tab();
			})
		})
		return $(this);
	}
})