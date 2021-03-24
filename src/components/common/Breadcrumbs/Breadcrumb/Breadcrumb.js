import { memo } from 'react';

import PropTypes from 'prop-types';

const classNames = require('classnames');

import styles from './Breadcrumb.module.scss';

/**
 * Breadcrumb.
 */

const Breadcrumb = ({ text, url }) => (
    url
        ?
        <a href={url} className={classNames(styles.breadcrumb, styles.link)}>{text}</a>
        :
        <span className={styles.breadcrumb}>{text}</span>
);

Breadcrumb.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string
};

export default memo(Breadcrumb);
