'use client';

import { useState } from 'react';

import { useRouter } from 'next/router';

import classNames from 'classnames';

import useIsHovered from 'hooks/useIsHovered';

import ThumbnailsContainer from './ThumbnailsContainer';

import MagnifyPlusIcon from 'components/assets/icons/MagnifyPlusIcon';

import LazyLoadedImage from 'components/common/LazyLoadedImage';
import Loader from 'components/common/Loader';

import { IMAGE_DATA_TYPE } from 'constants/typeConstants';

import styles from './ImageGallery.module.scss';

/**
 * Inline image gallery component.
 * For the time being, does not use a lightbox component and on click opens large image preview in browser.
 */
const ImageGallery = ({ imageData }) => {
  const [hoverRef, isHovered] = useIsHovered();
  const [state, setState] = useState({
    imageIndex: 0,
    imageLoadedData: imageData ? imageData.map(() => false) : null,
  });
  const router = useRouter();
  const onImageLoadHandler = (imageIndex) => {
    const { imageLoadedData } = state;

    if (!imageLoadedData) {
      return;
    }

    setState({
      ...state,
      imageLoadedData: [
        ...imageLoadedData.slice(0, imageIndex),
        true,
        ...imageLoadedData.slice(imageIndex + 1),
      ],
    });
  };
  const onPreviewClickHandler = () => {
    const { imageIndex, imageLoadedData } = state;

    if (
      !imageLoadedData ||
      (imageLoadedData.length > 1 && !imageLoadedData[imageIndex])
    ) {
      return;
    }

    router.push(imageData[imageIndex].src);
  };
  const onThumbnailClickHandler = (newImageIndex) =>
    setState({
      ...state,
      imageIndex: newImageIndex,
    });
  const containsMultipleImages = imageData && imageData.length > 1;
  const { imageIndex, imageLoadedData } = state;
  const shouldShowOverlay = isHovered;
  const isImageLoaded =
    !containsMultipleImages || imageLoadedData?.[imageIndex];

  return (
    <div className={classNames('container-fluid')}>
      <div
        className={classNames(
          'row d-flex justify-content-center align-items-center',
          styles.imagesPreview
        )}
      >
        <div
          ref={hoverRef}
          className={classNames('col', styles.imageContainer, {
            [styles.imageContainerHover]: isImageLoaded,
          })}
          onClick={onPreviewClickHandler}
        >
          {imageData?.[imageIndex] && (
            <LazyLoadedImage
              src={imageData[imageIndex].srcPreview}
              alt={imageData[imageIndex].alt}
              width="600"
              height="600"
              priority
              className={classNames(styles.image, {
                [styles.imageHover]: isImageLoaded && shouldShowOverlay,
              })}
              placeholderClassName={styles.imagePlaceholder}
              onImageLoadHandler={
                containsMultipleImages
                  ? () => onImageLoadHandler(imageIndex)
                  : null
              }
            />
          )}
          {isImageLoaded && shouldShowOverlay && (
            <div
              className={classNames(
                'd-flex justify-content-center align-items-center',
                styles.overlay
              )}
            >
              <div className={classNames(styles.icon, styles.iconLarge)}>
                <MagnifyPlusIcon />
              </div>
            </div>
          )}
          {containsMultipleImages && !isImageLoaded && (
            <div
              className={classNames(
                'd-flex justify-content-center align-items-center',
                styles.loaderContainer
              )}
            >
              <Loader delay={300} className={styles.loader} />
            </div>
          )}
        </div>
      </div>
      {containsMultipleImages && (
        <ThumbnailsContainer
          imageData={imageData}
          imageIndex={imageIndex}
          onThumbnailClickHandler={onThumbnailClickHandler}
        />
      )}
    </div>
  );
};

ImageGallery.propTypes = {
  imageData: IMAGE_DATA_TYPE,
};

export default ImageGallery;
