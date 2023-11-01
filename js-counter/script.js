function decrease() {
    var num = Number(document.querySelector(".counter").innerHTML);
    num = num - 1;
    document.querySelector(".counter").innerHTML = num
}

function reset() {
    document.querySelector(".counter").innerHTML = 0
}

function increase() {
    var num = Number(document.querySelector(".counter").innerHTML);
    num = num + 1
    document.querySelector(".counter").innerHTML = num
}