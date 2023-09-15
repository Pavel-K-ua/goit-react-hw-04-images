import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { ImageGalleryUl } from './ImageGallery.Styled';
import { PropTypes } from 'prop-types';

export const ImageGallery = ({ dataArr, handleOpenModal }) => {
  return (
    <ImageGalleryUl>
      {dataArr.map(item => (
        <ImageGalleryItem
          key={item.id}
          {...item}
          handleOpenModal={handleOpenModal}
        />
      ))}
    </ImageGalleryUl>
  );
};

ImageGallery.propTypes = {
  dataArr: PropTypes.array,
  handleOpenModal: PropTypes.func,
};
