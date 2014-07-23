var $ = require('jquery');

var derpUtils = {

	getDefaultDerpBase: function() {
		var defaultText = localStorage.getItem("derp-default") === null ? false : localStorage.getItem("derp-default");
		if(defaultText !== false) $("#derparea").val(defaultText);
	},

	setDefaultText: function() {
		var text = $("#derparea").val();
		if(text !== "") localStorage.setItem("derp-default", text);
	},

	save: function() {
		var text = $("#derpResult").html();

		if(text !== "") {
			var saves = localStorage.getItem("derps") ? JSON.parse(localStorage.getItem("derps")) : {};
			var saveId = "save" + Date.now();
			saves[saveId] = text;
			localStorage.setItem("derps", JSON.stringify(saves));
			this.getSaves();
		}
	},

	getSaves: function() {
		var saves = JSON.parse(localStorage.getItem("derps"));
		if(saves !== null) {
			$("#saves").html("");
			for(var save in saves) {
				var $item = $('<li></li>').text(saves[save]);
				$item.prependTo("#saves");
			}
		}
	},

	clearSaves: function() {
		localStorage.setItem("derps", JSON.stringify({}));
		this.getSaves();
	},
};

module.exports = derpUtils;