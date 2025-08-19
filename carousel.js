
const imageFolder = './images/carousel/';
const totalImages = 25;

document.addEventListener('DOMContentLoaded', function () {
    loadCarouselImages();
  });
  
function loadCarouselImages() {
const carouselContainer = document.getElementById('carouselImages');
  for (let i = 1; i <= totalImages; i++) {
    const div = document.createElement('div');
    div.classList.add('carousel-item');
    if (i === 1) div.classList.add('active');

    const img = document.createElement('img');
    img.src = imageFolder + 'img' + i + '.jpg';
    img.alt = 'Bild ' + i;

    img.loading = 'lazy';
    
    img.style.objectFit = 'contain';  
    img.style.width = '100%';   
    img.style.height = '100%'; 
    img.style.zIndex = 2;

    div.appendChild(img);
    carouselContainer.appendChild(div);
  }
}