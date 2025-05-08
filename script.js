window.onscroll = function() {
    let logo = document.getElementById("logo");
    
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.body.classList.add("scrolled");
    } else {
      document.body.classList.remove("scrolled");
    }
  };
  