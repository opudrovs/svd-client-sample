import { memo } from 'react';

import PropTypes from 'prop-types';

import Link from 'next/link';

import classNames from 'classnames';

import styles from './Breadcrumb.module.scss';

/**
 * Breadcrumb component.
 */
const Breadcrumb = ({ text, href }) =>
  href ? (
    <Link href={href} className={classNames(styles.breadcrumb, styles.link)}>
      {text}
    </Link>
  ) : (
    <span className={styles.breadcrumb}>{text}</span>
  );

Breadcrumb.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
};

export default memo(Breadcrumb);
