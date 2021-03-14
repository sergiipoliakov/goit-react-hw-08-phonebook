import PropTypes from 'prop-types';
import './DublicateAlert.css';

export default function DublicateAlert({ name = 'no name' }) {
  return (
    <div className="dublucate-name">
      <p>"{name}" is already in contacts</p>
    </div>
  );
}

DublicateAlert.propTypes = {
  name: PropTypes.string.isRequired,
};
