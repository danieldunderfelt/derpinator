var words = require('./words');
var grammar = require('./grammar');
var plural = require('./pluralize');
var _ = require('lodash');

var WordGenerator = {

	getWord: function(wordType, pre, includePre) {
		includePre = typeof includePre === "undefined" ? true : includePre;

		if(!this.checkWordType(wordType)) {
			return "-- You derped the word type! --";
		}

		var word = this.getWordByType(wordType);
		var modifiedWord = this.modifyWord(word, wordType, pre);
		var modifiedPre = this.modifyPre(word, pre);
		var result = includePre ? modifiedPre + " " + modifiedWord : modifiedWord;

		return result;
	},

	checkWordType: function(wordType) {
		var types = Object.keys(words);

		if(types.indexOf(wordType) === -1) {
			return false;
		}
		else {
			return true;
		}
	},

	getWordByType: function(type) {
		var list = words[type];

		if(type === "noun") {
			list = _.union(words.object, words.person);
		}

		return list[Math.floor(Math.random() * list.length)];
	},

	modifyWord: function(word, type, pre) {
		type = type === "object" || type === "person" ? "noun" : type;

		var modified = word;

		switch (type) {
			case "noun":
				modified = this.modifyNoun(word, pre);
				break;
		}

		return modified;
	},

	modifyNoun: function(word, pre) {
		var modified = word;

		if(grammar.plural.indexOf(pre) !== -1) {
			modified = plural.pluralize(word);
		}

		return modified;
	},

	modifyPre: function(word, pre) {
		var vocals = ["a", "e", "i", "o", "u"];
		var modified;

		if (typeof pre !== "undefined") {

			if(pre.toLowerCase() === "a" || pre.toLowerCase() === "an") {
				console.log(word);
				if(vocals.indexOf(word.charAt(0)) !== -1) {
					modified = "an";
				}
				else {
					modified = "a";
				}
			}
			else {
				modified = pre;
			}
		}
		else {
			modified = "";
		}

		return modified;
	}
};

module.exports = WordGenerator;