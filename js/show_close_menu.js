const show_button = document.getElementById('show-menu');
const close_button = document.getElementById('close-menu');
const menu = document.getElementById('menu');

show_button.addEventListener('click', (e) => {

    e.target.style.display = "none";
    menu.classList.toggle('slide');

    close_button.style.zIndex = 150;
    close_button.style.display = "inline-block";
});

close_button.addEventListener('click', (e) => {

    e.target.style.display = "none";
    menu.classList.toggle('slide');

    show_button.style.display = "inline-block";
});