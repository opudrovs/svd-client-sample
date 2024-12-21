import { useState } from 'react';

import PropTypes from 'prop-types';

import Link from 'next/link';

import classNames from 'classnames';
import htmlParser from 'html-react-parser';

import { getFormattedPrice } from 'utils/checkoutUtils.js';

import styles from './PackPreview.module.scss';

/**
 * Pack preview component.
 */
const PackPreview = ({ href, src, alt, title, license, externalClassName }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const onImageLoadHandler = () => setIsImageLoaded(true);

  return (
    <div className={classNames(styles.packPreview, externalClassName)}>
      <Link href={href} className={classNames('d-flex', styles.imageLink)}>
        {!isImageLoaded && <div className={styles.imagePlaceholder} />}
        <img
          src={src}
          alt={alt}
          width="400"
          height="400"
          className={styles.image}
          onLoad={onImageLoadHandler}
        />
        {/* <LazyLoad
          once
          offset={200}
          style={{
            width: '100%',
            height: '100%',
            position: isImageLoaded ? 'static' : 'absolute',
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
        </LazyLoad> */}
      </Link>
      <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <Link
            href={href}
            title={title}
            className={classNames('d-inline-block', styles.title)}
          >
            {htmlParser(title.replace(' - ', ' &mdash; '))}
          </Link>
        </div>
        {license && (
          <div className={styles.price}>
            {`From $${getFormattedPrice(license.price.usd)} US`}
          </div>
        )}
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
  externalClassName: PropTypes.string,
};

export default PackPreview;
