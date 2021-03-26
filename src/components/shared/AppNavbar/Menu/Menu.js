/* REACT */

import PropTypes from 'prop-types';

/* NEXT.JS */

import { useRouter } from 'next/router';

/* LIBRARIES */

const classNames = require('classnames');

import { Nav } from 'react-bootstrap';

/* COMPONENTS */

import MenuNavLink from './MenuNavLink';

/* CONSTANTS */

import * as paths from 'constants/NavigationConstants';

const links = [
    { href: paths.BUNDLES_PATH, text: 'Bundles' },
    { href: paths.LICENSE_PATH, text: 'Licenses' },
    { href: paths.REFUND_POLICY_PATH, text: 'Refunds' },
    { href: paths.FAQ_PATH, text: 'FAQ' },
    { href: paths.ABOUT_PATH, text: 'Hire Me!' },
    { href: paths.CONTACT_PATH, text: 'Contact' }

];


/**
 * Main menu.
 * Contains navigation links.
 */

const Menu = ({ externalClassName }) => {
    const router = useRouter();

    const pathname = router ? router.pathname : '';

    return (
        <Nav
            className={classNames(
                'navbar-nav align-items-center justify-content-between',
                externalClassName
            )}
        >
            {links.map(({ href, text }, index) => (
                <MenuNavLink
                    key={`nav-link-${index}`}
                    href={href}
                    text={text}
                    isActive={pathname === href}
                />
            ))}
        </Nav>
    );
};

Menu.propTypes = {
    externalClassName: PropTypes.string
};

export default Menu;
