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

  // Contact form validation and fake submission
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var status = document.getElementById('formStatus');
      
      // Get form values
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var phone = form.phone.value.trim();
      
      // Clear previous status
      status.textContent = '';
      status.className = 'form-status';
      
      // Validate required fields
      if(!name || !email || !phone){
        status.textContent = 'Vul alstublieft alle verplichte velden (*) in.';
        status.className = 'form-status error';
        return;
      }
      
      // Validate email pattern
      var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailRe.test(email)){
        status.textContent = 'Voer een geldig e-mailadres in.';
        status.className = 'form-status error';
        return;
      }
      
      // Validate phone pattern (Dutch phone numbers)
      var phoneRe = /^(\+31|0)[0-9]{9}$/;
      var cleanPhone = phone.replace(/[\s\-]/g, '');
      if(!phoneRe.test(cleanPhone)){
        status.textContent = 'Voer een geldig telefoonnummer in (bijv. 06 12345678 of +31 6 12345678).';
        status.className = 'form-status error';
        return;
      }

      status.textContent = 'Versturen...';
      status.className = 'form-status sending';
      
      // Simulate network request
      setTimeout(function(){
        status.textContent = '✓ Dank u! Uw aanvraag is verzonden. We nemen binnen 2 werkdagen contact met u op.';
        status.className = 'form-status success';
        form.reset();
      }, 800);
    });
  }
});
