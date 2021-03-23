import PropTypes from 'prop-types';

const classNames = require('classnames');

import styles from './FooterLink.module.scss';

/**
 * Footer link.
 * Allows to navigate to a page.
 */

const FooterLink = ({
    children,
    href,
    text,
    externalClassName
}) => {
    const linkClassName = classNames(
        {
            ['d-flex justify-content-center']: children
        },
        styles.footerLink,
        externalClassName
    );

    return (
        <a href={href} className={linkClassName}>
            {text}
            {children}
        </a>
    );
};

FooterLink.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    externalClassName: PropTypes.string
};

export default FooterLink;
