'use client';

import Link from 'next/link';

import { Navbar, Nav, Container } from 'react-bootstrap';

import classNames from 'classnames';

import Logo from 'components/common/Logo';

import * as paths from 'constants/navigationConstants';

import styles from './AppNavbar.module.scss';

const links = [
  { href: paths.INDEX_PATH, text: 'Home' },
  { href: paths.FAQ_PATH, text: 'FAQ' },
  { href: paths.ABOUT_PATH, text: 'About Me' },
  { href: paths.CONTACT_PATH, text: 'Contact' },
];

/**
 * Main navigation bar component.
 * A shared component (repeats across multiple pages).
 * Contains the logo and navigation menu of the application.
 */
const AppNavbar = () => {
  return (
    <Navbar
      expand="md"
      bg="dark"
      variant="dark"
      className={classNames('py-3', styles.navbar)}
    >
      <Container>
        <Logo className={styles.logo} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {links.map(({ href, text }) => (
              <Link key={href} href={href} passHref legacyBehavior>
                <Nav.Link className={styles.navLink}>{text}</Nav.Link>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
