var $ = require('jquery');
var _ = require('lodash');
var words = require('./words');

var self;

var App = function() {
	self = this;
	this.derpIt = _.bind(this.derpIt, this);
	this.save = _.bind(this.save, this);
	this.prepareNoun = _.bind(this.prepareNoun, this);
	this.setDefaultText = _.bind(this.setDefaultText, this);
};

App.prototype = {

	regex: /(?:([a-z]+)\s)?derp:(noun|person|object|verb|adjective)(?:\[([0-9]+)\])?/gmi,
	consistency: {},

	init: function() {
		var defaultText = localStorage.getItem("derp-default") === null ? false : localStorage.getItem("derp-default");
		if(defaultText !== false) $("#derparea").val(defaultText);
		this.getSaves();
		this.startListeners();
	},

	startListeners: function() {
		$('#derpIt').on("click", this.derpIt);
		$('#save').on("click", this.save);
		$('#defText').on("click", this.setDefaultText);
	},

	setDefaultText: function() {
		var text = $("#derparea").val();
		localStorage.setItem("derp-default", text);
	},

	save: function() {
		var text = $("#derpResult").html();
		console.log(text);

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

		$("#derpResult").text(newDerp);
	},

	getWord: function(wordType, consistent, preceding) {
		if(typeof consistent !== "undefined") {
			return this.getConsistent(consistent, wordType, preceding);
		}

		return this.drawWord(wordType, preceding, false);
	},

	getConsistent: function(consistent, wordType, preceding) {
		if(typeof this.consistency[consistent] === "undefined") {
			this.consistency[consistent] = this.drawWord(wordType, preceding, true);
		}

		if(typeof preceding === "undefined") {
			preceding = "";
		}

		return preceding + " " + this.consistency[consistent];
	},

	drawWord: function(wordType, preceding, isConsistent) {
		if(typeof preceding === "undefined") {
			preceding = "";
		}

		var derper;

		switch(wordType) {
			case "noun":
				derper = this.getNoun;
				break;
			case "person":
				derper = this.getPerson;
				break;
			case "object":
				derper = this.getObject;
				break;
			case "verb":
				derper = this.getVerb;
				break;
			case "adjective":
				derper = this.getAdjective;
				break;
		}

		return derper(preceding, isConsistent);
	},

	getNoun: function(pre, isConsistent) {
		var list = _.merge(words.noun, words.person);
		var word = list[Math.floor(Math.random() * list.length)];
		return self.prepareNoun(pre, word, isConsistent);
	},
	getPerson: function(pre, isConsistent) {
		var word = words.person[Math.floor(Math.random() * words.person.length)];
		return self.prepareNoun(pre, word, isConsistent);
	},
	getObject: function(pre, isConsistent) {
		var word = words.noun[Math.floor(Math.random() * words.noun.length)];
		return self.prepareNoun(pre, word, isConsistent);
	},
	getVerb: function(pre, isConsistent) {
		return pre + " " + words.verb[Math.floor(Math.random() * words.verb.length)];
	},
	getAdjective: function(pre, isConsistent) {
		var word = words.adjective[Math.floor(Math.random() * words.adjective.length)]

		var complete = "";

		if(typeof word === "string") {
			complete = !isConsistent ? pre + " " + word : word;
		}
		else if(pre === "as" || pre === "was") {
			complete = !isConsistent ? pre + " " + word[pre] : word[pre];
		}
		else if(pre === "quite" || pre === "very") {
			complete = !isConsistent ? pre + " " + word["as"] : word["as"];
		}
		else {
			complete = !isConsistent ? pre + " " + word.default : word.default;
		}

		return complete;
	},

	prepareNoun: function(pre, word, isConsistent) {

		var complete = "";

		if(pre === "many" || pre === "some") {
			complete = !isConsistent ? pre + " " + word.plural : word.plural;
		}
		else if(pre === "the" || pre === "The") {
			complete = !isConsistent ? pre + " " + word.word : word.word;
		}
		else {
			complete = !isConsistent ? word.article + " " + word.word : word.word;
		}

		return complete;
	},
};

module.exports = App;