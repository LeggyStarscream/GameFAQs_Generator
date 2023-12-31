equip_dun_grammar = {
    "origin": ["#introPhrase#. #worldMapDirections#. #mapConclusion#"],
    "introPhrase": [
        "with #equipment# purchased, it's time to head to #dungeon#. Exit back to the #worldName#",
        "time to exit to the #worldName#",
        "buy any more items you want, then exit #town#",
        "make sure to heal up, then head out to #worldName#",
        "now finally done with the shopping spree, head back out to #worldName#",
        "exit #town#, putting you back on the #worldName#",
        "after picking up #equipment#, exit #town# back to #worldName#",
        "now that you've lightened your pockets from buying #equipment#, head back to the #worldName#",
        "start heading back out of #town#, be sure to watch the cutscene on your way out. it's kinda a sad one :c",
        "exit #town#, and watch the funny cutscene between #character# and #character#. What a lovable dumbass",
        "leave #town#, our next destination is #dungeon#"
    ],
    "worldName": [
        "World Map",
        "overworld"
    ],
    "worldMapDirections": [
        "#worldMapDirection#. #worldMapDirections#",
        "#worldMapDirection#. #worldMapEvent#. #worldMapDirections#",
        "#worldMapDirection#"
    ],
    "worldMapDirection": [
        "head #compassDirection#, passing by the #feature#",
        "be careful the the encounters here, #dungeon# is rough and you'll want your resources high. Make use of the ability to flee",
        "follow the #route# #compassDirection#",
        "make sure to backtrack to #town# if you need to heal up",
        "head #compassDirection#, then #compassDirection# and past #feature#",
        "head #compassDirection#, then #compassDirection# at the #feature#",
        "follow the #route#, make sure to grab the #treasure# along the way",
        "take a quick detour #compassDirection# for #treasure#. Backtrack, then head #compassDirection#",
        "head #compassDirection#",
        "head #compassDirection#, then #compassDirection#"
    ],
    "worldMapEvent": [
        "watch the cutscene between #character# and #character#",
        "watch the cutscene between everyone in the party",
        "be sure to pet the friendly #animal# along the way",
        "wait for the group of #animal.s# to cross your path, then keep going",
        "watch the emotional cutscene. #character# isn't having a great day",
        "be dazzled by that sweet sunset",
        "there's some special encounters here, be sure to get all of them for the #bestiary#",
        "near #feature#, there's a special encounter. Grab it for the #bestiary#"
    ],
    "bestiary": [
        "Bestiary",
        "Monster List",
        "Encounter List",
        "Encounter Guide"
    ],
    "route": [
        "road",
        "path"
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
    "mapConclusion": [
        "finally, head #compassDirection# to get to #dungeon#",
        "you're looking for #dungeon#, on the minimap its a #minimapSymbol#",
        "#dungeon# is just past the #feature#",
        "after a bunch of random encounters, you'll finally make it to #dungeon#"
    ],
    "minimapSymbol": [
        "dot",
        "circle",
        "square"
    ],
    "compassDirection": [
        "north", "south", "east", "west", "northeast", "northwest", "southeast", "southwest"
    ]
}