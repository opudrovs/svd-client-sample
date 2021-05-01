/* REACT */

import { memo } from 'react';

import PropTypes from 'prop-types';

/* NEXT.JS */

import Link from 'next/link';

/* LIBRARIES */

const classNames = require('classnames');

/* STYLES */

import styles from './Breadcrumb.module.scss';


/**
 * Breadcrumb component.
 */

const Breadcrumb = ({ text, href }) => (
    href
        ?
        <Link href={href}><a className={classNames(styles.breadcrumb, styles.link)}>{text}</a></Link>
        :
        <span className={styles.breadcrumb}>{text}</span>
);

Breadcrumb.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string
};

export default memo(Breadcrumb);
