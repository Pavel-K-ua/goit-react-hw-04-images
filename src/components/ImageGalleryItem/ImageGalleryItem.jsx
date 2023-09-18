import React from 'react';
import { GalleryItemLi, GalleryItemImg } from './ImageGalleryItem.Styled';
import { PropTypes } from 'prop-types';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  handleOpenModal,
}) => {
  return (
    <GalleryItemLi>
      <GalleryItemImg
        src={webformatURL}
        alt={id}
        onClick={() => handleOpenModal(largeImageURL, id)}
      />
    </GalleryItemLi>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  handleOpenModal: PropTypes.func,
};
