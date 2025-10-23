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
});
