/**
 * /*!
 * Item: Portfolio
 * Description: Personal Portfolio Template
 * Author/Developer: ExifyThemes
 * Version: v1.0.0
 *
 * @format
 */

// email url
const mailUrl = 'https://sadaqataliraja.com/html/send_mail.php ';

//--------------------------------------------------------------------//
//-----------------    ISOTOPES    --------------------//
//--------------------------------------------------------------------//
function isotopeMasonry() {
  $('.isotope-gutter').isotope({
    itemSelector: '.work__col',
    percentPosition: true,
  });
  $('.isotope-no-gutter').isotope({
    itemSelector: '.work__col',
    percentPosition: true,
    masonry: {
      columnWidth: 1,
    },
  });

  $('.filter__tab a').on('click', function () {
    $('.filter__tab a').removeClass('active');
    $(this).addClass('active');

    // portfolio fiter
    var selector = $(this).attr('data-filter');
    $('.isotope-gutter').isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false,
      },
    });
    return false;
  });
}

//--------------------------------------------------------------------//
//-----------------    Added bg on HEADER onScroll    --------------------//
//--------------------------------------------------------------------//

function headerShrink() {
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 50) {
      $('header').addClass('shrink');
    } else {
      $('header').removeClass('shrink');
    }

    if (scrollTop > 1000) {
      $('.scroll__top__button').addClass('show');
    } else {
      $('.scroll__top__button').removeClass('show');
    }
  });
}

//--------------------------------------------------------------------//
//-----------------    GetFullYeaer JS    --------------------//
//--------------------------------------------------------------------//
function getFullYeaer() {
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById('year').innerHTML = n;
}

//--------------------------------------------------------------------//
//-----------------    SKILLS TYPING JS    --------------------//
//--------------------------------------------------------------------//

const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = [
  'React.js',
  'Vue.js',
  'Express.js',
  'MongoDB',
  'SQL',
  'PHP',
  'CI/CD',
  'AWS',
  'Docker',
  'Kubernetes',
];
const typingDelay = 30;
const erasingDelay = 50;
const newTextDelay = 500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
//--------------------------------------------------------------------//
//-----------------    HIDE & SHOW HEADER ON SCROLL    --------------------//
//--------------------------------------------------------------------//

function animateHeaderOnScroll() {
  const body = document.body;
  const triggerMenu = document.querySelector('header');
  const scrollUp = 'scroll-up';
  const scrollDown = 'scroll-down';
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
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

function contactForm() {
  'use strict';

  $('#submit__btn').on('click', function () {
    var name = $('.contact__form #name').val();
    var email = $('.contact__form #email').val();
    var message = $('.contact__form #message').val();
    var phone = $('.contact__form #phone').val();
    var budget = $('#budget option:selected').text();
    var success = $('.contact__form .returnmessage').data('success');

    $('.contact__form .returnmessage').empty();

    if (name === '' || email === '' || message === '' || phone == '') {
      $('div.empty_notice').addClass('d-flex');
    } else {
      // $(".contact__form .returnmessage").innerText = "dklashhdios";
      $('.contact__form .returnmessage')
        .first()
        .text('Your message has been received, We will contact you soon.');
      $('div.empty_notice').removeClass('d-flex');
      $('.contact__form #name').val('');
      $('.contact__form #email').val('');
      $('.contact__form #message').val('');
      $('.contact__form #phone').val('');
      $('#budget option:selected').text('');
      $('.form-group').removeClass('input__focus');
      var newData = {
        name: name,
        email: email,
        message: message,
        budget: budget,
        phone: phone,
      };
      console.log('new data', newData);
      // // Returns successful data submission message when the entered information is stored in database.
      $.post(
        mailUrl,
        {
          ajax_name: name,
          ajax_email: email,
          ajax_message: message,
          ajax_phone: phone,
          ajax_budget: budget,
        },
        function (data) {
          console.log('response', data);
        }
      );
    }
    return false;
  });
}

//--------------------------------------------------------------------//
//-----------------    Scroll to Section    --------------------//
//--------------------------------------------------------------------//
function scrollToSection() {
  $(".nav-link[href^='#'], .footer__list a[href^='#'").click(function (e) {
    e.preventDefault();

    var position = $($(this).attr('href')).offset().top;

    $('body, html').animate(
      {
        scrollTop: position - 30,
      },
      'slow'
    );
  });
}

//--------------------------------------------------------------------//
//-----------------    Fields Focus JS    --------------------//
//--------------------------------------------------------------------//
function fieldsFocus() {
  $('.form-control').val('');

  $('.form-control').focusout(function () {
    var text_val = $(this).val();
    if (text_val === '') {
      console.log('empty!');
      $(this).parent().removeClass('input__focus');
    } else {
      $(this).parent().addClass('input__focus');
    }
  });
}

//--------------------------------------------------------------------//
//-----------------    Window ScrollTop    --------------------//
//--------------------------------------------------------------------//
function scrollTopBtnFunction() {
  var scroll__top__button = $('.scroll__top__button');

  scroll__top__button.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
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
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
}

// init functions
$(document).ready(function () {
  // Add acto class on nav-item
  $('.nav-item').click(function () {
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
  });

  // Preloader jQuery
  setTimeout(function () {
    $('.preloader').css('display', 'none');
  }, 700);

  // Init AOS
  AOS.init();

  // Close Nav on scroll
  $('.nav-item a').click(function () {
    $('.navbar-collapse').removeClass('show');
    $('.ham').removeClass('active');
  });

  // Initialize functions
  animateHeaderOnScroll();
  contactForm();
  headerShrink();
  isotopeMasonry();
  skillsCarousel();
  scrollTopBtnFunction();
  scrollToSection();
  getFullYeaer();
  fieldsFocus();
});
