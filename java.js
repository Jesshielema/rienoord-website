// java.js — small vanilla JS for navigation and form handling
document.addEventListener('DOMContentLoaded', function(){
  // Insert current year in footers
  var y = new Date().getFullYear();
  var els = document.querySelectorAll('#year, #year-rie, #year-about, #year-contact');
  els.forEach(function(el){ if(el) el.textContent = y; });

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

  // Contact form validation
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      var status = document.getElementById('formStatus');
      
      // Get form values
      var name = form.querySelector('[name="naam"]').value.trim();
      var email = form.querySelector('[name="email"]').value.trim();
      var phone = form.querySelector('[name="telefoonnummer"]').value.trim();
      
      // Clear previous status
      status.textContent = '';
      status.className = 'form-status';
      
      // Validate required fields
      if(!name || !email || !phone){
        e.preventDefault();
        status.textContent = 'Vul alstublieft alle verplichte velden (*) in.';
        status.className = 'form-status error';
        return false;
      }
      
      // Validate email pattern
      var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailRe.test(email)){
        e.preventDefault();
        status.textContent = 'Voer een geldig e-mailadres in.';
        status.className = 'form-status error';
        return false;
      }
      
      // Validate phone pattern (Dutch phone numbers)
      var phoneRe = /^(\+31|0)[0-9]{9}$/;
      var cleanPhone = phone.replace(/[\s\-]/g, '');
      if(!phoneRe.test(cleanPhone)){
        e.preventDefault();
        status.textContent = 'Voer een geldig telefoonnummer in (bijv. 06 12345678 of +31 6 12345678).';
        status.className = 'form-status error';
        return false;
      }

      // If validation passes, show sending message and let Netlify handle the submit
      status.textContent = 'Versturen...';
      status.className = 'form-status sending';
      
      // Let the form submit naturally to Netlify
      return true;
    });
  }
});
