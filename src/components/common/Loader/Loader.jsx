'use client';

import { memo, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import useIsMounted from 'hooks/useIsMounted';

import { isBrowser } from 'utils/systemUtils';

import styles from './Loader.module.scss';

/**
 * Component to display a loading indicator, with or without delay.
 */
const Loader = ({ delay = 0, isOnButton, className }) => {
  const [shouldShowLoader, setShouldShowLoader] = useState(false);

  const isMounted = useIsMounted();

  useEffect(() => {
    let timeoutId = undefined;

    if (delay > 0) {
      timeoutId = setTimeout(() => {
        if (isMounted()) {
          setShouldShowLoader(true);
        }
      }, delay);
    } else {
      setShouldShowLoader(true);
    }

    return () => {
      if (timeoutId && isBrowser()) {
        clearTimeout(timeoutId);
      }
    };
  }, [delay, isMounted]);

  return (
    <div className={className}>
      {shouldShowLoader ? (
        <div
          className={classNames(
            styles.loader,
            isOnButton ? styles.small : styles.large
          )}
        />
      ) : (
        <div />
      )}
    </div>
  );
};

Loader.propTypes = {
  delay: PropTypes.number,
  isOnButton: PropTypes.bool,
  className: PropTypes.string,
};

export default memo(Loader);
