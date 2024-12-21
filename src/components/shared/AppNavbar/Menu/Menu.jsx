import PropTypes from 'prop-types';

import { useRouter } from 'next/router';

import classNames from 'classnames';
import { Nav } from 'react-bootstrap';

import MenuNavLink from './MenuNavLink';

import * as paths from 'constants/navigationConstants';

const links = [
  { href: paths.BUNDLES_PATH, text: 'Bundles' },
  { href: paths.LICENSE_PATH, text: 'Licenses' },
  { href: paths.REFUND_POLICY_PATH, text: 'Refunds' },
  { href: paths.FAQ_PATH, text: 'FAQ' },
  { href: paths.ABOUT_PATH, text: 'About Me' },
  { href: paths.CONTACT_PATH, text: 'Contact' },
];

/**
 * Main menu component.
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
      {links.map(({ href, text }) => (
        <MenuNavLink
          key={href}
          href={href}
          text={text}
          isActive={pathname === href}
        />
      ))}
    </Nav>
  );
};

Menu.propTypes = {
  externalClassName: PropTypes.string,
};

export default Menu;
