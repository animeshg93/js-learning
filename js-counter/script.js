function decrease() {
    var counter = document.querySelector(".counter");
    var num = Number(counter.innerHTML);
    num = num - 1;
    counter.innerHTML = num

    changeColor(counter, num)
}

function reset() {
    var counter = document.querySelector(".counter");
    var num = Number(counter.innerHTML);
    counter.innerHTML = 0

    changeColor(counter, 0);
}

function increase() {
    var counter = document.querySelector(".counter");
    var num = Number(counter.innerHTML);
    num = num + 1;
    counter.innerHTML = num

    changeColor(counter, num)
}

function changeColor(counter, num) {
    if (num < 0) {
        counter.style.color = "red"
    } else if (num > 0){
        counter.style.color = "green"
    } else {
        counter.style.color = "black"
    }
}