import PropTypes from 'prop-types';

import Link from 'next/link';

import classNames from 'classnames';

import { BUTTON_THEME } from 'constants/uiConstants';

import styles from '../Button.module.scss';

/**
 * Link styled as a button component.
 * To render a regular button, use `Button` component.
 */
const LinkButton = ({
  children,
  href,
  isExternal,
  theme,
  isOutline,
  className,
}) => {
  const linkClassName = classNames(
    'd-inline-flex flex-nowrap justify-content-center align-items-center',
    styles.button,
    isOutline
      ? styles.blueOutlineButton
      : theme === BUTTON_THEME.green
        ? styles.greenButton
        : styles.blueButton,
    {
      [styles.outlineButton]: isOutline,
    },
    className
  );

  return (
    <>
      {isExternal ? (
        <a href={href} className={linkClassName}>
          {children}
        </a>
      ) : (
        <Link href={href} className={linkClassName}>
          {children}
        </Link>
      )}
    </>
  );
};

LinkButton.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
  theme: PropTypes.string,
  isOutline: PropTypes.bool,
  className: PropTypes.string,
};

export default LinkButton;
