"use strict"

const switchBTN = document.querySelector(".switch-btn");

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        switchFunc();
    }
})
switchBTN.addEventListener("click", () => {
    switchFunc();
})

function switchFunc() {
    const icons = document.querySelectorAll(".icon");
    const labels = document.querySelectorAll(".label");

    switchBTN.classList.toggle("active");
    icons.forEach((icon) => {
        icon.classList.toggle("hidden");
    })
    labels.forEach((label) => {
        label.classList.toggle("hidden");
    })
}