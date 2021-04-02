/* REACT */

import PropTypes from 'prop-types';

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
    externalClassName
}) => {
    const linkClassName = classNames(
        'd-inline-flex flex-nowrap justify-content-center align-items-center',
        externalClassName
    );

    return (
        <a
            href={href}
            className={linkClassName}
        >
            {children}
        </a>
    );
};

LinkButton.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string.isRequired,
    externalClassName: PropTypes.string
};

export default LinkButton;
