

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('open')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {S
        navMenu.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

 
  const header = document.querySelector('.header');
  const sections = document.querySelectorAll('section[id], header');

  window.addEventListener('scroll', () => {
   
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

   
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (currentId && link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      } else if (!currentId && link.getAttribute('href') === '#home') {
        link.classList.add('active');
      }
    });
  });


  const dots = document.querySelectorAll('.slider-dots .dot');
  const slider = document.getElementById('testimonialsSlider');

  if (dots.length && slider) {
    dots.forEach((dot, index) => {
      dot.style.cursor = 'pointer';
      dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');

        slider.style.transition = 'opacity 0.25s ease';
        slider.style.opacity = '0.7';
        setTimeout(() => {
          slider.style.opacity = '1';
        }, 150);
      });
    });
  }
});


function handleFormSubmit() {
  const nameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const submitBtn = document.querySelector('.btn-submit');

  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    alert('Please fill out all required fields.');
    return;
  }

  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'SENDING...';
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.textContent = 'MESSAGE SENT!';
    submitBtn.style.backgroundColor = '#52C41A';
    submitBtn.style.color = '#FFFFFF';

    setTimeout(() => {
      alert(`Thank you, ${nameInput.value}! Your message has been received.`);
      document.getElementById('contactForm').reset();
      submitBtn.textContent = originalText;
      submitBtn.style.backgroundColor = '';
      submitBtn.style.color = '';
      submitBtn.disabled = false;
    }, 600);
  }, 900);
}
