var in_town_grammar = {
    "origin": [
        "#intro#\n\n#Firstly# #plot#\n\n#Next# #shopping#", 
        "#intro#\n\n#Firstly# #shopping#\n\n#Next# #plot#", 
        "#intro#\n\n#Firstly# #shopping#\n\n#Next# #sidequest#\n\n#Finally# #plot#", 
        "#intro#\n\n#Firstly# #plot#\n\n#Next# #sidequest#\n\n#Finally# #shopping#"
    ],
    "intro": ["#introSentence# #introCommentary#"],
    "introSentence": [
        "Welcome to #TownName#, #SizePhrase# #locationPhrase#.", 
        "#town_intro.capitalize# #TownName#, #SizePhrase# #locationPhrase#.", 
        "#locationPhrase.capitalize#, #town_intro# #TownName#, #SizePhrase#."
    ],
    "introCommentary": [
        "Enjoy the town's theme - it only appears here in this town.", 
        "I hope you enjoy the random kids getting in your way every 30 seconds.", 
        "#sizeCommentary#"
    ],
    "town_intro": [
        "#town_intro_actor# #intro_filler##town_intro_verb#", 
        "#town_intro_actor_pl# #intro_filler##town_intro_verb.s#"
    ],
    "town_intro_actor": ["you", "we", "the party"],
    "town_intro_actor_pl": ["the party"],
    "town_intro_verb": ["find", "enter", "locate", "discover"],
    "intro_filler": ["", "then ", "finally ", "suddenly "],
    "Firstly": [
        "So, first things first.", 
        "Let's get started.", 
        "There's a couple of things we'll wanna do first."
    ],
    "Next": [
        "Afterwards, we head to the next stop.", 
        "With that done, it's time for stop number 2.", 
        "Now, to move on to actually important things:"
    ],
    "Finally": [
        "But wait! There's one final thing here.", 
        "This town has one last thing we need to checkout.", 
        "Before we leave, there's one final task to do."
    ],
    "plot": [
        "#plot_summary# #plot_commentary# #plot_importance#", 
        "#plot_summary# #plot_importance# #plot_commentary#"
    ],
    "plot_summary" : [
        "We need to go to the #TownFeatureLowerCase# and talk to #TownFeatureNPC#.", 
        "#TownFeatureNPC.capitalize#, by the #TownFeatureLowerCase# needs to talk with us first."
    ],
    "plot_commentary": ["#commentary_length# #commentary_outcome#"],
    "commentary_length": [
        "#TownFeatureNPC.capitalize# talks for WAAAAAAY too long, but afterwards,", 
        "After #commentary_duration.a# #cutscene#,", 
        "After #commentary_duration.a# #cutscene#,", 
        "After #commentary_duration.a# #cutscene#,"
    ],
    "commentary_duration": ["quick", "long", "painless", "agonizing", "barely tolerable", "shockingly fast"],
    "cutscene": ["cutscene", "conversation", "bit of dialog", "bit of dialogue", "pile of textboxes"],
    "commentary_outcome": [
        "we're all set and will be able to enter the next dungeon.", 
        "the party gets the permission they need.", 
        "the flag that opens the next dungeon is set."
    ],
    "plot_importance": [
        "There's some connection to the greater lore established, too.", 
        "This NPC gets one of the funniest lines in the game here.", 
        "You know the meme, this is where that screenshot's from."
    ],
    "shopping": [
        "#shoppingIntro# #sizeShopping# #importantItems#", 
        "#shoppingIntro# #sizeShopping# #importantItems# #ConsumableRefill#"
    ],
    "shoppingIntro": ["#shoppingIntroPre#, #shoppingIntroPost#"],
    "shoppingIntroPre": ["With all the money we've gathered from the previous dungeon"],
    "shoppingIntroPost": ["it's time to do some shopping!"],
    "importantItems": [
        "#importantItemsMain# #CheckUpgrade#", 
        "#importantItemsMain#", 
    ],
    "importantItemsMain": [
        "#importantItems_armorUpgrade# #importantItems_weapon#", 
        "#importantItems_weapon# #importantItems_armorUpgrade#", 
        "#importantItems_weapon# #importantItems_armorNoUpgrade#",
        "#importantItems_armorNoUpgrade# #importantItems_weapon#", 
    ],
    "importantItems_weapon": [
        "There's a huge weapon upgrade for #character# here.", 
        "Whatever you do, go and buy the new weapon for #character# here - see those stats? That's the good stuff.",
        "There's actually a new elemental #weaponType# for #character# here! It's also a strict upgrade over #pronoun# old weapon.",
    ],
    "importantItems_armorUpgrade": [
        "The armor here is an improvement over the last area.", 
        "There's a few pieces of armor you'll definitely want to pick up!", 
        "If you can get the body armor here, it's a great improvement over the current gear."
    ],
    "importantItems_armorNoUpgrade": [
        "Don't bother looking at the armor - if you've been following this guide, you've got the best you can find",
        "The armor selection here is literally the same as the last town - don't bother."
    ],
    "CheckUpgrade": [
        "Of course, if you missed any of the upgrades from the last town, you can still get them here.",
        "Just make sure you have the highest stats you can find from the shops.",
        "If you don't have enough money for an upgrade, I'd recommend grinding just outside of town for it."
    ],
    "ConsumableRefill": [
        "Don't forget to pick up some #potion.s# with your remaining #money#!", 
        "Be sure to top off your supply of #potion.s#.", 
        "Any #money# you have left over should go to #potion.s#"
    ],
    "sidequest": [
        "There's actually a hidden sidequest here, where you talk to all the townsfolk to figure out who borrowed what from who. #sidequestCommentary#",
        "As you talk with the townsfolk, one of them will ask you to help deliever some mail to folks."
    ],
    "sidequestCommentary": [
        "For whatever reason though, the devs decided that this was going to suck.",
        "The little story here is actually really charming and even if there's no reward, I highly recommend to play through it",
        "This actually gives an extremely rare consumable, so BE SURE TO DO THE WHOLE QUEST."
    ],

    "TownName": ["Fleetwood"],
    "smallNumber": ["2", "two", "3", "three", "4", "four"],
    "direction": ["top", "bottom", "North East", "North West", "South East", "South West", "East", "West", "South", "North"],
    "money": ["cash", "money", "currency"],
    "potion": ["potion", "pot", "consumables", "heal pot", "healing pot", "healing potion"]
};

