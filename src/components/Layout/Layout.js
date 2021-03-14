import PropTypes from 'prop-types';
import Title from '../Title/Title';
import { CSSTransition } from 'react-transition-group';

import styles from './Layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames={styles}
      unmountOnExit
    >
      <Title label="Phonebook" />
    </CSSTransition>
    {children}
  </div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.array.isRequired,
};
