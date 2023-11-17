var results = ""
var index = 0;
var SIZE = 100

document.addEventListener("DOMContentLoaded", async () => {
    var profile = await fetch("https://randomuser.me/api/?results=100");
    results = await profile.json();
    getUser(false, null)
})


const getUser = (isRandom, isInc) => {

    if (isRandom)
        index = Math.floor(Math.random() * SIZE)

    if (isInc != null) {
        index = isInc ? (index + 1) % SIZE : index == 0 ? index = SIZE - 1 : index - 1
    }

    var person = results["results"][index]
    var name = person["name"]["first"] + " " + person["name"]["last"]

    document.getElementById("name").innerHTML = name
    document.getElementById("pic").src = person["picture"]["large"]
    document.getElementById("location").innerHTML = person["location"]["country"]

    generateParagraph()
}

const generateParagraph = () => {
    const wordList = ["auditor", "fixture", "eye", "cheque", "van", "cereal", "burst", "outline", "volcano", "sport", "faith",
        "exit", "murder", "justify", "funeral", "opera", "hold", "aunt", "excess", "galaxy", "smile", "exhibition", "multiply",
        "continuous", "laboratory", "pray", "virtue", "freight", "kick", "technique", "brake", "demonstrator", "red", "projection",
        "swell", "will", "crouch", "specimen", "welfare", "spare", "original", "discovery", "goalkeeper", "syndrome", "inject", "can",
        "paralyzed", "elect", "victory", "evaluate"]

    var text = '';
    for (var i = 0; i < wordList.length; i++) {
        text += wordList[Math.floor(Math.random() * wordList.length)] + " ";
    }

    document.getElementById("text").innerHTML = text
}