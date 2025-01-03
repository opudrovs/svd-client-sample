import { memo } from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './ErrorMessage.module.scss';

/**
 * Error Message component.
 */
const ErrorMessage = ({ errorCode, errorMessage, className }) => (
  <h1 className={classNames(styles.errorMessage, className)}>
    {errorCode || null} {errorMessage}
  </h1>
);

ErrorMessage.propTypes = {
  errorCode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  errorMessage: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default memo(ErrorMessage);
