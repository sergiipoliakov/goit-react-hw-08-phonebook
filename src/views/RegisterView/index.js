import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { CSSTransition } from 'react-transition-group';
import Title from '../../components/Title/Title';
import styles from './RegisterView.module.css';

// const styles = {
//   form: {
//     width: 320,
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: 15,
//   },
// };

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };
  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={styles}
          unmountOnExit
        >
          <Title label="Страница РЕГИСТРАЦИИ" />
        </CSSTransition>

        <form
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <label className={styles.label}>
            Имя
            <input
              className={styles.input}
              type="text"
              name="name"
              value={name}
              placeholder="Ivan Ivanov"
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.label}>
            Почта
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              placeholder="random@mail.com"
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.label}>
            Пароль
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={this.handleChange}
            />
          </label>

          <button className={styles.button} type="submit">
            Зарегистрироваться
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
