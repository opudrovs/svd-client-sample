/* REACT */

import { memo, useState } from 'react';

import PropTypes from 'prop-types';

/* LIBRARIES */

const classNames = require('classnames');

import LazyLoad from 'react-lazyload';

/* HOOKS */

import useIsHovered from 'hooks/useIsHovered';

/* STYLES */

import styles from './Thumbnail.module.scss';


/**
 * Thumbnail component.
 */

const Thumbnail = ({
    src,
    alt,
    isActive,
    onClickHandler
}) => {
    const [hoverRef, isHovered] = useIsHovered();
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const onImageLoadHandler = () => setIsImageLoaded(true);

    return (
        <div className={classNames(
            'col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center align-items-center',
            styles.thumbnail
        )}>
            <div className={classNames(
                styles.imageContainer,
                {
                    [styles.active]: isActive
                }
            )}>
                {!isImageLoaded
                &&
                <div className={styles.imagePlaceholder} />}
                <LazyLoad
                    once
                    offset={10000}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: isImageLoaded ? 'static' : 'absolute'
                    }}
                >
                    <img
                        ref={hoverRef}
                        src={src}
                        alt={alt}
                        width="100"
                        height="100"
                        className={styles.image}
                        onLoad={onImageLoadHandler}
                        onClick={onClickHandler}
                    />
                </LazyLoad>
                {(isHovered && !isActive)
                &&
                <div
                    className={classNames(
                        'd-flex justify-content-center align-items-center',
                        styles.overlay
                    )}
                />}
            </div>
        </div>
    );
};

Thumbnail.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    isActive: PropTypes.bool,
    onClickHandler: PropTypes.func.isRequired
};

export default memo(Thumbnail);
