import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ label, type = 'button', onClick = () => null }) => (
  <button className={styles.button} type={type} onClick={onClick}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
