/* REACT */

import { memo } from 'react';

import PropTypes from 'prop-types';

/* LIBRARIES */

const classNames = require('classnames');

/* STYLES */

import styles from './ErrorMessage.module.scss';


/**
 * Error Message component.
 */

const ErrorMessage = ({ errorCode, errorMessage, externalClassName }) => (
    <h1 className={classNames(
        styles.errorMessage,
        externalClassName
    )}>
        {errorCode || null} {errorMessage}
    </h1>
);

ErrorMessage.propTypes = {
    errorCode: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    errorMessage: PropTypes.string.isRequired,
    externalClassName: PropTypes.string
};

export default memo(ErrorMessage);
