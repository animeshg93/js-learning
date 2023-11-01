let count = 0;

let value = document.querySelector(".counter");
let num = value.textContent
let btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;

        if (styles.contains("dec")) {
            count--;
        } else if (styles.contains("inc")) {
            count++;
        } else {
            count = 0;
        }

        if (count < 0) {
            value.style.color = "red"
        } else if (count > 0) {
            value.style.color = "green"
        } else {
            value.style.color = "black"
        }

        value.textContent = count;
    })
})