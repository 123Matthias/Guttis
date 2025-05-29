window.onscroll = function () {
  let logo = document.getElementById("logo");

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
};


document.addEventListener('DOMContentLoaded', function () {
  addFadeToList();
  cardObserver();
  contentFade();
});

window.addEventListener('resize', contentFade);

function addFadeToList() {
  document.querySelectorAll("li").forEach(element => {
    element.classList.add("fade-in-up");
  });
}

function cardObserver() {
  const card = document.querySelector('#footer-card');
  const link = document.querySelector('#contact-download');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        link.classList.add('visible');
        card.classList.add('visible');
        observer.unobserve(card);
      }
    });
  }, {
    threshold: 1

  });

  observer.observe(card);
}

function contentFade() {
  const elements = document.querySelectorAll('.fade-in-up');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px 50px 0px' });

  elements.forEach(el => observer.observe(el));
}

