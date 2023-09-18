import { useEffect } from 'react';
import { ModalStyled, OverlayStyled } from './Modal.Styled';
import { PropTypes } from 'prop-types';

export const Modal = ({ close, children }) => {
  const onOverlayClick = e => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        close();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);

  return (
    <OverlayStyled onClick={onOverlayClick}>
      <ModalStyled>{children}</ModalStyled>
    </OverlayStyled>
  );
};

Modal.propTypes = {
  close: PropTypes.func,
  children: PropTypes.node,
};
