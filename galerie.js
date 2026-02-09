const imageFolder = "images/carousel/";
const imageCount = 25; // <-- Anzahl deiner Bilder

const galleryGrid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.querySelector(".lightbox-close");

// Bilder automatisch erzeugen
for (let i = 1; i <= imageCount; i++) {
  const div = document.createElement("div");
  div.className = "gallery-item";

  const img = document.createElement("img");
  img.src = `${imageFolder}img${i}.jpg`;
  img.alt = `Galerie Bild ${i}`;
  img.loading = "lazy";

  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });

  div.appendChild(img);
  galleryGrid.appendChild(div);
}

// Lightbox schließen
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
