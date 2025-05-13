window.onscroll = function() {
    let logo = document.getElementById("logo");
    
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.body.classList.add("scrolled");
    } else {
      document.body.classList.remove("scrolled");
    }
  };
  

  document.addEventListener('DOMContentLoaded', function(){

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
  });
