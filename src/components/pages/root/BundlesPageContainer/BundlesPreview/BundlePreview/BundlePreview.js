/* REACT */

import { useState } from 'react';

import PropTypes from 'prop-types';

/* NEXT.JS */

import Link from 'next/link';

/* LIBRARIES */

const classNames = require('classnames');

const htmlParser = require('html-react-parser');
import LazyLoad from 'react-lazyload';

/* UTILS */

import { getFormattedPrice } from 'utils/CheckoutUtils';

/* STYLES */

import styles from './BundlePreview.module.scss';


/**
 * Bundle preview component.
 */

const BundlePreview = ({
    href,
    src,
    alt,
    title,
    subtitle,
    license,
    externalClassName
}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const onImageLoadHandler = () => setIsImageLoaded(true);

    return (
        <div className={classNames(
            styles.bundlePreview,
            externalClassName
        )}>
            <Link href={href}>
                <a
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
                        offset={10000}
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
                    {isImageLoaded
                        &&
                        <div className={styles.subtitleContainer} aria-hidden>
                            <span className={classNames(
                                'd-inline-block',
                                styles.subtitle
                            )}>
                                {subtitle}
                            </span>
                        </div>}
                </a>
            </Link>
            <div className={styles.textContainer}>
                <div className={styles.titleContainer}>
                    <Link href={href}>
                        <a
                            title={title}
                            className={classNames(
                                'd-inline-block',
                                styles.title
                            )}
                        >
                            {htmlParser(title.replace(' - ', ' &mdash; '))}
                        </a>
                    </Link>
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

BundlePreview.propTypes = {
    href: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    license: PropTypes.object,
    externalClassName: PropTypes.string
};

export default BundlePreview;
