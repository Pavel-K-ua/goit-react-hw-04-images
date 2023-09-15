import { Component } from 'react';
import { ModalStyled, OverlayStyled } from './Modal.Styled';
import { PropTypes } from 'prop-types';

export class Modal extends Component {
  onOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.close();
    }
  };

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.close();
    }
  };

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <OverlayStyled onClick={this.onOverlayClick}>
        <ModalStyled>{this.props.children}</ModalStyled>
      </OverlayStyled>
    );
  }
}

Modal.propTypes = {
  close: PropTypes.func,
  children: PropTypes.node,
};
