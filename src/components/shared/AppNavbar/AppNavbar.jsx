import { useState } from 'react';

import classNames from 'classnames';

import { Navbar } from 'react-bootstrap';

import Menu from './Menu';

import CloseIcon from 'components/assets/icons/CloseIcon';
import MenuIcon from 'components/assets/icons/MenuIcon';

import Logo from 'components/common/Logo';

import Modal from 'components/dialogs/Modal';

import { BOOTSTRAP_RESET } from 'constants/uiConstants';

import styles from './AppNavbar.module.scss';

/**
 * Main navigation bar component.
 * A shared component (repeats across multiple pages).
 * Contains the logo and navigation menu of the application.
 */
const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * A callback fired when the `<Navbar>` body collapses or expands after clicking `<Navbar.Toggle>`.
   * @param {boolean} expanded Controls the visiblity of the navbar body
   */
  const onToggleHandler = (expanded) => setIsOpen(expanded);

  return (
    <>
      <header>
        <Navbar
          expanded={isOpen}
          bsPrefix={BOOTSTRAP_RESET}
          expand="sm"
          collapseOnSelect
          role="navigation"
          className={styles.navbar}
          onToggle={onToggleHandler}
        >
          <div
            className={classNames(
              'container flex-wrap align-items-center justify-content-between navbar-expand-md',
              styles.navbarPadding,
              {
                [styles.navbarPaddingMenu]: isOpen,
              }
            )}
          >
            <div className="row flex-wrap flex-md-nowrap">
              <div className="col d-flex justify-content-center align-items-center justify-content-md-start">
                <Logo externalClassName={styles.logo} />
              </div>
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="col justify-content-start justify-content-md-end"
              >
                <Menu />
              </Navbar.Collapse>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                bsPrefix={BOOTSTRAP_RESET}
                className={styles.toggle}
              >
                <div
                  className={classNames(
                    'd-flex justify-content-center align-items-center',
                    styles.icon,
                    isOpen ? styles.closeIcon : styles.menuIcon
                  )}
                >
                  {isOpen ? <CloseIcon /> : <MenuIcon />}
                </div>
              </Navbar.Toggle>
            </div>
          </div>
        </Navbar>
      </header>
      {isOpen && (
        <Modal
          shouldCloseOnClick
          externalClassName={classNames('d-md-none', styles.modal)}
          onCloseHandler={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default AppNavbar;
