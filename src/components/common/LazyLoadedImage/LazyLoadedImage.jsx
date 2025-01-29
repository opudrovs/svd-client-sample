'use client';

import { useState } from 'react';

import PropTypes from 'prop-types';

import Image from 'next/image';

import classNames from 'classnames';

import styles from './LazyLoadedImage.module.scss';

/**
 * Image with lazy loading component.
 */
const LazyLoadedImage = ({
  src,
  alt,
  width,
  height,
  priority,
  className,
  placeholderClassName,
  onImageLoadHandler = () => {},
  onClickHandler = () => {},
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={classNames(
        className,
        !isImageLoaded &&
          classNames(styles.imagePlaceholder, placeholderClassName)
      )}
      onLoad={() => {
        setIsImageLoaded(true);
        onImageLoadHandler();
      }}
      onClick={onClickHandler}
    />
  );
};

LazyLoadedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  priority: PropTypes.bool,
  className: PropTypes.string,
  placeholderClassName: PropTypes.string,
  onImageLoadHandler: PropTypes.func,
  onClickHandler: PropTypes.func,
};

export default LazyLoadedImage;
