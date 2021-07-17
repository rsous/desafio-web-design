import '../styles/index.css';
import '@fortawesome/fontawesome-free/js/all';
import '@fortawesome/fontawesome-free/css/fontawesome.css';

const modal1 = document.querySelector('.modal');
const bodyBlackout = document.querySelector('.body-blackout');
const modalSuccess = document.querySelector('.modal-success');
const form = document.querySelector('.signup-form');

// MODAL
window.addEventListener('load', function (event) {
  document
    .querySelector('.call-to-action')
    .addEventListener(
      'click',
      openModal(
        document.querySelector('.modal'),
        document.querySelector('.body-blackout')
      )
    );
});

function openModal(modal, blackout) {
  return () => {
    modal.classList.add('visible');
    blackout.classList.add('visible');

    blackout.onclick = closeModal(modal, blackout);
  };
}

function closeModal(modal, blackout) {
  return () => {
    modal.classList.remove('visible');
    blackout.classList.remove('visible');
  };
}

// STICKY NAVBAR
window.addEventListener('scroll', function () {
  const nav = document.querySelector('.navbar');
  setTimeout(() => {
    nav.classList.toggle('sticky', window.scrollY > 0);
  }, 200);
});

// HEADER SLIDE
let slideIndex = 1;
let initiated = false;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n, isClick = true) {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';

  // change slide every 6 seconds
  if (!isClick || !initiated) {
    initiated = true;

    setTimeout(function () {
      slideIndex += 1;
      if (slideIndex > document.querySelectorAll('.dot').length) slideIndex = 1;
      showSlides(slideIndex, false);
    }, 6000);
  }
}

window.addEventListener('load', function (event) {
  document.querySelectorAll('.dot').forEach(function (el) {
    el.addEventListener('click', function () {
      currentSlide(el.attributes.getNamedItem('data-position').value);
    });
  });
});

// Display signup success message
form.addEventListener('submit', (e) => {
  e.preventDefault();

  setTimeout(() => {
    modal1.classList.remove('visible');
    modalSuccess.classList.add('visible');
  }, 1000);

  setTimeout(() => {
    modalSuccess.classList.remove('visible');
    bodyBlackout.classList.remove('visible');
  }, 3000);
});

// FAQ
document.querySelectorAll('.faq').forEach((item) => {
  item.addEventListener('click', function () {
    item.children[1].style.display =
      item.children[1].style.display === 'block'
        ? (item.children[1].style.display = 'none')
        : (item.children[1].style.display = 'block');
    item.children[0].classList.toggle('to-bottom');
    item.children[0].classList.toggle('to-top');
  });
});

// Contact form success
document.getElementById('contact_form').addEventListener('submit', (e) => {
  e.preventDefault();

  setTimeout(() => {
    document.getElementById('contact_form').reset();
    document.querySelector('.contact__success-msg').style.opacity = 1;
  }, 1000);
});
