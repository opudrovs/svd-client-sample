import PropTypes from 'prop-types';

const classNames = require('classnames');

import Button from './Button';
import LinkButton from './LinkButton';

import { BUTTON_THEME_BLUE, BUTTON_THEME_GREEN } from 'constants/UiConstants';

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
            theme === BUTTON_THEME_GREEN ? styles.greenButton : styles.blueButton,
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
    isEnabled: PropTypes.bool,
    theme: PropTypes.string,
    externalClassName: PropTypes.string,
    onClickHandler: PropTypes.func
};

ButtonContainer.defaultProps = {
    type: 'button',
    theme: BUTTON_THEME_BLUE,
    isEnabled: true
};

export default ButtonContainer;
