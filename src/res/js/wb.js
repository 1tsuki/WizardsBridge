if (!window.WizardsBridge) WizardsBridge = {};

(function(w, $) {
	WizardsBridge.init = function() {
		$(".panel").each(function() {
			var id = $(this).attr("id").substr(-1);
					obstacles = [];
			for (var i = 1; i <= 9; i++) {
				if (i != id) obstacles.push("#panel" + i);
			}

			var tolerance = $(this).width()/3;
			$(this).draggable({
				obstacle: obstacles.toString(),
				preventCollision: true,
				containment: ".board",
				snap: ".panel,.board",
				snapTolerance: tolerance,
				stop: function(event, ui) {
					var leftMoved = ui.helper.width() * 2/3 < Math.abs(ui.position.left - ui.originalPosition.left),
							topMoved = ui.helper.height() * 2/3 < Math.abs(ui.position.top - ui.originalPosition.top) ;
					if (leftMoved || topMoved) {
						console.log("moved");
					} else {
						console.log("not moved");
					}
				}
			});
		});
	};
})(window, jQuery);

$(document).ready(function() {
	WizardsBridge.init();
});