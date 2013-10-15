if (!window.WizardsBridge) WizardsBridge = {};

(function(w, $) {
	WizardsBridge.init = function() {
		$(".panel").each(function() {
			var id = $(this).attr("id").substr(-1);
			var obstacles = new Array();
			for (var i = 1; i <= 9; i++) {
				if (i != id) obstacles.push("#panel" + i);
			}

			$(this).draggable({
				obstacle: obstacles.toString(),
				preventCollision: true,
				containment: ".board"
			});
		});
	};
})(window, jQuery);

$(document).ready(function() {
	WizardsBridge.init();
});