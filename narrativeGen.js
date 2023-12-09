let text_buffer = "This Guide Was Written By No One\n";


/**
 * Hook from the web page to Kick Off This Whole Deal
 * We do a depth-first walk of the graph, using a callback on each edge to find a grammar,
 * augment it with dynamic info from the nodes around it, and then expand it.
 * 
 * TODO: to load more context, we should have this callback be a function on an object, which'll
 * let us hold onto object properties ala "this" to have more context (for recently seen things, for example)
 */
function generate()
{
    text_buffer = "";
    let gen_g = generateGraph(4);
    walkGraph(gen_g, generateFromEdge);
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
            console.log("Generating With Edge:");
            console.log(edge_ctx);
            console.log("---------------------")
            callback(edge_ctx);
            stepFrom(graph, edge["w"], callback);
        });
}

/**
 * Get a type from a node's label-- we sorta assume that node labels start with things like Town
 * or Dungeon
 * @param {String} label the label of a node
 */
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
        raw_grammar["feature"] = mapFeaturesFromTownBiomes[edge_ctx.start.info.biomes]
        
        console.log(raw_grammar);
        let grammar = tracery.createGrammar(raw_grammar);
        generatedText = grammar.flatten("#origin#");
    } else if (startNodeType == "Dungeon" && destNodeType == "Town") {
        generated_text = "";
        // combining two grammars here because there's so much Good Stuff in the dungeon nodes
        let raw_dun_boss_grammar = dun_boss_grammar
        raw_dun_boss_grammar["dungeon"] = [edge_ctx.start.label]
        // ... TODO augmenting goes here!
        let cml_dun_boss_grammar = tracery.createGrammar(raw_dun_boss_grammar)
        generatedText += cml_dun_boss_grammar.flatten("#origin#") + "\n";

        let raw_grammar = key_town_grammar // not quite right, this grammar is for going from a equipment (weapon or armor) to a dungeon
                                   // simulating the "get new equipment in shop, then go find the next dungeon"
        // augment the grammar... see the other arms here
        raw_grammar["town"] = [edge_ctx.dest.label]
        raw_grammar["dungeon"] = [edge_ctx.start.label]

        let grammar = tracery.createGrammar(raw_grammar);
        generatedText += grammar.flatten("#origin#") + "\n"; 
    }

    text_buffer += generatedText + "\n"
    element.innerText = text_buffer;
}
