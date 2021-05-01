/* REACT */

import PropTypes from 'prop-types';

/* LIBRARIES */

const classNames = require('classnames');

/* COMPONENTS */

import Button from './Button';
import LinkButton from './LinkButton';

/* CONSTANTS */

import { BUTTON_THEME } from 'constants/UiConstants';

/* STYLES */

import styles from './ButtonContainer.module.scss';


/**
 * Button container component
 * which renders either a `Button` component (if no `href` prop is provided)
 * or a `LinkButton` component (if a `href` prop is provided)
 * and passes shared styles to these components.
 */

const ButtonContainer = ({
    children,
    type,
    isOutline,
    href,
    isExternal,
    isEnabled,
    theme,
    externalClassName,
    onClickHandler
}) => {
    let buttonClassName = classNames(
        styles.button,
        isOutline
            ?
            styles.blueOutlineButton
            :
            theme === BUTTON_THEME.green ? styles.greenButton : styles.blueButton,
        {
            [styles.outlineButton]: isOutline,
            [styles.disabledButton]: !isEnabled
        },
        externalClassName
    );

    let disabledInputProps = {};

    if (!isEnabled) {
        disabledInputProps.disabled = true;
    }

    return (
        <>
            {href
                ?
                <LinkButton
                    href={href}
                    isExternal={isExternal}
                    externalClassName={buttonClassName}
                >
                    {children}
                </LinkButton>
                :
                <Button
                    type={type}
                    {...disabledInputProps}
                    externalClassName={buttonClassName}
                    onClickHandler={onClickHandler}
                >
                    {children}
                </Button>
            }
        </>
    );
};

ButtonContainer.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    isOutline: PropTypes.bool,
    href: PropTypes.string,
    isExternal: PropTypes.bool,
    isEnabled: PropTypes.bool,
    theme: PropTypes.string,
    externalClassName: PropTypes.string,
    onClickHandler: PropTypes.func
};

ButtonContainer.defaultProps = {
    type: 'button',
    theme: BUTTON_THEME.blue,
    isEnabled: true
};

export default ButtonContainer;
