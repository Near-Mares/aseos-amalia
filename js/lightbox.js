const images = document.querySelectorAll('.img-galeria');
const imagesLight = document.querySelector('.agregar-imagen');
const containerLight = document.querySelector('.imagen-light');
const menuIconB = document.querySelector('.menu-icon');



images.forEach( image => {
    image.addEventListener( 'click', () => {
        showImage(image.getAttribute('src'));
    });
});

containerLight.addEventListener('click', (e) => {
    if(e.target !== imagesLight) {
        containerLight.classList.toggle('show');
        imagesLight.classList.toggle('show-image');
        menuIconB.style.opacity = '1';
    }
})


const showImage = (image) => {
    imagesLight.src = image;
    containerLight.classList.toggle('show');
    imagesLight.classList.toggle('show-image');
    menuIconB.style.opacity = '0';
};