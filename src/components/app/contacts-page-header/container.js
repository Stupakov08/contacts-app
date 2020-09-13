import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';
import { isLoading, isTabularMode } from 'store/app/contacts/selectors';
import {
  switchToTabularMode,
  switchToTiledMode,
  getContactsStart,
} from 'store/app/contacts/actions';

const mapStateToProps = (state) => ({
  loading: isLoading(state),
  tabularMode: isTabularMode(state),
});

const mapDispatchToProps = (dispatch) => ({
  switchToTabularMode: () => dispatch(switchToTabularMode()),
  switchToTiledMode: () => dispatch(switchToTiledMode()),
  getContactsStart: () => dispatch(getContactsStart()),
});

const ContactsPageHeader = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(View);

export { ContactsPageHeader };
