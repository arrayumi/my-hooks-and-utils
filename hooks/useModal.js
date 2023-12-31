import { useEffect } from 'react';

// принимает стейт с булевым значением 
// значение true - открывает попап и навешивает слушатели событий, 
// false - закрывает и удаляет слушатели

export default function useModal(showModal, setShowModal) {
  const _handleOverlay = (evt) => {
    if (evt.target.classList.contains('modal')) {
      setShowModal(false);
    }
  };

  const _handleEscape = (evt) => {
    if (evt.key === 'Escape') {
      setShowModal(false);
    }
  };

  function _setListeners() {
    document.addEventListener('keydown', _handleEscape);
    document.addEventListener('mousedown', _handleOverlay);
  }

  function _removeListeners() {
    document.removeEventListener('keydown', _handleEscape);
    document.removeEventListener('mousedown', _handleOverlay);
  }

  useEffect(() => {
    if (showModal) _setListeners();
    return () => _removeListeners();
  }, [showModal]);
}