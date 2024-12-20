import PropTypes from 'prop-types';

import Link from 'next/link';

import classNames from 'classnames';

import styles from './MenuNavLink.module.scss';

/**
 * Menu navigation link component.
 * Allows to navigate to a page.
 */
const MenuNavLink = ({ href, text, isActive }) => {
  const linkClassName = classNames(
    'd-flex flex-column justify-content-center align-items-stretch flex-md-row align-items-md-center',
    styles.menuNavLink,
    {
      [styles.active]: isActive,
    }
  );

  return (
    <Link href={href} className={linkClassName}>
      {text}
    </Link>
  );
};

MenuNavLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

export default MenuNavLink;
