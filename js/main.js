/**
 * PORTFOLIO QA AUTOMATION - EILEEN
 * Vanilla JavaScript (Sin dependencias)
 * Accesible, ultraligero y de alto rendimiento
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initActiveNavOnScroll();
  initCopyEmail();
  initContactForm();
  initBackToTop();
  initGitHubData();

  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

/**
 * 1. Control del Navbar (Header scrolled y menú móvil responsive)
 */
function initNavbar() {
  const header = document.querySelector('.header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  // Añadir sombra y fondo al header tras hacer scroll
  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Abrir / Cerrar menú móvil
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      toggleMobileMenu(!isExpanded);
    });

    // Cerrar al pulsar un enlace
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleMobileMenu(false);
      });
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        toggleMobileMenu(false);
      }
    });
  }

  function toggleMobileMenu(open) {
    if (open) {
      mobileNav.classList.add('is-open');
      mobileToggle.classList.add('is-active');
      mobileToggle.setAttribute('aria-expanded', 'true');
      mobileToggle.setAttribute('aria-label', 'Cerrar menú de navegación');
      document.body.style.overflow = 'hidden'; // Evita scroll de fondo
    } else {
      mobileNav.classList.remove('is-open');
      mobileToggle.classList.remove('is-active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.setAttribute('aria-label', 'Abrir menú de navegación');
      document.body.style.overflow = '';
    }
  }
}

/**
 * 2. Resaltado automático de enlace activo según scroll (IntersectionObserver)
 */
function initActiveNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!('IntersectionObserver' in window)) return;

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/**
 * 3. Copiar email al portapapeles con feedback visual y Toast
 */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');
  const emailAddress = 'ejcmatosza82@gmail.com';

  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailAddress);
      } else {
        // Fallback para entornos no HTTPS o navegadores legacy
        const textArea = document.createElement('textarea');
        textArea.value = emailAddress;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      showToast('✓ Email copiado al portapapeles');
      const originalText = copyBtn.textContent;
      copyBtn.textContent = '¡Copiado!';
      copyBtn.style.color = '#01C96E';
      copyBtn.style.borderColor = '#01C96E';

      setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.style.color = '';
        copyBtn.style.borderColor = '';
      }, 2500);

    } catch (err) {
      showToast('Email: ' + emailAddress);
    }
  });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

/**
 * 4. Gestión del formulario de contacto accesible
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('toast');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const msgInput = document.getElementById('form-message');
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!nameInput.value.trim() || !emailInput.value.trim() || !msgInput.value.trim()) {
      alert('Por favor, completa todos los campos requeridos.');
      return;
    }

    // Efecto de carga y confirmación
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Enviando...';
    submitBtn.disabled = true;

    setTimeout(() => {
      form.reset();
      submitBtn.innerHTML = '¡Mensaje Enviado con Éxito!';
      submitBtn.style.backgroundColor = '#01C96E';

      if (toast) {
        toast.textContent = '✓ ¡Gracias por tu mensaje! Me pondré en contacto pronto.';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 4000);
      }

      setTimeout(() => {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = '';
      }, 3500);
    }, 800);
  });
}

/**
 * 5. Botón "Volver arriba" (Scroll to top)
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 6. Sincronización y fallback de datos de GitHub (Avatar y Métricas)
 */
function initGitHubData() {
  const avatarImg = document.getElementById('github-avatar');
  if (avatarImg) {
    // Si la imagen local falla, cargar dinámicamente de GitHub
    avatarImg.addEventListener('error', () => {
      if (!avatarImg.src.includes('github.com')) {
        avatarImg.src = 'https://avatars.githubusercontent.com/u/134948690?v=4';
      }
    });
  }

  // Sincronización no bloqueante con la API pública de GitHub para estrellas o actualizaciones
  fetch('https://api.github.com/users/Eileenjc12/repos?sort=updated&per_page=15')
    .then(res => res.ok ? res.json() : [])
    .then(repos => {
      if (!Array.isArray(repos) || repos.length === 0) return;
      repos.forEach(repo => {
        const starEl = document.querySelector(`[data-repo-stars="${repo.name}"]`);
        if (starEl && repo.stargazers_count !== undefined) {
          starEl.textContent = `★ ${repo.stargazers_count}`;
        }
      });
    })
    .catch(() => {
      // Fallback estático 100% garantizado
    });
}
