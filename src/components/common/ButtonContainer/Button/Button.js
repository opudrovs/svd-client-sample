import PropTypes from 'prop-types';

const classNames = require('classnames');

/**
 * Regular button component. Rendered by the `ButtonContainer` component.
 * Do not use it directly.
 * To render a regular button, use `ButtonContainer` component without a `href` prop.
 */

const Button = ({
    children,
    type,
    externalClassName,
    onClickHandler
}) => (
    <button
        type={type}
        onClick={onClickHandler}
        className={classNames(
            'd-block',
            externalClassName
        )}
    >
        <span className="d-flex flex-nowrap justify-content-center align-items-center">
            {children}
        </span>
    </button>
);

Button.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string.isRequired,
    externalClassName: PropTypes.string,
    onClickHandler: PropTypes.func
};

export default Button;
