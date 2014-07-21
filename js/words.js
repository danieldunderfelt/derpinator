var words = {
	preceding: [
		"as",
		"a",
		"the",
		"an",
		"was",
		"many",
		"some"
	],

	noun: [
		{
			word: "robot",
			article: "a",
			plural: "robots"
		},
		{
			word: "boot",
			article: "a",
			plural: "boots"
		},
		{
			word: "fish",
			article: "a",
			plural: "fishes"
		},
		{
			word: "wax",
			article: "a",
			plural: "pieces of wax"
		},
		{
			word: "slime",
			article: "a",
			plural: "gobs of slime"
		},
		{
			word: "trashcan",
			article: "a",
			plural: "trashcans"
		},
		{
			word: "beast",
			article: "a",
			plural: "beasts"
		},
		{
			word: "bed",
			article: "a",
			plural: "beds"
		},
		{
			word: "poodle",
			article: "a",
			plural: "poodles"
		},
		{
			word: "poo",
			article: "a",
			plural: "poops"
		},
		{
			word: "fart",
			article: "a",
			plural: "farts"
		},
		{
			word: "troll",
			article: "a",
			plural: "trolls"
		},
		{
			word: "derp",
			article: "a",
			plural: "derps"
		},
		{
			word: "UFO",
			article: "an",
			plural: "UFOs"
		},
		{
			word: "wall",
			article: "a",
			plural: "walls"
		},
		{
			word: "pit of hamburgers",
			article: "a",
			plural: "hamburger pits"
		},
		{
			word: "asylum",
			article: "a",
			plural: "asylums"
		},
		{
			word: "fishtank",
			article: "a",
			plural: "fishtanks"
		},
		{
			word: "kitchen",
			article: "a",
			plural: "kitchens"
		},
		{
			word: "bagel",
			article: "a",
			plural: "bagels"
		},
		{
			word: "woman",
			article: "a",
			plural: "women"
		},
		{
			word: "man",
			article: "a",
			plural: "men"
		},
		{
			word: "cat",
			article: "a",
			plural: "cats"
		},
		{
			word: "train",
			article: "a",
			plural: "trains"
		},
		{
			word: "bowl of acid",
			article: "a",
			plural: "bowls of acid"
		},
		{
			word: "public place",
			article: "a",
			plural: "public places"
		},
		{
			word: "nut",
			article: "a",
			plural: "nuts"
		},
		{
			word: "silly animal",
			article: "a",
			plural: "silly animals"
		},
		{
			word: "spaceship",
			article: "a",
			plural: "spaceships"
		},
		{
			word: "alien",
			article: "an",
			plural: "aliens"
		},
		{
			word: "gift",
			article: "a",
			plural: "gifts"
		},
		{
			word: "phone",
			article: "a",
			plural: "phones"
		}
	],
	person: [
		{
			word: "fisherman",
			article: "a",
			plural: "fishermen"
		},
		{
			word: "trucker",
			article: "a",
			plural: "truckers"
		},
		{
			word: "criminal",
			article: "a",
			plural: "criminals"
		},
		{
			word: "goon",
			article: "a",
			plural: "goons"
		},
		{
			word: "policeman",
			article: "a",
			plural: "policemen"
		},
		{
			word: "prostitute",
			article: "a",
			plural: "prostitutes"
		},
		{
			word: "clown",
			article: "a",
			plural: "clowns"
		},
		{
			word: "junkie",
			article: "a",
			plural: "junkies"
		},
		{
			word: "pirate",
			article: "a",
			plural: "pirates"
		},
		{
			word: "uptight snob",
			article: "an",
			plural: "uptight snobs"
		},
		{
			word: "hippie",
			article: "a",
			plural: "hippies"
		},
		{
			word: "hipster",
			article: "a",
			plural: "hipsters"
		},
		{
			word: "president",
			article: "a",
			plural: "presidents"
		},
		{
			word: "joker",
			article: "a",
			plural: "jokers"
		},
		{
			word: "hacker",
			article: "a",
			plural: "hackers"
		},
		{
			word: "lunatic",
			article: "a",
			plural: "lunatics"
		},
		{
			word: "evil supervillain",
			article: "an",
			plural: "evil supervillains"
		},
		{
			word: "cook",
			article: "a",
			plural: "cooks"
		},
		{
			word: "hermit",
			article: "a",
			plural: "hermits" // Unnecessary plural, imo
		},
		{
			word: "dictator",
			article: "a",
			plural: "dictators"
		},
		{
			word: "dog",
			article: "a",
			plural: "dogs"
		},
		{
			word: "baboon",
			article: "a",
			plural: "baboons"
		}
	],
	verb: [
		"found",
		"ran",
		"hopped",
		"skipped",
		"ate",
		"snorted",
		"fell",
		"hissed at",
		"drank",
		"tricked",
		"conned",
		"tasted",
		"derped",
		"jumped",
		"sniffed",
		"gobbled",
		"ran over",
		"hit on",
		"googled",
		"cooked",
		"birthed",
		"fathered",
		"gave away",
		"munched",
		"slept with",
		"knitted",
		"blew up",
		"watered",
		"played",
		"yahooed",
		"paid",
		"married",
		"pinched",
		"stole",
		"hi-fived",
		"masqueraded as",
		"sunk",
		"gave the evil eye to",
		"scooped",
		"reached",
		"fetched",

	],
	adjective: [
		"fast",
		{
			default: "slow",
			as: "slowly",
			was: "slow"
		},
		"backwards",
		"hard",
		{
			default: "soft",
			was: "soft",
			as: "softly"
		},
		"seldom",
		{
			default: "crazy",
			was: "crazy",
			as: "crazily"
		},
		{
			default: "funny",
			was: "funny",
			as: "funnily"
		},
		{
			default: "interesting",
			was: "interesting",
			as: "interestingly"
		},
		"bad",
		{
			default: "splendid",
			was: "splendid",
			as: "splendidly"
		},
		{
			default: "derpish",
			was: "derpish",
			as: "derpishly"
		},
		"globally"
	]
};

module.exports = words;