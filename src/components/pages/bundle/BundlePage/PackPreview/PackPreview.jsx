import PropTypes from 'prop-types';

import classNames from 'classnames';
import htmlParser from 'html-react-parser';

import LazyLoadedImage from 'components/common/LazyLoadedImage';

import { getFormattedPrice } from 'utils/checkoutUtils.js';

import styles from './PackPreview.module.scss';

/**
 * Pack preview component.
 */
const PackPreview = ({ src, alt, title, license, className }) => (
  <div className={classNames(styles.packPreview, className)}>
    <LazyLoadedImage
      src={src}
      alt={alt}
      width="400"
      height="400"
      className={styles.image}
      placeholderClassName={styles.imagePlaceholder}
    />
    <div className={styles.textContainer}>
      <div className={styles.titleContainer}>
        <div className={classNames('d-inline-block', styles.title)}>
          {htmlParser(title.replace(' - ', ' &mdash; '))}
        </div>
      </div>
      {license && (
        <div className={styles.price}>
          {`From $${getFormattedPrice(license.price.usd)} US`}
        </div>
      )}
    </div>
  </div>
);

PackPreview.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  license: PropTypes.object,
  className: PropTypes.string,
};

export default PackPreview;
