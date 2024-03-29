import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';
import { createPortal } from 'react-dom';
import { IPortalProps } from 'components/types';

const modalRoot = document.querySelector('#modal-root') as HTMLDivElement;

export default function Modal({ onClose, children }: IPortalProps) {
  useEffect(() => {
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  const handleEscape = (event: { code: string; }) => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdrop = (event: { currentTarget: any; target: any; }) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdrop}>
      <ModalWindow>{children}</ModalWindow>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};
