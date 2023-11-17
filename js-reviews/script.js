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


}