/* REACT */

import { useState } from 'react';

import PropTypes from 'prop-types';

/* LIBRARIES */

const classNames = require('classnames');

const htmlParser = require('html-react-parser');
import LazyLoad from 'react-lazyload';

/* UTILS */

import { getFormattedPrice } from 'utils/CheckoutUtils.js';

/* STYLES */

import styles from './PackPreview.module.scss';


/**
 * Pack preview component.
 */

const PackPreview = ({
    href,
    src,
    alt,
    title,
    license,
    externalClassName
}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const onImageLoadHandler = () => setIsImageLoaded(true);

    return (
        <div className={classNames(
            styles.packPreview,
            externalClassName
        )}>
            <a
                href={href}
                className={classNames(
                    'd-flex',
                    styles.imageLink
                )}
            >
                {!isImageLoaded
                    &&
                    <div className={styles.imagePlaceholder} />}
                <LazyLoad
                    once
                    offset={200}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: isImageLoaded ? 'static' : 'absolute'
                    }}
                >
                    <img
                        src={src}
                        alt={alt}
                        width="400"
                        height="400"
                        className={styles.image}
                        onLoad={onImageLoadHandler}
                    />
                </LazyLoad>
            </a>
            <div className={styles.textContainer}>
                <div className={styles.titleContainer}>
                    <a
                        href={href}
                        title={title}
                        className={classNames(
                            'd-inline-block',
                            styles.title
                        )}
                    >
                        {htmlParser(title.replace(' - ', ' &mdash; '))}
                    </a>
                </div>
                {license
                &&
                <div className={styles.price}>
                    {`From $${getFormattedPrice(license.price.usd)} US`}
                </div>}
            </div>
        </div>
    );
};

PackPreview.propTypes = {
    href: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string,
    license: PropTypes.object,
    externalClassName: PropTypes.string
};

export default PackPreview;
