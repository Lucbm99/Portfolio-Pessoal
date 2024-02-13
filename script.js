(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      var screenSize = window.innerWidth;
      if(screenSize > 991){
        $("li a").addClass("scroll-color"); 
        $(".navbar-brand").addClass("scroll-color");
        $(".navbar-brand").addClass("pulse"); 
      }
        
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $("li a").removeClass("scroll-color");
      $(".navbar-brand").removeClass("scroll-color");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

var comboGoogleTradutor = null; //Varialvel global

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,es,pt',
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
    }, 'google_translate_element');

    comboGoogleTradutor = document.getElementById("google_translate_element").querySelector(".goog-te-combo");
}

function changeEvent(el) {
    if (el.fireEvent) {
        el.fireEvent('onchange');
    } else {
        var evObj = document.createEvent("HTMLEvents");

        evObj.initEvent("change", false, true);
        el.dispatchEvent(evObj);
    }
}

function trocarIdioma(sigla) {
    if (comboGoogleTradutor) {
        comboGoogleTradutor.value = sigla;
        changeEvent(comboGoogleTradutor);//Dispara a troca
    }
}

function downloadPDFLivro() {
  // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
  var fileUrl = 'livro/pdf_teste.pdf';
  
  // Create an invisible anchor element
  var a = document.createElement('a');
  a.style.display = 'none';

  // Set the download attribute with the desired filename
  a.download = 'Livro-guia-para-iniciantes-na-programacao.pdf';

  // Set the href attribute to the file URL
  a.href = fileUrl;

  // Set the target attribute to '_blank' to open in a new tab and trigger the download
  a.target = '_blank';

  // Append the anchor to the body
  document.body.appendChild(a);

  // Trigger a click event on the anchor element
  a.click();

  // Remove the anchor from the body
  document.body.removeChild(a);
}
