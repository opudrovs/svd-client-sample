import classNames from 'classnames';

import FooterLink from './FooterLink';
import FooterLinkGroup from './FooterLinkGroup';

import InstagramIcon from 'components/assets/icons/InstagramIcon';

import Logo from 'components/common/Logo';

import * as paths from 'constants/navigationConstants';
import { AUTHOR_NAME } from 'constants/textConstants';

import styles from './Footer.module.scss';

/**
 * Page footer.
 * A shared component (repeats across multiple pages).
 * Should be present at bottom of each page of the application.
 */
const links = [
  { href: paths.INDEX_PATH, text: 'Home' },
  { href: paths.LICENSE_PATH, text: 'Licenses' },
  { href: paths.REFUND_POLICY_PATH, text: 'Refund Policy' },
  { href: paths.FAQ_PATH, text: 'FAQ' },
  { href: paths.ABOUT_PATH, text: 'About Me' },
  { href: paths.CONTACT_PATH, text: 'Contact' },
];

const secondaryLinks = [
  { href: paths.TERMS_PATH, text: 'Terms of service' },
  { href: paths.PRIVACY_POLICY_PATH, text: 'Privacy Policy' },
  {
    href: paths.INSTAGRAM_URL,
    text: 'Instagram',
    children: (
      <div className={styles.linkIcon}>
        <InstagramIcon />
      </div>
    ),
    isExternal: true,
  },
];

const groupElements = (items, numberOfElementsInGroup) =>
  items.reduce((acc, currElement, index) => {
    const indexInGroup = Math.floor(index / numberOfElementsInGroup);

    acc[indexInGroup] = [...(acc[indexInGroup] || []), currElement];

    return acc;
  }, []);

const Footer = () => (
  <footer className={styles.footer}>
    <div className={classNames('container', styles.footerPadding)}>
      <div className="row">
        <div className="col-12 col-md-5 col-lg-4 d-flex justify-content-center justify-content-md-start align-items-start">
          <Logo className={styles.logo} />
        </div>
        <div className={classNames('col-12 col-md-5', styles.links)}>
          <div className="row w-100">
            {groupElements(links, 3).map((children, childIndex) => (
              <FooterLinkGroup key={childIndex} className="col-12 col-md-6">
                {children.map(({ href, ...props }) => (
                  <div
                    key={href}
                    className={classNames('d-flex', styles.linkContainer)}
                  >
                    <FooterLink
                      href={href}
                      {...props}
                      className={styles.link}
                    />
                  </div>
                ))}
              </FooterLinkGroup>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.secondaryContent}>
        <div className="col d-flex flex-column justify-content-end align-items-center flex-md-row justify-content-md-start align-items-md-center">
          <div
            className={classNames(
              'order-1 order-md-0',
              styles.secondaryText,
              styles.copyright
            )}
          >
            © 2020-2025 {AUTHOR_NAME}. All Rights Reserved.
          </div>
          <div className="d-flex">
            {secondaryLinks.map(({ href, ...props }) => (
              <FooterLink
                key={href}
                href={href}
                {...props}
                className={styles.secondaryLink}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
