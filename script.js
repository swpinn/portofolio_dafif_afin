document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when a nav link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // 2. Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        // Calculate offset for sticky navbar
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 70;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 3. Navbar Background on Scroll & Scroll to Top Button
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTop');
  
  window.addEventListener('scroll', () => {
    // Navbar styling
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    
    // Scroll to top button visibility
    if (scrollTopBtn) {
      if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  });
  
  // Scroll to top action
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 4. Scroll-triggered Fade-in Animations
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const fadeObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };
  
  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, fadeObserverOptions);
  
  fadeElements.forEach(element => {
    fadeObserver.observe(element);
  });

  // 5. Active Navigation Highlighting
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');
  
  const navObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -79% 0px', // Adjusted to trigger when section is in top part of viewport
    threshold: 0
  };
  
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }, navObserverOptions);
  
  sections.forEach(section => {
    navObserver.observe(section);
  });

  // 6. Typing Animation
  const typedTextElement = document.getElementById('typed-text');
  if (typedTextElement) {
    const textArray = [
      "mengubah data menjadi insights.",
      "membangun interactive dashboards.",
      "menganalisis data dengan SQL & Python.",
      "menyajikan cerita melalui visualisasi data."
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
      const currentText = textArray[textIndex];
      
      if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }
      
      let typeSpeed = isDeleting ? 40 : 80;
      
      // Pause at end of typing
      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } 
      // Pause before typing next word
      else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typeSpeed = 500;
      }
      
      setTimeout(typeEffect, typeSpeed);
    }
    
    // Start typing effect
    setTimeout(typeEffect, 1000);
  }

  // 7. Counter Animation for Stats
  const statNumbers = document.querySelectorAll('.stat-number');
  let animatedStats = new Set();
  
  const statObserverOptions = {
    threshold: 0.5
  };
  
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedStats.has(entry.target)) {
        const target = entry.target;
        animatedStats.add(target);
        
        const countTo = parseInt(target.getAttribute('data-count') || 0);
        const suffix = target.getAttribute('data-suffix') || '';
        const duration = 2000;
        const frameDuration = 1000 / 60;
        const totalFrames = Math.round(duration / frameDuration);
        let frame = 0;
        
        // Easing function (easeOutQuart)
        const easeOutQuart = t => 1 - (--t) * t * t * t;
        
        const counter = setInterval(() => {
          frame++;
          const progress = easeOutQuart(frame / totalFrames);
          const currentCount = Math.round(countTo * progress);
          
          target.textContent = currentCount + suffix;
          
          if (frame === totalFrames) {
            clearInterval(counter);
            target.textContent = countTo + suffix; // Ensure exact final value
          }
        }, frameDuration);
      }
    });
  }, statObserverOptions);
  
  statNumbers.forEach(stat => {
    statObserver.observe(stat);
  });

  // 8. Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Basic frontend feedback
      alert('Terima kasih! Pesan Anda telah berhasil dikirim.');
      contactForm.reset();
    });
  }
});
