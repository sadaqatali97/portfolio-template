(function ($) {
  /*----------------------------------------
              Isotope Masonry
  ------------------------------------------*/
  function isotopeMasonry() {
      $(".isotope-gutter").isotope({
          itemSelector: '.work__col',
          percentPosition: true
      });
      $(".isotope-no-gutter").isotope({
          itemSelector: '.work__col',
          percentPosition: true,
          masonry: {
              columnWidth: 1
          }
      });

      $(".filter__tab a").on("click", function () {
          $(".filter__tab a").removeClass("active");
          $(this).addClass("active");
          // portfolio fiter
          var selector = $(this).attr("data-filter");
          $(".isotope-gutter").isotope({
              filter: selector,
              animationOptions: {
                  duration: 750,
                  easing: "linear",
                  queue: false
              }
          });
          return false;
      });
  }

    $(document).ready(function() {
      // Add acto class on nav-item
        $('.nav-item').click(function(){
            $('.nav-item').removeClass("active");
            $(this).addClass("active");
        });

        // Preloader jQuery
        setTimeout(function(){ 
          $(".preloader").css("display", "none");          
         }, 2000);

        // init isotopes
        isotopeMasonry();

        // init AOS
        AOS.init();

        // Close Nav on scroll
        $('.nav-item a').click(function(){
          $('.navbar-collapse').removeClass("show");
          $(".ham").removeClass("active");
      });
    });
})(jQuery);

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
  if (scrollTop > 100) {
      $("header").addClass("shrink");
  } else {
    $("header").removeClass("shrink");
  }
});



// Skilss Typing Js
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["React.js","Vue.js","Express.js","MongoDB","SQL","PHP", "CI/CD", "AWS","Docker","Kubernetes"];
const typingDelay = 30;
const erasingDelay = 50;
const newTextDelay = 500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});









// Hide and show header on scroll
const body = document.body;
const triggerMenu = document.querySelector("header");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;


window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    console.log("On top");
    body.classList.remove(scrollUp);
    return;
  } else {
    console.log("On bottom");
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});
