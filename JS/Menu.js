const Menu = document.querySelector("#Menu")

function openMenu(){
    Menu.style.display = "flex";
    setTimeout(function(){Menu.style.opacity = "1";},0)
}
function closeMenu(){
    setTimeout(function(){Menu.style.display = "none"},500)
    Menu.style.opacity = "0";
}