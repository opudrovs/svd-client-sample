/**
 * Image with lazy loading component.
 */

import { useState } from 'react';

import PropTypes from 'prop-types';

import Image from 'next/image';

const LazyLoadedImage = ({
  src,
  alt,
  width,
  height,
  className,
  placeholderClassName,
}) => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: isImageLoaded ? 'static' : 'absolute',
        overflow: 'hidden',
      }}
    >
      {<div className={placeholderClassName} />}
      {/* {src && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority
          // layout="fill" // Makes image take up full container size
          // objectFit="cover" // Optional: Adjusts how the image scales
          className={className}
          onLoad={() => setImageLoaded(true)}
        />
      )} */}
    </div>
  );
};

LazyLoadedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  onImageLoadHandler: PropTypes.func,
  className: PropTypes.string,
  placeholderClassName: PropTypes.string,
};

export default LazyLoadedImage;
