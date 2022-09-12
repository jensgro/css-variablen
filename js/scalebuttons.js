// Change the widths of the modules.
$(document).ready(function() {

		$(".switchme").on("click", function() {
			var $that = $(this);
			var width = $that.attr("data-width");
			var nextWrapper = $that.parent().next(".grid-wrapper");

	    $that.siblings().removeClass("selected");
	    $that.addClass("selected");

	    nextWrapper.css("width", width);
		});

});
