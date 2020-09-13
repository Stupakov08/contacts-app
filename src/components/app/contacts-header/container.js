import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';
import { contactsResults } from 'store/app/contacts/selectors';
import { reduxForm } from 'redux-form';

const mapStateToProps = (state) => ({
  contacts: contactsResults(state),
});

const mapDispatchToProps = (dispatch) => ({});

const ContactsHeader = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'contactsFilter' })
)(View);

export { ContactsHeader };
