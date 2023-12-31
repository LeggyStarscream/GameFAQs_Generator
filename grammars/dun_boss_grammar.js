dun_boss_grammar = {
    "origin": ["#introductionPhrase#\n#directionPhrase#\n#bossPhrase#"],
    "introductionPhrase": ["#introPhrase#, #direction#"],
    "directionPhrase": ["#directionParagraph#", "#directionParagraph#\n#directionPhrase#"],
    "directionParagraph": [
        "#locationPhrase#, #direction#. #directions#\n#exitPhrase#"
    ],
    "introPhrase": [
        "as soon as you enter",
        "as you enter",
        "first of all",
        "starting out",
        "after watching the cutscene"
    ],
    "locationPhrase": [
        "here",
        "outside",
        "inside",
        "back outside",
        "back inside",
        "in the next room",
        "in the next area",
        "from there",
        "continue #compassDirection# to the next room"
    ],
    "compassDirection": ["north", "south", "east", "west", "northeast", "northwest", "southeast", "southwest"],
    "relativeDirection": ["left", "right"],
    "direction": [
        "go #compassDirection# and #compassDirection#, just past the #feature#",
        "go #compassDirection#, just past the #feature#",
        "take the #compassDirection# path to find #treasure#",
        "backtrack, and take the #compassDirection# path before getting to the #feature#",
        "continue along the path toward the #feature#",
        "go along the path #compassDirection#, until the #feature#",
        "go along the path #compassDirection#, until you see #treasure#",
        "you'll find a #feature# here",
        "go through the door nearby and interact with the #feature#",
        "examine the #feature# for some party dialog and fun quips",
        "#cutscenePhrase#",
        "#obstacle#",
        "#obstacle#"
    ],
    "obstacle": [
        "this area is a maze. #mazeDirections# #mazeExit#",
        "you'll run into a bunch of twisty passages. #mazeDirections# #mazeExit#",
        "the next few rooms have some spicy random encounters-- keep your party healed up",
        "heal up, the next rooms have some hard encounters",
        "this is where you'll the the gimmick of the dungeon-- all the next encounters are #elem# themed",
        "you'll have to deal with a #element# puzzle #dynamicPuzzleInstructions#"
    ],
    "dynamicPuzzleInstructions": [
        "#icePuzzleIntroduction# #iceSolveSteps# #icePuzzleComplete#",
        "#firePuzzleIntroduction# #fireSolveSteps# #firePuzzleComplete#"
    ],
    "icePuzzleIntroduction": [
        "this next area has slippery floors.",
        "you've gotten to the gimmick of the dungeon-- an icy floor puzzle."
    ],
    "iceSolveSteps": [
        "slide #compassDirection# until you hit the wall. Then slide #compassDirection#. #iceSolveSteps#",
        "slide #compassDirection# to hit a rock. #iceSolveSteps#",
        "go #relativeDirection#, slippin' n' sliddin' to the wall. #iceSolveSteps#",
        "don't go #relativeDirection#-- you'll fall into a hole and need to start from the beginning. Slide #compassDirection#. #iceSolveSteps#",
        "",
        ""
    ],
    "icePuzzleComplete": [
        "slide #relativeDirection# to finally be done with this puzzle",
        "congrats on being back on solid ground. Keep going forward to continue in the dungeon",
        "*whew* congrats on being done with that segment"
    ],
    "mazeDirections": [
        "go #compassDirection#, then #compassDirection#, then #compassDirection#. #mazeDirections#",
        "",
        "go #compassDirection# until the fork. #mazeDirections#",
        "go #compassDirection# to get the #treasure#, then backtrack and go #compassDirection#. #mazeDirections#",
        "hug the #compassDirection# wall until you come to an open area. #mazeDirections#",
        "go #compassDirection# until the path hits a T. Then, go #relativeDirection#. #mazeDirections#"
    ],
    "mazeExit": [
        "keep on going until you make it out of the maze",
        "go #compassDirection# until you make it to the next room. *whew*",
        "you're almost out-- take a #relativeDirection# then a #relativeDirection# and a #relativeDirection# and you're done",
        "head #compassDirection# and then #compassDirection# and then you're free",
        "keep on keeping on, this part of #dungeon# is almost done. Make sure to pick up #treasure# on your way out"
    ],
    "treasure": [
        "a chest containing gold",
        "a chest containing #weapon#",
        "a chest containing #armor#",
        "#item.a#",
        "a chest containing x#number# #item#",
        "some gold on the ground",
        "#number# gold pieces on the ground",
        "a chest containing #number# gold pieces"
    ],
    "number": [
        "2",
        "5",
        "10",
        "20",
        "50"
    ],
    "feature": [
        "crack in the wall",
        "control panel",
        "big red button",
        "icicles",
        "bridge",
        "wide bridge",
        "broken machinery",
        "scrap heap",
        "statue",
        "river",
        "stream"
    ],
    "directions": [
        "#direction#. ",
        "#direction#. #locationPhrase# #direction#. \n#directions#",
        "#direction#. #directions#",
        "#direction#. #directions#",
        "#direction#. \n#directions#"
    ],
    "exitPhrase": [
        "go #compassDirection# and #compassDirection# until the next room.\n",
        "go #compassDirection# until the next room.\n",
        "keep along the #compassDirection# side until you get out.\n",
        "backtrack, then head #compassDirection# at the fork, into the next area.\n",
        "there, go #compassDirection# and outside.\n",
        "there, go #compassDirection# and inside.\n",
        "go #compassDirection# and #compassDirection# when possible to get to the next area.\n",
        "heal up, and head #compassDirection#.\n",
        "watch the cutscene, then head to the next area.\n",
        "interact with your party for some party dialog, then head to the next area.\n"
    ],
    "bossPhrase": [
        "go #direction# to fight the #boss#.",
        "and then get dragged into a battle with #boss#.",
        "keep going #direction# until it's time to fight #boss#.",
        "approach #boss#, it'll become enraged and attack!",
        "examine the #feature#, then fight the #boss#.",
        "keep going and until you get an encounter with #boss#. It's time to finish this.",
        "once you're near the #feature#, the fight to get out of this dungeon begins!",
        "hope you're ready to fight #boss#-- you don't have a choice!",
        "use restorative items, and get ready-- it's time to fight #boss#. Let's do this.",
        "head #direction# and then save your game. Continue towards the #feature# and start a fight with #boss#."
    ]
}