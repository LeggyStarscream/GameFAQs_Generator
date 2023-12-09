let a = "A";
let text_buffer = "This Gude Was Written By No One\n";
var raw_grammar = {
	"name": ["Arjun","Yuuma","Darcy","Mia","Chiaki","Izzi","Azra","Lina"],
	"animal": ["unicorn","raven","sparrow","scorpion","coyote","eagle","owl","lizard","zebra","duck","kitten"],
	"mood": ["vexed","indignant","impassioned","wistful","astute","courteous"],
	"story": ["#hero# traveled with her pet #heroPet#.  #hero# was never #mood#, for the #heroPet# was always too #mood#."],
	"origin": ["#[hero:#name#][heroPet:#animal#]story#"]
};

function generate()
{
    let gen_g = generateGraph(4);
    walkGraph(gen_g, generateFromEdge);

    //var g = new graphlib.Graph();
    //g.setNode("A");
    //var grammar = tracery.createGrammar(raw_grammar);
    //const element = document.getElementById("Output");
    //element.innerText = a;
    //if (g.hasNode("A"))
    //{
    //    a = a + " " + grammar.flatten('#origin#');
    //}
}

/**
 * Walk the graph, emitting the attached data to the edge
 * @param {Graph} g graph of the game's plot
 */
function walkGraph(g, callback){
    start_node = "Plot Start"
    stepFrom(g, start_node, callback)
}

/**
 * Do a depth-first step in the graph. Probably not what we want long term but works for now
 * @param {Graph} graph the graph we're walking
 * @param {String} start_node_label the name of the node we're starting from
 * @param {Function} callback callback to Do Something with this edge
 */
function stepFrom(graph, start_node_label, callback){
    start_node = graph.node(start_node_label) ?? {}
    graph.outEdges(start_node_label)
        .map((edge, _idx, _array) => {
            edge_ctx = {
                start: {
                    label: start_node_label,
                    info: start_node,
                },
                dest: {
                    label: edge["w"],
                    info: graph.node(edge["w"]) ?? {}
                },
                edge: edge
            }
            callback(edge_ctx);
            stepFrom(graph, edge["w"], callback);
        });
}

function getTypeFromLabel(label){
    if (label.startsWith("Town")){
        return "Town"
    }else if (label.startsWith("Dungeon")){
        return "Dungeon"
    }
}
/**
 * Find a grammar for a given edge and expand it to generate some text!
 * @param {Object} edge_ctx an edge context, has the start and ending nodes
 */
function generateFromEdge(edge_ctx){
    let startNodeType = getTypeFromLabel(edge_ctx.start.label);
    let destNodeType = getTypeFromLabel(edge_ctx.dest.label);
    const element = document.getElementById("Output");
    let generatedText = ""

    if (startNodeType == "Town" && destNodeType == "Dungeon"){
        let raw_grammar = equip_dun_grammar // not quite right, this grammar is for going from a equipment (weapon or armor) to a dungeon
                                    // simulating the "get new equipment in shop, then go find the next dungeon"
        // augment the grammar with extra context sensitive rules here!
        raw_grammar["town"] = [edge_ctx.start.label] // this could be any part of the context
        raw_grammar["dungeon"] = [edge_ctx.dest.label]

        let grammar = tracery.createGrammar(raw_grammar);
        generatedText = grammar.flatten("#origin#");
    } else if (startNodeType == "Dungeon" && destNodeType == "Town") {
        let raw_grammar = key_town_grammar // not quite right, this grammar is for going from a equipment (weapon or armor) to a dungeon
                                   // simulating the "get new equipment in shop, then go find the next dungeon"
        // augment the grammar... see the other arms here
        raw_grammar["town"] = [edge_ctx.start.label]
        raw_grammar["dungeon"] = [edge_ctx.dest.label]

        let grammar = tracery.createGrammar(raw_grammar);
        generatedText = grammar.flatten("#origin#"); 
    }

    console.log(generatedText);
    text_buffer += generatedText + "\n"
    element.innerText = text_buffer;
}