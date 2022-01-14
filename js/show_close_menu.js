const show_button = document.getElementById('show-menu');
const close_button = document.getElementById('close-menu');
const menu = document.getElementById('menu');

show_button.addEventListener('click', slideMenu);
close_button.addEventListener('click', slideMenu);

function slideMenu() {

    if (show_button.style.display !== "none") {

        menu.style.transform = "scale(1)";
        show_button.style.display = "none";
        close_button.style.display = "inline-block";
        close_button.style.zIndex = 150;

    }

    else {

        menu.style.transform = "scale(0)";
        close_button.style.display = "none";
        show_button.style.display = "inline-block";

    }

}