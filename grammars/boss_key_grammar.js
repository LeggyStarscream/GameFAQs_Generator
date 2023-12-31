boss_key_grammar = {
    "origin": ["#introParagraph#\n#battleDirectionsPhrase#\n#rewardsPhrase#"],
    "introParagraph": [
        "#attackElaboration#",
        "#getInfo#",
        "#getInfo#\n#attackElaboration#"
    ],
    "getInfo": [
        "you'll want to use #scan# on the boss to keep track of their HP",
        "as always, make sure to open with #scan#",
        "reveal the #boss#'s weakness with #scan#",
        "don't forget to open with #scan#, especially if you want to 100% the #monsterListName#",
        "this can be a slog, so open with #scan# so you can keep track of #boss#'s HP"
    ],
    "attackElaboration": [
        "#boss# has #attackDescription#, #attackDescription# and #elementalAttackDescription#. Keep light on your feet",
        "in addition to the usual basic attacks, #boss# has #elementalAttackDescription#. Keep up your guard for it.",
        "for the first #percentage# of #boss#'s HP bar, they are just going to just use basic attacks. Then, #elementalAttackDescription# starts.",
        "#boss# has just has #attackDescription# and #attackDescription# to worry about",
        "#boss# has #attackDescription# and an #elementalAttackDescription#."
    ],
    "attackDescription": [
        "a hard-hitting single target attack",
        "a nasty two hit area-of-effect combo",
        "a single target attack that hits about a billion times",
        "a hefty attack that'll eject a party member for a turn",
        "some puny area-of-effect attacks",
        "a three hit combo that'll hit two characters",
        "a rough two hit combo that'll only ever target #char#",
        "a single target attack that maybe has the coolest animations I've ever seen",
        "some single target attacks that don't matter",
        "an area-of-effect attack that does next to nothing but waste your time with its long animation"
    ],
    "elementalAttackDescription": [
        "#fireAttackDescription#",
        "#iceAttackDescription#"
    ],
    "fireAttackDescription": [
        "some tough area-of-effect fire attacks",
        "a long-running fire attack that'll damn near one-hit-KO any party members",
        "a single target attack that'll imbue #boss#'s next attacks with fire",
        "a nasty fire area-of-attack attack",
        "a tough three hit fire combo that'll hit up to two party members",
        "a fire attack that'll also leave party members reeling from a status effect"
    ],
    "percentage": [
        "75%",
        "50%",
        "60%",
        "25%",
        "10%"
    ],
    "battleDirectionsPhrase": [
        "#direction#. #battleDirectionsPhrase#",
        "#direction#. "
    ],
    "direction": [
        "this #boss# is particularly annoying, because they'll mess with you. ",
        "make sure to throw up the regular buffs",
        "hit hard and fast, before #boss# starts to use their really punishing attacks",
        "throw out a lot of #partyElementalAttack#, they'll hit #boss# weakness hard",
        "remember to #dispellingEffect# when #boss# buffs themselves",
        "defend when the telegraph for the hard-hitting attacks come out",
        "keep hitting #boss# with your strongest attacks",
        "try to set up #element# combos with your party members",
        "heal up after the hard-hitting attacks, you'll want to keep your party health above #percentage#",
        "use anti-#elem# buffs to withstand the #elem# attacks"
    ],
    "dispellingEffect": [
        "use a #dispelItem#",
        "cast Dispel"
    ],
    "rewardsPhrase": [
        "at the end of the long fight, you'll get #key# as your reward",
        "get some well-earned gold and experience. In the next room, be sure to grab #key#",
        "#boss# is tough, but for beating them you'll get a lot of experience, and #key#",
        "stick with it, and breath a sigh of relief when #boss# finally goes down. You'll get #key# in the next room",
        "eventually, #boss# will go down. Rake in that gold and experience. You'll also get #key# as a reward"
    ]
}