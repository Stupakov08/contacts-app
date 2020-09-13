import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';
import { getContactsStart } from 'store/app/contacts/actions';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch(getContactsStart()),
});

const Contacts = compose(connect(mapStateToProps, mapDispatchToProps))(View);

export { Contacts };
