let page = document.querySelector('.page');
let themeButton = document.querySelector('.change_theme');
themeButton.onclick = function() {
    page.classList.toggle('light_theme');
    page.classList.toggle('dark_theme');
};

let upButton = document.querySelector('.up-button');
window.onscroll = function() {
    upButton.classList.add('shown');
    if (window.pageYOffset>200) {
    } else {
        upButton.classList.remove('shown');
    }
};

upButton.onclick = function() {
    window.scrollTo(0, 0);
}