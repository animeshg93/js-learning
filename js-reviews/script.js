var results = ""
var index = 0;
var SIZE = 10

document.addEventListener("DOMContentLoaded", async () => {
    var profile = await fetch("https://randomuser.me/api/?results=10");
    results = await profile.json();
    getUser(false, null)
})


const getUser = (isRandom, isInc) => {

    if (isRandom)
        index = Math.floor(Math.random() * SIZE)

    if (isInc != null) {
        index = isInc ? (index + 1) % 10 : index == 0 ? index = SIZE - 1 : index - 1
    }

    var name = results["results"][index]["name"]["first"] + " " + results["results"][index]["name"]["last"]

    document.getElementById("name").innerHTML = name
    document.getElementById("pic").src = results["results"][index]["picture"]["large"]
    document.getElementById("location").innerHTML = results["results"][index]["location"]["country"]


}