/* REACT */

import PropTypes from 'prop-types';

/* NEXT.JS */

import Link from 'next/link';

/* LIBRARIES */

const classNames = require('classnames');


/**
 * Link styled as a button component. Rendered by the `ButtonContainer` component.
 * Do not use it directly. Use ButtonContainer` component with a `href` prop to render it.
 * To render a regular button, use `ButtonContainer` component without a `href` prop.
 */

const LinkButton = ({
    children,
    href,
    isExternal,
    externalClassName
}) => {
    const linkClassName = classNames(
        'd-inline-flex flex-nowrap justify-content-center align-items-center',
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
    externalClassName: PropTypes.string
};

export default LinkButton;
