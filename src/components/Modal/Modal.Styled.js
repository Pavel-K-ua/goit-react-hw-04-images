import styled from 'styled-components';

export const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const ModalStyled = styled.div`
  transform: translateY(-10%);
  max-width: calc(80vw - 48px);
  max-height: calc(80vh - 24px);
`;
