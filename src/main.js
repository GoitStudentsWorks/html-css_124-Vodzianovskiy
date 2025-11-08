(() => {
  const refs = {
    openModalBtn: document.querySelector('.burger-buttom'), // Добавил селектор для бургера
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  // Добавил закрытие по клику вне модалки
  refs.modal.addEventListener('click', e => {
    if (e.target === refs.modal) {
      toggleModal();
    }
  });

  // Добавил закрытие по Escape для удобства
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && refs.modal.classList.contains('is-open')) {
      toggleModal();
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();
