// java.js — small vanilla JS for navigation and form handling
document.addEventListener('DOMContentLoaded', function(){
  // Insert current year in footers
  var y = new Date().getFullYear();
  var els = document.querySelectorAll('#year, #year-rie, #year-about, #year-contact');
  els.forEach(function(el){ if(el) el.textContent = y; });

  // Smooth page transitions
  if(!document.startViewTransition){
    // Fallback voor browsers zonder View Transitions
    document.body.classList.add('fade-in');
  }
  
  // Intercept link clicks voor smooth transitions
  document.addEventListener('click', function(e){
    var link = e.target.closest('a');
    if(!link) return;
    
    // Alleen voor interne links
    var href = link.getAttribute('href');
    if(!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;
    
    // Check if View Transitions is supported
    if(document.startViewTransition){
      e.preventDefault();
      
      document.startViewTransition(function(){
        window.location.href = href;
      });
    }
  });

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      if(nav.style.display === 'block'){
        nav.style.display = '';
      } else {
        nav.style.display = 'block';
      }
    });
  }

  // Scroll-triggered animations for benefits
  var benefits = document.querySelectorAll('.benefit');
  
  function checkBenefitsVisible(){
    benefits.forEach(function(benefit){
      var rect = benefit.getBoundingClientRect();
      var windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      if(rect.top <= windowHeight * 0.85){
        benefit.classList.add('visible');
      }
    });
  }
  
  if(benefits.length > 0){
    window.addEventListener('scroll', checkBenefitsVisible);
    checkBenefitsVisible(); // Check on page load
  }

  // Hide/show navbar on scroll
  var header = document.querySelector('.site-header');
  var lastScrollTop = 0;
  var scrollThreshold = 100; // Pixels voordat navbar reageert
  
  if(header){
    window.addEventListener('scroll', function(){
      var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      // Als we bovenaan de pagina zijn, toon altijd
      if(currentScroll <= scrollThreshold){
        header.classList.remove('header-hidden');
        return;
      }
      
      // Scroll naar beneden = verberg
      if(currentScroll > lastScrollTop && currentScroll > scrollThreshold){
        header.classList.add('header-hidden');
      } 
      // Scroll naar boven = toon
      else if(currentScroll < lastScrollTop){
        header.classList.remove('header-hidden');
      }
      
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false);
  }
});
