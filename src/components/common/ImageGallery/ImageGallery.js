import { useState } from 'react';

import { useRouter } from 'next/router';

const classNames = require('classnames');

import LazyLoad from 'react-lazyload';

import ThumbnailsContainer from './ThumbnailsContainer/ThumbnailsContainer';

import useIsHovered from 'hooks/useIsHovered';

import MagnifyPlusIcon from 'components/assets/icons/MagnifyPlusIcon';

import Loader from 'components/common/Loader/Loader';

import { IMAGE_DATA_TYPE } from 'constants/TypeConstants';

import styles from './ImageGallery.module.scss';

/**
 * Inline image gallery component.
 * For the time being, does not use a lightbox component and on click opens large image preview in browser.
 */

const ImageGallery = ({ imageData }) => {
    const [hoverRef, isHovered] = useIsHovered();
    const [state, setState] = useState({
        imageIndex: 0,
        imageLoadedData: imageData ? imageData.map(() => false) : null
    });

    const router = useRouter();

    const onImageLoadHandler = (imageIndex) => {
        const { imageLoadedData } = state;

        if (!imageLoadedData) {
            return;
        }

        setState({
            ...state,
            imageLoadedData: [...imageLoadedData.slice(0, imageIndex), true, ...imageLoadedData.slice(imageIndex + 1)]
        });
    };

    const onPreviewClickHandler = () => {
        const { imageIndex, imageLoadedData } = state;

        if (!imageLoadedData || imageLoadedData.length > 1 && !imageLoadedData[imageIndex]) {
            return;
        }

        router.push(imageData[imageIndex].src);
    };

    const onThumbnailClickHandler = (newImageIndex) => setState({
        ...state,
        imageIndex: newImageIndex
    });

    const containsMultipleImages = imageData && imageData.length > 1;

    const { imageIndex, imageLoadedData } = state;

    const shouldShowOverlay = isHovered;

    const isImageLoaded = !containsMultipleImages || imageLoadedData && imageLoadedData[imageIndex];

    const image = (
        <>
            {imageData
            &&
            <img
                src={imageData[imageIndex].srcPreview}
                srcSet={`${imageData[imageIndex].srcPreview} 1x, ${imageData[imageIndex].src} 2x`}
                alt={imageData[imageIndex].alt}
                width="600"
                height="600"
                className={classNames(
                    styles.image,
                    {
                        [styles.imageHover]: isImageLoaded && containsMultipleImages && shouldShowOverlay
                    }
                )}
                onLoad={containsMultipleImages ? () => onImageLoadHandler(imageIndex) : null}
            />}
        </>
    );

    return (
        <div className={classNames(
            'container-fluid'
        )}>
            <div className={classNames(
                'row d-flex justify-content-center align-items-center',
                styles.imagesPreview
            )}>
                <div
                    ref={hoverRef}
                    className={classNames(
                        'col',
                        styles.imageContainer,
                        {
                            [styles.imageContainerHover]: isImageLoaded
                        }
                    )}
                    onClick={onPreviewClickHandler}
                >
                    {!imageData || !isImageLoaded
                    &&
                    <div className={styles.imagePlaceholder} />}

                    {containsMultipleImages
                        ?
                        <LazyLoad
                            once
                            offset={10000}
                            style={{
                                width: '100%',
                                height: '100%',
                                position: isImageLoaded ? 'static' : 'absolute'
                            }}
                        >
                            {image}
                        </LazyLoad>
                        :
                        image}

                    {isImageLoaded && shouldShowOverlay
                    &&
                    <>
                        {containsMultipleImages
                            ?
                            <div className={classNames(
                                'd-flex justify-content-center align-items-center',
                                styles.overlay
                            )}>
                                <div className={classNames(
                                    styles.icon,
                                    styles.iconLarge
                                )}>
                                    <MagnifyPlusIcon />
                                </div>
                            </div>
                            :
                            <div className={styles.overlayIcons}>
                                <div className={classNames(
                                    styles.icon,
                                    styles.iconSmall
                                )}>
                                    <MagnifyPlusIcon />
                                </div>
                            </div>}
                    </>}
                    {containsMultipleImages && !isImageLoaded
                    &&
                    <div className={classNames(
                        'd-flex justify-content-center align-items-center',
                        styles.loaderContainer
                    )}>
                        <Loader delay={300} externalClassName={styles.loader} />
                    </div>}
                </div>
            </div>
            {containsMultipleImages
            &&
            <ThumbnailsContainer
                imageData={imageData}
                imageIndex={imageIndex}
                onThumbnailClickHandler={onThumbnailClickHandler}
            />}
        </div>
    );
};

ImageGallery.propTypes = {
    imageData: IMAGE_DATA_TYPE
};

export default ImageGallery;
