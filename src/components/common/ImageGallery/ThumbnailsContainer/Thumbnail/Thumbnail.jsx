'use client';

import { memo } from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import LazyLoadedImage from 'components/common/LazyLoadedImage';

import useIsHovered from 'hooks/useIsHovered';

import styles from './Thumbnail.module.scss';

/**
 * Thumbnail component.
 */
const Thumbnail = ({ src, alt, isActive, onClickHandler }) => {
  const [, isHovered] = useIsHovered();

  return (
    <div
      className={classNames(
        'col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center align-items-center',
        styles.thumbnail
      )}
    >
      <div
        className={classNames(styles.imageContainer, {
          [styles.active]: isActive,
        })}
      >
        <LazyLoadedImage
          src={src}
          alt={alt}
          width="100"
          height="100"
          className={styles.image}
          placeholderClassName={styles.imagePlaceholder}
          onClickHandler={onClickHandler}
        />
        {isHovered && !isActive && (
          <div
            className={classNames(
              'd-flex justify-content-center align-items-center',
              styles.overlay
            )}
          />
        )}
      </div>
    </div>
  );
};

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  isActive: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
};

export default memo(Thumbnail);
