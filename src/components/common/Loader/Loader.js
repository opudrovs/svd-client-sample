import { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

import useIsMounted from 'hooks/useIsMounted';

import { isBrowser } from 'utils/SystemUtils';

import styles from './Loader.module.scss';

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
