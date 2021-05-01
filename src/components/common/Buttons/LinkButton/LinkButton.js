/* REACT */

import PropTypes from 'prop-types';

/* NEXT.JS */

import Link from 'next/link';

/* LIBRARIES */

const classNames = require('classnames');

/* CONSTANTS */

import { BUTTON_THEME } from 'constants/UiConstants';

/* STYLES */

import styles from '../Button.module.scss';


/**
 * Link styled as a button component.
 * To render a regular button, use `Button` component.
 */

const LinkButton = ({
    children,
    href,
    isExternal,
    theme,
    isOutline,
    externalClassName
}) => {
    const linkClassName = classNames(
        'd-inline-flex flex-nowrap justify-content-center align-items-center',
        styles.button,
        isOutline
            ?
            styles.blueOutlineButton
            :
            theme === BUTTON_THEME.green ? styles.greenButton : styles.blueButton,
        {
            [styles.outlineButton]: isOutline
        },
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
                    {children}
                </a>
                :
                <Link href={href}>
                    <a
                        className={linkClassName}
                    >
                        {children}
                    </a>
                </Link>
            }
        </>
    );
};

LinkButton.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string.isRequired,
    isExternal: PropTypes.bool,
    theme: PropTypes.string,
    isOutline: PropTypes.bool,
    externalClassName: PropTypes.string
};

export default LinkButton;
