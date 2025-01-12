'use client';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import { BUTTON_THEME } from 'constants/uiConstants';

import styles from './Button.module.scss';

/**
 * Regular button component.
 */
const Button = ({
  children,
  type = 'button',
  theme = BUTTON_THEME.blue,
  isOutline,
  isEnabled = true,
  className,
  onClickHandler,
}) => {
  const buttonClassName = classNames(
    'd-block',
    styles.button,
    isOutline
      ? styles.blueOutlineButton
      : theme === BUTTON_THEME.green
        ? styles.greenButton
        : styles.blueButton,
    {
      [styles.outlineButton]: isOutline,
      [styles.disabledButton]: !isEnabled,
    },
    className
  );

  let disabledInputProps = {
    ...(!isEnabled && { disabled: true }),
  };

  return (
    <button
      type={type}
      {...disabledInputProps}
      onClick={onClickHandler}
      className={buttonClassName}
    >
      <span className="d-flex flex-nowrap justify-content-center align-items-center">
        {children}
      </span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  theme: PropTypes.string,
  isOutline: PropTypes.bool,
  isEnabled: PropTypes.bool,
  className: PropTypes.string,
  onClickHandler: PropTypes.func,
};

export default Button;
