/* REACT */

import PropTypes from 'prop-types';

/* LIBRARIES */

const classNames = require('classnames');

/* STYLES */

import styles from './MenuNavLink.module.scss';


/**
 * Menu navigation link.
 * Allows to navigate to a page.
 */

const MenuNavLink = ({
    href,
    text,
    isActive
}) => {
    const linkClassName = classNames(
        'd-flex flex-column justify-content-center align-items-stretch flex-md-row align-items-md-center',
        styles.menuNavLink,
        {
            [styles.active]: isActive
        }
    );

    return (
        <a
            href={href}
            className={linkClassName}
        >
            {text}
        </a>
    );
};

MenuNavLink.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isActive: PropTypes.bool
};

export default MenuNavLink;
