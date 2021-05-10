/* REACT */

import PropTypes from 'prop-types';

/* NEXT.JS */

import Link from 'next/link';

/* LIBRARIES */

const classNames = require('classnames');

/* STYLES */

import styles from './FooterLink.module.scss';


/**
 * Footer link component.
 * Allows to navigate to a page.
 */

const FooterLink = ({
    children,
    href,
    text,
    isExternal,
    externalClassName
}) => {
    const linkClassName = classNames(
        {
            'd-flex justify-content-center': children
        },
        styles.footerLink,
        externalClassName
    );

    return (
        <>
            {isExternal
                ?
                <a
                    href={href}
                    className={linkClassName}
                >
                    {text}
                    {children}
                </a>
                :
                <Link href={href}>
                    <a className={linkClassName}>
                        {text}
                        {children}
                    </a>
                </Link>
            }
        </>
    );
};

FooterLink.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isExternal: PropTypes.bool,
    externalClassName: PropTypes.string
};

export default FooterLink;
