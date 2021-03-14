import { connect } from 'react-redux';
import { Component } from 'react';
import { phoneBookOperations, phoneBookSelectors } from '../redux/phoneBook';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import CounterButton from '../components/CounterButton';

class phoneBookView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <Layout>
          <CounterButton />
          {this.props.isLoadingPhoneBook && <h1>Загржаем...</h1>}
          <ContactForm />

          <ContactList />
        </Layout>
      </>
    );
  }
}
const mapStateToProps = state => ({
  isLoadingPhoneBook: phoneBookSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phoneBookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(phoneBookView);
