import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';
import { isLoading, isTabularMode } from 'store/app/contacts/selectors';

const mapStateToProps = (state) => ({
  loading: isLoading(state),
  tabularMode: isTabularMode(state),
});

const mapDispatchToProps = (dispatch) => ({});

const ContactsPageBody = compose(connect(mapStateToProps, mapDispatchToProps))(
  View
);

export { ContactsPageBody };
