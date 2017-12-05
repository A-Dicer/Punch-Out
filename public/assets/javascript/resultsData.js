var splits = [
	{
		GlassJoe:		{ name: "Glass Joe", 		live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		VonKaiser: 		{ name: "Von Kaiser",		live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		DiscoKid: 		{ name: "Disco Kid",		live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		KingHippo: 		{ name: "King Hippo",		live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		PistonHondo: 	{ name: "Pison Hondo",		live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		BearHugger: 	{ name: "Bear Hugger",		live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		GreatTiger: 	{ name: "Great Tiger",		live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		DonFlamenco: 	{ name: "Don Flamenco",		live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		AranRyan: 		{ name: "Aran Ryan",		live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		BaldBull: 		{ name: "Bald Bull",		live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		SodaPopinski: 	{ name: "Soda Popinski",	live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		MachoMan: 		{ name: "Macho Man",		live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		MrSandman: 		{ name: "Mr Sandman",		live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		GlassJoe: 		{ name: "Glass Joe TD", 	live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		VonKaiser: 		{ name: "Von Kaiser TD",	live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		DiscoKid: 		{ name: "Disco Kid TD",		live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		KingHippo: 		{ name: "King Hippo TD",	live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		PistonHondo: 	{ name: "Pison Hondo TD",	live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		BearHugger: 	{ name: "Bear Hugger TD",	live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		GreatTiger: 	{ name: "Great Tiger TD",	live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		DonFlamenco: 	{ name: "Don Flamenco TD",	live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		AranRyan: 		{ name: "Aran Ryan TD",		live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		BaldBull: 		{ name: "Bald Bull TD",		live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		SodaPopinski: 	{ name: "Soda Popinski TD",	live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		MachoMan: 		{ name: "Macho Man TD",		live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		MrSandman: 		{ name: "Mr Sandman TD",	live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		UnknownA: 		{ name: "???",				live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		UnKnownB: 		{ name: "???",				live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
		UnKnownC: 		{ name: "???",				live: { KD1: null, KD2: null, time: null }, PB: { KD1: null, KD2: null, time: null }, gold: { KD1: null, KD2: null, time: null }, ILWR: { KD1: null, KD2: null, time: null }},
	}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = resultsArray;