/*!
  * Item: Portfolio
  * Description: Personal Portfolio Template
  * Author/Developer: SadaqatCode
  * Version: v1.0.0
*/


  //--------------------------------------------------------------------//
//-----------------    ISOTOPES    --------------------//
//--------------------------------------------------------------------//
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


//--------------------------------------------------------------------//
//-----------------    Added bg on HEADER onScroll    --------------------//
//--------------------------------------------------------------------//

function headerShrink () {
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 100) {
        $("header").addClass("shrink");
    } else {
      $("header").removeClass("shrink");
    }
  });
}



//--------------------------------------------------------------------//
//-----------------    SKILLS TYPING JS    --------------------//
//--------------------------------------------------------------------//

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
//--------------------------------------------------------------------//
//-----------------    HIDE & SHOW HEADER ON SCROLL    --------------------//
//--------------------------------------------------------------------//



function animateHeaderOnScroll(){
  const body = document.body;
  const triggerMenu = document.querySelector("header");
  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";
  let lastScroll = 0;


  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove(scrollUp);
      return;
    } else {
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
}




//--------------------------------------------------------------------//
//-----------------    CONTACT FORM SUBMISSION    --------------------//
//--------------------------------------------------------------------//

function contactForm(){
	
	"use strict";
	
	$("#submit__btn").on('click', function(){
		
		var name 		= $(".contact__form #name").val();
		var email 		= $(".contact__form #email").val();
		var message 	= $(".contact__form #message").val();
		var phone 	= $(".contact__form #phone").val();
		var success     = $(".contact__form .returnmessage").data('success');
	
		$(".contact__form .returnmessage").empty();
		

		if(name===''||email===''||message===''||phone==''){
      $('div.empty_notice').addClass("d-flex");
		}
		else{
      // $(".contact__form .returnmessage").innerText = "dklashhdios";
      $( ".contact__form .returnmessage" ).first().text("Your message has been received, We will contact you soon.");
      $('div.empty_notice').removeClass("d-flex");
			// // Returns successful data submission message when the entered information is stored in database.
			// $.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_phone: phone}, function(data) {
				
			// 	$(".contact__form .returnmessage").append(data);//Append returned message to message paragraph
				
				
			// 	if($(".contact__form .returnmessage span.contact_error").length){
			// 		$(".contact__form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
			// 	}else{
			// 		$(".contact__form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
			// 		$(".contact__form .returnmessage").slideDown(500).delay(4000).slideUp(500);
			// 	}
				
			// 	if(data===""){
			// 		$("#contact__form")[0].reset();//To reset form fields on success
			// 	}
				
			// });
		}
		return false; 
	});
}


//--------------------------------------------------------------------//
//-----------------    Skills Carousel    --------------------//
//--------------------------------------------------------------------//
function skillsCarousel() {
  $('.skills__slider').owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items: 2,
        },
        992:{
            items:3
        }
    }
})
}

// init functions
$(document).ready(function() {
  // Add acto class on nav-item
    $('.nav-item').click(function(){
        $('.nav-item').removeClass("active");
        $(this).addClass("active");
    });

    // Preloader jQuery
    setTimeout(function(){ 
      $(".preloader").css("display", "none");          
     }, 700); 

    // Init AOS
    AOS.init();

    // Close Nav on scroll
    $('.nav-item a').click(function(){
      $('.navbar-collapse').removeClass("show");
      $(".ham").removeClass("active");
  });


  // Initialize functions
  animateHeaderOnScroll();
  contactForm();
  headerShrink();
  isotopeMasonry();
  skillsCarousel();
});
