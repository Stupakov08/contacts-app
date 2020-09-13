import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';
import { contactsResults } from 'store/app/contacts/selectors';

const mapStateToProps = (state) => ({
  contacts: contactsResults(state),
});

const mapDispatchToProps = (dispatch) => ({});

const ContactsTable = compose(connect(mapStateToProps, mapDispatchToProps))(
  View
);

export { ContactsTable };
