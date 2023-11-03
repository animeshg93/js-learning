const api = async() => {
    var profile = await fetch("https://randomuser.me/api/");
    var resp = await profile.json();
    var name = resp["results"][0]["name"]["first"] + " " + resp["results"][0]["name"]["last"]

    document.getElementById("name").innerHTML = name
    document.getElementById("pic").src = resp["results"][0]["picture"]["large"]
    document.getElementById("location").innerHTML = resp["results"][0]["location"]["country"]
}