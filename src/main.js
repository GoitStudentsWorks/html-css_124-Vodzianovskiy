document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.querySelector('.burger-buttom');
  if (openMenuBtn) {
    openMenuBtn.addEventListener(
      'click',
      () => {
        import('/js/mobile-menu.js').then(module => module.initMobileMenu());
      },
      { once: true }
    );
  }

  if (window.matchMedia('(min-width: 768px)').matches) {
    import('/js/experience-anim.js');
  }
});
