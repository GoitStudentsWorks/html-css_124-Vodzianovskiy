document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(min-width: 768px)').matches) {
    const expSection = document.querySelector('.experience');
    if (expSection) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              expSection.classList.add('show');
            } else {
              expSection.classList.remove('show');
            }
          });
        },
        { threshold: 0.23 }
      );
      observer.observe(expSection);
    }
  }
});
