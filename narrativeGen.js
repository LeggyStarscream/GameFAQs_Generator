let a = "A";

var raw_grammar = {
	"name": ["Arjun","Yuuma","Darcy","Mia","Chiaki","Izzi","Azra","Lina"],
	"animal": ["unicorn","raven","sparrow","scorpion","coyote","eagle","owl","lizard","zebra","duck","kitten"],
	"mood": ["vexed","indignant","impassioned","wistful","astute","courteous"],
	"story": ["#hero# traveled with her pet #heroPet#.  #hero# was never #mood#, for the #heroPet# was always too #mood#."],
	"origin": ["#[hero:#name#][heroPet:#animal#]story#"]
};

function generate()
{
    var g = new graphlib.Graph();
    g.setNode("A");
    var grammar = tracery.createGrammar(raw_grammar);
    const element = document.getElementById("Output");
    element.innerText = a;
    if (g.hasNode("A"))
    {
        a = a + " " + grammar.flatten('#origin#');
    }
}