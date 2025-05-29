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
  console.log("Scroll in Y = " + window.scrollY);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }

    });
  }, { threshold: 0.2 });

  window.addEventListener('scroll', () => {
    // console.log("Scroll in Y = " + window.scrollY);
    if (window.scrollY <= 0) {
      document.querySelectorAll('.fade-in-up.visible').forEach(el => {
        el.classList.remove('visible');
      });

      const elements = document.querySelectorAll('.fade-in-up');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add('visible');
        }
      });

    }
  });


  elements.forEach(el => observer.observe(el));

}

