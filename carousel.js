document.addEventListener('DOMContentLoaded', function () {
    const imageFolder = './images/';
    const totalImages = 6;
  
    function loadCarouselImages() {
      const carouselContainer = document.getElementById('carouselImages');
      for (let i = 1; i <= totalImages; i++) {
        const div = document.createElement('div');
        div.classList.add('carousel-item');
        if (i === 1) div.classList.add('active');
  
        const img = document.createElement('img');
        img.src = imageFolder + 'img' + i + '.jpeg';
        img.alt = 'Bild ' + i;
        
        img.style.objectFit = 'contain';  
        img.style.width = '100%';   
        img.style.height = '100%'; 
        img.style.zIndex = 2;
  
        div.appendChild(img);
        carouselContainer.appendChild(div);
      }
    }
    loadCarouselImages();
  });
  