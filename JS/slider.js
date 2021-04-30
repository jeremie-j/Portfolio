var buttons = document.querySelectorAll(".button-wrapper > .button");
var slider = document.querySelector(".images");

function SlideTo(i){
        slider.scroll({
        left: 500 * i,
        behavior: "smooth",
        });
    for(let f = 0; f < buttons.length; f++){
        buttons[f].classList.remove("active")
    }
    buttons[i].classList.add("active")
}