const townSizeKeys = ["SizePhrase", "sizeCommentary", "sizeShopping"];

const townSizeDescriptions = {
    "Hamlet": {
        "SizePhrase": ["a sleepy #smallNumber# building town", "a quaint little village", "a waste of a game map", "the smallest town you'll ever see in a game", "a tiny town, despite the #TownFeatureLowerCase#,"],
        "sizeCommentary": ["With a town this small, it's hard to get lost", "Be careful while exploring - the edge of the town map is much closer than you'd think."],
        "sizeShopping": ["Despite the town's size, the stores are extremely well stocked."],
    },
    "Village": {
        "SizePhrase": ["a town with a few NPCs wandering around", "a village with a dedicated #TownFeatureLowerCase#", "a standard-looking town"],
        "sizeCommentary": ["It's easy to explore and find the places you need to go.", "The town looks small, but it actually managed to cram a lot into the tiny floorplan."],
        "sizeShopping": ["The shopkeepers here keep a reasonable amount of stock.", "The two shops in town are on opposite sides of the map, but they carry the same items."],
    },
    "Small Town": {
        "SizePhrase": ["an energetic town", "a town centered around a #TownFeatureLowerCase#", "a reasonably sized city with a central #TownFeatureLowerCase#"],
        "sizeCommentary": ["The town as a few clusters of buildings - one of them is residental, and therefore useless.", "There's a few main paths through this town, but they all branch off the main road."],
        "sizeShopping": ["Despite the decent selection, you'll have to go from shop to shop to pick up everything you need.", "The shops are arranged like a classic marketplace, with wears at each individual stall."],
    },
    "City": {
        "SizePhrase": ["a massive, sprawling town", "a metropolis, build around a #TownFeatureLowerCase#", "a huge city filled with NPCs"],
        "sizeCommentary": ["Thankfully, the buildings are clustered into districts, so you'll find everything you need in only a few places.", "Be careful - it's really easy to get lost across all the different sub-maps."],
        "sizeShopping": ["There's a single super-store for your shopping needs.", "All the shops are in the #direction# corner of the map, annoyingly enough"],
    }
};

const townFeatureKeys = ["TownFeatureLowerCase", "TownFeatureNPC"];

const townFeatureDescriptions = {
    "Port": {
        "TownFeatureLowerCase": ["port"],
        "TownFeatureNPC": ["the Captain"],
    },
    "Cathedral": {
        "TownFeatureLowerCase": ["cathedral", "church"],
        "TownFeatureNPC": ["the Priest"],
    },
    "Fountain": {
        "TownFeatureLowerCase": ["fountain"],
        "TownFeatureNPC": ["the Poet"],
    },
    "Castle": {
        "TownFeatureLowerCase": ["castle"],
        "TownFeatureNPC": ["the Duchess"],
    },
    "Market": {
        "TownFeatureLowerCase": ["market"],
        "TownFeatureNPC": ["the Mechant"],
    },
    "Graveyard": {
        "TownFeatureLowerCase": ["graveyard"],
        "TownFeatureNPC": ["the Gravekeeper"],
    },
};

const townBiomeKeys = ["locationPhrase", "biomeAdj"];

const townBiomeDescriptions = {
    "Grassland": {
        "locationPhrase": ["alongside a river", "with grass and fields for as far as the eye can see"],
        "biomeAdj": ["farming", "plains", "rural"]
    },
    "Mountains": {
        "locationPhrase": ["high in a mountain range", "at the end of a long climb into the hills"],
        "biomeAdj": ["hilly", "mountain", "mountainous"]
    },
    "Tropical": {
        "locationPhrase": ["under the hot tropical sun", "nestled under the warm tropical breeeze"],
        "biomeAdj": ["tropical"]
    },
    "Tundra": {
        "locationPhrase": ["in a very cold part of the world", "frozen away in the tundra"],
        "biomeAdj": ["frozen", "winter", "icy"]
    },
    "Swamp": {
        "locationPhrase": ["deep in the middle of a swamp", "even as the marsh tries to swallow it whole"],
        "biomeAdj": ["marsh", "swamp"]
    },
    "Forest": {
        "locationPhrase": ["hidden away in a forest", "nestled between the trees"],
        "biomeAdj": ["forest"]
    },
};

function testInTownGrammar()
{
    const size = townSizeDescriptions[pickRandom(TOWN_SIZES)];
    townSizeKeys.forEach((key) => in_town_grammar[key] = size[key]);

    const feature = townFeatureDescriptions[pickRandom(TOWN_FEATURES)];
    townFeatureKeys.forEach((key) => in_town_grammar[key] = feature[key]);

    const biome = townBiomeDescriptions[pickRandom(TOWN_BIOMES)];
    townBiomeKeys.forEach((key) => in_town_grammar[key] = biome[key]);

    let grammar = tracery.createGrammar(in_town_grammar);
    generatedText = grammar.flatten("#origin#");
    console.log(generatedText);
}