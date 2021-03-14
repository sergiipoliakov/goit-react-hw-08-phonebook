import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOperations } from './redux/auth';
import routes from './routes';

import Container from './components/Container';

import AppBar from './components/AppBar';
import HomeView from './views/Home';
import PhoneBookView from './views/PhoneBookView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <Route path={routes.home} exact component={HomeView} />
          <Route path={routes.phoneBook} exact component={PhoneBookView} />
          <Route path={routes.login} exact component={LoginView} />
          <Route path={routes.register} exact component={RegisterView} />
        </Switch>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);
