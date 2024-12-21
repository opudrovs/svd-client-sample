/**
 * Image with lazy loading component.
 */

import { useState } from 'react';

import PropTypes from 'prop-types';

import Image from 'next/image';

const LazyLoadedImage = ({ src, alt }) => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: isImageLoaded ? 'static' : 'absolute',
        overflow: 'hidden', // Ensures proper sizing
      }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill" // Makes image take up full container size
        objectFit="cover" // Optional: Adjusts how the image scales
        onLoadingComplete={() => setImageLoaded(true)}
        placeholder="blur"
      />
    </div>
  );
};

LazyLoadedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default LazyLoadedImage;
