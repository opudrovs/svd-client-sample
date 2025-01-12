import PropTypes from 'prop-types';

import Link from 'next/link';

import classNames from 'classnames';

import styles from './FooterLink.module.scss';

/**
 * Footer link component.
 * Allows to navigate to a page.
 */
const FooterLink = ({ children, href, text, isExternal, className }) => {
  const linkClassName = classNames(
    {
      'd-flex justify-content-center': children,
    },
    styles.footerLink,
    className
  );

  return (
    <>
      {isExternal ? (
        <a href={href} className={linkClassName}>
          {text}
          {children}
        </a>
      ) : (
        <Link href={href} className={linkClassName}>
          {text}
          {children}
        </Link>
      )}
    </>
  );
};

FooterLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
  className: PropTypes.string,
};

export default FooterLink;
