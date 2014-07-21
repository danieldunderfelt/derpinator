var $ = require('jquery');
var _ = require('lodash');
var wordGenerator = require('./WordGenerator');
var util = require('./derp-utils');

var self;

var App = function() {
	self = this;
	this.derpIt = _.bind(this.derpIt, this);
	util.save = _.bind(util.save, util);
	util.clearSaves = _.bind(util.clearSaves, util);
};

App.prototype = {

	regex: /(?:([a-z]+)\s)?derp:([a-z]+)(?:\[([0-9]+)\])?/gmi,
	consistency: {},

	init: function() {
		util.getDefaultDerpBase();
		util.getSaves();
		this.startListeners();
	},

	startListeners: function() {
		$('#derpIt').on("click", this.derpIt);
		$('#save').on("click", util.save);
		$('#defText').on("click", util.setDefaultText);
		$('#clearSaves').on("click", util.clearSaves);
	},

	derpIt: function(e) {
		e.preventDefault();
		this.consistency = {};
		var text = $("#derparea").val();

		this.analyzeText(text);
	},

	analyzeText: function(text) {
		var newDerp = text.replace(this.regex, function(match, preceding, wordType, consistent) {
			return self.getWord(wordType, consistent, preceding);
		});

		this.showDerp(newDerp);
	},

	getWord: function(wordType, consistent, preceding) {
		if(typeof consistent !== "undefined") {
			return this.getConsistent(consistent, wordType, preceding);
		}

		return wordGenerator.getWord(wordType, preceding);
	},

	getConsistent: function(consistent, wordType, preceding) {
		if(typeof this.consistency[consistent] === "undefined") {
			this.consistency[consistent] = wordGenerator.getWord(wordType, preceding, false);
		}

		if(typeof preceding === "undefined") {
			preceding = "";
		}

		return preceding + " " + this.consistency[consistent];
	},

	showDerp: function(text) {
		$("#derpResult").html(text);
	}
};

module.exports = App;