// ===== MOBILE NAV TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}

// ===== PROJECT FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('#projectsGrid .project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.style.display = show ? 'block' : 'none';
    });
  });
});

// ===== CONTACT FORM VALIDATION =====
const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const fields = [
      { id: 'name',    errorId: 'nameError',    msg: 'Please enter your name.' },
      { id: 'email',   errorId: 'emailError',   msg: 'Please enter a valid email.' },
      { id: 'subject', errorId: 'subjectError', msg: 'Please enter a subject.' },
      { id: 'message', errorId: 'messageError', msg: 'Please enter a message.' },
    ];

    fields.forEach(({ id, errorId, msg }) => {
      const input = document.getElementById(id);
      const error = document.getElementById(errorId);
      const isEmpty = !input.value.trim();
      const isInvalidEmail = id === 'email' && !isEmpty && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);

      if (isEmpty || isInvalidEmail) {
        input.classList.add('error');
        error.textContent = isInvalidEmail ? 'Please enter a valid email.' : msg;
        valid = false;
      } else {
        input.classList.remove('error');
        error.textContent = '';
      }
    });

    if (valid) {
      form.reset();
      const success = document.getElementById('formSuccess');
      success.classList.remove('hidden');
      setTimeout(() => success.classList.add('hidden'), 4000);
    }
  });

  // Clear error on input
  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const errorEl = document.getElementById(input.id + 'Error');
      if (errorEl) errorEl.textContent = '';
    });
  });
}
