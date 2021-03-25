const classNames = require('classnames');

import InstagramIcon from 'components/assets/icons/InstagramIcon';

import Logo from 'components/common/Logo';

import FooterLink from './FooterLink';
import FooterLinkGroup from './FooterLinkGroup';

import * as urls from 'constants/ExternalUrlConstants';
import * as paths from 'constants/NavigationConstants';
import { COMPANY_NAME } from 'constants/TextConstants';

import styles from './Footer.module.scss';

/**
 * Page footer.
 * A shared component (repeats across multiple pages).
 * Should be present at bottom of each page of the application.
 */

const links = [
    { href: paths.BUNDLES_PATH, text: 'Bundles' },
    { href: paths.LICENSE_PATH, text: 'Licenses' },
    { href: paths.REFUND_POLICY_PATH, text: 'Refund Policy' },
    { href: paths.FAQ_PATH, text: 'FAQ' },
    { href: paths.ABOUT_PATH, text: 'Hire Me!' },
    { href: paths.CONTACT_PATH, text: 'Contact' }
];

const secondaryLinks = [
    { href: paths.TERMS_PATH, text: 'Terms of service' },
    { href: paths.PRIVACY_POLICY_PATH, text: 'Privacy Policy' },
    { href: urls.INSTAGRAM_URL, text: 'Instagram', children: <div className={styles.linkIcon}><InstagramIcon /></div> }
];

const groupElements = (items, numberOfElementsInGroup) => items.reduce((acc, currElement, index) => {
    const indexInGroup = Math.floor(index / numberOfElementsInGroup);

    acc[indexInGroup] = [...(acc[indexInGroup] || []), currElement];

    return acc;
}, []);

const Footer = () => (
    <footer
        className={styles.footer}
    >
        <div
            className={classNames(
                'container',
                styles.footerPadding
            )}
        >
            <div className="row">
                <div
                    className="col-12 col-md-5 col-lg-4 d-flex justify-content-center justify-content-md-start align-items-start">
                    <Logo
                        href={paths.INDEX_PATH}
                        externalClassName={styles.logoImage}
                    />
                </div>
                <div className={classNames(
                    'col-12 col-md-5',
                    styles.links
                )}>
                    <div className="row w-100">
                        {groupElements(links, 3)
                            .map((children, childIndex) => (
                                <FooterLinkGroup
                                    key={`footer-link-group-${childIndex}`}
                                    externalClassName='col-12 col-md-6'
                                >
                                    {children.map((props, index) => (
                                        <div
                                            key={`footer-link-container-${index}`}
                                            className={classNames(
                                                'd-flex',
                                                styles.linkContainer
                                            )}
                                        >
                                            <FooterLink
                                                {...props}
                                                externalClassName={styles.link}
                                            />
                                        </div>
                                    ))}
                                </FooterLinkGroup>
                            ))}
                    </div>
                </div>
            </div>
            <div className={classNames(
                'row',
                styles.secondaryContent
            )}>
                <div
                    className="col d-flex flex-column justify-content-end align-items-center flex-md-row justify-content-md-start align-items-md-center"
                >
                    <div
                        className={classNames(
                            'order-1 order-md-0',
                            styles.secondaryText,
                            styles.copyright
                        )}
                    >
                        © 2020-2021 {COMPANY_NAME}. All Rights Reserved.
                    </div>
                    <div className="d-flex">
                        {secondaryLinks.map((props, index) => (
                            <FooterLink
                                key={`secondary-footer-link-${index}`}
                                {...props}
                                externalClassName={styles.secondaryLink}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
