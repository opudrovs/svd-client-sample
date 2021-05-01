/* REACT */

import PropTypes from 'prop-types';

/* LIBRARIES */

const classNames = require('classnames');

/* CONSTANTS */

import { BUTTON_THEME } from 'constants/UiConstants';

/* STYLES */

import styles from '../Button.module.scss';


/**
 * Regular button component.
 */

const Button = ({
    children,
    type,
    theme,
    isOutline,
    isEnabled,
    externalClassName,
    onClickHandler
}) => {
    const buttonClassName = classNames(
        'd-block',
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

    let disabledInputProps = {
        ...!isEnabled && { disabled: true }
    };

    return (
        <button
            type={type}
            {...disabledInputProps}
            onClick={onClickHandler}
            className={buttonClassName}
        >
            <span className="d-flex flex-nowrap justify-content-center align-items-center">
                {children}
            </span>
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    theme: PropTypes.string,
    isOutline: PropTypes.bool,
    isEnabled: PropTypes.bool,
    externalClassName: PropTypes.string,
    onClickHandler: PropTypes.func
};

Button.defaultProps = {
    type: 'button',
    theme: BUTTON_THEME.blue,
    isEnabled: true
};

export default Button;
