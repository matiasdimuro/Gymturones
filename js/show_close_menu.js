const show_button = document.getElementById('show-menu');
const close_button = document.getElementById('close-menu');
const menu = document.getElementById('menu');

show_button.addEventListener('click', showMenu);
close_button.addEventListener('click', closeMenu);

function showMenu() {
        
    menu.style.transform = "translateX(0)";
    show_button.style.display = "none";
    close_button.style.zIndex = 150;
    close_button.style.display = "inline-block";

}

function closeMenu() {

    menu.style.transform = "translateX(-100vw)";
    close_button.style.display = "none";
    show_button.style.display = "inline-block";

}