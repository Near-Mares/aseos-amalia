const menuIconA = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu-navigation');

menuIconA.addEventListener('click', () => {
    menu.classList.toggle('spread');
});

window.addEventListener('click', e => {
    if( menu.classList.contains('spread') && e.target != menu && e.target != menuIcon) {
        menu.classList.toggle('spread');
    }
})