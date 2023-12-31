key_town_grammar = {
    "origin": ["#introPhrase#. #worldMapDirections#. #mapConclusion#"],
    "introPhrase": [
        "after getting out of #dungeon#, you'll be back on the #worldName#",
        "exit to the #worldName#",
        "after all of that, you'll be kicked out to the #worldName#",
        "heal up after all of that, and head out to the #worldName#",
        "exit #dungeon#, and head to #worldName#"

    ],
    "worldName": [
        "World Map",
        "overworld"
    ],
    "worldMapDirections": [
        "#worldMapDirection#. #worldMapDirections#",
        "#worldMapDirection#"
    ],
    "worldMapDirection": [
        "head #compassDirection#, around the #feature#",
        "you'll want to grind a bit here-- the items at #town# are expensive",
        "grind up some levels before getting to #town#, it'll be useful later",
        "head #compassDirection#, then #compassDirection#",
        "head #compassDirection#, then #compassDirection# at the #feature#",
        "follow the #route# #compassDirection#",
        "follow the #compassDirection#",
        "follow the #route#, be sure to grab #treasure# along the way",
        "there's nothing of interest near #feature#, so just skip it",
        "go near #feature# and be sure to pick up #treasure#"
    ],
    "route": [
        "road",
        "path"
    ],
    "mapConclusion": [
        "finally, head #compassDirection# to get to #town#",
        "you're looking for #town#, on the minimap it's a #minimapSymbol#",
        "keep going and you'll eventually run into #town#",
        "#town# is just past #feature#"
    ],
    "minimapSymbol": [
        "dot",
        "circle",
        "square"
    ],
    "feature": [
        "#elementalFeature#",
        "forest",
        "mountain",
        "mountain range",
        "bridge",
        "river",
        "lake",
        "wide bridge",
        "desert",
        "coastline",
        "beach"
    ],
    "treasure": [
        "#visibility.a# chest containing #equipment.a#",
        "#visibility.a# chest containing #number# gold pieces",
        "#visibility.a# chest containing #item.a#",
        "#visibility.a# chest containing #number# #item.s#"
    ],
    "visibility": [
        "hard-to-spot",
        "kinda hidden",
        "obvious",
        "",
        "well-hidden"
    ],
    "number": [
        "2",
        "5",
        "10",
        "100",
        "500"
    ],
    "compassDirection": ["north", "south", "east", "west", "northeast", "northwest", "southeast", "southwest"]
}