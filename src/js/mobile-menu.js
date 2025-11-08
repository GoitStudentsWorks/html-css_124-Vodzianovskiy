// mobile-menu.js
export function initMobileMenu() {
  const refs = {
    openModalBtn: document.querySelector('.burger-buttom'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
  };

  function toggleModal() {
    if (refs.modal) refs.modal.classList.toggle('is-open');
  }

  if (refs.openModalBtn)
    refs.openModalBtn.addEventListener('click', toggleModal);
  if (refs.closeModalBtn)
    refs.closeModalBtn.addEventListener('click', toggleModal);

  if (refs.modal) {
    refs.modal.addEventListener('click', e => {
      if (e.target === refs.modal) toggleModal();
    });
  }

  document.addEventListener('keydown', e => {
    if (
      e.code === 'Escape' &&
      refs.modal &&
      refs.modal.classList.contains('is-open')
    ) {
      toggleModal();
    }
  });
}
