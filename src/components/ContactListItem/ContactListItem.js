import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number, onRemove }) => (
  <li key={id} className={styles.item}>
    <p className={styles.name}>{name}: </p>
    <div className={styles.actions}>
      <p className={styles.number}>{number}</p>
      <Button
        label="Delete"
        type="button"
        className="ContactList-button"
        onClick={onRemove}
      />
    </div>
  </li>
);

export default ContactListItem;

ContactListItem.defaultProps = {
  name: 'noName',
  number: '123 45 67',
};

ContactListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
};
