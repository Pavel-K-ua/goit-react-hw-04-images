import React from 'react';
import { ButtonStyled } from './Button.Styled';
import { PropTypes } from 'prop-types';

export const Button = ({ onLoadMore }) => {
  return <ButtonStyled onClick={onLoadMore}>Load more</ButtonStyled>;
};

Button.propTypes = {
  onLoadMore: PropTypes.func,
};
