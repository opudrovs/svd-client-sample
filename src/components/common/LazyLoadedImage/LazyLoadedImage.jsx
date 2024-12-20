import Image from 'next/image';
import { useState } from 'react';

const LazyLoadedImage = ({ src, alt }) => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: isImageLoaded ? 'static' : 'absolute',
        overflow: 'hidden' // Ensures proper sizing
      }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill" // Makes image take up full container size
        objectFit="cover" // Optional: Adjusts how the image scales
        loading="lazy" // Default behavior in next/image
        onLoadingComplete={() => setImageLoaded(true)} // Track when image loads
        placeholder="blur" // Optional: Use blur placeholder for a smooth load
        blurDataURL="data:image/svg+xml;base64,..." // Optional: Blur base64
      />
    </div>
  );
};

LazyLoadedImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
};
