/* REACT */

import { memo, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

/* LIBRARIES */

const classNames = require('classnames');

/* HOOKS */

import useIsMounted from 'hooks/useIsMounted';

/* UTILS */

import { isBrowser } from 'utils/SystemUtils';

/* STYLES */

import styles from './Loader.module.scss';


/**
 * Component to display a loading indicator, with or without delay.
 */

const Loader = ({ delay, isOnButton, externalClassName }) => {
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
    }, []);

    return (
        <div className={externalClassName}>
            {shouldShowLoader
                ?
                <div
                    className={classNames(
                        styles.loader,
                        isOnButton ? styles.small : styles.large
                    )}
                />
                :
                <div />}
        </div>
    );
};

Loader.propTypes = {
    delay: PropTypes.number,
    isOnButton: PropTypes.bool,
    externalClassName: PropTypes.string
};

Loader.defaultProps = {
    delay: 0,
    isOnButton: false
};

export default memo(Loader);
